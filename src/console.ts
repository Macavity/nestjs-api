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
import { StagesService } from './stages/stages.service';
import { PartySetupFactory } from './bosses/entities/party-setup.factory';
import { ZonesService } from './zones/zones.service';

async function bootstrap() {
  const application = await NestFactory.createApplicationContext(
    AppModule,
  );

  const command = process.argv[2];

  switch (command) {
    case 'fixtures:bosses':
      const bossesService: BossesService = application.get(BossesService);
      const partySetupService: PartySetupService = application.get(PartySetupService);
      const zonesService: ZonesService = application.get(ZonesService);

      await partySetupService.truncate();

      for (const object of bossFixtures) {
        const boss = await bossesService.updateOrCreateObject(object.name, object.primaryElement, object.secondaryElement);

        for (const setup of object.partySetups) {
          const zone = await zonesService.findOne({
            where: {
              name: setup.areaName,
            }
          })

          const partySetup = await partySetupService.createObject(setup, boss, zone);
        }

        console.log(`[Console] Added/Updated Boss ${boss.name} with ${object.partySetups.length} Setups.`);
      }

      console.info('[Console]', `${bossFixtures.length} Bosses imported.`);
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

      console.info('[Console]', `${jobFixtures.length} Jobs imported.`);

      break;
    case 'fixtures:zones':
      const appService: AppService = application.get(AppService);

      for (const zoneFixtureObject of zoneFixtures) {
        await appService.updateOrCreateZoneData(zoneFixtureObject);
      }
      console.info('[Console]', `${zoneFixtures.length} Zones imported.`);
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
