import { Injectable } from '@nestjs/common';
import { Continent } from './entities/continent.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContinentsService extends TypeOrmCrudService<Continent> {
  constructor(
    @InjectRepository(Continent) private continentsRepository,
  ) {
    super(continentsRepository);
  }
}
