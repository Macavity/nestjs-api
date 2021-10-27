import { Boss } from '../../bosses/entities/boss.entity';
import { Zone } from '../entities/zone.entity';
import { Stage } from '../entities/stage.entity';

export class StageFactory {
  static create(level: number, zone: Zone, boss: Boss): Stage {
    const stage = new Stage();

    stage.level = level;
    stage.zone = zone;
    stage.boss = boss;

    return stage;
  }

}
