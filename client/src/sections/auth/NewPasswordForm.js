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
  Stack,
} from '@mui/material';
import RHFTextField from '../../components/hook-form/RHFTextField';
import { Eye, EyeSlash } from 'phosphor-react';

const NewPasswordForm = () => {
  const [showPassword, SetShowPassword] = useState(false);

  const NewPasswordSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref('newPassword'), null], 'Password must match'),
  });

  const defaultValues = {
    newPassword: '',
    confirmPassword: '',
  };

  const methods = useForm({
    resolver: yupResolver(NewPasswordSchema),
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

        <RHFTextField
          name='newPassword'
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

        <RHFTextField
          name='confirmPassword'
          label='confirmPassword'
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
          Submit
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default NewPasswordForm;
