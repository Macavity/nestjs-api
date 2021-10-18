import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Job } from './entities/job.entity';
import { Repository } from 'typeorm';
import { Skill } from './entities/skill.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ClassType } from '../enums/ClassType';
import { Boss } from '../bosses/entities/boss.entity';
import { BossFactory } from '../bosses/entities/boss.factory';
import slugify from 'slugify';

@Injectable()
export class JobsService extends TypeOrmCrudService<Job>{
  constructor(
    @InjectRepository(Job) private jobsRepository: Repository<Job>,
    @InjectRepository(Skill) private skillsRepository: Repository<Skill>
  ) {
    super(jobsRepository);
  }

  async updateOrCreate(jobObject: { name: string; id: ClassType }) {
    let job: Job = await this.jobsRepository.findOne(jobObject.id);
    let existedAlready = true;

    if (!job) {
      job = new Job();
      job.id = jobObject.id;
      existedAlready = false;
    }

    job.name = jobObject.name;
    job.slug = slugify(job.name).toLowerCase();

    await this.jobsRepository.save(job);
    console.log(`[Console] Job "${job.name}" ${existedAlready ? 'updated' : 'created'}.`);
  }
}
