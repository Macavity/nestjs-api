import { Inject, Injectable, Logger } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Zone } from './entities/zone.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { ObjectID } from 'typeorm/driver/mongodb/typings';
import { FindConditions } from 'typeorm/find-options/FindConditions';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { PartySetup } from '../bosses/entities/party-setup.entity';
import { StageFactory } from './factories/stage.factory';
import { StagesService } from './stages.service';

@Injectable()
export class ZonesService extends TypeOrmCrudService<Zone> {
  private logger: Logger;

  constructor(
    @InjectRepository(Zone) public repository: Repository<Zone>,
    protected stagesService: StagesService,
  ) {
    super(repository);

    this.logger = new Logger(ZonesService.name);
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

  async createMissingStages(limitByZoneId: number|null = null) {
    const query = getConnection()
      .createQueryBuilder()
      .select('party_setup.id as id')
      .addSelect('party_setup.zoneId as zoneId')
      .addSelect('party_setup.level as level')
      .addSelect('party_setup.bossId as bossId')
      .from(PartySetup, 'party_setup')
      .where('NOT EXISTS (SELECT * FROM stage WHERE stage.`level` = `party_setup`.`level` AND stage.`zoneId` = `party_setup`.zoneId) ');

    if(limitByZoneId){
      console.log('limitByZoneId', limitByZoneId)
      query.andWhere('`party_setup`.`zoneId` = :zoneId', { zoneId: limitByZoneId });
      console.log(query.getQuery());
    }

    const setupsWithMissingStage = await query.getRawMany();

    if(!setupsWithMissingStage.length){
      this.logger.debug('No missing stages found.');
      this.logger.debug(setupsWithMissingStage);
      return;
    }

    this.logger.log(`Found ${setupsWithMissingStage.length} missing stages.`);

    for(const setup of setupsWithMissingStage) {
      const zone = await this.findOne(setup.zoneId);
      const stage = StageFactory.create(setup.level, zone, setup.bossId);

      await this.stagesService.save(stage);
      this.logger.debug(`Missing Stage ${stage.zone.name} #${stage.level} created.`)
    }
  }
}
