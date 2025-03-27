import { Button } from '@mui/material';

import { useThemeContext } from '../../../theme/themeContext';

export function ThemeButton() {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <Button variant='contained' color='primary' onClick={toggleTheme} sx={{ mt: 2 }}>
      {darkMode ? 'Light' : 'Dark'} Mode
    </Button>
  );
}
