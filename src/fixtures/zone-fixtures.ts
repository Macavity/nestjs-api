export enum ContinentKey {
  None,
  Fire,
  Frost,
  Soil,
  Lightning,
}

export interface IZoneFixture {
  position: number;
  name: string;
  continent: ContinentKey;
  stages?: IStageFixture[];
}

export interface IStageFixture {
  level: number;
  continent: number;
  bossName: string;
}

export const zoneFixtures: IZoneFixture[] = [
];
