import {Header} from '../../components/Header/Header';
import {Movie} from '../../types/movie';
import style from './MoviePage.module.scss';
import cn from 'classnames';

const data: Movie = {
  id: 1,
  img: 'https://webgate.24guru.by/uploads/events/thumbs/240x340/82ZN4s1xP.jpg',
  title: 'Вонок',
  genre: 'Комедия',
  description:
    'hsdfhjksfhdfhk рвалрлоыарлоырал ывралоырвалоыр ываолывра ыоарлоывра ывиолвра шгкушгпбсладляоа ыоатлоытясьбт lorem20hjkhdjfkshdjkfhdsfhjksh hfkjsgdkjfkjsa sadfsdfjksdhfjkdsh jashfjksdfkjsdh safnjkshfkjhdsf',
  times: ['10.30', '15.00', '18.00', '21.00'],
  duration: 145,
  country: 'США',
  actors: ['Арнольд Шварцнегер', 'Киану Ривз'],
  year: 2023,
  premier: '7 сентября 2023',
};

export const MoviePage = () => {
  const renderSessionTimes = (times: string[]) => {
    return times.map((time) => {
      return (
        <div key={time} className={cn(style.sessionTimeItem, 'hover')}>
          {time}
        </div>
      );
    });
  };

  return (
    <div className={style.MoviePage}>
      <Header title='Название фильма' />
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
