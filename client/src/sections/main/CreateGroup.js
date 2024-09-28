import React from 'react';
import { Dialog, DialogContent, DialogTitle, Slide } from '@mui/material';
import CreateGroupForm from '../auth/CreateGroupForm';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const CreateGroup = ({ open, handleClose }) => {
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
      {/* Title */}

      <DialogTitle sx={{ mb: 3 }}>Create New group</DialogTitle>

      {/* Content */}

      <DialogContent>
        {/* Form  */}

        <CreateGroupForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroup;
