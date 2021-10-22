import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Zone } from '../../zones/entities/zone.entity';
import { Boss } from '../../bosses/entities/boss.entity';
import { PartySetup } from '../../bosses/entities/party-setup.entity';

@Entity()
export class Stage {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public level: number;

  @ManyToOne(() => Zone, zone => zone.stages)
  public zone: Zone;

  @ManyToOne(() => Boss, boss => boss.stages)
  public boss: Boss;

  @OneToMany(() => PartySetup, partySetups => partySetups.boss)
  public partySetups: PartySetup[];
}
