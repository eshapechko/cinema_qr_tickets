import {Link} from 'react-router-dom';
import style from './MovieCard.module.scss';

interface MovieCardProps {
  data: {
    id: string;
    img: string;
    title: string;
    genre: string;
  };
}

export const MovieCard = ({data}: MovieCardProps) => {
  return (
    <Link to={`/movie/${data.id}`} className={style.MovieCard}>
      <div className={style.imgBlock}>
        <img src={data.img} alt={data.title} />
      </div>
      <h3 className={style.title}>{data.title}</h3>
      <div className={style.genre}>{data.genre}</div>
    </Link>
  );
};
