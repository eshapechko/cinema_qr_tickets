export interface SeatType {
  row: number;
  seat: number;
}

export interface BuySeatsFromServer {
  id: number;
  bought_seats: SeatType[];
}
