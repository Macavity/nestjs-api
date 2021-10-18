import { Controller, Get, Param } from '@nestjs/common';
import { StagesService } from './stages.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { Stage } from './entities/stage.entity';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Stage,
  },
  query: {
    join: {
      zone: {
        eager: true,
      },
      boss: {
        eager: true,
      },
    }
  }
})
@Controller('stages')
@ApiTags('core')
export class StagesController implements CrudController<Stage>{
  constructor(public readonly service: StagesService) {}

  @Get('/zone/:zoneId')
  async getStages(
    @Param('zoneId') zoneId: number,
  ){
    return await this.service.findSortedStages(zoneId);
  }
}
