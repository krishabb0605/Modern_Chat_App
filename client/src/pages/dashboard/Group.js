import React from 'react';
import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Search,
  SearchIcoWrapper,
  StyledInputBase,
} from '../../components/Search';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import { SimpleBarStyle } from '../../components/Scrollbar';
import { ChatList } from '../../data';
import ChatElement from '../../components/ChatElement';

const Group = () => {
  const theme = useTheme();
  return (
    <>
      <Stack direction='row' sx={{ width: '100%' }}>
        {/* Left */}

        <Box
          sx={{
            height: '100vh',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? '#F8FAFF'
                : theme.palette.background,
            width: 320,
            boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: '100vh' }}>
            <Stack>
              <Typography variant='h5'>Groups</Typography>
            </Stack>

            {/* Search */}

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

            {/* Add new group */}
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
            >
              <Typography
                variant='subtitle2'
                component={Link}
                sx={{ cursor: 'pointer' }}
              >
                Create New Group
              </Typography>

              <IconButton>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>

            <Divider />

            {/* Show chat */}

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
                {/* pinned group */}

                <Stack spacing={2.4}>
                  <Typography variant='subtitle2' sx={{ color: '#676767' }}>
                    Pinned
                  </Typography>

                  {ChatList.filter((el) => el.pinned).map((el) => {
                    return <ChatElement {...el} />;
                  })}
                </Stack>

                {/* All groups  */}

                <Stack spacing={2.4} sx={{ marginTop: '20px' }}>
                  <Typography variant='subtitle2' sx={{ color: '#676767' }}>
                    All Groups
                  </Typography>

                  {ChatList.filter((el) => !el.pinned).map((el) => {
                    return <ChatElement {...el} />;
                  })}
                </Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack>
        </Box>

        {/* Right */}

        {/* todo =>  reuse conversation component */}
      </Stack>
    </>
  );
};

export default Group;
