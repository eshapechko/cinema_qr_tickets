import {useGetAllMoviesQuery} from '../../api/movieEndpoints';
import {Movie} from '../../types/movie';
import {MovieCard} from '../MovieCard/MovieCard';
import style from './MovieList.module.scss';
import cn from 'classnames';

interface MovieListProps {
  className?: string;
}

export const MovieList = ({className}: MovieListProps) => {
  const {isLoading, data} = useGetAllMoviesQuery();

  const renderList = (data: Movie[]) => {
    return data.map((item) => <MovieCard key={item.id} data={item} />);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (!data) return <h1>Нет данных...</h1>;

  return (
    <div className={cn(style.MovieList, className)}>{renderList(data)}</div>
  );
};
