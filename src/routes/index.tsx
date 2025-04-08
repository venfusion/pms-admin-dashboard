import { createBrowserRouter } from 'react-router';

import { LoginPage } from '#/modules/auth';
import { LeaseDetails } from '#/modules/lease';
import { PoliciesListPage } from '#/modules/policies';
import { PolicyDetailsPage } from '#/modules/policies/policy-details';
import { RentalPlanDetailsPage } from '#/modules/rental-plan/rental-plan-details';
import { RentalPlanListPage } from '#/modules/rental-plan/rental-plan-list';

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
        path: 'auth/login',
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
            path: '/units/:id',
            Component: UnitDetailsPage,
          },
          {
            path: '/properties/:id',
            Component: PropertyDetailsPage,
          },
          {
            path: '/addresses/:id',
            Component: AddressDetailsPage,
          },
          {
            path: '/rental-plans',
            Component: RentalPlanListPage,
          },
          {
            path: '/rental-plans/:id',
            Component: RentalPlanDetailsPage,
          },
          {
            path: '/policies',
            Component: PoliciesListPage,
          },
          {
            path: '/leases/details/:id',
            Component: LeaseDetails,
          },
          {
            path: '/policies/:id',
            Component: PolicyDetailsPage,
          },
        ],
      },
    ],
  },
]);
