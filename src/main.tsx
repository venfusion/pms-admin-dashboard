import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { CompaniesDetails } from './modules/companies/company-details';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CompaniesDetails />
  </React.StrictMode>,
);
