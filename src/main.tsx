import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from '#/routes';

import { ThemeButton } from './shared/theme-button';
import { ThemeProvider } from './theme/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ThemeButton />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
