import { Container, Stack } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../../assets/Images/logo.ico';

const MainLayout = () => {
  return (
    <>
      <Container sx={{ pt: 5 }} maxWidth='sm'>
        <Stack spacing={5}>
          <Stack sx={{ width: '100%' }} direction='column' alignItems='center'>
            <img src={Logo} alt='logo' style={{ height: 120, width: 120 }} />
          </Stack>
        </Stack>

        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
