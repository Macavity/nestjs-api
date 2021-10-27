import { Inject, Injectable, Logger } from '@nestjs/common';
import { BossesService } from './bosses/bosses.service';
import { ZonesService } from './zones/zones.service';
import { IZoneFixture } from './fixtures/zone-fixtures';
import { Zone } from './zones/entities/zone.entity';
import slugify from 'slugify';
import { ContinentsService } from './zones/continents.service';
import { ZoneFactory } from './zones/factories/zone.factory';
import { StagesService } from './zones/stages.service';
import { StageFactory } from './zones/factories/stage.factory';

@Injectable()
export class AppService {
  private logger: Logger;

  constructor(
    @Inject(StagesService) public stagesService: StagesService,
    @Inject(ZonesService) public zonesService: ZonesService,
    @Inject(ContinentsService) public continentsService: ContinentsService,
    @Inject(BossesService) public bossesService: BossesService,
  ) {
    this.logger = new Logger(AppService.name);
  }

  async truncateZones() {
    await this.zonesService.repository.clear();
  }

  async createZone(zoneData: IZoneFixture) {
    let continent = await this.continentsService.findOneOrFail(zoneData.continent);

    const zone = ZoneFactory.createFromObject(zoneData, continent);

    const zoneEntity = await this.zonesService.save(zone);

    this.logger.log(`Zone "${zone.name}" created.`);

    return zoneEntity;
  }

  async createStagesForZone(zoneData: IZoneFixture) {
    const zone = await this.zonesService.findOneOrFail({
      where: {
        name: zoneData.name,
      }
    });

    if (typeof zoneData.stages !== 'undefined') {
      for (const stageData of zoneData.stages) {
        const boss = await this.bossesService.findOneOrFail({
          name: stageData.bossName,
        });

        const stage = StageFactory.create(stageData.level, zone, boss);
        await this.stagesService.save(stage);
        zone.stages.push(stage);
      }

      this.logger.log(`- including ${zone.stages.length} Stages.`);
    }
  }

  async updateOrCreateZoneData(zoneData: IZoneFixture) {
    let zone: Zone | null = await this.zonesService.findByNameWithStages(zoneData.name);
    let existedAlready = true;

    if (!zone) {
      existedAlready = false;
      let continent = await this.continentsService.findOneOrFail(zoneData.continent);

      zone = ZoneFactory.createFromObject(zoneData, continent);
    } else {
      zone.position = zoneData.position;
      zone.slug = slugify(String(zoneData.name)).toLowerCase();
    }

    zone.stages = [];

    const zoneEntity = await this.zonesService.save(zone);
    this.logger.log(`Zone "${zone.name}" ${existedAlready ? 'updated' : 'created'}.`);

    if (typeof zoneData.stages !== 'undefined') {
      for (const stageData of zoneData.stages) {
        const boss = await this.bossesService.findOneOrFail({
          name: stageData.bossName,
        });

        const stage = StageFactory.create(stageData.level, zoneEntity, boss);
        await this.stagesService.save(stage);
        zone.stages.push(stage);
      }

      this.logger.log(`- including ${zone.stages.length} Stages.`);
    }
  }
}
