import { Stage } from './stage.entity';
import { Zone } from '../../zones/entities/zone.entity';
import { Boss } from '../../bosses/entities/boss.entity';


export class StageFactory {
  static create(level: number, zone: Zone, boss: Boss): Stage {
    const stage = new Stage();

    stage.level = level;
    stage.zone = zone;
    stage.boss = boss;

    return stage;
  }

}
