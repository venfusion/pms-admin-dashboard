import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router';

import { QueryClientConfig } from '#/shared/config/query-client.config';
import { BRANDING, NAVIGATION } from '#/shared/constants';
import { ThemeProvider } from '#/theme/theme-provider';

const queryClient = new QueryClient(QueryClientConfig);

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        {import.meta.env.DEV && <ReactQueryDevtools />}
        <ThemeProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
              <Outlet />
            </ReactRouterAppProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
