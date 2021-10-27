export interface IReference {
  id: number;
}

export interface IRotation {
  classType: number;
  skill1: IReference;
  skill2: IReference;
  skill3: IReference;
  skill4: IReference;
  skills: IReference[];
  skillNames: string[];
}

export interface IPartySetup {
  areaName: string;
  level: number;
  gladiator?: IRotation;
  shaman?: IRotation;
  assassin?: IRotation;
  hunter?: IRotation;
  mage?: IRotation;
  druid?: IRotation;
  warlock?: IRotation;
}

export interface IBossFixture {
  id: number;
  name: string;
  primaryElement: number;
  secondaryElement: number;
  partySetups: IPartySetup[];
}

export const bossFixtures: IBossFixture[] =[];
