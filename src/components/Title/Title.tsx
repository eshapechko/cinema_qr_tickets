import {ReactNode} from 'react';
import cn from 'classnames';
import style from './Title.module.scss';

interface TitleProps {
  children: ReactNode;
  center?: boolean;
  className?: string;
}

export const Title = ({className, children, center}: TitleProps) => (
  <h1 className={cn({[style.center]: center}, className)}>{children}</h1>
);
