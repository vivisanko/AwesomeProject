import { PAGE_NAMES } from './constants';
import { Home } from './pages/home/home';
import { ForeignLand } from './pages/foreign-land/foreign-land';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes = [
      {
        path: '/',
        exact: true,
        component: Home,
        page: PAGE_NAMES.HOME,
      },
      {
        path: '/foreign-land',
        exact: true,
        noFooter: true,
        component: ForeignLand, 
        page: PAGE_NAMES.FOREIGN_LAND,
      },
      {
        path: '*',
        component: PageNotFound,
        page: PAGE_NAMES.PAGE_NOT_FOUND,
      },
];
