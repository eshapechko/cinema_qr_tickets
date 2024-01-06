import {Movie, MovieWithSessions} from '../types/movie';
import {rtkApi} from './rtkApi';

export const moviesApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMovies: builder.query<Movie[], void>({
      query: () => 'movies',
    }),
    getMovieById: builder.query<MovieWithSessions, string>({
      query: (id) => `movies/${id}?_embed=sessions`,
    }),
  }),
  overrideExisting: false,
});

export const {useGetAllMoviesQuery, useGetMovieByIdQuery} = moviesApi;
