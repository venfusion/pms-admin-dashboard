import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { RegisterForm } from '../components/register-form';
import { style } from '../styles/style';

export function RegisterPage() {
  return (
    <Box sx={style.rootContainer}>
      <Box sx={style.form}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src='../../../../public/vite.svg' alt='logo' />
        </Box>
        <Typography fontSize={26} fontWeight={700} textAlign='center'>
          Create An Account
        </Typography>
        <RegisterForm />
      </Box>
    </Box>
  );
}
