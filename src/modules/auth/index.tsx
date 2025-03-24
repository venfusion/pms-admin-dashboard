import { type RouteObject } from 'react-router-dom';

import { lazyRoute } from '#/shared/utils/router.util';

const { LoginRoute } = lazyRoute(() => import('./routes/login.route'), 'LoginRoute');

export const AuthRoutes: RouteObject[] = [
  {
    path: '/auth/login',
    element: <LoginRoute />,
  },
];
