import { createBrowserRouter } from 'react-router-dom';

import { publicRoutes } from './public.route';

export const router = createBrowserRouter([
  {
    id: 'App wrapper',
    path: '/',
    children: [...publicRoutes],
  },
]);
