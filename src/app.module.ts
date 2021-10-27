import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BossesModule } from './bosses/bosses.module';
import { ZonesModule } from './zones/zones.module';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { databaseConfig } from './modules/database/database.provider';
import { JobsModule } from './jobs/jobs.module';

const ENV = process.env.NODE_ENV || 'prod';

const envFilePath = path.resolve(process.cwd(), `.env.${ENV}`);
const envDefaultFilePath = path.resolve(process.cwd(), `.env`);

if (fs.existsSync(envFilePath)) {
  dotenv.config({ path: envFilePath });
} else {
  dotenv.config({ path: envDefaultFilePath });
}

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig()),
    // DatabaseModule,
    BossesModule,
    ZonesModule,
    JobsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
