import { Controller, Get, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { Job } from './entities/job.entity';
import { SkillsService } from './skills.service';
import { Skill } from './entities/skill.entity';

@Crud({
  model: {
    type: Skill,
  },
  query: {
    join: {
      job: {
        eager: true,
      }
    }
  }
})
@Controller('skills')
export class SkillsController implements CrudController<Skill> {
  constructor(
    public readonly service: SkillsService,
  ) {
  }
}
