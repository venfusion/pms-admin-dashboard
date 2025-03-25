import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Sidebar } from './components/sidebar/sidebar.component';
import { ThemeButton } from './shared/theme-button';
import { ThemeProvider } from './theme/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Sidebar />
      <ThemeButton />
    </ThemeProvider>
  </StrictMode>,
);
