import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BossesService } from './bosses/bosses.service';
import { bossFixtures } from './fixtures/boss-fixtures';
import { ZonesService } from './zones/zones.service';
import { zoneFixtures } from './fixtures/zone-fixtures';
import { AppService } from './app.service';
import { StagesService } from './stages/stages.service';
import { JobsService } from './jobs/jobs.service';
import { jobFixtures } from './fixtures/job-fixtures';

async function bootstrap() {
  const application = await NestFactory.createApplicationContext(
    AppModule,
  );

  const command = process.argv[2];

  switch (command) {
    case 'fixtures:bosses':
      const bossesService: BossesService = application.get(BossesService);

      for (const object of bossFixtures) {
        await bossesService.updateOrCreateObject(object.name, object.primaryElement, object.secondaryElement);
      }

      console.info('[Console]', `${bossFixtures.length} Bosses imported.`);
      break;
    case 'fixtures:jobs':
      const jobsService: JobsService = application.get(JobsService);

      for (const jobObject of jobFixtures) {
        await jobsService.updateOrCreate(jobObject);
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
