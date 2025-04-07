import { Add, Delete, Edit } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { useMemo } from 'react';

import { Table } from '#/shared/components/table/table';

import { useProperties } from './hooks/use-properties';

export function PropertiesPage() {
  const { data } = useProperties();

  const columns: GridColDef[] = useMemo(
    () => [
      { field: 'name', headerName: 'Name', width: 240 },
      { field: 'location', headerName: 'Location', width: 180 },
      {
        field: 'minPersonalPropertyCoverage',
        headerName: 'Min. personal property coverage',
        width: 400,
      },
      {
        field: 'minPersonalLiabilityCoverage',
        headerName: 'Min. personal liability coverage',
        width: 400,
      },
    ],
    [],
  );

  const indexedColumns: GridColDef[] = useMemo(
    () => [
      {
        field: 'index',
        headerName: '#',
        width: 40,
        renderCell: ({ api, id }) => api.getRowIndexRelativeToVisibleRows(id) + 1,
        type: 'number',
      },
      ...columns,
    ],
    [columns],
  );

  const mockProperties = [
    {
      id: '03b2c73c-86cb-4e63-a7c1-30b10e8e5e5f',
      name: 'Hillside Retreat',
      location: 'Toronto, Canada',
      minPersonalPropertyCoverage: '400.00',
      minPersonalLiabilityCoverage: '130.00',
      createdAt: '2025-04-07T13:13:15.011Z',
    },
    {
      id: '07aa7543-e018-4567-96dc-48e6a4c73e0f',
      name: 'Lakeside Villa',
      location: 'Los Angeles, CA',
      minPersonalPropertyCoverage: '200.00',
      minPersonalLiabilityCoverage: '75.00',
      createdAt: '2025-04-07T13:13:15.011Z',
    },
    {
      id: '08ac7e3b-a2a4-400d-a698-49eb23ca79e6',
      name: 'Pacific Heights',
      location: 'Chicago, IL',
      minPersonalPropertyCoverage: '150.00',
      minPersonalLiabilityCoverage: '70.00',
      createdAt: '2025-04-07T13:13:15.011Z',
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
        rows={data?.data.properties || mockProperties}
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
}
