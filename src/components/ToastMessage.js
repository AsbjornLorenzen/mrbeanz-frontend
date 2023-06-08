import React, { useState } from 'react';
import { Snackbar, SnackbarContent, Button } from '@mui/material';

const ToastMessage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Show Toast
      </Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <SnackbarContent message="Successfully submitted rating" />
      </Snackbar>
    </>
  );
};

export default ToastMessage;