import { Controller, Get, Param } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { Zone } from './entities/zone.entity';
import { ApiTags } from '@nestjs/swagger';
import { StagesService } from './stages.service';
import { Stage } from './entities/stage.entity';

@Crud({
  model: {
    type: Zone,
  },
  params: {
  },
  query: {
    join: {
      continent: {
        eager: true,
        persist: ['id'],
      },
      stages: {

      },
    },
    sort: [
      {
        field: 'continent',
        order: 'ASC',
      },
      {
        field: 'position',
        order: 'ASC',
      }
    ]
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
    return  await this.stageService.findSortedStages(zoneId);
  }

}
