import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Zone } from './entities/zone.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'typeorm/driver/mongodb/typings';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class ZonesService extends TypeOrmCrudService<Zone> {
  constructor(
    @InjectRepository(Zone) public repository: Repository<Zone>,
  ) {
    super(repository);
  }

  calculateStageScore(zone: Zone, stageLevel: number) {
    return zone.scoreStart + stageLevel;
  }

  async findSortedStages(id: number) {
    const zone = await this.repository.findOne(id, {
      relations: ['stages']
    });

    return zone.stages.sort((a, b) => (a.level > b.level) ? 1 : -1);
  }

  async findByNameWithStages(name: string): Promise<Zone> {
    const results = await this.repository.find({
      where: {
        name,
      },
      relations: ['stages'],
    });

    if (results) {
      return results[0];
    }

    return null;
  }

  async save(zone: Zone) {
    return await this.repository.save(zone);
  }

  async truncate() {
    return await this.repository.clear();
  }

  async findOneOrFail(options: any){
    return await this.repository.findOneOrFail(options);
  }

  async update(criteria: string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | FindConditions<Zone>, partialEntity: QueryDeepPartialEntity<Zone>) {
    return await this.repository.update(criteria, partialEntity);
  }
}
