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
  id: 1,
  name: 'Dwayne Johnson',
  actorimg: 'assets/images/dwaynejohnson.jpg',
  movies: [BAYWATCH_MOVIE, SANANDREAS_MOVIE, SKYSCRAPER_MOVIE]
};

const TOM_CRUISE: Actor = {
  id: 2,
  name: 'Tom Cruise',
  actorimg: 'assets/images/tomcruise.jpg',
  movies: [TOPGUN_MOVIE, MISSIONIMPOSSIBLE_MOVIE, THEMUMMY_MOVIE]
};

const MATT_DAMON: Actor = {
  id: 3,
  name: 'Matt Damon',
  actorimg: 'assets/images/mattdamon.jpg',
  movies: [THEMARTIAN_MOVIE, JASONBOURNE_MOVIE, DOWNSIZING_MOVIE]
};




export const ALL_ACTORS: Actor[] = [
  DWAYNE_JOHNSON,
  TOM_CRUISE,
  MATT_DAMON
];
