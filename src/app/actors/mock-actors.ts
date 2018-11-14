import { Actor } from './actor';
import { BAYWATCH_MOVIE } from './mock-movies';
import { SANANDREAS_MOVIE } from './mock-movies';
import { SKYSCRAPER_MOVIE } from './mock-movies';
import { TOPGUN_MOVIE } from './mock-movies';
import { MISSIONIMPOSSIBLE_MOVIE } from './mock-movies';
import { THEMUMMY_MOVIE } from './mock-movies';
import { THEMARTIAN_MOVIE } from './mock-movies';
import { JASONBOURNE_MOVIE } from './mock-movies';
import { DOWNSIZING_MOVIE } from './mock-movies';

export const DWAYNE_JOHNSON: Actor = {
  name: 'Dwayne Johnson',
  actorimg: 'h',
  movies: [BAYWATCH_MOVIE, SANANDREAS_MOVIE, SKYSCRAPER_MOVIE]
};

const TOM_CRUISE: Actor = {
  name: 'Tom Cruise',
  actorimg: 'h',
  movies: [TOPGUN_MOVIE, MISSIONIMPOSSIBLE_MOVIE, THEMUMMY_MOVIE]
};

const MATT_DAMON: Actor = {
  name: 'Matt Damon',
  actorimg: 'h',
  movies: [THEMARTIAN_MOVIE, JASONBOURNE_MOVIE, DOWNSIZING_MOVIE]
};

export const ACTORS: Actor[] = [
  DWAYNE_JOHNSON,
  TOM_CRUISE,
  MATT_DAMON
];
