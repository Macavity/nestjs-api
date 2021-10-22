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

export const bossFixtures: IBossFixture[] =
  [{
    'id': 32,
    'name': 'Fire Ankylosaur',
    'primaryElement': 1,
    'secondaryElement': 0,
    'partySetups': [{
      'areaName': 'Jujule Volcano',
      'level': 98,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 8 },
        'skill3': { 'id': 1 },
        'skill4': { 'id': 2 },
        'skills': [{ 'id': 4 }, { 'id': 8 }, { 'id': 1 }, { 'id': 2 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 33 },
        'skill2': { 'id': 34 },
        'skill3': { 'id': 35 },
        'skill4': { 'id': 36 },
        'skills': [{ 'id': 33 }, { 'id': 34 }, { 'id': 35 }, { 'id': 36 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 80 },
        'skill3': { 'id': 71 },
        'skill4': { 'id': 70 },
        'skills': [{ 'id': 73 }, { 'id': 80 }, { 'id': 71 }, { 'id': 70 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 47 },
        'skill2': { 'id': 55 },
        'skill3': { 'id': 52 },
        'skill4': { 'id': 60 },
        'skills': [{ 'id': 47 }, { 'id': 55 }, { 'id': 52 }, { 'id': 60 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 31,
    'name': 'Molten Stegosaurus',
    'primaryElement': 1,
    'secondaryElement': 0,
    'partySetups': [{
      'areaName': 'Bababo Coast',
      'level': 120,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 8 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 5 },
        'skill4': { 'id': 4 },
        'skills': [{ 'id': 8 }, { 'id': 2 }, { 'id': 5 }, { 'id': 4 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 33 },
        'skill2': { 'id': 34 },
        'skill3': { 'id': 35 },
        'skill4': { 'id': 36 },
        'skills': [{ 'id': 33 }, { 'id': 34 }, { 'id': 35 }, { 'id': 36 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 69 },
        'skill2': { 'id': 74 },
        'skill3': { 'id': 82 },
        'skill4': { 'id': 67 },
        'skills': [{ 'id': 69 }, { 'id': 74 }, { 'id': 82 }, { 'id': 67 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 27,
    'name': 'Pterosaur King',
    'primaryElement': 1,
    'secondaryElement': 2,
    'partySetups': [{
      'areaName': 'Bababo Coast',
      'level': 28,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 2 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 8 },
        'skill4': { 'id': 9 },
        'skills': [{ 'id': 2 }, { 'id': 4 }, { 'id': 8 }, { 'id': 9 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 33 },
        'skill2': { 'id': 34 },
        'skill3': { 'id': 35 },
        'skill4': { 'id': 36 },
        'skills': [{ 'id': 33 }, { 'id': 34 }, { 'id': 35 }, { 'id': 36 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 74 },
        'skill2': { 'id': 82 },
        'skill3': { 'id': 76 },
        'skill4': { 'id': 81 },
        'skills': [{ 'id': 74 }, { 'id': 82 }, { 'id': 76 }, { 'id': 81 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 54 },
        'skill2': { 'id': 56 },
        'skill3': { 'id': 51 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 54 }, { 'id': 56 }, { 'id': 51 }, { 'id': 50 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 1,
    'name': 'T. Rex',
    'primaryElement': 1,
    'secondaryElement': 2,
    'partySetups': [{
      'areaName': 'Toto Plain',
      'level': 28,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 7 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 1 },
        'skill4': { 'id': 3 },
        'skills': [{ 'id': 7 }, { 'id': 4 }, { 'id': 1 }, { 'id': 3 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 18 },
        'skill2': { 'id': 20 },
        'skill3': { 'id': 24 },
        'skill4': { 'id': 19 },
        'skills': [{ 'id': 18 }, { 'id': 20 }, { 'id': 24 }, { 'id': 19 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 69 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 73 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 69 }, { 'id': 66 }, { 'id': 73 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 54 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 54 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Toto Plain',
      'level': 59,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 7 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 1 },
        'skill4': { 'id': 3 },
        'skills': [{ 'id': 7 }, { 'id': 4 }, { 'id': 1 }, { 'id': 3 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 19 },
        'skill2': { 'id': 18 },
        'skill3': { 'id': 23 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 19 }, { 'id': 18 }, { 'id': 23 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 5,
    'name': 'Big Tongue Flower King',
    'primaryElement': 4,
    'secondaryElement': 3,
    'partySetups': [{
      'areaName': 'Sinbad Rainforest',
      'level': 67,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 5 }, { 'id': 2 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 18 },
        'skill2': { 'id': 19 },
        'skill3': { 'id': 21 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 18 }, { 'id': 19 }, { 'id': 21 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 71 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 70 },
        'skills': [{ 'id': 66 }, { 'id': 71 }, { 'id': 68 }, { 'id': 70 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 52 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 54 },
        'skill4': { 'id': 55 },
        'skills': [{ 'id': 52 }, { 'id': 53 }, { 'id': 54 }, { 'id': 55 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Sinbad Rainforest',
      'level': 86,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 8 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 4 }, { 'id': 8 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 18 },
        'skill2': { 'id': 20 },
        'skill3': { 'id': 23 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 18 }, { 'id': 20 }, { 'id': 23 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Sinbad Rainforest',
      'level': 111,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 8 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 4 }, { 'id': 8 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 18 },
        'skill2': { 'id': 20 },
        'skill3': { 'id': 23 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 18 }, { 'id': 20 }, { 'id': 23 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 4,
    'name': 'Black-haired King',
    'primaryElement': 4,
    'secondaryElement': 2,
    'partySetups': [{
      'areaName': 'Toto Plain',
      'level': 34,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 1 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 4 },
        'skills': [{ 'id': 1 }, { 'id': 2 }, { 'id': 3 }, { 'id': 4 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 19 },
        'skill2': { 'id': 18 },
        'skill3': { 'id': 23 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 19 }, { 'id': 18 }, { 'id': 23 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Toto Plain',
      'level': 65,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 1 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 4 },
        'skills': [{ 'id': 1 }, { 'id': 2 }, { 'id': 3 }, { 'id': 4 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 28 },
        'skill2': { 'id': 19 },
        'skill3': { 'id': 18 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 28 }, { 'id': 19 }, { 'id': 18 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 54 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 54 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Toto Plain',
      'level': 90,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 1 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 4 },
        'skills': [{ 'id': 1 }, { 'id': 2 }, { 'id': 3 }, { 'id': 4 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 28 },
        'skill2': { 'id': 19 },
        'skill3': { 'id': 18 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 28 }, { 'id': 19 }, { 'id': 18 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 54 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 54 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 9,
    'name': 'Brown Bear Chief',
    'primaryElement': 4,
    'secondaryElement': 3,
    'partySetups': [{
      'areaName': 'Horu Fjord',
      'level': 12,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 5 }, { 'id': 2 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 34 },
        'skill2': { 'id': 38 },
        'skill3': { 'id': 40 },
        'skill4': { 'id': 41 },
        'skills': [{ 'id': 34 }, { 'id': 38 }, { 'id': 40 }, { 'id': 41 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 76 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 73 },
        'skills': [{ 'id': 66 }, { 'id': 76 }, { 'id': 68 }, { 'id': 73 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 51 },
        'skill3': { 'id': 58 },
        'skill4': { 'id': 56 },
        'skills': [{ 'id': 48 }, { 'id': 51 }, { 'id': 58 }, { 'id': 56 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 13,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 9 },
        'skill4': { 'id': 3 },
        'skills': [{ 'id': 5 }, { 'id': 2 }, { 'id': 9 }, { 'id': 3 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 27 },
        'skill2': { 'id': 25 },
        'skill3': { 'id': 20 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 27 }, { 'id': 25 }, { 'id': 20 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 76 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 73 },
        'skills': [{ 'id': 66 }, { 'id': 76 }, { 'id': 68 }, { 'id': 73 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 51 },
        'skill3': { 'id': 58 },
        'skill4': { 'id': 56 },
        'skills': [{ 'id': 48 }, { 'id': 51 }, { 'id': 58 }, { 'id': 56 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 38,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 9 },
        'skill4': { 'id': 3 },
        'skills': [{ 'id': 5 }, { 'id': 2 }, { 'id': 9 }, { 'id': 3 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 27 },
        'skill2': { 'id': 25 },
        'skill3': { 'id': 20 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 27 }, { 'id': 25 }, { 'id': 20 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 76 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 73 },
        'skills': [{ 'id': 66 }, { 'id': 76 }, { 'id': 68 }, { 'id': 73 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 51 },
        'skill3': { 'id': 58 },
        'skill4': { 'id': 56 },
        'skills': [{ 'id': 48 }, { 'id': 51 }, { 'id': 58 }, { 'id': 56 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 83,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 9 },
        'skill4': { 'id': 3 },
        'skills': [{ 'id': 5 }, { 'id': 2 }, { 'id': 9 }, { 'id': 3 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 27 },
        'skill2': { 'id': 25 },
        'skill3': { 'id': 20 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 27 }, { 'id': 25 }, { 'id': 20 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 76 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 73 },
        'skills': [{ 'id': 66 }, { 'id': 76 }, { 'id': 68 }, { 'id': 73 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 51 },
        'skill3': { 'id': 58 },
        'skill4': { 'id': 56 },
        'skills': [{ 'id': 48 }, { 'id': 51 }, { 'id': 58 }, { 'id': 56 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 107,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 9 },
        'skill4': { 'id': 3 },
        'skills': [{ 'id': 5 }, { 'id': 2 }, { 'id': 9 }, { 'id': 3 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 27 },
        'skill2': { 'id': 25 },
        'skill3': { 'id': 20 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 27 }, { 'id': 25 }, { 'id': 20 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 76 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 73 },
        'skills': [{ 'id': 66 }, { 'id': 76 }, { 'id': 68 }, { 'id': 73 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 51 },
        'skill3': { 'id': 58 },
        'skill4': { 'id': 56 },
        'skills': [{ 'id': 48 }, { 'id': 51 }, { 'id': 58 }, { 'id': 56 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 12,
    'name': 'Irish Elk',
    'primaryElement': 4,
    'secondaryElement': 2,
    'partySetups': [{
      'areaName': 'Tintin Ice Cave',
      'level': 22,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 7 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 5 },
        'skill4': { 'id': 3 },
        'skills': [{ 'id': 7 }, { 'id': 9 }, { 'id': 5 }, { 'id': 3 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 30 },
        'skill2': { 'id': 25 },
        'skill3': { 'id': 23 },
        'skill4': { 'id': 26 },
        'skills': [{ 'id': 30 }, { 'id': 25 }, { 'id': 23 }, { 'id': 26 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 77 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 77 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 54 },
        'skill2': { 'id': 59 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 54 }, { 'id': 59 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tintin Ice Cave',
      'level': 51,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 10 },
        'skill2': { 'id': 5 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 10 }, { 'id': 5 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 26 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 25 }, { 'id': 26 }, { 'id': 22 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 77 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 77 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 58 },
        'skill2': { 'id': 59 },
        'skill3': { 'id': 50 },
        'skill4': { 'id': 56 },
        'skills': [{ 'id': 58 }, { 'id': 59 }, { 'id': 50 }, { 'id': 56 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tintin Ice Cave',
      'level': 56,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 7 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 7 }, { 'id': 4 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 26 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 25 }, { 'id': 26 }, { 'id': 22 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 77 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 73 }, { 'id': 66 }, { 'id': 77 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 58 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 48 },
        'skills': [{ 'id': 58 }, { 'id': 53 }, { 'id': 56 }, { 'id': 48 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tintin Ice Cave',
      'level': 80,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 7 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 7 }, { 'id': 4 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 28 },
        'skill2': { 'id': 19 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 28 }, { 'id': 19 }, { 'id': 22 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 77 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 67 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 77 }, { 'id': 66 }, { 'id': 67 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 58 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 48 },
        'skills': [{ 'id': 58 }, { 'id': 53 }, { 'id': 56 }, { 'id': 48 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 19,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 7 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 7 }, { 'id': 4 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 22 },
        'skill3': { 'id': 26 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 25 }, { 'id': 22 }, { 'id': 26 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 77 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 73 }, { 'id': 66 }, { 'id': 77 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 58 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 48 },
        'skills': [{ 'id': 58 }, { 'id': 53 }, { 'id': 56 }, { 'id': 48 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 22,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 7 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 7 }, { 'id': 4 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 22 },
        'skill3': { 'id': 26 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 25 }, { 'id': 22 }, { 'id': 26 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 77 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 73 }, { 'id': 66 }, { 'id': 77 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 53,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 7 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 7 }, { 'id': 4 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 22 },
        'skill3': { 'id': 26 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 25 }, { 'id': 22 }, { 'id': 26 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 77 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 73 }, { 'id': 66 }, { 'id': 77 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 53 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 64,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 7 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 7 }, { 'id': 4 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 22 },
        'skill3': { 'id': 26 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 25 }, { 'id': 22 }, { 'id': 26 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 77 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 73 }, { 'id': 66 }, { 'id': 77 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 53 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 89,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 7 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 7 }, { 'id': 4 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 22 },
        'skill3': { 'id': 26 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 25 }, { 'id': 22 }, { 'id': 26 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 77 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 73 }, { 'id': 66 }, { 'id': 77 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 53 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 8,
    'name': 'Liondragon',
    'primaryElement': 4,
    'secondaryElement': 2,
    'partySetups': [{
      'areaName': 'Sinbad Rainforest',
      'level': 120,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 8 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 4 }, { 'id': 8 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 18 },
        'skill2': { 'id': 20 },
        'skill3': { 'id': 23 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 18 }, { 'id': 20 }, { 'id': 23 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Toto Plain',
      'level': 53,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 2 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 5 }, { 'id': 4 }, { 'id': 2 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 20 },
        'skill2': { 'id': 23 },
        'skill3': { 'id': 27 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 20 }, { 'id': 23 }, { 'id': 27 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Toto Plain',
      'level': 83,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 2 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 5 }, { 'id': 4 }, { 'id': 2 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 20 },
        'skill2': { 'id': 23 },
        'skill3': { 'id': 27 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 20 }, { 'id': 23 }, { 'id': 27 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 25,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 3 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 3 }, { 'id': 2 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 28 },
        'skill2': { 'id': 20 },
        'skill3': { 'id': 19 },
        'skill4': { 'id': 18 },
        'skills': [{ 'id': 28 }, { 'id': 20 }, { 'id': 19 }, { 'id': 18 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 76 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 76 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 58 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 51 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 58 }, { 'id': 49 }, { 'id': 51 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 25,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 3 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 3 }, { 'id': 2 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 28 },
        'skill2': { 'id': 20 },
        'skill3': { 'id': 19 },
        'skill4': { 'id': 18 },
        'skills': [{ 'id': 28 }, { 'id': 20 }, { 'id': 19 }, { 'id': 18 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 73 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 73 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 58 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 51 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 58 }, { 'id': 49 }, { 'id': 51 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 58,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 3 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 3 }, { 'id': 2 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 28 },
        'skill2': { 'id': 20 },
        'skill3': { 'id': 19 },
        'skill4': { 'id': 18 },
        'skills': [{ 'id': 28 }, { 'id': 20 }, { 'id': 19 }, { 'id': 18 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 73 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 73 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 58 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 51 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 58 }, { 'id': 49 }, { 'id': 51 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 95,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 3 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 3 }, { 'id': 2 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 28 },
        'skill2': { 'id': 20 },
        'skill3': { 'id': 19 },
        'skill4': { 'id': 18 },
        'skills': [{ 'id': 28 }, { 'id': 20 }, { 'id': 19 }, { 'id': 18 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 73 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 73 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 58 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 51 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 58 }, { 'id': 49 }, { 'id': 51 }, { 'id': 50 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 2,
    'name': 'Sabre Tiger King',
    'primaryElement': 4,
    'secondaryElement': 2,
    'partySetups': [{
      'areaName': 'Sinbad Rainforest',
      'level': 93,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 5 }, { 'id': 2 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 26 },
        'skill3': { 'id': 21 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 25 }, { 'id': 26 }, { 'id': 21 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 54 },
        'skills': [{ 'id': 48 }, { 'id': 53 }, { 'id': 56 }, { 'id': 54 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 3,
    'name': 'Sabre Tiger King & Grey Tiger King',
    'primaryElement': 4,
    'secondaryElement': 2,
    'partySetups': [{
      'areaName': 'Sinbad Rainforest',
      'level': 98,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 5 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 4 }, { 'id': 2 }, { 'id': 5 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 26 },
        'skill3': { 'id': 21 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 25 }, { 'id': 26 }, { 'id': 21 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 54 },
        'skills': [{ 'id': 48 }, { 'id': 53 }, { 'id': 56 }, { 'id': 54 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Toto Plain',
      'level': 48,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 8 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 1 },
        'skill4': { 'id': 9 },
        'skills': [{ 'id': 8 }, { 'id': 4 }, { 'id': 1 }, { 'id': 9 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 19 },
        'skill2': { 'id': 18 },
        'skill3': { 'id': 21 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 19 }, { 'id': 18 }, { 'id': 21 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 71 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 70 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 71 }, { 'id': 66 }, { 'id': 70 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 52 },
        'skill2': { 'id': 48 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 55 },
        'skills': [{ 'id': 52 }, { 'id': 48 }, { 'id': 56 }, { 'id': 55 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Toto Plain',
      'level': 78,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 8 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 1 },
        'skill4': { 'id': 9 },
        'skills': [{ 'id': 8 }, { 'id': 4 }, { 'id': 1 }, { 'id': 9 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 19 },
        'skill2': { 'id': 18 },
        'skill3': { 'id': 21 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 19 }, { 'id': 18 }, { 'id': 21 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 71 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 70 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 71 }, { 'id': 66 }, { 'id': 70 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 52 },
        'skill2': { 'id': 48 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 55 },
        'skills': [{ 'id': 52 }, { 'id': 48 }, { 'id': 56 }, { 'id': 55 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 10,
    'name': 'Yak King',
    'primaryElement': 4,
    'secondaryElement': 3,
    'partySetups': [{
      'areaName': 'Horu Fjord',
      'level': 23,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 9 }, { 'id': 4 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 22 },
        'skill2': { 'id': 18 },
        'skill3': { 'id': 28 },
        'skill4': { 'id': 19 },
        'skills': [{ 'id': 22 }, { 'id': 18 }, { 'id': 28 }, { 'id': 19 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 77 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 77 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 59 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 53 }, { 'id': 59 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Horu Fjord',
      'level': 23,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 9 }, { 'id': 4 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 39 },
        'skill2': { 'id': 40 },
        'skill3': { 'id': 34 },
        'skill4': { 'id': 41 },
        'skills': [{ 'id': 39 }, { 'id': 40 }, { 'id': 34 }, { 'id': 41 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 77 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 77 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 59 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 53 }, { 'id': 59 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 7,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 9 }, { 'id': 4 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 22 },
        'skill2': { 'id': 18 },
        'skill3': { 'id': 28 },
        'skill4': { 'id': 19 },
        'skills': [{ 'id': 22 }, { 'id': 18 }, { 'id': 28 }, { 'id': 19 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 77 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 77 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 64 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 50 },
        'skill4': { 'id': 58 },
        'skills': [{ 'id': 64 }, { 'id': 53 }, { 'id': 50 }, { 'id': 58 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 31,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 9 }, { 'id': 4 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 22 },
        'skill2': { 'id': 18 },
        'skill3': { 'id': 28 },
        'skill4': { 'id': 19 },
        'skills': [{ 'id': 22 }, { 'id': 18 }, { 'id': 28 }, { 'id': 19 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 77 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 77 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 64 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 50 },
        'skill4': { 'id': 58 },
        'skills': [{ 'id': 64 }, { 'id': 53 }, { 'id': 50 }, { 'id': 58 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 77,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 4 }, { 'id': 9 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 18 },
        'skill2': { 'id': 22 },
        'skill3': { 'id': 27 },
        'skill4': { 'id': 21 },
        'skills': [{ 'id': 18 }, { 'id': 22 }, { 'id': 27 }, { 'id': 21 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 77 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 77 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 64 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 50 },
        'skill4': { 'id': 58 },
        'skills': [{ 'id': 64 }, { 'id': 53 }, { 'id': 50 }, { 'id': 58 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 101,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 9 }, { 'id': 4 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 18 },
        'skill2': { 'id': 22 },
        'skill3': { 'id': 27 },
        'skill4': { 'id': 21 },
        'skills': [{ 'id': 18 }, { 'id': 22 }, { 'id': 27 }, { 'id': 21 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 77 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 77 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 64 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 50 },
        'skill4': { 'id': 58 },
        'skills': [{ 'id': 64 }, { 'id': 53 }, { 'id': 50 }, { 'id': 58 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 11,
    'name': 'Mammoth',
    'primaryElement': 4,
    'secondaryElement': 3,
    'partySetups': [{
      'areaName': 'Horu Fjord',
      'level': 120,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 1 },
        'skill3': { 'id': 5 },
        'skill4': { 'id': 3 },
        'skills': [{ 'id': 9 }, { 'id': 1 }, { 'id': 5 }, { 'id': 3 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 26 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 25 }, { 'id': 26 }, { 'id': 22 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 76 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 75 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 76 }, { 'id': 66 }, { 'id': 75 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 51 },
        'skill2': { 'id': 54 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 48 },
        'skills': [{ 'id': 51 }, { 'id': 54 }, { 'id': 56 }, { 'id': 48 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tintin Ice Cave',
      'level': 1,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 1 },
        'skill3': { 'id': 5 },
        'skill4': { 'id': 3 },
        'skills': [{ 'id': 9 }, { 'id': 1 }, { 'id': 5 }, { 'id': 3 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 26 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 25 }, { 'id': 26 }, { 'id': 22 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 76 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 75 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 76 }, { 'id': 66 }, { 'id': 75 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 51 },
        'skill2': { 'id': 54 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 48 },
        'skills': [{ 'id': 51 }, { 'id': 54 }, { 'id': 56 }, { 'id': 48 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tintin Ice Cave',
      'level': 18,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 1 },
        'skill3': { 'id': 5 },
        'skill4': { 'id': 3 },
        'skills': [{ 'id': 9 }, { 'id': 1 }, { 'id': 5 }, { 'id': 3 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 26 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 25 }, { 'id': 26 }, { 'id': 22 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 76 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 75 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 76 }, { 'id': 66 }, { 'id': 75 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 51 },
        'skill2': { 'id': 54 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 48 },
        'skills': [{ 'id': 51 }, { 'id': 54 }, { 'id': 56 }, { 'id': 48 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tintin Ice Cave',
      'level': 57,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 1 },
        'skill3': { 'id': 5 },
        'skill4': { 'id': 3 },
        'skills': [{ 'id': 9 }, { 'id': 1 }, { 'id': 5 }, { 'id': 3 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 26 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 25 }, { 'id': 26 }, { 'id': 22 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 76 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 75 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 76 }, { 'id': 66 }, { 'id': 75 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 51 },
        'skill2': { 'id': 54 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 48 },
        'skills': [{ 'id': 51 }, { 'id': 54 }, { 'id': 56 }, { 'id': 48 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tintin Ice Cave',
      'level': 86,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 1 },
        'skill3': { 'id': 5 },
        'skill4': { 'id': 3 },
        'skills': [{ 'id': 9 }, { 'id': 1 }, { 'id': 5 }, { 'id': 3 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 26 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 25 }, { 'id': 26 }, { 'id': 22 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 76 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 75 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 76 }, { 'id': 66 }, { 'id': 75 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 51 },
        'skill2': { 'id': 54 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 48 },
        'skills': [{ 'id': 51 }, { 'id': 54 }, { 'id': 56 }, { 'id': 48 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 7,
    'name': 'Warg King',
    'primaryElement': 4,
    'secondaryElement': 0,
    'partySetups': [{
      'areaName': 'Toto Plain',
      'level': 41,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 5 }, { 'id': 2 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 19 },
        'skill2': { 'id': 18 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 21 },
        'skills': [{ 'id': 19 }, { 'id': 18 }, { 'id': 22 }, { 'id': 21 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 54 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 54 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Toto Plain',
      'level': 72,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 5 }, { 'id': 2 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 19 },
        'skill3': { 'id': 26 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 25 }, { 'id': 19 }, { 'id': 26 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 54 },
        'skills': [{ 'id': 48 }, { 'id': 53 }, { 'id': 56 }, { 'id': 54 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 6,
    'name': 'Unicorn Gorilla Chief',
    'primaryElement': 4,
    'secondaryElement': 2,
    'partySetups': [{
      'areaName': 'Sinbad Rainforest',
      'level': 75,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 1 },
        'skill2': { 'id': 6 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 4 },
        'skills': [{ 'id': 1 }, { 'id': 6 }, { 'id': 3 }, { 'id': 4 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 18 },
        'skill2': { 'id': 25 },
        'skill3': { 'id': 26 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 18 }, { 'id': 25 }, { 'id': 26 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 72 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 72 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 54 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 54 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Sinbad Rainforest',
      'level': 104,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 1 },
        'skill2': { 'id': 6 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 4 },
        'skills': [{ 'id': 1 }, { 'id': 6 }, { 'id': 3 }, { 'id': 4 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 18 },
        'skill2': { 'id': 25 },
        'skill3': { 'id': 26 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 18 }, { 'id': 25 }, { 'id': 26 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 26,
    'name': 'Bone Ankylosaurus',
    'primaryElement': 3,
    'secondaryElement': 4,
    'partySetups': [{
      'areaName': 'Bababo Coast',
      'level': 18,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 6 },
        'skill3': { 'id': 2 },
        'skill4': { 'id': 8 },
        'skills': [{ 'id': 4 }, { 'id': 6 }, { 'id': 2 }, { 'id': 8 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 33 },
        'skill2': { 'id': 34 },
        'skill3': { 'id': 35 },
        'skill4': { 'id': 36 },
        'skills': [{ 'id': 33 }, { 'id': 34 }, { 'id': 35 }, { 'id': 36 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 80 },
        'skill2': { 'id': 77 },
        'skill3': { 'id': 81 },
        'skill4': { 'id': 82 },
        'skills': [{ 'id': 80 }, { 'id': 77 }, { 'id': 81 }, { 'id': 82 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 47 },
        'skill2': { 'id': 55 },
        'skill3': { 'id': 52 },
        'skill4': { 'id': 60 },
        'skills': [{ 'id': 47 }, { 'id': 55 }, { 'id': 52 }, { 'id': 60 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Bababo Coast',
      'level': 18,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 6 },
        'skill3': { 'id': 2 },
        'skill4': { 'id': 8 },
        'skills': [{ 'id': 4 }, { 'id': 6 }, { 'id': 2 }, { 'id': 8 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 33 },
        'skill2': { 'id': 34 },
        'skill3': { 'id': 35 },
        'skill4': { 'id': 36 },
        'skills': [{ 'id': 33 }, { 'id': 34 }, { 'id': 35 }, { 'id': 36 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 80 },
        'skill2': { 'id': 77 },
        'skill3': { 'id': 71 },
        'skill4': { 'id': 70 },
        'skills': [{ 'id': 80 }, { 'id': 77 }, { 'id': 71 }, { 'id': 70 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 47 },
        'skill2': { 'id': 55 },
        'skill3': { 'id': 52 },
        'skill4': { 'id': 60 },
        'skills': [{ 'id': 47 }, { 'id': 55 }, { 'id': 52 }, { 'id': 60 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Cobo Coast',
      'level': 40,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 11 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 9 },
        'skill4': { 'id': 10 },
        'skills': [{ 'id': 11 }, { 'id': 4 }, { 'id': 9 }, { 'id': 10 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 35 },
        'skill2': { 'id': 38 },
        'skill3': { 'id': 33 },
        'skill4': { 'id': 37 },
        'skills': [{ 'id': 35 }, { 'id': 38 }, { 'id': 33 }, { 'id': 37 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 77 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 80 },
        'skills': [{ 'id': 66 }, { 'id': 77 }, { 'id': 68 }, { 'id': 80 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 52 },
        'skill2': { 'id': 59 },
        'skill3': { 'id': 55 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 52 }, { 'id': 59 }, { 'id': 55 }, { 'id': 50 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 14,
    'name': 'Cold Light Trasher',
    'primaryElement': 3,
    'secondaryElement': 4,
    'partySetups': [{
      'areaName': 'Horu Fjord',
      'level': 7,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 6 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 6 }, { 'id': 2 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 18 },
        'skill2': { 'id': 28 },
        'skill3': { 'id': 19 },
        'skill4': { 'id': 20 },
        'skills': [{ 'id': 18 }, { 'id': 28 }, { 'id': 19 }, { 'id': 20 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 75 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 75 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 56 },
        'skill2': { 'id': 51 },
        'skill3': { 'id': 53 },
        'skill4': { 'id': 48 },
        'skills': [{ 'id': 56 }, { 'id': 51 }, { 'id': 53 }, { 'id': 48 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Horu Fjord',
      'level': 97,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 6 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 6 }, { 'id': 2 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 34 },
        'skill2': { 'id': 38 },
        'skill3': { 'id': 40 },
        'skill4': { 'id': 41 },
        'skills': [{ 'id': 34 }, { 'id': 38 }, { 'id': 40 }, { 'id': 41 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 84 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 73 }, { 'id': 66 }, { 'id': 84 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 58 },
        'skill2': { 'id': 63 },
        'skill3': { 'id': 62 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 58 }, { 'id': 63 }, { 'id': 62 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 17,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 6 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 6 }, { 'id': 2 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 27 },
        'skill2': { 'id': 18 },
        'skill3': { 'id': 19 },
        'skill4': { 'id': 28 },
        'skills': [{ 'id': 27 }, { 'id': 18 }, { 'id': 19 }, { 'id': 28 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 75 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 75 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 56 },
        'skill2': { 'id': 51 },
        'skill3': { 'id': 53 },
        'skill4': { 'id': 48 },
        'skills': [{ 'id': 56 }, { 'id': 51 }, { 'id': 53 }, { 'id': 48 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 44,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 6 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 6 }, { 'id': 2 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 27 },
        'skill2': { 'id': 18 },
        'skill3': { 'id': 19 },
        'skill4': { 'id': 28 },
        'skills': [{ 'id': 27 }, { 'id': 18 }, { 'id': 19 }, { 'id': 28 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 75 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 75 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 56 },
        'skill2': { 'id': 51 },
        'skill3': { 'id': 53 },
        'skill4': { 'id': 48 },
        'skills': [{ 'id': 56 }, { 'id': 51 }, { 'id': 53 }, { 'id': 48 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 29,
    'name': 'Giant Shell Turtle',
    'primaryElement': 3,
    'secondaryElement': 4,
    'partySetups': [{
      'areaName': 'Bababo Coast',
      'level': 27,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 8 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 15 },
        'skill4': { 'id': 14 },
        'skills': [{ 'id': 8 }, { 'id': 2 }, { 'id': 15 }, { 'id': 14 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 33 },
        'skill2': { 'id': 34 },
        'skill3': { 'id': 35 },
        'skill4': { 'id': 36 },
        'skills': [{ 'id': 33 }, { 'id': 34 }, { 'id': 35 }, { 'id': 36 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 76 },
        'skill2': { 'id': 83 },
        'skill3': { 'id': 67 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 76 }, { 'id': 83 }, { 'id': 67 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 54 },
        'skill2': { 'id': 48 },
        'skill3': { 'id': 51 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 54 }, { 'id': 48 }, { 'id': 51 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Cobo Coast',
      'level': 7,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 8 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 5 },
        'skill4': { 'id': 3 },
        'skills': [{ 'id': 8 }, { 'id': 2 }, { 'id': 5 }, { 'id': 3 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 33 },
        'skill2': { 'id': 34 },
        'skill3': { 'id': 35 },
        'skill4': { 'id': 36 },
        'skills': [{ 'id': 33 }, { 'id': 34 }, { 'id': 35 }, { 'id': 36 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 76 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 69 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 76 }, { 'id': 66 }, { 'id': 69 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 49 },
        'skill2': { 'id': 56 },
        'skill3': { 'id': 51 },
        'skill4': { 'id': 53 },
        'skills': [{ 'id': 49 }, { 'id': 56 }, { 'id': 51 }, { 'id': 53 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 15,
    'name': 'Ice Liondragon',
    'primaryElement': 3,
    'secondaryElement': 4,
    'partySetups': [{
      'areaName': 'Horu Fjord',
      'level': 18,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 5 }, { 'id': 9 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 29 },
        'skill3': { 'id': 23 },
        'skill4': { 'id': 24 },
        'skills': [{ 'id': 25 }, { 'id': 29 }, { 'id': 23 }, { 'id': 24 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 73 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 73 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Horu Fjord',
      'level': 18,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 5 }, { 'id': 9 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 39 },
        'skill2': { 'id': 40 },
        'skill3': { 'id': 34 },
        'skill4': { 'id': 41 },
        'skills': [{ 'id': 39 }, { 'id': 40 }, { 'id': 34 }, { 'id': 41 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 73 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 73 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tintin Ice Cave',
      'level': 30,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 5 }, { 'id': 9 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 29 },
        'skill3': { 'id': 23 },
        'skill4': { 'id': 24 },
        'skills': [{ 'id': 25 }, { 'id': 29 }, { 'id': 23 }, { 'id': 24 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 69 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 73 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 69 }, { 'id': 66 }, { 'id': 73 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tintin Ice Cave',
      'level': 69,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 5 }, { 'id': 9 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 29 },
        'skill3': { 'id': 23 },
        'skill4': { 'id': 24 },
        'skills': [{ 'id': 25 }, { 'id': 29 }, { 'id': 23 }, { 'id': 24 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 69 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 73 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 69 }, { 'id': 66 }, { 'id': 73 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tintin Ice Cave',
      'level': 99,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 5 }, { 'id': 9 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 29 },
        'skill3': { 'id': 23 },
        'skill4': { 'id': 24 },
        'skills': [{ 'id': 25 }, { 'id': 29 }, { 'id': 23 }, { 'id': 24 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 69 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 73 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 69 }, { 'id': 66 }, { 'id': 73 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 120,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 5 }, { 'id': 9 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 29 },
        'skill3': { 'id': 23 },
        'skill4': { 'id': 24 },
        'skills': [{ 'id': 25 }, { 'id': 29 }, { 'id': 23 }, { 'id': 24 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 69 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 73 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 69 }, { 'id': 66 }, { 'id': 73 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 1,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 5 }, { 'id': 9 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 29 },
        'skill3': { 'id': 23 },
        'skill4': { 'id': 24 },
        'skills': [{ 'id': 25 }, { 'id': 29 }, { 'id': 23 }, { 'id': 24 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 69 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 73 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 69 }, { 'id': 66 }, { 'id': 73 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 45,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 5 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 5 }, { 'id': 9 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 31 },
        'skill3': { 'id': 23 },
        'skill4': { 'id': 24 },
        'skills': [{ 'id': 25 }, { 'id': 31 }, { 'id': 23 }, { 'id': 24 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 74 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 73 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 74 }, { 'id': 66 }, { 'id': 73 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Puke Glacier',
      'level': 71,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 5 },
        'skills': [{ 'id': 9 }, { 'id': 4 }, { 'id': 3 }, { 'id': 5 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 24 },
        'skill3': { 'id': 31 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 25 }, { 'id': 24 }, { 'id': 31 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 75 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 73 }, { 'id': 66 }, { 'id': 75 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 49 },
        'skill2': { 'id': 56 },
        'skill3': { 'id': 54 },
        'skill4': { 'id': 48 },
        'skills': [{ 'id': 49 }, { 'id': 56 }, { 'id': 54 }, { 'id': 48 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 22,
    'name': 'Moon Wind Dragon',
    'primaryElement': 3,
    'secondaryElement': 1,
    'partySetups': [{
      'areaName': 'Puke Glacier',
      'level': 120,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 5 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 9 }, { 'id': 5 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 29 },
        'skill2': { 'id': 23 },
        'skill3': { 'id': 20 },
        'skill4': { 'id': 24 },
        'skills': [{ 'id': 29 }, { 'id': 23 }, { 'id': 20 }, { 'id': 24 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 67 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 73 }, { 'id': 66 }, { 'id': 67 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Warry Woodland',
      'level': 1,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 5 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 9 }, { 'id': 5 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 29 },
        'skill2': { 'id': 23 },
        'skill3': { 'id': 20 },
        'skill4': { 'id': 24 },
        'skills': [{ 'id': 29 }, { 'id': 23 }, { 'id': 20 }, { 'id': 24 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 67 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 73 }, { 'id': 66 }, { 'id': 67 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Warry Woodland',
      'level': 34,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 5 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 9 }, { 'id': 5 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 29 },
        'skill2': { 'id': 23 },
        'skill3': { 'id': 20 },
        'skill4': { 'id': 24 },
        'skills': [{ 'id': 29 }, { 'id': 23 }, { 'id': 20 }, { 'id': 24 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 67 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 73 }, { 'id': 66 }, { 'id': 67 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Warry Woodland',
      'level': 68,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 5 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 9 }, { 'id': 5 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 29 },
        'skill2': { 'id': 23 },
        'skill3': { 'id': 20 },
        'skill4': { 'id': 24 },
        'skills': [{ 'id': 29 }, { 'id': 23 }, { 'id': 20 }, { 'id': 24 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 67 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 73 }, { 'id': 66 }, { 'id': 67 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Warry Woodland',
      'level': 103,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 5 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 9 }, { 'id': 5 }, { 'id': 3 }, { 'id': 1 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 29 },
        'skill2': { 'id': 23 },
        'skill3': { 'id': 20 },
        'skill4': { 'id': 24 },
        'skills': [{ 'id': 29 }, { 'id': 23 }, { 'id': 20 }, { 'id': 24 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 67 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 73 }, { 'id': 66 }, { 'id': 67 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 57 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 57 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 21,
    'name': 'Polar Bear Chief',
    'primaryElement': 3,
    'secondaryElement': 4,
    'partySetups': [{
      'areaName': 'Tovana Snowland',
      'level': 23,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 12 },
        'skills': [{ 'id': 9 }, { 'id': 4 }, { 'id': 3 }, { 'id': 12 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 27 },
        'skill3': { 'id': 26 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 25 }, { 'id': 27 }, { 'id': 26 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 13,
    'name': 'Walrus Chieftain',
    'primaryElement': 3,
    'secondaryElement': 4,
    'partySetups': [{
      'areaName': 'Toto Plain',
      'level': 120,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 1 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 5 },
        'skill4': { 'id': 2 },
        'skills': [{ 'id': 1 }, { 'id': 4 }, { 'id': 5 }, { 'id': 2 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 33 },
        'skill2': { 'id': 34 },
        'skill3': { 'id': 35 },
        'skill4': { 'id': 37 },
        'skills': [{ 'id': 33 }, { 'id': 34 }, { 'id': 35 }, { 'id': 37 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 76 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 76 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 49 },
        'skill2': { 'id': 51 },
        'skill3': { 'id': 53 },
        'skill4': { 'id': 56 },
        'skills': [{ 'id': 49 }, { 'id': 51 }, { 'id': 53 }, { 'id': 56 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 20,
    'name': 'White Unicorn Gorilla Chief',
    'primaryElement': 3,
    'secondaryElement': 4,
    'partySetups': [{
      'areaName': 'Horu Fjord',
      'level': 1,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 6 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 1 },
        'skill4': { 'id': 4 },
        'skills': [{ 'id': 6 }, { 'id': 2 }, { 'id': 1 }, { 'id': 4 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 22 },
        'skill2': { 'id': 27 },
        'skill3': { 'id': 23 },
        'skill4': { 'id': 20 },
        'skills': [{ 'id': 22 }, { 'id': 27 }, { 'id': 23 }, { 'id': 20 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 54 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 54 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Horu Fjord',
      'level': 83,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 3 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 1 },
        'skill4': { 'id': 4 },
        'skills': [{ 'id': 3 }, { 'id': 2 }, { 'id': 1 }, { 'id': 4 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 39 },
        'skill2': { 'id': 40 },
        'skill3': { 'id': 34 },
        'skill4': { 'id': 38 },
        'skills': [{ 'id': 39 }, { 'id': 40 }, { 'id': 34 }, { 'id': 38 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 75 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 67 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 75 }, { 'id': 66 }, { 'id': 67 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 53 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 53 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 6,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 11 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 1 },
        'skill4': { 'id': 4 },
        'skills': [{ 'id': 11 }, { 'id': 2 }, { 'id': 1 }, { 'id': 4 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 21 },
        'skill2': { 'id': 27 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 20 },
        'skills': [{ 'id': 21 }, { 'id': 27 }, { 'id': 22 }, { 'id': 20 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 75 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 67 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 75 }, { 'id': 66 }, { 'id': 67 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 53 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 53 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 33,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 11 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 1 },
        'skill4': { 'id': 4 },
        'skills': [{ 'id': 11 }, { 'id': 2 }, { 'id': 1 }, { 'id': 4 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 21 },
        'skill2': { 'id': 27 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 20 },
        'skills': [{ 'id': 21 }, { 'id': 27 }, { 'id': 22 }, { 'id': 20 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 75 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 67 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 75 }, { 'id': 66 }, { 'id': 67 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 53 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 53 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 61,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 11 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 1 },
        'skill4': { 'id': 4 },
        'skills': [{ 'id': 11 }, { 'id': 2 }, { 'id': 1 }, { 'id': 4 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 21 },
        'skill2': { 'id': 27 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 20 },
        'skills': [{ 'id': 21 }, { 'id': 27 }, { 'id': 22 }, { 'id': 20 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 75 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 67 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 75 }, { 'id': 66 }, { 'id': 67 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 53 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 53 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 87,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 11 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 1 },
        'skill4': { 'id': 4 },
        'skills': [{ 'id': 11 }, { 'id': 2 }, { 'id': 1 }, { 'id': 4 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 21 },
        'skill2': { 'id': 27 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 20 },
        'skills': [{ 'id': 21 }, { 'id': 27 }, { 'id': 22 }, { 'id': 20 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 75 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 67 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 75 }, { 'id': 66 }, { 'id': 67 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 53 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 53 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 114,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 11 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 1 },
        'skill4': { 'id': 4 },
        'skills': [{ 'id': 11 }, { 'id': 2 }, { 'id': 1 }, { 'id': 4 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 21 },
        'skill2': { 'id': 27 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 20 },
        'skills': [{ 'id': 21 }, { 'id': 27 }, { 'id': 22 }, { 'id': 20 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 75 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 67 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 75 }, { 'id': 66 }, { 'id': 67 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 53 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 53 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 115,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 3 },
        'skill2': { 'id': 1 },
        'skill3': { 'id': 9 },
        'skill4': { 'id': 6 },
        'skills': [{ 'id': 3 }, { 'id': 1 }, { 'id': 9 }, { 'id': 6 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 22 },
        'skill3': { 'id': 20 },
        'skill4': { 'id': 24 },
        'skills': [{ 'id': 25 }, { 'id': 22 }, { 'id': 20 }, { 'id': 24 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 62 },
        'skill2': { 'id': 53 },
        'skill3': { 'id': 63 },
        'skill4': { 'id': 58 },
        'skills': [{ 'id': 62 }, { 'id': 53 }, { 'id': 63 }, { 'id': 58 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 16,
    'name': 'White Wolf King',
    'primaryElement': 3,
    'secondaryElement': 4,
    'partySetups': [{
      'areaName': 'Tintin Ice Cave',
      'level': 37,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 3 },
        'skill3': { 'id': 8 },
        'skill4': { 'id': 6 },
        'skills': [{ 'id': 4 }, { 'id': 3 }, { 'id': 8 }, { 'id': 6 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 19 },
        'skill2': { 'id': 18 },
        'skill3': { 'id': 30 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 19 }, { 'id': 18 }, { 'id': 30 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 71 },
        'skill2': { 'id': 70 },
        'skill3': { 'id': 78 },
        'skill4': { 'id': 79 },
        'skills': [{ 'id': 71 }, { 'id': 70 }, { 'id': 78 }, { 'id': 79 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 55 },
        'skill2': { 'id': 60 },
        'skill3': { 'id': 52 },
        'skill4': { 'id': 61 },
        'skills': [{ 'id': 55 }, { 'id': 60 }, { 'id': 52 }, { 'id': 61 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tintin Ice Cave',
      'level': 63,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 8 },
        'skill4': { 'id': 6 },
        'skills': [{ 'id': 4 }, { 'id': 9 }, { 'id': 8 }, { 'id': 6 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 19 },
        'skill2': { 'id': 18 },
        'skill3': { 'id': 30 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 19 }, { 'id': 18 }, { 'id': 30 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 71 },
        'skill2': { 'id': 70 },
        'skill3': { 'id': 78 },
        'skill4': { 'id': 79 },
        'skills': [{ 'id': 71 }, { 'id': 70 }, { 'id': 78 }, { 'id': 79 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 55 },
        'skill2': { 'id': 60 },
        'skill3': { 'id': 52 },
        'skill4': { 'id': 61 },
        'skills': [{ 'id': 55 }, { 'id': 60 }, { 'id': 52 }, { 'id': 61 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tintin Ice Cave',
      'level': 92,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 8 },
        'skill4': { 'id': 6 },
        'skills': [{ 'id': 4 }, { 'id': 9 }, { 'id': 8 }, { 'id': 6 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 19 },
        'skill2': { 'id': 18 },
        'skill3': { 'id': 30 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 19 }, { 'id': 18 }, { 'id': 30 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 71 },
        'skill2': { 'id': 70 },
        'skill3': { 'id': 78 },
        'skill4': { 'id': 79 },
        'skills': [{ 'id': 71 }, { 'id': 70 }, { 'id': 78 }, { 'id': 79 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 55 },
        'skill2': { 'id': 60 },
        'skill3': { 'id': 52 },
        'skill4': { 'id': 61 },
        'skills': [{ 'id': 55 }, { 'id': 60 }, { 'id': 52 }, { 'id': 61 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 12,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 8 },
        'skill4': { 'id': 6 },
        'skills': [{ 'id': 4 }, { 'id': 9 }, { 'id': 8 }, { 'id': 6 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 19 },
        'skill2': { 'id': 18 },
        'skill3': { 'id': 30 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 19 }, { 'id': 18 }, { 'id': 30 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 71 },
        'skill2': { 'id': 70 },
        'skill3': { 'id': 78 },
        'skill4': { 'id': 79 },
        'skills': [{ 'id': 71 }, { 'id': 70 }, { 'id': 78 }, { 'id': 79 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 55 },
        'skill2': { 'id': 60 },
        'skill3': { 'id': 52 },
        'skill4': { 'id': 61 },
        'skills': [{ 'id': 55 }, { 'id': 60 }, { 'id': 52 }, { 'id': 61 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 38,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 8 },
        'skill4': { 'id': 6 },
        'skills': [{ 'id': 4 }, { 'id': 9 }, { 'id': 8 }, { 'id': 6 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 19 },
        'skill2': { 'id': 18 },
        'skill3': { 'id': 30 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 19 }, { 'id': 18 }, { 'id': 30 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 71 },
        'skill2': { 'id': 70 },
        'skill3': { 'id': 78 },
        'skill4': { 'id': 79 },
        'skills': [{ 'id': 71 }, { 'id': 70 }, { 'id': 78 }, { 'id': 79 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 55 },
        'skill2': { 'id': 60 },
        'skill3': { 'id': 52 },
        'skill4': { 'id': 61 },
        'skills': [{ 'id': 55 }, { 'id': 60 }, { 'id': 52 }, { 'id': 61 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 67,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 8 },
        'skill4': { 'id': 6 },
        'skills': [{ 'id': 4 }, { 'id': 9 }, { 'id': 8 }, { 'id': 6 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 18 },
        'skill2': { 'id': 19 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 30 },
        'skills': [{ 'id': 18 }, { 'id': 19 }, { 'id': 22 }, { 'id': 30 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 70 },
        'skill2': { 'id': 78 },
        'skill3': { 'id': 79 },
        'skill4': { 'id': 71 },
        'skills': [{ 'id': 70 }, { 'id': 78 }, { 'id': 79 }, { 'id': 71 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 55 },
        'skill2': { 'id': 61 },
        'skill3': { 'id': 52 },
        'skill4': { 'id': 60 },
        'skills': [{ 'id': 55 }, { 'id': 61 }, { 'id': 52 }, { 'id': 60 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 94,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 8 },
        'skill4': { 'id': 6 },
        'skills': [{ 'id': 4 }, { 'id': 9 }, { 'id': 8 }, { 'id': 6 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 18 },
        'skill2': { 'id': 19 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 30 },
        'skills': [{ 'id': 18 }, { 'id': 19 }, { 'id': 22 }, { 'id': 30 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 70 },
        'skill2': { 'id': 78 },
        'skill3': { 'id': 79 },
        'skill4': { 'id': 71 },
        'skills': [{ 'id': 70 }, { 'id': 78 }, { 'id': 79 }, { 'id': 71 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 55 },
        'skill2': { 'id': 61 },
        'skill3': { 'id': 52 },
        'skill4': { 'id': 60 },
        'skills': [{ 'id': 55 }, { 'id': 61 }, { 'id': 52 }, { 'id': 60 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Warry Woodland',
      'level': 7,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 9 },
        'skill3': { 'id': 8 },
        'skill4': { 'id': 6 },
        'skills': [{ 'id': 4 }, { 'id': 9 }, { 'id': 8 }, { 'id': 6 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 18 },
        'skill2': { 'id': 19 },
        'skill3': { 'id': 22 },
        'skill4': { 'id': 20 },
        'skills': [{ 'id': 18 }, { 'id': 19 }, { 'id': 22 }, { 'id': 20 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 70 },
        'skill2': { 'id': 78 },
        'skill3': { 'id': 79 },
        'skill4': { 'id': 71 },
        'skills': [{ 'id': 70 }, { 'id': 78 }, { 'id': 79 }, { 'id': 71 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 55 },
        'skill2': { 'id': 61 },
        'skill3': { 'id': 52 },
        'skill4': { 'id': 60 },
        'skills': [{ 'id': 55 }, { 'id': 61 }, { 'id': 52 }, { 'id': 60 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 17,
    'name': 'White Yak King',
    'primaryElement': 3,
    'secondaryElement': 4,
    'partySetups': [{
      'areaName': 'Tintin Ice Cave',
      'level': 120,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 8 },
        'skills': [{ 'id': 9 }, { 'id': 4 }, { 'id': 3 }, { 'id': 8 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 18 },
        'skill3': { 'id': 30 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 25 }, { 'id': 18 }, { 'id': 30 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 77 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 77 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 1,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 8 },
        'skills': [{ 'id': 9 }, { 'id': 4 }, { 'id': 3 }, { 'id': 8 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 19 },
        'skill3': { 'id': 26 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 25 }, { 'id': 19 }, { 'id': 26 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 77 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 77 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 28,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 8 },
        'skills': [{ 'id': 9 }, { 'id': 4 }, { 'id': 3 }, { 'id': 8 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 19 },
        'skill3': { 'id': 26 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 25 }, { 'id': 19 }, { 'id': 26 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 77 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 77 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 55,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 8 },
        'skills': [{ 'id': 9 }, { 'id': 4 }, { 'id': 3 }, { 'id': 8 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 19 },
        'skill3': { 'id': 26 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 25 }, { 'id': 19 }, { 'id': 26 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 77 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 77 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 81,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 8 },
        'skills': [{ 'id': 9 }, { 'id': 4 }, { 'id': 3 }, { 'id': 8 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 19 },
        'skill3': { 'id': 26 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 25 }, { 'id': 19 }, { 'id': 26 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 77 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 77 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tovana Snowland',
      'level': 108,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 9 },
        'skill2': { 'id': 4 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 8 },
        'skills': [{ 'id': 9 }, { 'id': 4 }, { 'id': 3 }, { 'id': 8 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 19 },
        'skill3': { 'id': 26 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 25 }, { 'id': 19 }, { 'id': 26 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 77 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 77 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 23,
    'name': 'Blade Rhino Chieftain',
    'primaryElement': 2,
    'secondaryElement': 1,
    'partySetups': [{
      'areaName': 'Thousand Needles',
      'level': 65,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 13 },
        'skill2': { 'id': 12 },
        'skill3': { 'id': 16 },
        'skill4': { 'id': 9 },
        'skills': [{ 'id': 13 }, { 'id': 12 }, { 'id': 16 }, { 'id': 9 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 27 },
        'skill3': { 'id': 20 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 25 }, { 'id': 27 }, { 'id': 20 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 77 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 73 }, { 'id': 66 }, { 'id': 77 }, { 'id': 68 }],
        'skillNames': []
      },
      'warlock': {
        'classType': 5,
        'skill1': { 'id': 45 },
        'skill2': { 'id': 44 },
        'skill3': { 'id': 43 },
        'skill4': { 'id': 42 },
        'skills': [{ 'id': 45 }, { 'id': 44 }, { 'id': 43 }, { 'id': 42 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 19,
    'name': 'Typhoon Dragon',
    'primaryElement': 2,
    'secondaryElement': 1,
    'partySetups': [{
      'areaName': 'Tintin Ice Cave',
      'level': 12,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 5 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 7 },
        'skills': [{ 'id': 4 }, { 'id': 5 }, { 'id': 3 }, { 'id': 7 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 29 },
        'skill3': { 'id': 20 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 25 }, { 'id': 29 }, { 'id': 20 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 67 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 73 }, { 'id': 66 }, { 'id': 67 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tintin Ice Cave',
      'level': 45,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 8 },
        'skill2': { 'id': 5 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 9 },
        'skills': [{ 'id': 8 }, { 'id': 5 }, { 'id': 3 }, { 'id': 9 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 35 },
        'skill2': { 'id': 37 },
        'skill3': { 'id': 40 },
        'skill4': { 'id': 34 },
        'skills': [{ 'id': 35 }, { 'id': 37 }, { 'id': 40 }, { 'id': 34 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 69 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 67 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 69 }, { 'id': 66 }, { 'id': 67 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 58 },
        'skill2': { 'id': 63 },
        'skill3': { 'id': 62 },
        'skill4': { 'id': 65 },
        'skills': [{ 'id': 58 }, { 'id': 63 }, { 'id': 62 }, { 'id': 65 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Tintin Ice Cave',
      'level': 106,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 4 },
        'skill2': { 'id': 5 },
        'skill3': { 'id': 3 },
        'skill4': { 'id': 7 },
        'skills': [{ 'id': 4 }, { 'id': 5 }, { 'id': 3 }, { 'id': 7 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 29 },
        'skill3': { 'id': 20 },
        'skill4': { 'id': 23 },
        'skills': [{ 'id': 25 }, { 'id': 29 }, { 'id': 20 }, { 'id': 23 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 73 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 67 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 73 }, { 'id': 66 }, { 'id': 67 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 18,
    'name': 'Thunder Dragon',
    'primaryElement': 2,
    'secondaryElement': 4,
    'partySetups': [{
      'areaName': 'Sinbad Rainforest',
      'level': 80,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 2 },
        'skill2': { 'id': 1 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 7 },
        'skills': [{ 'id': 2 }, { 'id': 1 }, { 'id': 4 }, { 'id': 7 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 26 },
        'skill3': { 'id': 23 },
        'skill4': { 'id': 22 },
        'skills': [{ 'id': 25 }, { 'id': 26 }, { 'id': 23 }, { 'id': 22 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 69 },
        'skill2': { 'id': 66 },
        'skill3': { 'id': 73 },
        'skill4': { 'id': 68 },
        'skills': [{ 'id': 69 }, { 'id': 66 }, { 'id': 73 }, { 'id': 68 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 54 },
        'skill2': { 'id': 56 },
        'skill3': { 'id': 53 },
        'skill4': { 'id': 48 },
        'skills': [{ 'id': 54 }, { 'id': 56 }, { 'id': 53 }, { 'id': 48 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 28,
    'name': 'Thunder Ceratops',
    'primaryElement': 2,
    'secondaryElement': 1,
    'partySetups': [{
      'areaName': 'Bababo Coast',
      'level': 22,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 2 },
        'skill2': { 'id': 17 },
        'skill3': { 'id': 9 },
        'skill4': { 'id': 8 },
        'skills': [{ 'id': 2 }, { 'id': 17 }, { 'id': 9 }, { 'id': 8 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 29 },
        'skill3': { 'id': 26 },
        'skill4': { 'id': 24 },
        'skills': [{ 'id': 25 }, { 'id': 29 }, { 'id': 26 }, { 'id': 24 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 76 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 69 },
        'skill4': { 'id': 73 },
        'skills': [{ 'id': 76 }, { 'id': 67 }, { 'id': 69 }, { 'id': 73 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Cobo Coast',
      'level': 26,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 3 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 4 },
        'skill4': { 'id': 1 },
        'skills': [{ 'id': 3 }, { 'id': 2 }, { 'id': 4 }, { 'id': 1 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 34 },
        'skill2': { 'id': 35 },
        'skill3': { 'id': 37 },
        'skill4': { 'id': 33 },
        'skills': [{ 'id': 34 }, { 'id': 35 }, { 'id': 37 }, { 'id': 33 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 67 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 67 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }]
  }, {
    'id': 30,
    'name': 'Thunder Stegosaurus',
    'primaryElement': 2,
    'secondaryElement': 1,
    'partySetups': [{
      'areaName': 'Bababo Coast',
      'level': 45,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 8 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 5 },
        'skill4': { 'id': 4 },
        'skills': [{ 'id': 8 }, { 'id': 2 }, { 'id': 5 }, { 'id': 4 }],
        'skillNames': []
      },
      'druid': {
        'classType': 2,
        'skill1': { 'id': 25 },
        'skill2': { 'id': 32 },
        'skill3': { 'id': 29 },
        'skill4': { 'id': 24 },
        'skills': [{ 'id': 25 }, { 'id': 32 }, { 'id': 29 }, { 'id': 24 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 69 },
        'skill2': { 'id': 74 },
        'skill3': { 'id': 82 },
        'skill4': { 'id': 67 },
        'skills': [{ 'id': 69 }, { 'id': 74 }, { 'id': 82 }, { 'id': 67 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }, {
      'areaName': 'Cobo Coast',
      'level': 20,
      'gladiator': {
        'classType': 1,
        'skill1': { 'id': 8 },
        'skill2': { 'id': 2 },
        'skill3': { 'id': 5 },
        'skill4': { 'id': 4 },
        'skills': [{ 'id': 8 }, { 'id': 2 }, { 'id': 5 }, { 'id': 4 }],
        'skillNames': []
      },
      'shaman': {
        'classType': 4,
        'skill1': { 'id': 34 },
        'skill2': { 'id': 33 },
        'skill3': { 'id': 35 },
        'skill4': { 'id': 37 },
        'skills': [{ 'id': 34 }, { 'id': 33 }, { 'id': 35 }, { 'id': 37 }],
        'skillNames': []
      },
      'assassin': {
        'classType': 7,
        'skill1': { 'id': 66 },
        'skill2': { 'id': 77 },
        'skill3': { 'id': 68 },
        'skill4': { 'id': 69 },
        'skills': [{ 'id': 66 }, { 'id': 77 }, { 'id': 68 }, { 'id': 69 }],
        'skillNames': []
      },
      'hunter': {
        'classType': 6,
        'skill1': { 'id': 48 },
        'skill2': { 'id': 49 },
        'skill3': { 'id': 56 },
        'skill4': { 'id': 50 },
        'skills': [{ 'id': 48 }, { 'id': 49 }, { 'id': 56 }, { 'id': 50 }],
        'skillNames': []
      }
    }]
  }]
;
