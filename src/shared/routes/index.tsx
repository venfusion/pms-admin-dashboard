import { createBrowserRouter } from 'react-router';

import App from '../../App';
import { Layout } from '../layouts/dashboard';
import { CompaniesPage } from '../pages';

export const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '*',
            Component: CompaniesPage,
          },
        ],
      },
    ],
  },
]);
