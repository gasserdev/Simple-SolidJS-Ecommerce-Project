import { lazy } from 'solid-js';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/product/:id',
    component: Product,
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  }
];
