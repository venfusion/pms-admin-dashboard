import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LoginForm } from '../components/login-form';
import { style } from '../styles/style';

export function LoginRoute() {
  return (
    <Box sx={style.rootContainer}>
      <Box sx={style.form}>
        <Typography fontSize={26} fontWeight={700}>
          Login
        </Typography>
        <LoginForm />
      </Box>
    </Box>
  );
}
