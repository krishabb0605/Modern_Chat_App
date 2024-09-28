import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import { ChatList } from '../../data';
import { SimpleBarStyle } from '../../components/Scrollbar';

import {
  Search,
  SearchIcoWrapper,
  StyledInputBase,
} from '../../components/Search';
import ChatElement from '../../components/ChatElement';

const Chats = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        width: 320,
        backgroundColor:
          theme.palette.mode === 'light'
            ? '#f8ffaff'
            : theme.palette.background.paper,
        boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: '100vh' }}>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography variant='h5'>Chats</Typography>

          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>

        <Stack sx={{ width: '100%' }}>
          <Search>
            <SearchIcoWrapper>
              <MagnifyingGlass color='#709CE6' />
            </SearchIcoWrapper>

            <StyledInputBase
              placeholder='Search ...'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Stack>

        <Stack spacing={1}>
          <Stack direction='row' alignItems='center' spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>

        <Stack
          spacing={2}
          direction='column'
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            height: '100%',
            scrollbarWidth: 'none',
          }}
        >
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack spacing={2.4}>
              <Typography variant='subtitle2' sx={{ color: '#676767' }}>
                Pinned
              </Typography>
              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </Stack>

            <Stack spacing={2.4} sx={{ marginTop: '20px' }}>
              <Typography variant='subtitle2' sx={{ color: '#676767' }}>
                All Chats
              </Typography>

              {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
