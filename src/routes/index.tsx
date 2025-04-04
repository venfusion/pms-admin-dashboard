import { createBrowserRouter } from 'react-router';

import { LoginPage } from '#/modules/auth';
import { LeaseDetails } from '#/modules/lease';
import { PropertyDetails } from '#/modules/properties/property-details';
import { ROUTES } from '#/shared/constants/routes.constants';

import App from '../App';
import { AddressDetails } from '../modules/address/address-details';
import { CompaniesPage } from '../modules/companies';
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
            path: '/properties/details/:id',
            Component: PropertyDetails,
          },
          {
            path: '/addresses/details/:id',
            Component: AddressDetails,
          },
          {
            path: '/leases/details/:id',
            Component: LeaseDetails,
          },
        ],
      },
    ],
  },
]);
