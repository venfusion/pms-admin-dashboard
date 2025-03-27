import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '#/shared/constants/routes.constants';
import { MuiStylesObject } from '#/shared/types/mui-styles.type';

import { type LoginFormData, loginFormDataSchema } from '../schemas/login-form.schema';
import { style } from '../styles/style';
import { LoginButton } from './login-button';
const styles = {
  passwordContainer: { display: 'flex', flexDirection: 'column', justifyContent: 'right' },
} satisfies MuiStylesObject;

export function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormDataSchema),
  });

  return (
    <Stack direction='column' spacing={2} mt={1}>
      <Typography>Enter your email below to login to your account</Typography>
      <form
        onSubmit={() => navigate(ROUTES.auth.login)}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>Email</Typography>
        <TextField
          id='email'
          placeholder='m@example.com'
          sx={{ ...style.inputs, marginBottom: 3 }}
          fullWidth={true}
          {...register('email')}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />
        <Box sx={styles.passwordContainer}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 600 }}>Password</Typography>
            <Typography
              sx={{ fontWeight: 600, cursor: 'pointer', fontSize: 14 }}
              onClick={() => navigate(ROUTES.auth.forgotPassword)}
            >
              Forgot your password?
            </Typography>
          </Box>
          <TextField
            fullWidth={true}
            type='password'
            sx={{ ...style.inputs, marginBottom: 4 }}
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 8, message: 'Password should be at least 8 characters' },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Box>
        <LoginButton />
      </form>
    </Stack>
  );
}
