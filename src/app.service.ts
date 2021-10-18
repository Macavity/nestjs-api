import { Inject, Injectable } from '@nestjs/common';
import { StagesService } from './stages/stages.service';
import { ContinentsService } from './continents/continents.service';
import { BossesService } from './bosses/bosses.service';
import { ZonesService } from './zones/zones.service';
import { IZoneFixture } from './fixtures/zone-fixtures';
import { Zone } from './zones/entities/zone.entity';
import { ZoneFactory } from './zones/entities/zone.factory';
import { StageFactory } from './stages/entities/stage.factory';
import slugify from 'slugify';

@Injectable()
export class AppService {
  constructor(
    @Inject(StagesService) public stagesService: StagesService,
    @Inject(ZonesService) public zonesService: ZonesService,
    @Inject(ContinentsService) public continentsService: ContinentsService,
    @Inject(BossesService) public bossesService: BossesService,
  ) {
  }

  async updateOrCreateZoneData(zoneData: IZoneFixture) {
    let zone: Zone|null = await this.zonesService.findByNameWithStages(zoneData.name);
    let existedAlready = true;

    if (!zone) {
      existedAlready = false;
      let continent = await this.continentsService.findOne(zoneData.continent);

      if (!continent) {
        throw new Error('Continent not found: ' + zoneData.continent);
      }

      zone = ZoneFactory.createFromObject(zoneData, continent);
    } else {
      zone.position = zoneData.position;
      zone.slug = slugify(String(zoneData.name)).toLowerCase();
    }

    zone.stages = [];

    const zoneEntity = await this.zonesService.save(zone);
    console.log(`[Console] Zone "${zone.name}" ${existedAlready ? 'updated' : 'created'}.`);

    if(typeof zoneData.stages !== 'undefined'){
      for (const stageData of zoneData.stages) {
        const boss = await this.bossesService.findOneOrFail({
          name: stageData.bossName,
        });

        const stage = StageFactory.create(stageData.level, zoneEntity, boss);
        await this.stagesService.save(stage);
        zone.stages.push(stage);
      }

      console.log(`- including ${zone.stages.length} Stages.`)
    }
  }
}
