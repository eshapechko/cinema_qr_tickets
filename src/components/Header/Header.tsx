import {Link} from 'react-router-dom';
import style from './Header.module.scss';
import {Title} from '../Title/Title';
import cn from 'classnames';

interface HeaderProps {
  title: string;
}

export const Header = ({title}: HeaderProps) => {
  return (
    <div className={style.header}>
      <Link to='/' className={cn('hover', style.backBtn)}>
        Главная
      </Link>
      <Title center className={style.title}>
        {title}
      </Title>
    </div>
  );
};
