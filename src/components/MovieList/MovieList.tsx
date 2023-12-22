import {useAppSelector} from '../../hooks.ts/hookSelector';
import {IMovieCard} from '../../types/movie';
import {MovieCard} from '../MovieCard/MovieCard';
import style from './MovieList.module.scss';
import cn from 'classnames';

interface MovieListProps {
  className?: string;
}

export const MovieList = ({className}: MovieListProps) => {
  const movies = useAppSelector((state) => state.movies.data);

  const renderList = (data: IMovieCard[]) => {
    return data.map((item) => <MovieCard key={item.id} data={item} />);
  };

  return (
    <div className={cn(style.MovieList, className)}>{renderList(movies)}</div>
  );
};
