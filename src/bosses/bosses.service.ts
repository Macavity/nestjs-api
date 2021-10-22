import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Boss } from './entities/boss.entity';
import { ElementType } from '../enums/ElementType';
import { FindOneOptions, Repository } from 'typeorm';
import { BossFactory } from './entities/boss.factory';

@Injectable()
export class BossesService extends TypeOrmCrudService<Boss> {
  constructor(
    @InjectRepository(Boss) public repository: Repository<Boss>,
  ) {
    super(repository);
  }

  public async updateOrCreateObject(name: string, primaryElement: ElementType, secondaryElement: ElementType) {
    let result: Boss = await this.repository.findOne({
      name
    });

    if (!result) {
      result = BossFactory.createBoss(name, primaryElement, secondaryElement);
    } else {
      result.name = name;
      result.primaryElement = primaryElement;
      result.secondaryElement = secondaryElement;
    }

    return await this.repository.save(result);
  }

  public async findOneOrFail(options: any){
    return await this.repository.findOneOrFail(options);
  }
}
