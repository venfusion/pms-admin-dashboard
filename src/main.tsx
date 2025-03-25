import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { Sidebar } from './components/sidebar/sidebar.component';
import { ThemeButton } from './shared/theme-button';
import { ThemeProvider } from './theme/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <ThemeProvider>
        <Sidebar />
        <ThemeButton />
      </ThemeProvider>
    </Router>
  </StrictMode>,
);
