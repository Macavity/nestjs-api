import { Controller, Get, Inject, Logger, Param, Query } from '@nestjs/common';
import { BossesService } from './bosses.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Boss } from './entities/boss.entity';
import { NotFoundError } from 'rxjs';
import { PartySetup } from './entities/party-setup.entity';
import { ZonesService } from '../zones/zones.service';

@Crud({
  model: {
    type: Boss,
  },
  query: {
    join: {
      stages: {

      },
      partySetups: {

      },
      'partySetups.zone': {

      },
    }
  }
})
@Controller('bosses')
@ApiTags('bosses')
export class BossesController implements CrudController<Boss> {
  @Get('/:bossId/party_setups')
  async getPartySetupsByBoss(
    @Param('bossId') bossId: number,
    @Query('zoneId') zoneId: number,
    @Query('level') level: number|null = null,
  ){
    level = Number(level);

    this.logger.debug(`getPartySetupsByBoss ${bossId} - ${zoneId} @ ${level}`);
    const boss = await this.service.findOne({
      where: {
        id: bossId,
      },
      relations: ['partySetups', 'partySetups.zone']
    });

    if(!boss){
      throw new NotFoundError(`Boss ${bossId} not found.`);
    }

    // TODO FIX Bug: zoneId=38 level=67 should have a result
    const filteredEntries = boss.partySetups.filter((partySetup: PartySetup) => {
      return partySetup.zone && partySetup.zone.id === zoneId && partySetup.level === level;
    });

    if (filteredEntries.length) {
      return filteredEntries;
    }

    this.logger.debug('No filtered entries found.');

    const zone = await this.zonesService.findOne(zoneId);
    const reversed = boss.partySetups.reverse();

    const targetScore = this.zonesService.calculateStageScore(zone, level);
    this.logger.debug(`Target Score: ${zone.name} ${level} ${targetScore}`);

    for (const rotation of reversed) {
      if(!rotation.zone){
        throw new Error('Missing zone in rotation '+rotation.id);
      }
      const rotationScore = this.zonesService.calculateStageScore(rotation.zone, rotation.level);

      if (rotationScore <= targetScore) {
        this.logger.debug(`Found match: ${rotation.id}`);
        return [rotation];
      }
    }

    return [];
  }

  private logger: Logger;

  constructor(
    public readonly service: BossesService,
    public readonly zonesService: ZonesService,
  ) {
    this.logger = new Logger('BossesController');
  }
}
