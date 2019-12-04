import { PAGE_NAMES } from './constants';
import { Home } from './pages/home/home';
import { GameTomatoAvocado } from './pages/game-tomato-avocado/game-tomato-avocado';
import { GameWhoYouAre } from './pages/game-who-you-are/game-who-you-are';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    page: PAGE_NAMES.HOME
  },
  {
    path: '/game-tomato-avocado',
    exact: true,
    noFooter: true,
    component: GameTomatoAvocado,
    page: PAGE_NAMES.GAME_TOMATO_AVOCADO
  },
  {
    path: '/game-who-you-are',
    exact: true,
    noFooter: true,
    component: GameWhoYouAre,
    page: PAGE_NAMES.GAME_WHO_YOU_ARE
  },
  {
    path: '*',
    component: PageNotFound,
    page: PAGE_NAMES.PAGE_NOT_FOUND
  }
];
