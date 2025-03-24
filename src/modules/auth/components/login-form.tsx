import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { type LoginFormData, loginFormDataSchema } from '../schemas/login-form.schema';
import { LoginButton } from './login-button';
const styles = {
  passwordContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'right',
  },

  inputs: (marginBottom: number) => ({
    '& .MuiInputBase-root': { height: 45 },
    '& .MuiInputBase-input': { padding: '10px 12px' },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#333',
      },
    },
    marginBottom,
  }),
};

export function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormDataSchema),
  });

  function onSubmit() {
    navigate('/');
  }

  return (
    <Stack direction='column' spacing={2} mt={1}>
      <Typography>Enter tour email below to login to your account</Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>Email</Typography>
        <TextField
          id='email'
          placeholder='m@example.com'
          sx={styles.inputs(3)}
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
              onClick={() => navigate('/forgot-password')}
            >
              Forgot your password?
            </Typography>
          </Box>
          <TextField
            fullWidth={true}
            type='password'
            sx={styles.inputs(4)}
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 8, message: 'Password should be at least 8 characters' },
            })}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
        </Box>
        <LoginButton />
      </form>
    </Stack>
  );
}
