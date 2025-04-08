import { createBrowserRouter } from 'react-router';

import { AddressDetailsPage } from '#/modules/address/address-details';
import { LoginPage } from '#/modules/auth';
import { CompaniesPage } from '#/modules/companies';
import { LeaseDetails } from '#/modules/lease';
import { PoliciesListPage } from '#/modules/policies';
import { PolicyDetailsPage } from '#/modules/policies/policy-details';
import { PropertyDetailsPage } from '#/modules/properties/property-details';
import { RentalPlanDetailsPage } from '#/modules/rental-plan/rental-plan-details';
import { RentalPlanListPage } from '#/modules/rental-plan/rental-plan-list';
import { UnitDetailsPage } from '#/modules/units/unit-details';
import { Layout } from '#/shared/layouts/dashboard';

import App from '../App';

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
