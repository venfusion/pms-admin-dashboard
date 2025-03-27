import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { Outlet } from 'react-router';

import { BRANDING, NAVIGATION } from './shared/constants';

export default function App() {
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
  );
}
