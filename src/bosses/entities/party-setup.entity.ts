import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Boss } from './boss.entity';
import { RotationEmbed } from './rotation.embed';
import { Zone } from '../../zones/entities/zone.entity';

@Entity()
export class PartySetup {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Boss, boss => boss.partySetups)
  public boss: Boss;

  @ManyToOne(() => Zone, zone => zone.partySetups)
  public zone: Zone;

  @Column({ nullable: true })
  public level: number;

  @Column(() => RotationEmbed)
  public gladiator: RotationEmbed;

  @Column(() => RotationEmbed)
  public warrior: RotationEmbed;

  @Column(() => RotationEmbed)
  public druid: RotationEmbed;

  @Column(() => RotationEmbed)
  public shaman: RotationEmbed;

  @Column(() => RotationEmbed)
  public assassin: RotationEmbed;

  @Column(() => RotationEmbed)
  public hunter: RotationEmbed;

  @Column(() => RotationEmbed)
  public mage: RotationEmbed;

  @Column(() => RotationEmbed)
  public warlock: RotationEmbed;
}
