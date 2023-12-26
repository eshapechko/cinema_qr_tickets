import {useParams} from 'react-router-dom';
import {Header} from '../../components/Header/Header';
import style from './MoviePage.module.scss';
import {Title} from '../../components/Title/Title';
import {useGetMovieByIdQuery} from '../../api/movieEndpoints';
import {SessionTime} from '../../components/SessionTime/SessionTime';
import {InfoTable} from '../../components/InfoTable/InfoTable';
import {helper} from './helpers';

export const MoviePage = () => {
  const {id} = useParams<string>();

  const {isLoading, data} = useGetMovieByIdQuery(id!);

  const renderSessionTimes = (times: string[]) => {
    return times.map((time, i) => {
      return <SessionTime key={time} time={time} id={i} />;
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
              {renderSessionTimes(data.times)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
