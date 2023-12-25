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
  const [selectStatus, setSelectStatus] = useState(status);
  const classes = cn(style.seat, style[selectStatus]);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (status !== 'busy') {
      const isSelected = selectStatus === 'available';
      const newStatus = isSelected ? 'selected' : 'available';
      setSelectStatus(newStatus);

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
