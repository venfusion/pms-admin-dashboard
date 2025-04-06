import { Delete, Edit } from '@mui/icons-material';
import { Box } from '@mui/material';
import { GridColDef, GridFilterModel, GridRowId } from '@mui/x-data-grid';
import { useCallback, useEffect, useState } from 'react';

import { Table, TableAction } from '#/shared/components/table/table';

import { Lease } from './types/lease.type';

const rowActions: TableAction[] = [
  {
    label: 'Edit',
    icon: <Edit />,
    handler: (id: GridRowId) => {
      console.log('Editing:', id);
    },

    color: 'primary',
  },
  {
    label: 'Delete',
    icon: <Delete />,
    handler: (id: GridRowId) => {
      console.log('Deleting:', id);
    },
    color: 'error',
  },
];

const columns: GridColDef[] = [
  {
    field: 'userId',
    headerName: 'User ID',
    flex: 1,
    filterable: true,
  },
  { field: 'propertyId', headerName: 'Property ID', flex: 1 },
  { field: 'unitId', headerName: 'Unit ID', flex: 1 },
  { field: 'addressId', headerName: 'Address ID', flex: 1 },
  { field: 'status', headerName: 'Status', flex: 1 },
  { field: 'type', headerName: 'Type', flex: 1 },
  { field: 'rentalPlanId', headerName: 'Rental-plan ID', flex: 1 },
  { field: 'startDate', headerName: 'Start date', flex: 1 },
  { field: 'endDate', headerName: 'End date', flex: 1 },
];

const SAMPLE_DATA = [
  {
    id: 'uuid1',
    userId: 'uuid1',
    propertyId: 'uuid1',
    unitId: 'uuid1',
    addressId: 'uuid1',
    status: 'draft',
    type: 'monthly',
    rentalPlanId: 'uuid1',
    startDate: '2023-01-01',
    endDate: '2024-01-01',
  },
  {
    id: 'uuid2',
    userId: 'uuid2',
    propertyId: 'uuid2',
    unitId: 'uuid2',
    addressId: 'uuid2',
    status: 'active',
    type: 'weekly',
    rentalPlanId: 'uuid2',
    startDate: '2023-02-01',
    endDate: '2024-02-01',
  },
  {
    id: 'uuid3',
    userId: 'uuid3',
    propertyId: 'uuid3',
    unitId: 'uuid3',
    addressId: 'uuid3',
    status: 'pending',
    type: 'daily',
    rentalPlanId: 'uuid3',
    startDate: '2023-03-01',
    endDate: '2024-03-01',
  },
];

export function LeasesListPage() {
  const [rows, setRows] = useState<Lease[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });

  const handleFilterChange = (model: GridFilterModel) => {
    setFilterModel(model);
  };

  const fetchFilteredData = useCallback(async () => {
    setLoading(true);
    try {
      const typeFilter = filterModel.items.find((item) => item.field === 'type')?.value || '';

      // In prod, this would be an API call
      // const response = await apiClient.get(`/companies?name=${typeFilter}`);
      // const data = await response.data

      let filteredData = [...SAMPLE_DATA].map((lease) => ({
        ...lease,
        startDate: new Date(lease.startDate),
        endDate: new Date(lease.endDate),
      }));
      if (typeFilter) {
        filteredData = filteredData.filter((lease) =>
          lease.type.toLowerCase().includes(String(typeFilter).toLowerCase()),
        );
      }

      setRows(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [filterModel]);

  useEffect(() => {
    fetchFilteredData();
  }, [fetchFilteredData]);

  return (
    <Box>
      <Table
        columns={columns}
        rows={rows}
        rowActions={rowActions}
        getRowId={(row) => row.id}
        loading={loading}
        filterModel={filterModel}
        onFilterModelChange={handleFilterChange}
      />
    </Box>
  );
}
