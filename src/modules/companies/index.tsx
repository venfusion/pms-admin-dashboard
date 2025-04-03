import { Delete, Edit } from '@mui/icons-material';
import { Box } from '@mui/material';
import { GridColDef, GridFilterModel, GridRowId } from '@mui/x-data-grid';
import { useCallback, useEffect, useState } from 'react';

import { Table, TableAction } from '#/shared/components/table/table';

import { Company } from './types/company.type';

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
    field: 'name',
    headerName: 'Name',
    flex: 1,
    filterable: true,
  },
  { field: 'marketingName', headerName: 'Marketing Name', flex: 1 },
  {
    field: 'logo',
    headerName: 'Logo',
    flex: 0.5,
    renderCell: (params) => <img src={params.value} alt='logo' width={50} height={50} />,
  },
  { field: 'description', headerName: 'Description', flex: 2 },
];

const SAMPLE_DATA = [
  {
    id: 'random-uuid1',
    name: 'Coca Cola',
    marketingName: 'CC Technologies',
    logo: 'https://picsum.photos/300/300',
    description: 'Drinks company',
  },
  {
    id: 'random-uuid2',
    name: 'Apple Inc.',
    marketingName: 'Apple',
    logo: 'https://picsum.photos/300/200',
    description: 'Technology company',
  },
  {
    id: 'random-uuid3',
    name: 'Google',
    marketingName: 'Alphabet',
    logo: 'https://picsum.photos/300/250',
    description: 'Search engine giant',
  },
  {
    id: 'random-uuid4',
    name: 'Microsoft',
    marketingName: 'MS Corp',
    logo: 'https://picsum.photos/300/270',
    description: 'Software company',
  },
];

export function CompaniesPage() {
  const [rows, setRows] = useState<Company[]>([]);
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
      const nameFilter = filterModel.items.find((item) => item.field === 'name')?.value || '';

      // In prod, this would be an API call
      // const response = await apiClient.get(`/companies?name=${nameFilter}`);
      // const data = await response.data

      let filteredData = [...SAMPLE_DATA];
      if (nameFilter) {
        filteredData = filteredData.filter((company) =>
          company.name.toLowerCase().includes(String(nameFilter).toLowerCase()),
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
