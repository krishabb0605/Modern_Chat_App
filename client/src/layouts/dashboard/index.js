import { Avatar, Box, Divider, IconButton, Stack } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../../assets/Images/logo.ico';
import { Nav_Buttons } from '../../data';
import { Gear, Moon, Sun } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import useSettings from '../../hooks/useSettings';

const DashboardLayout = () => {
  const theme = useTheme();

  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

  return (
    <Stack direction='row'>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
          height: '100vh',
          width: 100,
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          justifyContent='space-between'
          sx={{ width: '100%', height: '100%' }}
          spacing={3}
        >
          <Stack alignItems='center' spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 2.5,
              }}
            >
              <img src={Logo} alt='Chat app logo' />
            </Box>

            <Stack
              sx={{ width: 'max-content' }}
              direction='column'
              alignItems='center'
              spacing={3}
            >
              {Nav_Buttons.map((el) =>
                el.index === selected ? (
                  <Box
                    p={1}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton
                      sx={{ width: 'max-content', color: '#fff' }}
                      key={el.index}
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => setSelected(el.index)}
                    sx={{
                      width: 'max-content',
                      color:
                        theme.palette.mode === 'light'
                          ? '#000'
                          : theme.palette.text.primary,
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                )
              )}

              <Divider sx={{ width: '48px' }} />
              {selected === 3 ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ width: 'max-content', color: '#fff' }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSelected(3)}
                  sx={{
                    width: 'max-content',
                    color:
                      theme.palette.mode === 'light'
                        ? '#000'
                        : theme.palette.text.primary,
                  }}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>

          <Stack spacing={4}>
            {/* switch */}

            <IconButton
              onClick={onToggleMode}
              sx={{ color: theme.palette.mode === 'light' ? 'black' : 'white' }}
            >
              {theme.palette.mode === 'light' ? <Moon /> : <Sun />}
            </IconButton>

            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
