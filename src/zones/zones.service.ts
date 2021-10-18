import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Zone } from './entities/zone.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class ZonesService extends TypeOrmCrudService<Zone> {
  constructor(
    @InjectRepository(Zone) public repository: Repository<Zone>,
  ) {
    super(repository);
  }

  async findSortedStages(id: number){
    const zone = await this.repository.findOne(id,{
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

    if(results){
      return results[0];
    }

    return null;
  }

  save(zone: Zone) {
    return this.repository.save(zone);
  }
}
