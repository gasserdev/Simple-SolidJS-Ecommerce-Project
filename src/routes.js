import { lazy } from 'solid-js';
import Home from './pages/Home';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/cart',
    component: lazy(() => import('./pages/Cart')),
  },
  {
    path: '/product/:id',
    component: lazy(() => import('./pages/Product')),
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  }
];
