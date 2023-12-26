import {Title} from '../../components/Title/Title';
import style from './TicketPage.module.scss';

export const TicketPage = () => {
  return (
    <div className={style.TicketPage}>
      <Title center>Покупка билетов</Title>
    </div>
  );
};
