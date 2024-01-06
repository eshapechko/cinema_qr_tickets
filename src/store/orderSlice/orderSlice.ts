import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {SeatType} from '../../types/seat';

export interface orderState {
  seats: SeatType[];
}

const initialState: orderState = {
  seats: [],
};

export const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    addSeat: (state, action: PayloadAction<SeatType>) => {
      state.seats.push(action.payload);
    },
    deleteSeat: (state, action: PayloadAction<SeatType>) => {
      const {row, seat} = action.payload;
      state.seats = state.seats.filter(
        (item) => item.seat !== seat || item.row !== row,
      );
    },
    clearOrder: (state) => {
      state.seats = [];
    },
    // buyTicket: (state, action: PayloadAction<number>) => {
    //   const sessionId = action.payload;
    //   state.sessionId = sessionId;
    // },
  },
});

export const {addSeat, deleteSeat, clearOrder} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
