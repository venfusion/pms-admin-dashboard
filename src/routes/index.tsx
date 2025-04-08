import { createBrowserRouter } from 'react-router';

import { LoginPage } from '#/modules/auth';
import { LeaseDetails } from '#/modules/lease';
import { PropertiesPage } from '#/modules/properties';
import { RentalPlanDetails } from '#/modules/rental-plan/rental-plan-details';
import { RentalPlanList } from '#/modules/rental-plan/rental-plan-list';
import { ROUTES } from '#/shared/constants/routes.constants';

import App from '../App';
import { AddressDetails as AddressDetailsPage } from '../modules/address/address-details';
import { CompaniesPage } from '../modules/companies';
import { PoliciesPage } from '../modules/policies';
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
            path: '*',
            Component: CompaniesPage,
          },
          {
            path: '/properties',
            Component: PropertiesPage,
          },
          {
            path: '/units/details/:id',
            Component: UnitDetailsPage,
          },
          {
            path: '/properties/details/:id',
            Component: PropertyDetailsPage,
          },
          {
            path: '/addresses/details/:id',
            Component: AddressDetailsPage,
          },
          {
            path: '/rental-plan/details/:id',
            Component: RentalPlanDetails,
          },
          {
            path: 'rental-plan/list',
            Component: RentalPlanList,
          },
          {
            path: '/policies',
            Component: PoliciesPage,
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
