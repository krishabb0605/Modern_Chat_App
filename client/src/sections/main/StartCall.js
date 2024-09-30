import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from '@mui/material';
import React from 'react';
import {
  Search,
  SearchIcoWrapper,
  StyledInputBase,
} from '../../components/Search';
import { MagnifyingGlass } from 'phosphor-react';
import { CallElement } from '../../components/CallElement';
import { MembersList } from '../../data';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth='xs'
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      sx={{ p: 4 }}
    >
      <DialogTitle sx={{ mb: 3 }}>Start Call</DialogTitle>

      <DialogContent>
        <Stack spacing={3}>
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
          {/* call list */}
          {MembersList.map((el) => (
            <CallElement {...el} />
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default StartCall;
