import {useParams} from 'react-router-dom';
import {Header} from '../../components/Header/Header';
import style from './MoviePage.module.scss';
import cn from 'classnames';
import {Title} from '../../components/Title/Title';
import {useGetMovieByIdQuery} from '../../api/movieEndpoints';

export const MoviePage = () => {
  const {id} = useParams();
  const {isLoading, data} = useGetMovieByIdQuery(id!);

  const renderSessionTimes = (times: string[]) => {
    return times.map((time) => {
      return (
        <div key={time} className={cn(style.sessionTimeItem, 'hover')}>
          {time}
        </div>
      );
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
          <div className={style.info}>
            <div className={style.infoLabel}>Премьера</div>
            <div className={style.infoValue}>{data.premier}</div>
            <div className={style.infoLabel}>В ролях</div>
            <div className={style.infoValue}>{data.actors.join(', ')}</div>
            <div className={style.infoLabel}>Длительность</div>
            <div className={style.infoValue}>{data.duration}</div>
            <div className={style.infoLabel}>Страна</div>
            <div className={style.infoValue}>{data.country}</div>
            <div className={style.infoLabel}>Год</div>
            <div className={style.infoValue}>{data.year}</div>
          </div>
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
