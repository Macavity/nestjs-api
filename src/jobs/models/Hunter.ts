export enum HunterSkill {
  HawkCallSheen = 500,
  HawkCallGal,
  SteadyShot,
  NumbingShot,
  ExplosiveShot,
  BoarsRush,
  StormShot,
  BurningShot,
  WeakPointShot,
  HawkCallPan,
  AimedShot,
  ScatterShot,
  MultiShot,
  Volley,
  PiercingShot,
  QuickShot,
  LunarShot,
  ArrowBarrage,
  SunderArmorShot
}

export const hunterSheenGalWeakStorm = [HunterSkill.HawkCallSheen, HunterSkill.HawkCallGal, HunterSkill.WeakPointShot, HunterSkill.StormShot];
export const hunterSheenBoarWeakStorm = [HunterSkill.HawkCallSheen, HunterSkill.BoarsRush, HunterSkill.WeakPointShot, HunterSkill.StormShot];
export const sheenGalWeakBoar = [HunterSkill.HawkCallSheen, HunterSkill.HawkCallGal, HunterSkill.WeakPointShot, HunterSkill.BoarsRush];
export const hunterSheenGalWeakPan = [HunterSkill.HawkCallSheen, HunterSkill.HawkCallGal, HunterSkill.WeakPointShot, HunterSkill.HawkCallPan];
export const hunterSheenGalWeakSteady = [HunterSkill.HawkCallSheen, HunterSkill.HawkCallGal, HunterSkill.WeakPointShot, HunterSkill.SteadyShot];
export const pierceBoarQuickAimed = [HunterSkill.PiercingShot, HunterSkill.BoarsRush, HunterSkill.QuickShot, HunterSkill.AimedShot];

