import { Boss } from './boss.entity';
import { IPartySetup } from '../../fixtures/boss-fixtures';
import { PartySetup } from './party-setup.entity';
import { RotationEmbedFactory } from './rotation-embed.factory';
import { Zone } from '../../zones/entities/zone.entity';


export class PartySetupFactory {
  static createFromJson(json: IPartySetup, boss: Boss, zone: Zone): PartySetup {
    const partySetup = new PartySetup();
    partySetup.boss = boss;
    partySetup.zone = zone;
    partySetup.level = json.level;

    for(const jobName of ['gladiator', 'warrior', 'druid', 'shaman', 'assassin', 'hunter', 'warlock', 'mage']){
      if(json[jobName]){
        partySetup[jobName] = RotationEmbedFactory.createFromJson(json[jobName]);
      }
    }

    // partySetup.druid = RotationEmbedFactory.createFromJson(json.druid);
    // partySetup.shaman = RotationEmbedFactory.createFromJson(json.shaman);
    // partySetup.assassin = RotationEmbedFactory.createFromJson(json.assassin);
    // partySetup.hunter = RotationEmbedFactory.createFromJson(json.hunter);
    // partySetup.mage = RotationEmbedFactory.createFromJson(json.mage);
    // partySetup.warlock = RotationEmbedFactory.createFromJson(json.warlock);

    return partySetup;
  }

}
