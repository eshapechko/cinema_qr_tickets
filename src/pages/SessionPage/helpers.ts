import {orderState} from '../../store/orderSlice/orderSlice';

export const getSessionInfo = (movie: string, time: string) => {
  return [
    {
      label: 'Название',
      value: movie,
    },
    {
      label: 'Начало в',
      value: time,
    },
  ];
};

export const getPriceInfo = (count: number, price: number) => {
  return [
    {
      label: 'Количество',
      value: count,
    },
    {
      label: 'Цена',
      value: `${price}Br`,
    },
  ];
};

export const getOrderInfo = (order: orderState) => {
  return order.seats.map(({row, seat}, i) => ({
    label: `Билет ${i + 1}`,
    value: `Ряд ${row} место ${seat}`,
  }));
};
