import {useParams} from 'react-router-dom';
import {Header} from '../../components/Header/Header';
import style from './MoviePage.module.scss';
import {Title} from '../../components/Title/Title';
import {useGetMovieByIdQuery} from '../../api/movieEndpoints';
import {SessionTime} from '../../components/SessionTime/SessionTime';
import {InfoTable} from '../../components/InfoTable/InfoTable';
import {helper} from './helpers';
import {Session} from '../../types/session';

export const MoviePage = () => {
  const {id} = useParams<string>();

  const {isLoading, data} = useGetMovieByIdQuery(id!);

  const renderSessionTimes = (sessions: Session[]) => {
    return sessions.map(({id, time}) => {
      return <SessionTime key={id} time={time} id={id} />;
    });
  };

  if (!data) {
    return <Title center>Фильм не найден</Title>;
  }
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className={style.MoviePage}>
      <Header title={data.title} />
      <div className={style.content}>
        <div>
          <div className={style.imgBlock}>
            <img src={data.img} alt={data.title} />
          </div>
          <div className={style.desc}>{data.description}</div>
        </div>
        <div className={style.rightCol}>
          <InfoTable data={helper.getInfoData(data)} />

          <div className={style.session}>
            <h3 className={style.subtitle}>Сеансы</h3>
            <div className={style.sessionTimeList}>
              {renderSessionTimes(data.sessions)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
