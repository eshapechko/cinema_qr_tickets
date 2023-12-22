import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IMovieCard} from '../../types/movie';

export interface MoviesState {
  data: IMovieCard[];
}

const initialState: MoviesState = {
  data: [
    {
      id: 1,
      img: 'https://webgate.24guru.by/uploads/events/thumbs/240x340/82ZN4s1xP.jpg',
      title: 'Вонок',
      genre: 'Комедия',
    },
    {
      id: 2,
      img: 'https://webgate.24guru.by/uploads/events/thumbs/240x340/82ZN4s1xP.jpg',
      title: 'Вонок 1',
      genre: 'Комедия',
    },
    {
      id: 3,
      img: 'https://webgate.24guru.by/uploads/events/thumbs/240x340/82ZN4s1xP.jpg',
      title: 'Вонок 2',
      genre: 'Комедия',
    },
  ],
};

export const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {
    setMovieTitle: (
      state,
      action: PayloadAction<{id: number; title: string}>,
    ) => {
      const {id, title} = action.payload;
      state.data = state.data.map((movie) => {
        if (movie.id === id) {
          movie.title = title;
          return movie;
        }
        return movie;
      });
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const {setMovieTitle} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
