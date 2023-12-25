import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface orderState {
  seats: number[];
}

const initialState: orderState = {
  seats: [],
};

export const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    addSeat: (state, action: PayloadAction<number>) => {
      state.seats.push(action.payload);
    },
    deleteSeat: (state, action: PayloadAction<number>) => {
      state.seats = state.seats.filter((item) => item !== action.payload);
    },
    clearOrder: (state) => {
      state.seats = [];
    },
  },
});

export const {addSeat, deleteSeat, clearOrder} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
