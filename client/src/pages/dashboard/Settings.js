import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
} from 'phosphor-react';
import { faker } from '@faker-js/faker';
import Shortcuts from '../../sections/settings/Shortcuts';
import ThemeDialouge from '../../sections/settings/ThemeDialouge';

const Settings = () => {
  const theme = useTheme();

  const [openTheme, setOpenTheme] = useState(false);

  const handleOpenTheme = () => {
    setOpenTheme(true);
  };

  const handleCloseTheme = () => {
    setOpenTheme(false);
  };
  const [openShortcuts, setOpenShortcuts] = useState(false);

  const handleOpenShortcuts = () => {
    setOpenShortcuts(true);
  };

  const handleCloseShortcuts = () => {
    setOpenShortcuts(false);
  };

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: 'Notifications',
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: 'Privacy',
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: 'Security',
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: 'Theme',
      onclick: handleOpenTheme,
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: 'Chat Wallpaper',
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: 'Request Account Info',
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: 'Keyboard Shortcuts',
      onclick: handleOpenShortcuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: 'Help',
      onclick: () => {},
    },
  ];

  return (
    <>
      <Stack direction='row' width='100%'>
        {/* Left Panel */}

        <Box
          sx={{
            overflowY: 'auto',
            scrollbarWidth: 'none',
            height: '100vh',
            width: 320,
            backgroundColor:
              theme.palette.mode === 'light'
                ? '#F8FAFF'
                : theme.palette.background,
            boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
          }}
        >
          <Stack spacing={5} p={4}>
            {/* Header */}

            <Stack direction='row' alignItems='center' spacing={3}>
              <IconButton>
                <CaretLeft size={24} color='#4b4b4b' />
              </IconButton>

              <Typography variant='h6'>Settings</Typography>
            </Stack>

            {/* profile section */}

            <Stack direction='row' spacing={3}>
              <Avatar
                src={faker.image.cats()}
                alt={faker.name.fullName()}
                sx={{ width: 56, height: 56 }}
              />

              <Stack spacing={0.5}>
                <Typography variant='article'>
                  {faker.name.fullName()}
                </Typography>
                <Typography variant='body2'>{faker.random.word()}</Typography>
              </Stack>
            </Stack>

            {/* List of options */}

            <Stack spacing={4}>
              {list.map(({ key, icon, title, onclick }) => {
                return (
                  <>
                    <Stack
                      onClick={onclick}
                      spacing={2}
                      sx={{ cursor: 'pointer' }}
                    >
                      <Stack direction='row' spacing={2} alignItems='center'>
                        <IconButton>{icon}</IconButton>
                        <Typography>{title}</Typography>
                      </Stack>
                      {key !== 7 && <Divider />}
                    </Stack>
                  </>
                );
              })}
            </Stack>
          </Stack>
        </Box>

        {/* Right Panel */}
      </Stack>
      {openShortcuts && (
        <Shortcuts open={openShortcuts} handleClose={handleCloseShortcuts} />
      )}

      {openTheme && (
        <ThemeDialouge open={openTheme} handleClose={handleCloseTheme} />
      )}
    </>
  );
};

export default Settings;
