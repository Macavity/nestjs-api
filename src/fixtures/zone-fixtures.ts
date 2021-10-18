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
  /*
   * Fire
   */
  { position: 1, continent: ContinentKey.Fire, name: 'Primitive Plains' },
  { position: 2, continent: ContinentKey.Fire, name: 'Sabada Rainforest' },
  { position: 3, continent: ContinentKey.Fire, name: 'Chiwawa Gorge' },
  { position: 4, continent: ContinentKey.Fire, name: 'Bata Desert' },
  { position: 5, continent: ContinentKey.Fire, name: 'Bababo Coast' },
  { position: 6, continent: ContinentKey.Fire, name: 'Jujule Volcano' },
  {
    position: 7, continent: ContinentKey.Fire, name: 'Sinbad Rainforest',
    stages: [
      {
        'continent': 1,
        'level': 67,
        'bossName': 'Big Tongue Flower King'
      }, {
        'continent': 1,
        'level': 75,
        'bossName': 'Unicorn Gorilla Chief'
      }, {
        'continent': 1,
        'level': 80,
        'bossName': 'Thunder Dragon'
      }, {
        'continent': 1,
        'level': 86,
        'bossName': 'Big Tongue Flower King'
      }, {
        'continent': 1,
        'level': 93,
        'bossName': 'Sabre Tiger King'
      }, {
        'continent': 1,
        'level': 98,
        'bossName': 'Sabre Tiger King & Grey Tiger King'
      }, {
        'continent': 1,
        'level': 104,
        'bossName': 'Unicorn Gorilla Chief'
      }, {
        'continent': 1,
        'level': 111,
        'bossName': 'Big Tongue Flower King'
      }, {
        'continent': 1,
        'level': 120,
        'bossName': 'Liondragon'
      }]
  },
  {
    position: 8, continent: ContinentKey.Fire, name: 'Toto Plain',
    stages: [
      {
        'continent': 1,
        'level': 1,
        'bossName': 'Liondragon'
      }, {
        'continent': 1,
        'level': 6,
        'bossName': 'Black-haired King'
      }, {
        'continent': 1,
        'level': 12,
        'bossName': 'T. Rex'
      }, {
        'continent': 1,
        'level': 16,
        'bossName': 'T. Rex'
      }, {
        'continent': 1,
        'level': 22,
        'bossName': 'Sabre Tiger King & Grey Tiger King'
      }, {
        'continent': 1,
        'level': 28,
        'bossName': 'T. Rex'
      }, {
        'continent': 1,
        'level': 34,
        'bossName': 'Black-haired King'
      }, {
        'continent': 1,
        'level': 41,
        'bossName': 'Warg King'
      }, {
        'continent': 1,
        'level': 48,
        'bossName': 'Sabre Tiger King & Grey Tiger King'
      }, {
        'continent': 1,
        'level': 54,
        'bossName': 'Liondragon'
      }, {
        'continent': 1,
        'level': 59,
        'bossName': 'T. Rex'
      }, {
        'continent': 1,
        'level': 65,
        'bossName': 'Black-haired King'
      }, {
        'continent': 1,
        'level': 72,
        'bossName': 'Warg King'
      }, {
        'continent': 1,
        'level': 78,
        'bossName': 'Sabre Tiger King & Grey Tiger King'
      }, {
        'continent': 1,
        'level': 83,
        'bossName': 'Liondragon'
      }, {
        'continent': 1,
        'level': 90,
        'bossName': 'Black-haired King'
      }, {
        'continent': 1,
        'level': 97,
        'bossName': 'Warg King'
      }, {
        'continent': 1,
        'level': 104,
        'bossName': 'Sabre Tiger King & Grey Tiger King'
      }, {
        'continent': 1,
        'level': 111,
        'bossName': 'Liondragon'
      }, {
        'continent': 1,
        'level': 120,
        'bossName': 'Walrus Chieftain'
      }]
  },
  {
    position: 9, continent: ContinentKey.Fire, name: 'Cobo Coast',
    stages: [
      {
        'continent': 1,
        'level': 1,
        'bossName': 'Walrus Chieftain'
      }, {
        'continent': 1,
        'level': 7,
        'bossName': 'Giant Shell Turtle'
      }, {
        'continent': 1,
        'level': 15,
        'bossName': 'Bone Ankylosaurus'
      }, {
        'continent': 1,
        'level': 20,
        'bossName': 'Thunder Stegosaurus'
      }, {
        'continent': 1,
        'level': 26,
        'bossName': 'Thunder Ceratops'
      }, {
        'continent': 1,
        'level': 33,
        'bossName': 'Walrus Chieftain'
      }, {
        'continent': 1,
        'level': 40,
        'bossName': 'Bone Ankylosaurus'
      }, {
        'continent': 1,
        'level': 46,
        'bossName': 'Thunder Stegosaurus'
      }, {
        'continent': 1,
        'level': 53,
        'bossName': 'Giant Shell Turtle'
      }, {
        'continent': 1,
        'level': 59,
        'bossName': 'Thunder Ceratops'
      }, {
        'continent': 1,
        'level': 66,
        'bossName': 'Bone Ankylosaurus'
      }, {
        'continent': 1,
        'level': 71,
        'bossName': 'Thunder Stegosaurus'
      }, {
        'continent': 1,
        'level': 73,
        'bossName': 'Walrus Chieftain'
      }, {
        'continent': 1,
        'level': 77,
        'bossName': 'Giant Shell Turtle'
      }, {
        'continent': 1,
        'level': 88,
        'bossName': 'Thunder Ceratops'
      }, {
        'continent': 1,
        'level': 95,
        'bossName': 'Bone Ankylosaurus'
      }, {
        'continent': 1,
        'level': 102,
        'bossName': 'Thunder Stegosaurus'
      }, {
        'continent': 1,
        'level': 108,
        'bossName': 'Walrus Chieftain'
      }, {
        'continent': 1,
        'level': 114,
        'bossName': 'Giant Shell Turtle'
      }]
  },
  /*
   * Frost
   */
  {
    position: 1, continent: ContinentKey.Frost, name: 'Horu Fjord',
    stages: [
      {
        'continent': 2,
        'level': 1,
        'bossName': 'White Unicorn Gorilla Chief'
      }, {
        'continent': 2,
        'level': 7,
        'bossName': 'Cold Light Trasher'
      }, {
        'continent': 2,
        'level': 12,
        'bossName': 'Brown Bear Chief'
      }, {
        'continent': 2,
        'level': 18,
        'bossName': 'Ice Liondragon'
      }, {
        'continent': 2,
        'level': 23,
        'bossName': 'Yak King'
      }, {
        'continent': 2,
        'level': 28,
        'bossName': 'Cold Light Trasher'
      }, {
        'continent': 2,
        'level': 33,
        'bossName': 'Brown Bear Chief'
      }, {
        'continent': 2,
        'level': 40,
        'bossName': 'Ice Liondragon'
      }, {
        'continent': 2,
        'level': 44,
        'bossName': 'Yak King'
      }, {
        'continent': 2,
        'level': 50,
        'bossName': 'White Unicorn Gorilla Chief'
      }, {
        'continent': 2,
        'level': 57,
        'bossName': 'Ice Liondragon'
      }, {
        'continent': 2,
        'level': 64,
        'bossName': 'Cold Light Trasher'
      }, {
        'continent': 2,
        'level': 68,
        'bossName': 'Brown Bear Chief'
      }, {
        'continent': 2,
        'level': 75,
        'bossName': 'Yak King'
      }, {
        'continent': 2,
        'level': 83,
        'bossName': 'White Unicorn Gorilla Chief'
      }, {
        'continent': 2,
        'level': 90,
        'bossName': 'Ice Liondragon'
      }, {
        'continent': 2,
        'level': 97,
        'bossName': 'Cold Light Trasher'
      }, {
        'continent': 2,
        'level': 105,
        'bossName': 'Brown Bear Chief'
      }, {
        'continent': 2,
        'level': 112,
        'bossName': 'Yak King'
      }, {
        'continent': 2,
        'level': 120,
        'bossName': 'Mammoth'
      }]
  },
  {
    position: 2, continent: ContinentKey.Frost, name: 'Tintin Ice Cave',
    stages: [
      {
        'continent': 2,
        'level': 1,
        'bossName': 'Mammoth'
      }, {
        'continent': 2,
        'level': 6,
        'bossName': 'Ice Liondragon'
      }, {
        'continent': 2,
        'level': 12,
        'bossName': 'Typhoon Dragon'
      }, {
        'continent': 2,
        'level': 18,
        'bossName': 'Mammoth'
      }, {
        'continent': 2,
        'level': 22,
        'bossName': 'Irish Elk'
      }, {
        'continent': 2,
        'level': 30,
        'bossName': 'Ice Liondragon'
      }, {
        'continent': 2,
        'level': 37,
        'bossName': 'White Wolf King'
      }, {
        'continent': 2,
        'level': 44,
        'bossName': 'Typhoon Dragon'
      }, {
        'continent': 2,
        'level': 51,
        'bossName': 'Irish Elk'
      }, {
        'continent': 2,
        'level': 57,
        'bossName': 'Mammoth'
      }, {
        'continent': 2,
        'level': 63,
        'bossName': 'White Wolf King'
      }, {
        'continent': 2,
        'level': 69,
        'bossName': 'Ice Liondragon'
      }, {
        'continent': 2,
        'level': 75,
        'bossName': 'Typhoon Dragon'
      }, {
        'continent': 2,
        'level': 80,
        'bossName': 'Irish Elk'
      }, {
        'continent': 2,
        'level': 86,
        'bossName': 'Mammoth'
      }, {
        'continent': 2,
        'level': 92,
        'bossName': 'White Wolf King'
      }, {
        'continent': 2,
        'level': 99,
        'bossName': 'Ice Liondragon'
      }, {
        'continent': 2,
        'level': 106,
        'bossName': 'Typhoon Dragon'
      }, {
        'continent': 2,
        'level': 113,
        'bossName': 'Irish Elk'
      }, {
        'continent': 2,
        'level': 120,
        'bossName': 'White Yak King'
      }]
  },
  {
    position: 3, continent: ContinentKey.Frost, name: 'Tovana Snowland',
    stages: [
      {
        'continent': 2,
        'level': 1,
        'bossName': 'White Yak King'
      }, {
        'continent': 2,
        'level': 6,
        'bossName': 'White Unicorn Gorilla Chief'
      }, {
        'continent': 2,
        'level': 12,
        'bossName': 'White Wolf King'
      }, {
        'continent': 2,
        'level': 17,
        'bossName': 'Cold Light Trasher'
      }, {
        'continent': 2,
        'level': 23,
        'bossName': 'Polar Bear Chief'
      }, {
        'continent': 2,
        'level': 120,
        'bossName': 'Ice Liondragon'
      }]
  },
  {
    position: 4, continent: ContinentKey.Frost, name: 'Warry Woodland',
    stages: [
      {
        'continent': 2,
        'level': 1,
        'bossName': 'Moon Wind Dragon'
      }, {
        'continent': 2,
        'level': 7,
        'bossName': 'White Wolf King'
      }, {
        'continent': 2,
        'level': 15,
        'bossName': 'White Unicorn Gorilla Chief'
      }, {
        'continent': 2,
        'level': 22,
        'bossName': 'Typhoon Dragon'
      }, {
        'continent': 2,
        'level': 28,
        'bossName': 'Polar Bear Chief'
      }, {
        'continent': 2,
        'level': 34,
        'bossName': 'Moon Wind Dragon'
      }, {
        'continent': 2,
        'level': 41,
        'bossName': 'White Wolf King'
      }, {
        'continent': 2,
        'level': 48,
        'bossName': 'White Unicorn Gorilla Chief'
      }, {
        'continent': 2,
        'level': 55,
        'bossName': 'Typhoon Dragon'
      }, {
        'continent': 2,
        'level': 63,
        'bossName': 'Polar Bear Chief'
      }, {
        'continent': 2,
        'level': 68,
        'bossName': 'Moon Wind Dragon'
      }, {
        'continent': 2,
        'level': 75,
        'bossName': 'White Wolf King'
      }, {
        'continent': 2,
        'level': 82,
        'bossName': 'White Unicorn Gorilla Chief'
      }, {
        'continent': 2,
        'level': 89,
        'bossName': 'Typhoon Dragon'
      }, {
        'continent': 2,
        'level': 96,
        'bossName': 'Polar Bear Chief'
      }, {
        'continent': 2,
        'level': 103,
        'bossName': 'Moon Wind Dragon'
      }, {
        'continent': 2,
        'level': 108,
        'bossName': 'White Wolf King'
      }, {
        'continent': 2,
        'level': 114,
        'bossName': 'White Unicorn Gorilla Chief'
      }, {
        'continent': 2,
        'level': 120,
        'bossName': 'Mammoth'
      }]
  },
  { position: 5, continent: ContinentKey.Frost, name: 'Dodori Snow Mountain', },
  { position: 6, continent: ContinentKey.Frost, name: 'Sinvasa Woodland', },
  { position: 7, continent: ContinentKey.Frost, name: 'Hori Fjord', },
];
