import { Button, Dialog, DialogTitle } from '@mui/material';
import { useState } from 'react';

import { PolicyListFilterForm } from './policy-list-filter-form';

export function PolicyListFilterDialog() {
  const [open, setOpen] = useState<boolean>(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Filters</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth='md'
        sx={{
          '& .MuiPaper-root': {
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#1c1c1c' : '#f7f7f7'),
          },
        }}
      >
        <DialogTitle>Filters</DialogTitle>
        <PolicyListFilterForm handleClose={handleClose} />
      </Dialog>
    </>
  );
}
