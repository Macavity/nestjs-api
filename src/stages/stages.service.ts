import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Stage } from './entities/stage.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Zone } from '../zones/entities/zone.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StagesService extends TypeOrmCrudService<Stage> {
  constructor(
    @InjectRepository(Stage) private repository: Repository<Stage>,
  ) {
    super(repository);
  }

  async findSortedStages(zoneId: number){
    const stages = await this.repository.find({
      where: {
        zone: zoneId,
      },
      relations: ['boss'],
      order: {
        level: 'ASC',
      }
    });

    return stages.sort((a, b) => (a.level > b.level) ? 1 : -1);
  }
  save(stage: Stage){
    this.repository.save(stage);
  }
}
