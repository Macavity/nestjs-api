import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ElementType } from '../../enums/ElementType';
import { PartySetup } from './party-setup.entity';
import { Stage } from '../../zones/entities/stage.entity';

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

  @OneToMany(() => PartySetup, partySetups => partySetups.boss)
  public partySetups: PartySetup[];
}
