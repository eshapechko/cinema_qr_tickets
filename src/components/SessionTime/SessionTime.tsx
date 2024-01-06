import {Link} from 'react-router-dom';
import style from './SessionTime.module.scss';
import cn from 'classnames';

interface SessionTimeProps {
  id: number;
  time: string;
}

export const SessionTime = ({id, time}: SessionTimeProps) => {
  return (
    <Link to={`/sessions/${id}`} className={cn(style.SessionTime, 'hover')}>
      {time}
    </Link>
  );
};
