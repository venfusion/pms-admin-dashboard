import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeButton } from './shared/theme-button';
import { ThemeProvider } from './theme/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      {/* this is just example, we can remove it! */}
      <ThemeButton />
    </ThemeProvider>
  </StrictMode>,
);
