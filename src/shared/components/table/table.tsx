import { SxProps, Theme } from '@mui/system';
import {
  DataGrid,
  DataGridProps,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
  GridRowParams,
  GridRowSelectionModel,
  GridToolbarProps,
  ToolbarPropsOverrides,
} from '@mui/x-data-grid';
import { useMemo, useState } from 'react';

import { TableToolbar } from './table-toolbar';

type TableBulkActions = Array<{
  label: string;
  handler: (ids: GridRowSelectionModel) => void;
}>;

type TableAction = {
  label: string;
  handler: (id: GridRowId) => void;
  icon?: React.ReactElement;
  color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  render?: (params: GridRowParams) => React.ReactElement;
};

type TableProps<T extends object[]> = Omit<DataGridProps, 'columns' | 'rows'> & {
  columns: GridColDef<T[number]>[];
  rows: T;
  customToolbar?: React.JSXElementConstructor<GridToolbarProps & ToolbarPropsOverrides>;
  rowActions?: TableAction[];
  bulkActions?: TableBulkActions;
};

export function Table<T extends object[]>({
  columns,
  rows,
  sx,
  customToolbar,
  getRowId,
  rowCount,
  rowActions,
  bulkActions,
  ...props
}: TableProps<T>) {
  const actionsColumn: GridColDef = useMemo(
    () => ({
      field: 'actions',
      headerName: '',
      type: 'actions',
      width: 100,
      align: 'right',
      headerAlign: 'right',
      flex: 0.5,
      getActions: (params: GridRowParams) =>
        rowActions?.map((action) =>
          action.render ? (
            <GridActionsCellItem
              label={action.label}
              onClick={() => action.handler(params.id)}
              icon={action.icon}
              color={action.color}
              showInMenu
            >
              {action.render(params)}
            </GridActionsCellItem>
          ) : (
            <GridActionsCellItem
              key={action.label}
              label={action.label}
              onClick={() => action.handler(params.id)}
              icon={action.icon}
              color={action.color}
              showInMenu
            />
          ),
        ) || [],
    }),
    [rowActions],
  );

  const finalColumns = useMemo(
    () => (rowActions?.length ? [...columns, actionsColumn] : columns),
    [actionsColumn, columns, rowActions],
  );

  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);

  const handleRowSelection = (selectionModel: GridRowSelectionModel) => {
    setSelectedRows(selectionModel);
  };

  const defaultSx: SxProps<Theme> = {
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-cell:focus': {
      outline: 'none',
    },
    borderRadius: 1,
  };

  return (
    <DataGrid
      columns={finalColumns}
      rows={rows}
      sx={{ ...defaultSx, ...sx }}
      checkboxSelection
      pagination
      pageSizeOptions={[5, 10, 25, 50, 100]}
      slots={{
        toolbar: () => (
          <TableToolbar
            selectedRows={selectedRows}
            bulkActions={bulkActions}
            toolbar={customToolbar}
          />
        ),
      }}
      slotProps={{
        toolbar: { printOptions: { disableToolbarButton: true } },
      }}
      getRowId={getRowId}
      rowCount={rowCount || rows.length}
      onRowSelectionModelChange={handleRowSelection}
      paginationMode='server'
      filterMode='server'
      sortingMode='server'
      {...props}
    />
  );
}
