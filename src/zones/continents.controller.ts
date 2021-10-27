import { Controller } from '@nestjs/common';
import { ContinentsService } from './continents.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Continent } from './entities/continent.entity';

@Crud({
  model: {
    type: Continent,
  },
})
@Controller('continents')
@ApiTags('core')
export class ContinentsController implements CrudController<Continent> {
  constructor(public service: ContinentsService) {
  }


}
