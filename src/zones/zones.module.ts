import { Module } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { ZonesController } from './zones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zone } from './entities/zone.entity';
import { StagesModule } from '../stages/stages.module';

@Module({
  imports: [TypeOrmModule.forFeature([Zone]), StagesModule],
  providers: [ZonesService],
  exports:[ZonesService],
  controllers: [ZonesController],
})
export class ZonesModule {}
