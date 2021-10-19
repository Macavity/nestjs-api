import { Module } from '@nestjs/common';
import { ContinentsService } from './continents.service';
import { ContinentsController } from './continents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Continent } from './entities/continent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Continent])],
  providers: [ContinentsService],
  exports: [ContinentsService],
  controllers: [ContinentsController],
})
export class ContinentsModule {
}