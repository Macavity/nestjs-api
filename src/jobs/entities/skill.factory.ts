import { ClassType } from '../../enums/ClassType';
import { Skill } from './skill.entity';
import { Job } from './job.entity';

export class SkillFactory {
  static createFromFixtureArray(array: [string, ClassType, string]){
    const name = array[0];
    const jobId = array[1];
    const short = array[2];

    const job = new Job();
    job.id = jobId;

    const skill = new Skill();

    skill.name = name;
    skill.job = job;
    skill.shortName = short;

    return skill;
  }
}
