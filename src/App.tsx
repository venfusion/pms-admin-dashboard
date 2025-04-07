import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { Outlet } from 'react-router';

import { QueryClientConfig } from './shared/configs/query-client.config';
import { BRANDING, NAVIGATION } from './shared/constants';

const queryClient = new QueryClient(QueryClientConfig);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
        <Outlet />
      </ReactRouterAppProvider>
    </QueryClientProvider>
  );
}
