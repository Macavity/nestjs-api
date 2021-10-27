import { Module } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { ZonesController } from './zones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zone } from './entities/zone.entity';
import { Continent } from './entities/continent.entity';
import { ContinentsService } from './continents.service';
import { ContinentsController } from './continents.controller';
import { StagesService } from './stages.service';
import { StagesController } from './stages.controller';
import { Stage } from './entities/stage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Zone, Continent, Stage])],
  providers: [ZonesService, ContinentsService, StagesService],
  exports:[ZonesService, ContinentsService, StagesService],
  controllers: [ZonesController, ContinentsController, StagesController],
})
export class ZonesModule {}
