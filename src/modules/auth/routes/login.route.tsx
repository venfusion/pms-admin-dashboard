import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LoginForm } from '../components/login-form';
import { style } from '../styles/style';

const styles = {
  rootContainer: {
    display: 'flex',
    height: '90vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export function LoginRoute() {
  return (
    <Box sx={styles.rootContainer}>
      <Box sx={style.form}>
        <Typography fontSize={26} fontWeight={700}>
          Login
        </Typography>
        <LoginForm />
      </Box>
    </Box>
  );
}
