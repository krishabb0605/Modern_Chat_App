import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { UpdateSidebarType } from '../redux/slices/app';
import { faker } from '@faker-js/faker';
import { Shared_documents, Shared_links } from '../data';
import { DocMsg, LinkMsg } from './Conversation/MessageType';

const SharedMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 320, height: '100vh' }}>
      <Stack sx={{ height: '100%' }}>
        {/* Header */}

        <Box
          sx={{
            boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
            width: '100%',
            backgroundColor:
              theme.palette.mode === 'light'
                ? '#F8FAFF'
                : theme.palette.background,
          }}
        >
          <Stack
            direction='row'
            sx={{ height: '100%', p: 2 }}
            alignItems='center'
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType('CONTACT'));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant='subtitle2'>Shared Messages</Typography>
          </Stack>
        </Box>

        <Tabs
          sx={{ px: 2, pt: 2 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label='Media' />
          <Tab label='Links' />
          <Tab label='Docs' />
        </Tabs>

        {/* body */}

        <Stack
          sx={{
            height: '100%',
            position: 'relative',
            flexGrow: 1,
            overflowY: 'auto',
            scrollbarWidth: 'none',
          }}
          p={3}
          spacing={value === 1 ? 1 : 3}
        >
          {(() => {
            switch (value) {
              case 0:
                // Shared Images
                return (
                  <Grid container spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6].map((el) => {
                      return (
                        <Grid item xs={4}>
                          <img
                            src={faker.image.image()}
                            alt={faker.name.fullName()}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                );

              case 1:
                // Shared Links
                return Shared_links.map((el) => <LinkMsg el={el} />);
              case 2:
                //   Shared Docs
                return Shared_documents.map((el) => <DocMsg el={el} />);

              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SharedMessages;
