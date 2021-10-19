import { ClassSetup } from './ClassSetup';
import { ClassType } from '../../enums/ClassType';


export enum AssassinSkill {
  PoisonCoat = 300,
  Lacerations,
  Shiv,
  Pursuing,
  FatalKnife,
  FanOfKnives,
  ReverberatingSlam,
  CloakOfBush,
  Rupture,
  Ambush,
  RoundhouseKick,
  ScatterBlade,
  DoubleThrowKnives,
  SwiftwindDaggers,
  BounceBounce,
  Pounce,
  Backstab,
  RecklessLunge,
  FishBoneThrowingKnife
}


export const poisonLacShivPursue = [AssassinSkill.PoisonCoat, AssassinSkill.Lacerations, AssassinSkill.Shiv, AssassinSkill.Pursuing];
export const poisonLacShivAmbush = [AssassinSkill.PoisonCoat, AssassinSkill.Lacerations, AssassinSkill.Shiv, AssassinSkill.Ambush];
export const ambushPoisonLacShiv = [AssassinSkill.Ambush, AssassinSkill.PoisonCoat, AssassinSkill.Lacerations, AssassinSkill.Shiv];
export const fanPoisonFatalShiv = [AssassinSkill.FanOfKnives, AssassinSkill.PoisonCoat, AssassinSkill.FatalKnife, AssassinSkill.Shiv];
export const fanFatalDoubleSwiftwind = [AssassinSkill.FanOfKnives, AssassinSkill.FatalKnife, AssassinSkill.DoubleThrowKnives, AssassinSkill.SwiftwindDaggers];


