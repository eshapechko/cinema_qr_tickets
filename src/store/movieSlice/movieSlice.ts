import {createSlice} from '@reduxjs/toolkit';
import {Movie} from '../../types/movie';

export interface MoviesState {
  data: Movie[];
}

const initialState: MoviesState = {
  data: [
    {
      id: 1,
      img: 'https://webgate.24guru.by/uploads/events/thumbs/240x340/82ZN4s1xP.jpg',
      title: 'Вонок',
      genre: 'Комедия',
      description:
        'Мечтая открыть магазин в городе, известном своим шоколадом, молодой и бедный Вилли Вонка обнаруживает, что индустрией управляет картель жадных шоколатье.',
      times: ['10:30', '11:30', '13:00', '18:00', '21:00', '22:30'],
      duration: 86,
      country: 'США',
      year: 2023,
      actors: ['Арнольд Шварцнегер', 'Киану Ривз', 'Сильвестр Сталонне'],
      premier: '7 сентября 2023',
    },
    {
      id: 2,
      img: 'https://webgate.24guru.by/uploads/events/thumbs/240x340/3BwmSTK25.jpg',
      title: 'Новогодний шеф',
      genre: 'Семейное кино',
      description:
        'Виктор — владелец модного ресторана, вот только дела в нем идут не очень. Вся надежда только на новогоднюю ночь, ведь все столики уже забронированы, но наступает 31 декабря и из ресторана уходит шеф-повар со всей командой. Казалось бы, все пропало, и тут в ресторане появляется Олеся, владелица кухни на дому в подмосковном поселке. Она привезла пирожные, которые Виктор совершенно случайно заказал у нее и даже успел забыть об этом. Виктор предлагает Олесе стать шеф-поваром на новогоднюю ночь. Она отказывается, Олеся обещала своему сыну Кириллу новогоднюю сказку с салютами. Виктор уговаривает ее согласиться, он верит в нее и знает, что у Олеси есть особый дар — пробуждать у людей своими блюдами самые лучшие воспоминания. Смогут ли Олеся и Виктор совершить настоящее новогоднее чудо: накормить всех гостей особенными блюдами и выполнить обещание, данное Кириллу?',
      times: ['10:30', '11:30', '13:00', '18:00', '21:00', '22:30'],
      duration: 86,
      country: 'США',
      year: 2023,
      actors: ['Арнольд Шварцнегер', 'Киану Ривз', 'Сильвестр Сталонне'],
      premier: '12 ноября 2023',
    },
    {
      id: 3,
      img: 'https://webgate.24guru.by/uploads/events/thumbs/240x340/32rXdaKjz.jpg',
      title: 'Холоп 2',
      genre: 'Комедия',
      description:
        'Гриша, бывший мажор, побывавший холопом и ставший человеком, после путешествия в «прошлое» чутко реагирует на любую несправедливость. И, конечно, не может пройти мимо беспредела, который творит наглая и избалованная Катя. Ничего удивительного, что вскоре мажорка обнаруживает себя в другом времени.',
      times: ['11:30', '12:30', '16:00', '18:00', '21:00', '22:30'],
      duration: 90,
      country: 'Россия',
      year: 2023,
      actors: ['Арнольд Шварцнегер', 'Киану Ривз', 'Сильвестр Сталонне'],
      premier: '12 декабря 2023',
    },
  ],
};

export const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {},
});

export const moviesReducer = moviesSlice.reducer;
