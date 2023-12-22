import {configureStore} from '@reduxjs/toolkit';
import {moviesReducer} from './movieSlice/movieSlice';
import {pokemonApi} from '../api/rtkApi';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
