import { createBrowserRouter } from 'react-router';

import { LoginPage } from '#/modules/auth';
import { ROUTES } from '#/shared/constants/routes.constants';

import App from '../App';
import { AddressDetails as AddressDetailsPage } from '../modules/address/address-details';
import { CompaniesPage } from '../modules/companies';
import { PropertyDetails as PropertyDetailsPage } from '../modules/properties/property-details';
import { UnitDetailsPage } from '../modules/units/unit-details';
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
            path: '/companies',
            Component: CompaniesPage,
          },
          {
            path: '/units/details/:id',
            Component: UnitDetailsPage,
          },
          {
            path: 'properties/details/:id',
            Component: PropertyDetailsPage,
          },
          {
            path: '/addresses/details/:id',
            Component: AddressDetailsPage,
          },
        ],
      },
    ],
  },
]);
