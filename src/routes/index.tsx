import { createBrowserRouter } from 'react-router';

import { composeModuleRoutes, lazyRoute } from '#/shared/utils/router.util';

import App from '../App';

const { LoginPage } = lazyRoute(() => import('#/modules/auth'), 'LoginPage');
const { Companies } = lazyRoute(() => import('#/modules/companies'), 'Companies');
const { UnitDetails } = lazyRoute(() => import('#/modules/units/unit-details'), 'UnitDetails');
const { PropertiesListTable } = lazyRoute(
  () => import('#/modules/properties/components/property-list/property-list-table'),
  'PropertiesListTable',
);
const { PropertyDetails } = lazyRoute(
  () => import('#/modules/properties/components/propety-details/property-details'),
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
const { LeasesListPage } = lazyRoute(
  () => import('#/modules/leases/components/leases-list'),
  'LeasesListPage',
);
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
        path: '/properties',
        element: <PropertiesListTable />,
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
        path: '/leases/list',
        element: <LeasesListPage />,
      },
      {
        path: '/companies/list',
        element: <CompaniesListPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(
  [
    {
      Component: App,
      children: composeModuleRoutes(authRoutes, dashboardRoutes),
    },
  ],
  { basename: '/pms-admin-dashboard/' },
);
