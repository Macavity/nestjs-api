import { Boss } from './boss.entity';
import { ElementType } from '../../enums/ElementType';
import { IPartySetup, IRotation } from '../../fixtures/boss-fixtures';
import { PartySetup } from './party-setup.entity';
import { Stage } from '../../stages/entities/stage.entity';
import { RotationEmbed } from './rotation.embed';


export class RotationEmbedFactory {
  static createFromJson(json: IRotation): RotationEmbed {
    const rotation = new RotationEmbed();
    rotation.skill1 = json.skill1.id;
    rotation.skill2 = json.skill2.id;
    rotation.skill3 = json.skill3.id;
    rotation.skill4 = json.skill4.id;

    return rotation;
  }

}
