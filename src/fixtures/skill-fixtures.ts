import { ClassType } from '../enums/ClassType';



export class SkillFixtures {
  static findAll() {
    return new Promise((resolve, reject) => {
      resolve([

      ]);
    });
  }

  static findAllByClass(classType: ClassType): Array<any> {
    switch (classType) {
      default:
        return [];
    }

    return [];
  }
}
