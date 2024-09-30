import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../components/hook-form/FormProvider';
import { Button, Stack } from '@mui/material';

import RHFTextField from '../../components/hook-form/RHFTextField';
import RHFAutocomplete from '../../components/hook-form/RHFAutocomplete';

const MEMBERS = ['name1', 'name2', 'name3'];

const CreateGroupForm = ({ handleClose }) => {
  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    members: Yup.array().min(2, 'Must have at least 2 members'),
  });

  const defaultValues = {
    title: '',
    members: [],
  };

  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues: defaultValues,
  });

  const { reset, setError, handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      // submit data to backend
      console.log({ data });
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
        <RHFTextField name='title' label='Title' />

        <RHFAutocomplete
          name='members'
          label='Members'
          multiple
          freeSole
          options={MEMBERS.map((option) => option)}
          ChipProps={{ size: 'medium' }}
        />

        <Stack
          spacing={2}
          direction='row'
          alignItems='center'
          justifyContent='end'
        >
          <Button type='submit' onClick={handleClose}>
            Cancle
          </Button>
          <Button type='submit' variant='contained'>
            Create
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default CreateGroupForm;
