import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../components/hook-form/FormProvider';
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from '@mui/material';
import RHFTextField from '../../components/hook-form/RHFTextField';
import { Eye, EyeSlash } from 'phosphor-react';
import { Link as RouterLink } from 'react-router-dom';

const LoginForm = () => {
  const [showPassword, SetShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email must be a valid email address'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  const defaultValues = {
    email: 'demo@abc.com',
    password: 'abc123',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // submit data to backend
    } catch (error) {
      console.log(error);
      reset();
      setError('afterSubmit', {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity='error'>{errors.afterSubmit.message} </Alert>
        )}

        <RHFTextField name='email' label='Email address' />

        <RHFTextField
          name='password'
          label='Password'
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => SetShowPassword(!showPassword)}>
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack alignItems='flex-end' sx={{ my: 2 }}>
        <Link
          to='/auth/reset-password'
          component={RouterLink}
          variant='body2'
          color='inherit'
          underline='always'
        >
          Forgot Password ?
        </Link>
      </Stack>

      <Button
        fullWidth
        color='inherit'
        size='large'
        type='submit'
        variant='contained'
        sx={{
          bgcolor: 'text.primary',
          color: (theme) =>
            theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
          '&:hover': {
            bgcolor: 'text.primary',
            color: (theme) =>
              theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
          },
        }}
      >
        Login
      </Button>
    </FormProvider>
  );
};

export default LoginForm;
