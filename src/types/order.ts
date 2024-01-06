import {SeatType} from './seat';

export interface OrderData {
  id: number;
  bought_seats: SeatType[];
}
