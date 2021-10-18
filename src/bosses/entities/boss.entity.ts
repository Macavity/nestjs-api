import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Stage } from '../../stages/entities/stage.entity';
import { ElementType } from '../../enums/ElementType';

@Entity()
export class Boss {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({length: 200})
  public name:string;

  @OneToMany(() => Stage, stage => stage.boss)
  public stages: Stage[];

  @Column()
  public primaryElement: ElementType;

  @Column()
  public secondaryElement: ElementType;
}
