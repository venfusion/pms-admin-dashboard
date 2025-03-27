import { createBrowserRouter } from 'react-router';

import App from '../App';
import { AddressDetails } from '../modules/address/address-details';
import { CompaniesPage } from '../modules/companies';
import { PropertyDetails } from '../modules/properties/property-derails';
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
            path: 'properties/details/id',
            Component: PropertyDetails,
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
