import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Boss } from './entities/boss.entity';
import { ElementType } from '../enums/ElementType';
import { FindOneOptions, Repository } from 'typeorm';
import { BossFactory } from './entities/boss.factory';
import { PartySetup } from './entities/party-setup.entity';
import { IPartySetup } from '../fixtures/boss-fixtures';
import { PartySetupFactory } from './entities/party-setup.factory';
import { Stage } from '../stages/entities/stage.entity';
import { Zone } from '../zones/entities/zone.entity';

@Injectable()
export class PartySetupService extends TypeOrmCrudService<PartySetup> {
  constructor(
    @InjectRepository(PartySetup) public repository: Repository<PartySetup>,
  ) {
    super(repository);
  }

  public async truncate(){
    return await this.repository.clear();
  }

  public async createObject(dto: IPartySetup, boss: Boss, zone: Zone) {
    const partySetup = PartySetupFactory.createFromJson(dto, boss, zone);

    return await this.repository.save(partySetup);
  }

  public async findOneOrFail(options: any){
    return await this.repository.findOneOrFail(options);
  }
}
