export interface ClassSkill {
  key: number;
  name: string;
  icon: string | null;
}

export class ClassSetup {
  constructor(
    public jobId: number,
    public level: number,
    public skill1: number,
    public skill2: number,
    public skill3: number,
    public skill4: number,
  ) {
  }

  get classType(){
    return this.jobId;
  }
}
