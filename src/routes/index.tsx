import { createBrowserRouter } from 'react-router';

import App from '../App';
import { CompaniesPage } from '../modules/companies';
import { UnitDetailsPage } from '../modules/units';
import { Layout } from '../shared/layouts/dashboard';

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
          {
            path: '/units',
            Component: UnitDetailsPage,
          },
        ],
      },
    ],
  },
]);
