import cn from 'classnames';
import style from './Seat.module.scss';
import {useState} from 'react';
import {useAppDispatch} from '../../../utils/hooks.ts/hookDispatch';
import {addSeat, deleteSeat} from '../../../store/orderSlice/orderSlice';

interface SeatProps {
  data: {
    row: number;
    seat: number;
    status: string;
  };
}

export const Seat = ({data}: SeatProps) => {
  const {row, seat, status} = data;
  const [seatStatus, setSeatStatus] = useState(status);
  const classes = cn(style.seat, style[seatStatus]);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (status !== 'busy') {
      const isSelected = seatStatus === 'available';
      const newStatus = isSelected ? 'selected' : 'available';
      setSeatStatus(newStatus);

      if (isSelected) {
        dispatch(addSeat({row, seat}));
      } else {
        dispatch(deleteSeat({row, seat}));
      }
    }
  };

  return (
    <div className={classes} onClick={handleClick}>
      <i className='ic-seat' />
      <span className={style.seatNum}>{seat}</span>
    </div>
  );
};
