import { ClassType } from '../enums/ClassType';

const assassinSkills: Array<any> = [
  ['PoisonCoat', ClassType.Assassin, 'Poison'],
  ['Lacerations', ClassType.Assassin, 'Lacer'],
  ['Shiv', ClassType.Assassin, 'Shiv'],
  ['Pursuing', ClassType.Assassin, 'Pursue'],
  ['FatalKnife', ClassType.Assassin, 'Fatal'],
  ['FanOfKnives', ClassType.Assassin, 'Fan'],
  ['ReverberatingSlam', ClassType.Assassin, 'RevSlam'],
  ['CloakOfBush', ClassType.Assassin, 'Cloak'],
  ['Rupture', ClassType.Assassin, 'Rupture'],
  ['Ambush', ClassType.Assassin, 'Ambush'],
  ['RoundhouseKick', ClassType.Assassin, 'Kick'],
  ['ScatterBlade', ClassType.Assassin, 'Scatter'],
  ['DoubleThrowKnives', ClassType.Assassin, 'Double'],
  ['SwiftwindDaggers', ClassType.Assassin, 'Swiftwind'],
  ['BounceBounce', ClassType.Assassin, 'Bounce'],
  ['Pounce', ClassType.Assassin, 'Pounce'],
  ['Backstab', ClassType.Assassin, 'Backstab'],
  ['RecklessLunge', ClassType.Assassin, 'Lunge'],
  ['FishBoneThrowingKnife', ClassType.Assassin, 'FishKnife'],
];

const gladiatorSkills = [
  ['Uppercut', ClassType.Gladiator, 'Uppercut'],
  ['Intercept', ClassType.Gladiator, 'Intercept'],
  ['LetsCharge', ClassType.Gladiator, 'LetsCharge'],
  ['Whirlwind', ClassType.Gladiator, 'Whirlwind'],
  ['HooHooHoo', ClassType.Gladiator, 'HooHoo'],
  ['HooKhamKham', ClassType.Gladiator, 'HooKham'],
  ['RisingRage', ClassType.Gladiator, 'Rising'],
  ['Cleave', ClassType.Gladiator, 'Cleave'],
  ['BloodHowl', ClassType.Gladiator, 'BloodHowl'],
  ['Frenzy', ClassType.Gladiator, 'Frenzy'],
  ['SeveringStrike', ClassType.Gladiator, 'Severing'],
  ['BattleShout', ClassType.Gladiator, 'BattleShout'],
  ['BloodyCombat', ClassType.Gladiator, 'BloodyCombat'],
  ['DeathDenied', ClassType.Gladiator, 'DeathDenied'],
  ['Sacrifice', ClassType.Gladiator, 'Sacrifice'],
  ['BarbarianVeins', ClassType.Gladiator, 'Veins'],
  ['Toughen', ClassType.Gladiator, 'Toughen'],
];

const druidSkills = [
  ['FlowerSeed', ClassType.Druid, 'FlowerSeed'],
  ['Quills', ClassType.Druid, 'Quills'],
  ['LifeBloom', ClassType.Druid, 'LifeBloom'],
  ['Mend', ClassType.Druid, 'Mend'],
  ['SongOfProtection', ClassType.Druid, 'SoP'],
  ['ForceOfBud', ClassType.Druid, 'Force'],
  ['Tranquility', ClassType.Druid, 'Tranq'],
  ['LilyTransform', ClassType.Druid, 'Lily'],
  ['TreeWard', ClassType.Druid, 'TreeWard'],
  ['PurificationSeed', ClassType.Druid, 'PurifSeed'],
  ['Ukaka', ClassType.Druid, 'Ukaka'],
  ['SeedOfLife', ClassType.Druid, 'SeedofLife'],
  ['NewBud', ClassType.Druid, 'NewBud'],
  ['RevitalizeNature', ClassType.Druid, 'Revitalize'],
  ['SeedOfReplenishment', ClassType.Druid, 'SeedOfR'],
];

const hunterSkills = [
  ['ArrowBarrage', ClassType.Hunter, 'ArrowB'],
  ['HawkCallSheen', ClassType.Hunter, 'Sheen'],
  ['HawkCallGal', ClassType.Hunter, 'Gal'],
  ['SteadyShot', ClassType.Hunter, 'Steady'],
  ['NumbingShot', ClassType.Hunter, 'Numb'],
  ['ExplosiveShot', ClassType.Hunter, 'Expl'],
  ['BoarsRush', ClassType.Hunter, 'Boar'],
  ['StormShot', ClassType.Hunter, 'Storm'],
  ['BurningShot', ClassType.Hunter, 'Burn'],
  ['WeakPointShot', ClassType.Hunter, 'Weak'],
  ['HawkCallPan', ClassType.Hunter, 'Pan'],
  ['AimedShot', ClassType.Hunter, 'Aimed'],
  ['ScatterShot', ClassType.Hunter, 'Scatter'],
  ['MultiShot', ClassType.Hunter, 'Multi'],
  ['Volley', ClassType.Hunter, 'Volley'],
  ['PiercingShot', ClassType.Hunter, 'Pierce'],
  ['QuickShot', ClassType.Hunter, 'Quick'],
  ['LunarShot', ClassType.Hunter, 'Lunar'],
  ['SunderArmorShot', ClassType.Hunter, 'Sunder'],
];

const mageSkills = [
  ['Scorch', ClassType.Mage, 'Scorch'],
  ['FireBlast', ClassType.Mage, 'FB'],
  ['PurificationWave', ClassType.Mage, 'Purif'],
  ['Serenity', ClassType.Mage, 'Serenity'],
  ['LightningBlast', ClassType.Mage, 'LB'],
];

const shamanSkills = [
  ['ElectricShock', ClassType.Shaman, 'Electric'],
  ['Riptide', ClassType.Shaman, 'Riptide'],
  ['ThunderHeart', ClassType.Shaman, 'ThunderHeart'],
  ['DrumsOfRain', ClassType.Shaman, 'DrumsOfRain'],
  ['ChainHeal', ClassType.Shaman, 'Chain'],
  ['BlessingOfSpirits', ClassType.Shaman, 'Blessing'],
  ['AncestralProtection', ClassType.Shaman, 'AProt'],
  ['FontOfPurge', ClassType.Shaman, 'Font'],
  ['RecoveryTotem', ClassType.Shaman, 'RecTotem'],
];

export class SkillFixtures {
  static findAll() {
    return new Promise((resolve, reject) => {
      resolve([
        ...gladiatorSkills,
        ...assassinSkills,
        ...druidSkills,
        ...hunterSkills,
        ...mageSkills,
        ...shamanSkills,
      ]);
    });
  }

  static findAllByClass(classType: ClassType): Array<any> {
    switch (classType) {
      // Tanks
      case ClassType.Gladiator:
        return gladiatorSkills;
      // Healers
      case ClassType.Druid:
        return druidSkills;
      case ClassType.Shaman:
        return shamanSkills;
      // DD
      case ClassType.Assassin:
        return assassinSkills;
      case ClassType.Hunter:
        return hunterSkills;
      case ClassType.Mage:
        return mageSkills;
    }

    return [];
  }
}
