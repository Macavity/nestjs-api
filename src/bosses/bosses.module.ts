import { Module } from '@nestjs/common';
import { BossesService } from './bosses.service';
import { BossesController } from './bosses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Boss } from './entities/boss.entity';
import { PartySetup } from './entities/party-setup.entity';
import { PartySetupService } from './party-setup.service';

@Module({
  imports: [TypeOrmModule.forFeature([Boss, PartySetup])],
  providers: [BossesService, PartySetupService],
  exports: [BossesService, PartySetupService],
  controllers: [BossesController]
})
export class BossesModule {}
