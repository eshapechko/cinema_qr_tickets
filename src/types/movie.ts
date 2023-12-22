import {Actors} from './actors';
import {Country} from './countries';

export interface IMovieCard {
  id: number;
  img: string;
  title: string;
  genre: string;
}

export interface Movie extends IMovieCard {
  description: string;
  times: string[];
  duration: number;
  country: Country;
  year: number;
  actors: Actors[];
  premier: string;
}
