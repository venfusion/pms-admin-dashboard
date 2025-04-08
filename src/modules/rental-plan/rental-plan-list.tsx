import { Add, Delete, Edit } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useMemo } from 'react';

import { Table } from '#/shared/components/table/table';

export const RentalPlanList = () => {
  const columns: GridColDef[] = useMemo(
    () => [
      { field: 'name', headerName: 'Name', flex: 1 },
      { field: 'monthly', headerName: 'Monthly', flex: 1 },
      { field: 'quarterly', headerName: 'Quarterly', flex: 1 },
      { field: 'semiannually', headerName: 'Semiannually', flex: 1 },
      { field: 'yearly', headerName: 'Yearly', flex: 1 },
      { field: 'createdAt', headerName: 'Created', flex: 1 },
    ],
    [],
  );

  const indexedColumns: GridColDef[] = useMemo(
    () => [
      {
        field: 'index',
        headerName: '#',
        width: 60,
        renderCell: ({ api, id }) => api.getRowIndexRelativeToVisibleRows(id) + 1,
        type: 'number',
      },
      ...columns,
    ],
    [columns],
  );
  const mockRentalPlan = [
    {
      id: 1,
      name: 'Saho Complex',
      monthly: 5000,
      quarterly: 10000,
      semiannually: 15000,
      yearly: 20000,
      createdAt: 'September 31th, 2009',
    },
    {
      id: 2,
      name: 'Daho Buildings',
      monthly: 12000,
      quarterly: 15000,
      semiannually: null,
      yearly: null,
      createdAt: 'June 10th, 2022',
    },
  ];
  return (
    <Stack spacing={2}>
      <Box display='flex' justifyContent='flex-end' mb={2}>
        <Button variant='contained' color='primary' startIcon={<Add />}>
          Add Rental Plan
        </Button>
      </Box>
      <Table
        columns={indexedColumns}
        rows={mockRentalPlan}
        rowActions={[
          { label: 'Edit', icon: <Edit />, color: 'primary', handler: (id) => alert(`Edit ${id}`) },
          {
            label: 'Delete',
            icon: <Delete />,
            color: 'error',
            handler: (id) => alert(`Delete ${id}`),
          },
        ]}
        bulkActions={[{ label: 'Delete Selected', handler: (ids) => console.log('Delete', ids) }]}
        pagination
      />
    </Stack>
  );
};
