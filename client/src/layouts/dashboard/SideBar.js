import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import Logo from '../../assets/Images/logo.ico';
import { Nav_Buttons, Profile_Menu } from '../../data';
import { Gear, Moon, Sun } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import useSettings from '../../hooks/useSettings';
import { useLocation, useNavigate } from 'react-router-dom';

const getPath = (index) => {
  switch (index) {
    case 0:
      return '/app';

    case 1:
      return '/group';

    case 2:
      return '/call';

    case 3:
      return '/settings';

    default:
      break;
  }
};

const SideBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const index = pathname.includes('settings')
    ? 3
    : pathname.includes('call')
    ? 2
    : pathname.includes('group')
    ? 1
    : 0;

  const [selected, setSelected] = useState(index);
  const { onToggleMode } = useSettings();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getMenupath = (index) => {
    setSelected(0);
    switch (index) {
      case 0:
        return '/profile';

      case 1:
        setSelected(3);
        return '/settings';

      case 2:
        // update token
        return '/auth/login';

      default:
        break;
    }
  };

  return (
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
                  onClick={() => {
                    setSelected(el.index);
                    navigate(getPath(el.index));
                  }}
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
                onClick={() => {
                  setSelected(3);
                  navigate(getPath(3));
                }}
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

          <IconButton>
            <Avatar
              src={faker.image.fashion()}
              id='basic-button'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </IconButton>

          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((el, index) => (
                <MenuItem
                  onClick={(event) => {
                    handleClick(event);
                    navigate(getMenupath(index));
                    handleClose();
                  }}
                >
                  <Stack
                    sx={{ width: 100 }}
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                  >
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
