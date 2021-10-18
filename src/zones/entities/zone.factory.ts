import { IZoneFixture } from '../../fixtures/zone-fixtures';
import { Zone } from './zone.entity';
import slugify from 'slugify';
import { Continent } from '../../continents/entities/continent.entity';

export class ZoneFactory {
  static createFromObject(object: IZoneFixture, continent: Continent): Zone {
    const zone = new Zone();
    zone.name = object.name;
    zone.continent = continent;
    zone.position = object.position;
    zone.slug = slugify(String(object.name)).toLowerCase();

    return zone;
  }
}
