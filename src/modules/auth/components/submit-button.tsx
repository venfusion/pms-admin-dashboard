import Button from '@mui/material/Button';
import { type Theme } from '@mui/material/styles';

import { MuiStylesObject } from '#/shared/types/mui-styles.type';

const styles = {
  loginButton: {
    backgroundColor: (theme: Theme) => theme.palette.secondary.main,
    textTransform: 'none',
    fontWeight: 600,
    height: 45,
  },
} satisfies MuiStylesObject;

export function SubmitButton({ context }: { context: string }) {
  return (
    <Button type='submit' variant='contained' size='large' fullWidth={true} sx={styles.loginButton}>
      {context === 'login' ? 'Login' : 'Register'}
    </Button>
  );
}
