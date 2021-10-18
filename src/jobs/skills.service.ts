import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Skill } from './entities/skill.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SkillsService extends TypeOrmCrudService<Skill> {
  constructor(
    @InjectRepository(Skill) private skillsRepository: Repository<Skill>,
  ) {
    super(skillsRepository);
  }

  async findSkillsForJob(jobId: number) {
    return await this.skillsRepository.find({
      where: {
        job: jobId,
      }
    });
  }
}
