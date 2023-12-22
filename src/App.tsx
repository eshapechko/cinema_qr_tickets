import {MainPage} from './pages/MainPage/MainPage';
import style from './App.module.scss';
import {MoviePage} from './pages/MoviePage/MoviePage';
import {Route, Routes} from 'react-router-dom';

export const App = () => {
  return (
    <div className={style.app}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/movie/:id' element={<MoviePage />} />
      </Routes>
    </div>
  );
};
