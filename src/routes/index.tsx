import { createBrowserRouter } from 'react-router';

import { LoginPage, RegisterPage } from '#/modules/auth/pages';
import { LeaseDetails } from '#/modules/lease';
import { RentalPlanDetails } from '#/modules/rental-plan/rental-plan-details';
import { RentalPlanList } from '#/modules/rental-plan/rental-plan-list';
import { ROUTES } from '#/shared/constants/routes.constants';
import { composeModuleRoutes, lazyRoute } from '#/shared/utils/router.util';

import App from '../App';

const { LoginPage } = lazyRoute(() => import('#/modules/auth'), 'LoginPage');
const { Companies } = lazyRoute(() => import('#/modules/companies'), 'Companies');
const { UnitDetails } = lazyRoute(() => import('#/modules/units/unit-details'), 'UnitDetails');
const { PropertyDetails } = lazyRoute(
  () => import('#/modules/properties/property-details'),
  'PropertyDetails',
);
const { AddressDetails } = lazyRoute(
  () => import('#/modules/addresses/address-details'),
  'AddressDetails',
);
const { RentalPlansList: RentalPlanList } = lazyRoute(
  () => import('#/modules/rental-plans/rental-plan-list'),
  'RentalPlansList',
);
const { RentalPlanDetails } = lazyRoute(
  () => import('#/modules/rental-plans/rental-plan-details'),
  'RentalPlanDetails',
);
const { PoliciesList } = lazyRoute(() => import('#/modules/policies'), 'PoliciesList');
const { PolicyDetails } = lazyRoute(
  () => import('#/modules/policies/policy-details'),
  'PolicyDetails',
);
const { LeaseDetails } = lazyRoute(() => import('#/modules/leases'), 'LeaseDetails');
const { Layout } = lazyRoute(() => import('#/shared/layouts/dashboard'), 'Layout');
const { CompaniesListPage } = lazyRoute(
  () => import('#/modules/companies/components/companies-list'),
  'CompaniesListPage',
);

const authRoutes = [
  {
    path: 'auth/login',
    element: <LoginPage />,
  },
];

const dashboardRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '*',
        element: <Companies />,
      },
      {
        path: '/units/:id',
        element: <UnitDetails />,
      },
      {
        path: '/properties/:id',
        element: <PropertyDetails />,
      },
      {
        path: '/addresses/:id',
        element: <AddressDetails />,
      },
      {
        path: '/rental-plans',
        element: <RentalPlanList />,
      },
      {
        path: '/rental-plans/:id',
        element: <RentalPlanDetails />,
      },
      {
        path: '/policies',
        element: <PoliciesList />,
      },
      {
        path: '/leases/details/:id',
        element: <LeaseDetails />,
      },
      {
        path: '/policies/:id',
        element: <PolicyDetails />,
      },
      {
        path: '/companies/list',
        element: <CompaniesListPage />,
      },
    ],
  },
];

export const router = createBrowserRouter([
  {
    Component: App,
    children: composeModuleRoutes(authRoutes, dashboardRoutes),
  },
]);
