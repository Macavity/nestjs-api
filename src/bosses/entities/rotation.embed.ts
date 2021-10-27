import { Column } from 'typeorm';

export class RotationEmbed {

  @Column({ nullable: true, default: null })
  skill1: number;

  @Column({ nullable: true, default: null })
  skill2: number;

  @Column({ nullable: true, default: null })
  skill3: number;

  @Column({ nullable: true, default: null })
  skill4: number;
}
