import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { InfoTable } from '../../components/InfoTable/InfoTable';
import { SeatsSelect } from '../../components/SeatsSelect/SeatsSelect';
import { clearOrder } from '../../store/orderSlice/orderSlice';
import { useAppSelector } from '../../utils/hooks.ts/hookSelector';
import style from './SessionPage.module.scss';
import cn from 'classnames';
import { useGetSessionByIdQuery } from '../../api/sessionEndpoints';
import { Title } from '../../components/Title/Title';
import { useUpdateSeatByIdMutation } from '../../api/orderEndpoints';
import { OrderData } from '../../types/order';
import { useEffect, useRef, useState } from 'react';
import { getOrderInfo, getPriceInfo, getSessionInfo } from './helpers';
import { useAppDispatch } from '../../utils/hooks.ts/hookDispatch';

export const SessionPage = () => {
  const dispatch = useAppDispatch();
  const imgRef = useRef<HTMLImageElement>(null);
  const [isDisabled, setIsDesabled] = useState(false);
  const [qrCode, setQrCode] = useState('');
  const { id } = useParams();
  const { isLoading, data } = useGetSessionByIdQuery(id!);
  const [buyTicket, { isSuccess }] = useUpdateSeatByIdMutation();

  const order = useAppSelector((state) => state.order);
  const price = 20;
  const seatsCount = order.seats.length;
  const totalPrice = price * seatsCount;

  const onClick = () => {
    const buySeats = data?.seat?.bought_seats || [];
    const orderData: OrderData = {
      id: data?.seatId!,
      bought_seats: [...buySeats, ...order.seats],
    };

    buyTicket(orderData);
    setIsDesabled(true);
    dispatch(clearOrder());
  };

  useEffect(() => {
    // Генерируем QR-code
    if (isSuccess) {
      const dataForQrCode = encodeURI(
        JSON.stringify({
          movie: data?.movie?.title,
          time: data?.time,
          sessionId: data?.id,
          seats: order.seats,
          total_price: totalPrice,
        }),
      );

      setQrCode(
        `https://api.qrserver.com/v1/create-qr-code/?size=200*200&data=${dataForQrCode}`,
      );
    }
  }, [
    isSuccess,
    data?.id,
    data?.movie?.title,
    data?.time,
    totalPrice,
    order.seats,
  ]);

  useEffect(() => {
    if (qrCode) {
      if (imgRef.current) {
        imgRef.current.src = qrCode;
      }
    }
  }, [qrCode]);

  if (!data || !data.movie) return null;
  if (isLoading) return <Title center>Загрузка свободных мест</Title>;

  return (
    <div className={style.SessionPage}>
      <Header title='Покупка билетов' />
      <div className={style.content}>
        <SeatsSelect buySeats={data?.seat?.bought_seats} />
        <div className={style.info}>
          <InfoTable data={getSessionInfo(data?.movie?.title, data.time)} />
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
              {!qrCode && (
                <div
                  className={cn(style.buyBtn, 'hover', {
                    [style.disable]: isDisabled,
                  })}
                  onClick={onClick}>
                  Купить
                </div>
              )}
            </div>
          )}
          {!seatsCount && (
            <h3 className={cn(style.title, style.titleCenter)}>
              Выберите места
            </h3>
          )}
          {qrCode && (
            <div className={style.qr}>
              <img className={style.qrImg} ref={imgRef} alt='QR код' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
