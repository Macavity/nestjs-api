import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Skill } from './entities/skill.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassType } from '../enums/ClassType';
import { Job } from './entities/job.entity';
import slugify from 'slugify';

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

  async updateOrCreate(skill: Skill) {
    let entities: Skill[] = await this.skillsRepository.find({
      where: {
        name: skill.name,
      }
    });
    let existedAlready = true;
    let newSkill = new Skill();

    if (!entities.length) {
      existedAlready = false;
      newSkill = skill;
      await this.skillsRepository.save(newSkill);
    } else {
      await this.skillsRepository.merge(entities[0], skill);
    }

    console.log(`[Console] - Job Skill "${newSkill.name}" ${existedAlready ? 'updated' : 'created'}.`);
  }
}
