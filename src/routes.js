import { PAGE_NAMES } from './constants';
import { Home } from './pages/home/home';
import { Game } from './pages/game/game';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    page: PAGE_NAMES.HOME
  },
  {
    path: '/game',
    exact: true,
    noFooter: true,
    component: Game,
    page: PAGE_NAMES.GAME
  },
  {
    path: '*',
    component: PageNotFound,
    page: PAGE_NAMES.PAGE_NOT_FOUND
  }
];
