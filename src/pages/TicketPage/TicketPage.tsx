import {Header} from '../../components/Header/Header';
import {InfoTable} from '../../components/InfoTable/InfoTable';
import {SeatsSelect} from '../../components/SeatsSelect/SeatsSelect';
import {orderState} from '../../store/orderSlice/orderSlice';
import {useAppSelector} from '../../utils/hooks.ts/hookSelector';
import style from './TicketPage.module.scss';
import cn from 'classnames';

export const TicketPage = () => {
  const order = useAppSelector((state) => state.order);
  const price = 20;
  const seatsCount = order.seats.length;
  const totalPrice = price * seatsCount;

  const getOrderInfo = (order: orderState) => {
    return order.seats.map(({row, seat}, i) => ({
      label: `Билет ${i + 1}`,
      value: `Ряд ${row} место ${seat}`,
    }));
  };

  const getPriceInfo = (count: number, price: number) => {
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

  return (
    <div className={style.TicketPage}>
      <Header title='Покупка билетов' />
      <div className={style.content}>
        <SeatsSelect />
        {!!seatsCount && (
          <div className={style.info}>
            <h3 className={style.title}>Выбранные места</h3>
            <InfoTable data={getOrderInfo(order)} />
            <div className={style.info}>
              <InfoTable data={getPriceInfo(seatsCount, price)} />
            </div>
            <div className={style.total}>
              <span>Итого: </span>
              <strong>{totalPrice}Br</strong>
            </div>
            <div className={cn(style.buyBtn, 'hover')}>Купить</div>
          </div>
        )}
        {!seatsCount && (
          <h3 className={cn(style.title, style.titleCenter)}>Выберите места</h3>
        )}
      </div>
    </div>
  );
};
