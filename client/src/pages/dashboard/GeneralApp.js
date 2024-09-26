import React from 'react';
import Chats from './Chats';
import { Box, Stack } from '@mui/material';
import Conversation from '../../components/Conversation';
import { useTheme } from '@emotion/react';
import Contact from '../../components/Contact';
import { useSelector } from 'react-redux';

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);

  return (
    <Stack direction='row' sx={{ width: '100%' }}>
      {/* chats */}
      <Chats />

      {/* conversaion */}
      <Box
        sx={{
          height: '100%',
          width: sidebar.open ? 'calc(100vw - 736px)' : 'calc(100vw - 416px)',
          backgroundColor:
            theme.palette.mode === 'light'
              ? '#F0F4FA'
              : theme.palette.background.paper,
        }}
      >
        <Conversation />
      </Box>

      {/* contact */}
      {sidebar.open && <Contact />}
    </Stack>
  );
};

export default GeneralApp;
