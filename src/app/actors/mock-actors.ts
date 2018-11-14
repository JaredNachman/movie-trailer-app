import { Actor } from './actor';
import { AVENGERS_MOVIE } from './mock-movies';

export const DWAYNE_JOHNSON: Actor = {
  name: 'Dwayne Johnson',
  actorimg: 'h',
  movies: [AVENGERS_MOVIE]
};

const TOM_CRUISE: Actor = {
  name: 'Tom Cruise',
  movies: [AVENGERS_MOVIE]
};

const SPIDER_MAN: Actor = {
  name: 'Tom Holland',
  movies: [AVENGERS_MOVIE]
};

export const AVENGERS_ACTORS: Actor[] = [
  IRON_MAN,
  CAPTAIN_AMERICA,
  SPIDER_MAN
];
