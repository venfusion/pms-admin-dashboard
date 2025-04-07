import { Box } from '@mui/material';
import { GridToolbar, GridToolbarContainer, GridToolbarProps } from '@mui/x-data-grid';
import { GridRowSelectionModel } from '@mui/x-data-grid';

import { TableBulkActionsMenu } from './table-bulk-actions-menu';

type TableToolbarProps = {
  toolbar?: React.JSXElementConstructor<GridToolbarProps>;
  bulkActions?: { label: string; handler: (ids: GridRowSelectionModel) => void }[];
  selectedRows: GridRowSelectionModel;
};

export function TableToolbar({
  toolbar: Toolbar = GridToolbar,
  bulkActions,
  selectedRows,
}: TableToolbarProps) {
  return (
    <GridToolbarContainer
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Toolbar />
      {selectedRows.length > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', p: 1 }}>
          <TableBulkActionsMenu bulkActions={bulkActions} selectedRows={selectedRows} />
        </Box>
      )}
    </GridToolbarContainer>
  );
}
