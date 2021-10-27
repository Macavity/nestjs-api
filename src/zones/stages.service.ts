import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Stage } from './entities/stage.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaveOptions } from 'typeorm/repository/SaveOptions';

@Injectable()
export class StagesService extends TypeOrmCrudService<Stage> {
  constructor(
    @InjectRepository(Stage) public repository: Repository<Stage>,
  ) {
    super(repository);
  }

  async ensureStages(stages: Stage[]){

  }

  async findSortedStages(zoneId: number) {
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

  async save(entity: Stage, options?: SaveOptions) {
    await this.repository.save(entity);
  }

  async calculateStageScore(){

  }
}
