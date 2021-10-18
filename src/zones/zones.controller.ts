import { Controller, Get, Param } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { Zone } from './entities/zone.entity';
import { ApiTags } from '@nestjs/swagger';
import { zoneFixtures } from '../fixtures/zone-fixtures';
import slugify from 'slugify';
import { StagesService } from '../stages/stages.service';

@Crud({
  model: {
    type: Zone,
  },
  query: {
    join: {
      continent: {
        eager: true,
        persist: ['id'],
      },
      stages: {

      },
    }
  }
})
@Controller('zones')
@ApiTags('core')
export class ZonesController implements CrudController<Zone> {
  constructor(
    public service: ZonesService,
    public stageService: StagesService,
  ) {
  }

  @Get('/:zoneId/stages')
  async getStages(
    @Param('zoneId') zoneId: number,
  ){
    return await this.stageService.findSortedStages(zoneId);
  }

}
