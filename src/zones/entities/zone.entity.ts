import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Continent } from '../../continents/entities/continent.entity';
import { Stage } from '../../stages/entities/stage.entity';

@Entity()
export class Zone {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public position: number;

  @Column()
  public slug: string;

  @ManyToOne(() => Continent, continent => continent.zones, { eager: true })
  public continent: Continent;

  @Column({ length: 200 })
  public name: string;

  @OneToMany(() => Stage, stage => stage.zone, { cascade: true,  })
  public stages: Stage[];
}
