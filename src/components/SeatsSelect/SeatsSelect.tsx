import {getId} from '../../utils/getId';
import {Seat} from './Seat/Seat';
import style from './SeatsSelect.module.scss';
import cn from 'classnames';
import {SeatType} from '../../types/seat';

type BuySeats = SeatType[] | undefined;

interface SeatsSelectProps {
  buySeats: BuySeats;
}

export const SeatsSelect = ({buySeats}: SeatsSelectProps) => {
  let seat = 1;
  let row = 1;
  let resetNums = [4, 6, 5];
  const emptyCell = [2, 3, 4, 5, 6, 12, 13, 14, 18, 19, 25, 26];

  const isBusySeat = (row: number, seat: number, buySeats: BuySeats) => {
    return buySeats?.some(
      (buySeat) => buySeat.row === row && buySeat.seat === seat,
    );
  };

  return (
    <div className={style.SeatsSelect}>
      <div className={style.display}>
        <i className='ic-display'></i>
        <span>Экран</span>
      </div>

      <div className={style.place}>
        <div className={style.rows}>
          {Array(7)
            .fill(0)
            .map((_, i) => (
              <div className={style.row} key={getId()}>
                {i + 1}
              </div>
            ))}
        </div>

        <div className={style.seats}>
          {Array(63)
            .fill(0)
            .map((_, i) => {
              if (emptyCell.includes(i)) {
                return <div key={getId()} />;
              } else {
                const seatData = {
                  row: row,
                  seat: seat,
                  status: isBusySeat(row, seat, buySeats)
                    ? 'busy'
                    : 'available',
                };

                if (seat === resetNums[row - 1] || seat === 9) {
                  seat = 1;
                  row++;
                  seatData.row = row - 1;
                } else {
                  seat++;
                }

                return <Seat key={`${row}-${seat}`} data={seatData} />;
              }
            })}
        </div>
      </div>

      <div className={style.info}>
        <div className={cn(style.infoItem, style.available)}>
          <i className='ic-dote' />
          <span>Доступно</span>
        </div>
        <div className={cn(style.infoItem, style.busy)}>
          <i className='ic-dote' />
          <span>Занято</span>
        </div>
        <div className={cn(style.infoItem, style.selected)}>
          <i className='ic-dote' />
          <span>Выбрано</span>
        </div>
      </div>
    </div>
  );
};
