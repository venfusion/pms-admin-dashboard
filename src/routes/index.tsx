import { createBrowserRouter } from 'react-router';

import { LoginPage } from '#/modules/auth';
import { ROUTES } from '#/shared/constants/routes.constants';

import App from '../App';
import { AddressDetails } from '../modules/address/address-details';
import { CompaniesPage } from '../modules/companies';
import { UnitDetailsPage } from '../modules/units';
import { Layout } from '../shared/layouts/dashboard';

export const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: ROUTES.auth.login,
        Component: LoginPage,
      },
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
          {
            path: '/addresses/details/:id',
            Component: AddressDetails,
          },
        ],
      },
    ],
  },
]);
