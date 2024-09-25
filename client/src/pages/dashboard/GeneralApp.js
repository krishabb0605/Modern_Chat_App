import React from 'react';
import Chats from './Chats';
import { Box, Stack } from '@mui/material';
import Conversation from '../../components/Conversation';
import { useTheme } from '@emotion/react';

const GeneralApp = () => {
  const theme = useTheme();

  return (
    <Stack direction='row' sx={{ width: '100%' }}>
      {/* chats */}
      <Chats />

      {/* conversaion */}
      <Box
        sx={{
          height: '100%',
          width: 'calc(100vw - 416px)',
          backgroundColor:
            theme.palette.mode === 'light'
              ? '#fff'
              : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
