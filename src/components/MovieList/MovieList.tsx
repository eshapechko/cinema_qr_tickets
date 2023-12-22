import {IMovieCard} from '../../types/movie';
import {MovieCard} from '../MovieCard/MovieCard';
import style from './MovieList.module.scss';
import cn from 'classnames';

const movies: IMovieCard[] = [
  {
    id: '1',
    img: 'https://webgate.24guru.by/uploads/events/thumbs/240x340/82ZN4s1xP.jpg',
    title: 'Вонок',
    genre: 'Комедия',
  },
  {
    id: '2',
    img: 'https://webgate.24guru.by/uploads/events/thumbs/240x340/82ZN4s1xP.jpg',
    title: 'Вонок 1',
    genre: 'Комедия',
  },
  {
    id: '3',
    img: 'https://webgate.24guru.by/uploads/events/thumbs/240x340/82ZN4s1xP.jpg',
    title: 'Вонок 2',
    genre: 'Комедия',
  },
];

interface MovieListProps {
  className?: string;
}

export const MovieList = ({className}: MovieListProps) => {
  const renderList = (data: IMovieCard[]) => {
    return data.map((item) => <MovieCard key={item.id} data={item} />);
  };

  return (
    <div className={cn(style.MovieList, className)}>{renderList(movies)}</div>
  );
};
