import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { PartySetup } from './entities/party-setup.entity';
import { PartySetupService } from './party-setup.service';

@Crud({
  model: {
    type: PartySetup,
  },
  query: {
    join: {
      boss: {
        eager: true,
      },
      zone: {
        eager: true,
      }
    }
  }
})
@Controller('party_setups')
@ApiTags('bosses')
export class PartySetupController implements CrudController<PartySetup> {
  constructor(public readonly service: PartySetupService) {
  }
}
