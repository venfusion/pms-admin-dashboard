import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { RentalPlanDetails } from './modules/rental-plan/rental-plan-details';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RentalPlanDetails />
  </React.StrictMode>,
);
