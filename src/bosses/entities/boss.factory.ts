import { Boss } from './boss.entity';
import { ElementType } from '../../enums/ElementType';


export class BossFactory {
  static createBoss(name, primaryElement, secondaryElement: ElementType = ElementType.None): Boss {
    const boss = new Boss();
    boss.name = name;
    boss.primaryElement = primaryElement;
    boss.secondaryElement = secondaryElement;

    return boss;
  }

}
