import { Controller } from '@nestjs/common';
import { BossesService } from './bosses.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Boss } from './entities/boss.entity';

@Crud({
  model: {
    type: Boss,
  },
  query: {
    join: {
      stages: {

      }
    }
  }
})
@Controller('bosses')
@ApiTags('core')
export class BossesController implements CrudController<Boss> {
  constructor(public readonly service: BossesService) {
  }
}
