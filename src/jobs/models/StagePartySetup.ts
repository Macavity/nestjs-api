
// export class StagePartySetup {
//   private readonly tankSetup: GladiatorSetup | undefined;
//   private readonly healerSetup: DruidSetup | ShamanSetup | undefined;
//   private readonly assassinSetup: AssassinSetup | undefined;
//   private readonly hunterSetup: HunterSetup | undefined;
//   private readonly mageSetup: MageSetup | undefined;
//   // public areaName: string;
//
//   constructor(
//     public areaId: number,
//     public stage: number,
//     public party: ClassSetup[],
//   ) {
//     // this.areaName = AreaNames[areaKey];
//
//     for (const member of party) {
//       if (member instanceof GladiatorSetup) {
//         this.tankSetup = member;
//       }
//
//       if (member instanceof DruidSetup || member instanceof ShamanSetup) {
//         this.healerSetup = member;
//       }
//
//       if (member instanceof HunterSetup) {
//         this.hunterSetup = member;
//       }
//
//       if (member instanceof AssassinSetup) {
//         this.assassinSetup = member;
//       }
//
//       if (member instanceof MageSetup) {
//         this.mageSetup = member;
//       }
//     }
//   }
//
//   public getOrderedSkillRotations(): SkillRotation[] {
//     const rotations = [] as SkillRotation[];
//
//     if (this.tankSetup) {
//       rotations.push(new SkillRotation(this.tankSetup.type, this.tankSetup.skill1, this.tankSetup.skill2, this.tankSetup.skill3, this.tankSetup.skill4));
//     }
//
//     if (this.healerSetup) {
//       rotations.push(new SkillRotation(this.healerSetup.type, this.healerSetup.skill1, this.healerSetup.skill2, this.healerSetup.skill3, this.healerSetup.skill4));
//     }
//
//     if (this.assassinSetup) {
//       rotations.push(new SkillRotation(this.assassinSetup.type, this.assassinSetup.skill1, this.assassinSetup.skill2, this.assassinSetup.skill3, this.assassinSetup.skill4));
//     }
//
//     if (this.hunterSetup) {
//       rotations.push(new SkillRotation(this.hunterSetup.type, this.hunterSetup.skill1, this.hunterSetup.skill2, this.hunterSetup.skill3, this.hunterSetup.skill4));
//     }
//
//     if (this.mageSetup) {
//       rotations.push(new SkillRotation(this.mageSetup.type, this.mageSetup.skill1, this.mageSetup.skill2, this.mageSetup.skill3, this.mageSetup.skill4));
//     }
//
//     if (rotations.length > 4) {
//       throw new Error('Amount of classes in PartySetup exceeds 4: ' + this.areaName + ' ' + this.stage);
//     }
//
//     return rotations;
//   }
//
//   public getTankSetup(): GladiatorSetup | undefined {
//     return this.tankSetup;
//   }
//
//   public getHealerSetup(): DruidSetup | ShamanSetup | undefined {
//     return this.healerSetup;
//   }
//
//   public getAssassinSetup(): AssassinSetup | undefined {
//     return this.assassinSetup;
//   }
//
//   public getMageSetup(): MageSetup | undefined {
//     return this.mageSetup;
//   }
//
//   public getHunterSetup(): HunterSetup | undefined {
//     return this.hunterSetup;
//   }
// }
//
// export class RotationList {
//   constructor(
//     public entries: StagePartySetup[] = [],
//   ) {
//   }
//
//   public addRotation(entry: StagePartySetup): RotationList {
//     this.entries.push(entry);
//     return this;
//   }
//
//   public getPartySetupsForStage(areaKey: AreaKey, stageLevel: number): StagePartySetup[] {
//     const filteredEntries = this.entries.filter((rotation: StagePartySetup) => {
//       return rotation.areaKey === areaKey && rotation.stage === stageLevel;
//     });
//
//     if (filteredEntries.length) {
//       return filteredEntries;
//     }
//
//     const reversed = this.entries.reverse();
//
//     const score = Stage.calcScore(areaKey, stageLevel);
//
//     for (const rotation of reversed) {
//       const rotationScore = Stage.calcScore(rotation.areaKey, rotation.stage);
//       // console.log('compare score', rotationScore, '<=', score);
//       if (rotationScore <= score) {
//         // console.log('Found last match: ', rotation);
//         return [rotation];
//       }
//     }
//
//     return [];
//   }
// }
