import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BossesService } from './bosses/bosses.service';
import { bossFixtures } from './fixtures/boss-fixtures';
import { zoneFixtures } from './fixtures/zone-fixtures';
import { AppService } from './app.service';
import { JobsService } from './jobs/jobs.service';
import { jobFixtures } from './fixtures/job-fixtures';
import { SkillsService } from './jobs/skills.service';
import { SkillFixtures } from './fixtures/skill-fixtures';
import { SkillFactory } from './jobs/entities/skill.factory';
import { PartySetupService } from './bosses/party-setup.service';
import { ZonesService } from './zones/zones.service';
import { Logger } from '@nestjs/common';
import { StagesService } from './zones/stages.service';
import { PartySetup } from './bosses/entities/party-setup.entity';
import { Stage } from './zones/entities/stage.entity';
import { StageFactory } from './zones/factories/stage.factory';
import { getConnection } from 'typeorm';

async function bootstrap() {
  const application = await NestFactory.createApplicationContext(
    AppModule,
  );

  const command = process.argv[2];
  const logger = new Logger('Console');
  logger.log('NestJS Console Command started: '+command);

  const appService: AppService = application.get(AppService);
  const zonesService: ZonesService = application.get(ZonesService);
  const bossesService: BossesService = application.get(BossesService);
  const partySetupService: PartySetupService = application.get(PartySetupService);
  const stagesService: StagesService = application.get(StagesService);

  /*
   * Order:
   * 1. Continents
   * 2. Zones
   * 3. Bosses with Party Setups (require zones)
   * 4. Stages (require bosses and zones)
   */
  switch (command) {
    case 'fixtures:bosses':

      await partySetupService.truncate();

      for (const object of bossFixtures) {
        const boss = await bossesService.updateOrCreateObject(object.name, object.primaryElement, object.secondaryElement);

        for (const setup of object.partySetups) {
          const zone = await zonesService.findOne({
            where: {
              name: setup.areaName,
            }
          });

          if(!zone){
            throw new Error(`Zone "${setup.areaName}" not found, please import zone fixtures first.`)
          }

          const partySetup = await partySetupService.createObject(setup, boss, zone);
        }

        logger.log(`Added/Updated Boss ${boss.name} with ${object.partySetups.length} Setups.`);
      }

      logger.log(`${bossFixtures.length} Bosses imported.`);
      break;
    case 'fixtures:jobs':
      const jobsService: JobsService = application.get(JobsService);
      const skillsService: SkillsService = application.get(SkillsService);

      for (const jobObject of jobFixtures) {
        await jobsService.updateOrCreate(jobObject);

        const skillsForJob = SkillFixtures.findAllByClass(jobObject.id);

        for (const skillArray of skillsForJob) {
          await skillsService.updateOrCreate(SkillFactory.createFromFixtureArray(skillArray));
        }

      }

      logger.log(`${jobFixtures.length} Jobs imported.`);
      break;
    case 'test':
      logger.log('Test command');
      console.dir(process.argv);
      break;
    case 'fixtures:zones':
      //await appService.truncateZones();

      for (const zoneFixtureObject of zoneFixtures) {
        await appService.createZone(zoneFixtureObject);
      }

      logger.log(`${zoneFixtures.length} Zones imported.`);

      break;
    case 'calculate:scores':
      logger.log('Calculate Scores of Zones');

      const allZones = await zonesService.find({
        order: {
          continent: 'ASC',
          position: 'ASC',
        }
      });

      let currentScore = 0;
      for(const zone of allZones){
        zone.scoreStart = currentScore;
        logger.log(`Zone: ${zone.name.padEnd(20,' ')} - Score: ${zone.scoreStart}`);
        currentScore += 1000;

        await zonesService.update(zone.id, zone);
      }
      logger.log('Done');

      break;
    case 'update:stages':
      await zonesService.createMissingStages(null);

      break;
    // case 'fixtures:stages':
    //   const stagesService: StagesService = application.get(StagesService);
    //
    //   for (const object of stageFixtures) {
    //     await stagesService.updateOrCreateObject(object);
    //   }
    //
    //   console.info('[Console]', `${bossFixtures.length} Bosses imported.`);
    //   break;
    default:
      console.log('Command not found');
      process.exit(1);
  }

  await application.close();
  process.exit(0);
}

bootstrap();
