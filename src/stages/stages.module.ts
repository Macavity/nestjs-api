import { Module } from '@nestjs/common';
import { StagesService } from './stages.service';
import { StagesController } from './stages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stage } from './entities/stage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stage])],
  providers: [StagesService],
  exports:[StagesService],
  controllers: [StagesController]
})
export class StagesModule {}
