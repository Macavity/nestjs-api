import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Job } from './job.entity';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 200 })
  public name: string;

  @Column({ length: 50 })
  public shortName: string;

  @ManyToOne(() => Job, job => job.skills)
  public job: Job;
}
