import { Skill } from '../entities/skill.entity';

export class SkillRotation {
  private skills = [] as Skill[];

  constructor(
    public jobId: number,
    public skill1: Skill,
    public skill2: Skill,
    public skill3: Skill,
    public skill4: Skill,
  ) {

    // let classEnum = SkillRotation.getSkillEnum(classType);
    let skills: Skill[] = [skill1, skill2, skill3, skill4];

    for (const skill of skills) {
      this.skills.push(skill);
    }
  }

  getSkillName(index: number) {
    return this.skills[index]?.shortName;
  }
}
