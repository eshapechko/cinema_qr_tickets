import React from 'react';
import style from './InfoTable.module.scss';
import { getId } from '../../utils/getId';

export interface MovieInfoData {
  label: string;
  value: string | number;
}

interface MovieInfoProps {
  data: MovieInfoData[];
}

export const InfoTable = ({ data }: MovieInfoProps) => {
  const renderItems = (data: MovieInfoData[]) => {
    return data.map(({ label, value }) => (
      <React.Fragment key={getId()}>
        <div className={style.label}>{label}</div>
        <div>{value}</div>
      </React.Fragment>
    ));
  };

  return <div className={style.MovieInfo}>{renderItems(data)}</div>;
};
