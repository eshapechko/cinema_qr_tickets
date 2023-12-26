import cn from 'classnames';
import style from './Seat.module.scss';
import {useState} from 'react';
import {useAppDispatch} from '../../../utils/hooks.ts/hookDispatch';
import {addSeat, deleteSeat} from '../../../store/orderSlice/orderSlice';

interface SeatProps {
  className: string;
  data: {
    id: number;
    num: number;
    status: string;
  };
}

export const Seat = ({className, data}: SeatProps) => {
  const {id, num, status} = data;
  const [seatStatus, setSeatStatus] = useState(status);
  const classes = cn(style.seat, style[seatStatus]);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (status !== 'busy') {
      const isSelected = seatStatus === 'available';
      const newStatus = isSelected ? 'selected' : 'available';
      setSeatStatus(newStatus);

      isSelected ? dispatch(addSeat(id)) : dispatch(deleteSeat(id));
    }
  };

  return (
    <div className={classes} onClick={handleClick}>
      <i className='ic-seat' />
      <span className={style.seatNum}>{num}</span>
    </div>
  );
};
