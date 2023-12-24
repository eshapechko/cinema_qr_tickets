import {Movie} from '../types/movie';
import {rtkApi} from './rtkApi';

export const moviesApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMovies: builder.query<Movie[], void>({
      query: () => 'movies',
    }),
    getMovieById: builder.query<Movie, string>({
      query: (id) => `movies/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const {useGetAllMoviesQuery, useGetMovieByIdQuery} = moviesApi;
