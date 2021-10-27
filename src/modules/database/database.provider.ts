import { Zone } from '../../zones/entities/zone.entity';
import { Continent } from '../../zones/entities/continent.entity';
import { Boss } from '../../bosses/entities/boss.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Job } from '../../jobs/entities/job.entity';
import { Skill } from '../../jobs/entities/skill.entity';
import { PartySetup } from '../../bosses/entities/party-setup.entity';
import { Stage } from '../../zones/entities/stage.entity';

export function databaseConfig(): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [Zone, Continent, Stage, Boss, Job, Skill, PartySetup],
    // entities: [__dirname ,'..' , '**', '*.entity.ts'],
    synchronize: true,
  };
};

export const databaseProviders = [
  // {
  //   provide: 'DATABASE_CONNECTION',
  //   useFactory: async () =>
  //     await createConnection(databaseConfig as MysqlConnectionOptions),
  // },
];
