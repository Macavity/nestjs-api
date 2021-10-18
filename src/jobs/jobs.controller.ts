import { Controller, Get, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { Job } from './entities/job.entity';
import { SkillsService } from './skills.service';

@Crud({
  model: {
    type: Job,
  }
})
@Controller('jobs')
export class JobsController implements CrudController<Job> {
  constructor(
    public readonly service: JobsService,
    public readonly skillsService: SkillsService,
  ) {
  }

  @Get(':jobId/skills')
  jobs(
    @Param('jobId') jobId: number,
  ) {
    return this.skillsService.findSkillsForJob(jobId);
  }
}
