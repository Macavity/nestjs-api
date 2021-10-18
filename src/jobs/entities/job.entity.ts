import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Skill } from './skill.entity';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 200 })
  public name: string;

  @Column({ length: 50 })
  public slug: string;

  @OneToMany(() => Skill, skill => skill.job)
  public skills: Skill[];
}
