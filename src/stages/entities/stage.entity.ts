import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Zone } from '../../zones/entities/zone.entity';
import { Boss } from '../../bosses/entities/boss.entity';

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
}
