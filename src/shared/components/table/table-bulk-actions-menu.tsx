import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, Menu, MenuItem } from '@mui/material';
import { GridRowSelectionModel } from '@mui/x-data-grid';
import { useState } from 'react';

type BulkAction = {
  label: string;
  handler: (ids: GridRowSelectionModel) => void;
};

type TableBulkActionsMenuProps = {
  bulkActions?: BulkAction[];
  selectedRows?: GridRowSelectionModel;
};

export function TableBulkActionsMenu({ bulkActions, selectedRows }: TableBulkActionsMenuProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  if (!selectedRows || !bulkActions?.length || !selectedRows?.length) return null;

  return (
    <>
      <Button
        variant='contained'
        disableElevation
        onClick={(e) => setAnchorEl(e.currentTarget)}
        endIcon={<KeyboardArrowDownIcon />}
        size='small'
      >
        Actions
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        slotProps={{
          paper: {
            sx: { minWidth: 120 },
          },
        }}
      >
        {bulkActions.map(({ label, handler }) => (
          <MenuItem
            key={label}
            onClick={() => {
              handler(selectedRows);
              setAnchorEl(null);
            }}
            sx={{ py: 0.5, minHeight: 'auto', fontSize: '0.875rem' }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
