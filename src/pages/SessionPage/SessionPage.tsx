import {useParams} from 'react-router-dom';
import {Header} from '../../components/Header/Header';
import {InfoTable} from '../../components/InfoTable/InfoTable';
import {SeatsSelect} from '../../components/SeatsSelect/SeatsSelect';
import {clearOrder, orderState} from '../../store/orderSlice/orderSlice';
import {useAppSelector} from '../../utils/hooks.ts/hookSelector';
import style from './SessionPage.module.scss';
import cn from 'classnames';
import {useAppDispatch} from '../../utils/hooks.ts/hookDispatch';
import {useGetSessionByIdQuery} from '../../api/sessionEndpoints';
import {Title} from '../../components/Title/Title';
import {useUpdateSeatByIdMutation} from '../../api/orderEndpoints';
import {OrderData} from '../../types/order';
import {useEffect, useState} from 'react';

export const SessionPage = () => {
  const [isDisabled, setIsDesabled] = useState(false);
  const {id} = useParams();
  const {isLoading, data} = useGetSessionByIdQuery(id!);
  const [buyTicket, {isSuccess}] = useUpdateSeatByIdMutation();
  const dispatch = useAppDispatch();
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

  const onClick = () => {
    const buySeats = data?.seat?.bought_seats || [];
    const orderData: OrderData = {
      id: data?.seatId!,
      bought_seats: [...buySeats, ...order.seats],
    };

    buyTicket(orderData);
    setIsDesabled(true);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearOrder());
    }
  }, [isSuccess, dispatch]);

  if (isLoading) return <Title center>Загрузка свободных мест</Title>;

  return (
    <div className={style.SessionPage}>
      <Header title='Покупка билетов' />
      <div className={style.content}>
        <SeatsSelect buySeats={data?.seat?.bought_seats} />
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
            <div
              className={cn(style.buyBtn, 'hover', {
                [style.disable]: isDisabled,
              })}
              onClick={onClick}
            >
              Купить
            </div>
          </div>
        )}
        {!seatsCount && (
          <h3 className={cn(style.title, style.titleCenter)}>Выберите места</h3>
        )}
      </div>
    </div>
  );
};
