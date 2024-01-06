import {MainPage} from './pages/MainPage/MainPage';
import style from './App.module.scss';
import {MoviePage} from './pages/MoviePage/MoviePage';
import {Route, Routes} from 'react-router-dom';
import {SessionPage} from './pages/SessionPage/SessionPage';

export const App = () => {
  return (
    <div className={style.app}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/movie/:id' element={<MoviePage />} />
        <Route path='/sessions/:id' element={<SessionPage />} />
      </Routes>
    </div>
  );
};
