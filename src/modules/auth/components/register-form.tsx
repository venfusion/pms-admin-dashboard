import { zodResolver } from '@hookform/resolvers/zod';
import { AccountCircle, EmailRounded, SecurityRounded } from '@mui/icons-material';
import { Checkbox, FormControlLabel, InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '#/shared/constants/routes.constants';
import { MuiStylesObject } from '#/shared/types/mui-styles.type';

import { type RegisterFormData, registerSchema } from '../schemas';
import { style } from '../styles/style';
import { SubmitButton } from './submit-button';

const styles = {
  passwordContainer: { display: 'flex', flexDirection: 'column', justifyContent: 'right' },
} satisfies MuiStylesObject;

export function RegisterForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <Stack direction='column' spacing={2} mt={1}>
      <Typography textAlign={'center'}>Enter your information to get started</Typography>
      <form
        onSubmit={handleSubmit(() => {
          navigate(ROUTES.auth.register);
        })}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>First Name</Typography>
        <TextField
          id='firstName'
          placeholder='John'
          sx={{ ...style.inputs, marginBottom: 3 }}
          fullWidth={true}
          {...register('firstName')}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName?.message}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <Typography sx={{ fontWeight: 600 }}>Last Name</Typography>
        <TextField
          id='lastName'
          placeholder='Doe'
          sx={{ ...style.inputs, marginBottom: 3 }}
          fullWidth={true}
          {...register('lastName')}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName?.message}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <Typography sx={{ fontWeight: 600 }}>Email</Typography>
        <TextField
          id='email'
          placeholder='m@example.com'
          sx={{ ...style.inputs, marginBottom: 3 }}
          fullWidth={true}
          {...register('email')}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <EmailRounded />
              </InputAdornment>
            ),
          }}
        />
        <Box sx={styles.passwordContainer}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 600 }}>Password</Typography>
          </Box>
          <TextField
            fullWidth={true}
            type='password'
            placeholder='Create a password'
            sx={{ ...style.inputs }}
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 8, message: 'Password should be at least 8 characters' },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SecurityRounded />
                </InputAdornment>
              ),
            }}
          />
          <Typography sx={{ marginBottom: 2, fontSize: 12, color: '#A0A0A0' }}>
            Password must be at least 8 characters long
          </Typography>
        </Box>
        <Box sx={styles.passwordContainer}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 600 }}>Confirm Password</Typography>
          </Box>
          <TextField
            fullWidth={true}
            type='password'
            placeholder='Confirm your password'
            sx={{ ...style.inputs, marginBottom: 2 }}
            {...register('confirmPassword', {
              required: 'Confirm password is required',
              minLength: { value: 8, message: 'Confirm password should be at least 8 characters' },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SecurityRounded />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label='I agree to the Terms of Service and Privacy Policy'
          sx={{ marginBottom: 2 }}
        />

        <SubmitButton context='register' />
      </form>
    </Stack>
  );
}
