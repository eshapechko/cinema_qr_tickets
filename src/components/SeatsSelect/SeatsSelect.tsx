import {getId} from '../../utils/getId';
import {Seat} from './Seat/Seat';
import style from './SeatsSelect.module.scss';
import cn from 'classnames';

export const SeatsSelect = () => {
  let seat = 1;
  let row = 1;
  let resetNums = [4, 6, 5];
  const emptyCell = [2, 3, 4, 5, 6, 12, 13, 14, 18, 19, 25, 26];

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
                const classes = cn('ic-seat', {
                  [style.available]: i !== 3 && i !== 5,
                  [style.busy]: i === 3,
                  [style.selected]: i === 5,
                });

                const data = {
                  row: row,
                  seat: seat,
                  status: seat !== 3 ? 'available' : 'busy',
                };

                if (seat === resetNums[row - 1] || seat === 9) {
                  seat = 1;
                  row++;
                  data.row = row - 1;
                } else {
                  seat++;
                }
                return <Seat className={classes} key={i} data={data} />;
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
