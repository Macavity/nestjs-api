import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Zone } from '../../zones/entities/zone.entity';

@Entity()
export class Continent {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 200 })
  public name: string;

  @Column({ length: 50 })
  public slug: string;

  @OneToMany(() => Zone, zone => zone.continent)
  public zones: Zone[];
}
