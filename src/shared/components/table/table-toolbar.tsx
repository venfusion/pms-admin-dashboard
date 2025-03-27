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
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 1,
        paddingRight: 2.6,
      }}
    >
      <Toolbar />
      <Box>
        <TableBulkActionsMenu bulkActions={bulkActions} selectedRows={selectedRows} />
      </Box>
    </GridToolbarContainer>
  );
}
