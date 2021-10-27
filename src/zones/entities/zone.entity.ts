import { AfterLoad, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Continent } from './continent.entity';
import { Stage } from './stage.entity';
import { PartySetup } from '../../bosses/entities/party-setup.entity';

@Entity()
export class Zone {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public position: number;

  @Column({ unique: true })
  public slug: string;

  @ManyToOne(() => Continent, continent => continent.zones, { eager: true })
  public continent: Continent;

  @Column({ length: 200, unique: true })
  public name: string;

  @Column({ default: 0 })
  public scoreStart: number;

  @OneToMany(() => Stage, stage => stage.zone, { cascade: true, })
  public stages: Stage[];

  @OneToMany(() => PartySetup, partySetups => partySetups.zone)
  public partySetups: PartySetup[];

  public detailUrl: string;

  @AfterLoad()
  public computedProperties() {
    this.detailUrl = '/zone/' + this.id;
  }
}
