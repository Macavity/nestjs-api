import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './entities/job.entity';
import { Skill } from './entities/skill.entity';
import { SkillsService } from './skills.service';

@Module({
  imports: [TypeOrmModule.forFeature([Job, Skill])],
  controllers: [JobsController],
  providers: [JobsService, SkillsService],
  exports: [JobsService, SkillsService]
})
export class JobsModule {
}
