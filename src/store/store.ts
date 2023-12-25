import {configureStore} from '@reduxjs/toolkit';
import {moviesReducer} from './movieSlice/movieSlice';
import {orderReducer} from './orderSlice/orderSlice';
import {rtkApi} from '../api/rtkApi';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    order: orderReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
