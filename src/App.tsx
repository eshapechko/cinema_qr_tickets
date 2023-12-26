import {MainPage} from './pages/MainPage/MainPage';
import style from './App.module.scss';
import {MoviePage} from './pages/MoviePage/MoviePage';
import {Route, Routes} from 'react-router-dom';
import {TicketPage} from './pages/TicketPage/TicketPage';

export const App = () => {
  return (
    <div className={style.app}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/movie/:id' element={<MoviePage />} />
        <Route path='/buy/:sessionId' element={<TicketPage />} />
      </Routes>
    </div>
  );
};
