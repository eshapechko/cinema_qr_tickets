import {MovieList} from '../../components/MovieList/MovieList';
import {Title} from '../../components/Title/Title';
import style from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={style.MainPage}>
      <Title center>Выберите фильм</Title>
      <MovieList className={style.movieList} />
    </div>
  );
};
