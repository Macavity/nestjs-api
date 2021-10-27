import { IZoneFixture } from '../../fixtures/zone-fixtures';
import { Zone } from '../entities/zone.entity';
import slugify from 'slugify';
import { Continent } from '../entities/continent.entity';

export class ZoneFactory {
  static createFromObject(object: IZoneFixture, continent: Continent): Zone {
    const zone = new Zone();
    zone.name = object.name;
    zone.continent = continent;
    zone.position = object.position;
    zone.slug = slugify(String(object.name)).toLowerCase();
    zone.stages = [];

    return zone;
  }

  static createReference(zoneId: number) {
    const zone = new Zone();
    zone.id = zoneId;

    return zone;
  }
}
