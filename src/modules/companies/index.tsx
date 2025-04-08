import { Delete, Edit, FilterAlt } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import {
  GridColDef,
  GridFilterModel,
  GridPaginationModel,
  GridRowId,
  GridSortModel,
} from '@mui/x-data-grid';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { Table, TableAction } from '#/shared/components/table/table';

import { Company } from './types/company.type';

const SAMPLE_DATA = Array.from({ length: 100 }, (_, index) => ({
  id: `uuid${index}`,
  name: `Company ${index}`,
  marketingName: `Marketing company ${index}`,
  logo: 'https://picsum.photos/300/300',
  description: `Description for company ${index}`,
}));

export function CompaniesListPage() {
  const [rows, setRows] = useState<Company[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [filterModel, setFilterModel] = useState<GridFilterModel>({ items: [] });
  const [sortModel, setSortModel] = useState<GridSortModel>([]);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 5,
  });

  const rowActions = useMemo<TableAction[]>(
    () => [
      {
        label: 'Edit',
        icon: <Edit />,
        handler: (id: GridRowId) => console.log('Editing:', id),
        color: 'primary',
      },
      {
        label: 'Delete',
        icon: <Delete />,
        handler: (id: GridRowId) => console.log('Deleting:', id),
        color: 'error',
      },
    ],
    [],
  );

  const columns = useMemo<GridColDef[]>(
    () => [
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
    ],
    [],
  );

  const handleFilterChange = useCallback((model: GridFilterModel) => {
    setFilterModel(model);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);

  const handleSortChange = useCallback((model: GridSortModel) => {
    setSortModel(model);
  }, []);

  const handlePaginationChange = useCallback((model: GridPaginationModel) => {
    setPaginationModel(model);
  }, []);

  const applyFilters = useCallback((data: Company[], filterItems: GridFilterModel['items']) => {
    if (!filterItems.length) return data;

    return data.filter((company) =>
      filterItems.every((filter) => {
        const fieldValue = company[filter.field as keyof Company];
        const filterValue = String(filter.value || '').toLowerCase();

        if (!filterValue) return true;
        return String(fieldValue).toLowerCase().includes(filterValue);
      }),
    );
  }, []);

  const applySorting = useCallback((data: Company[], sortItems: GridSortModel) => {
    if (!sortItems.length) return data;

    const { field, sort } = sortItems[0];
    return [...data].sort((a, b) => {
      const aVal = a[field as keyof Company];
      const bVal = b[field as keyof Company];

      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sort === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }

      return 0;
    });
  }, []);

  const applyPagination = useCallback((data: Company[], page: number, pageSize: number) => {
    const start = page * pageSize;
    return data.slice(start, start + pageSize);
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilterModel({ items: [] });
    setSortModel([]);
    setPaginationModel({
      page: 0,
      pageSize: 5,
    });
  }, []);

  const getMockCompanies = useCallback(() => {
    try {
      // In prod, this would be an API call
      const filtered = applyFilters(SAMPLE_DATA, filterModel.items);
      const sorted = applySorting(filtered, sortModel);
      const paginated = applyPagination(sorted, paginationModel.page, paginationModel.pageSize);

      setTotalCount(filtered.length);
      setRows(paginated);
    } catch (error) {
      console.error('Error fetching companys:', error);
      setRows([]);
      setTotalCount(0);
    }
  }, [filterModel.items, sortModel, paginationModel, applyFilters, applySorting, applyPagination]);

  useEffect(() => {
    getMockCompanies();
  }, [getMockCompanies]);

  return (
    <Box>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant='outlined'
          startIcon={<FilterAlt />}
          onClick={handleResetFilters}
          disabled={filterModel.items.length === 0 && sortModel.length === 0}
        >
          Reset Filters
        </Button>
      </Box>
      <Table
        columns={columns}
        rows={rows}
        rowActions={rowActions}
        getRowId={(row) => row.id}
        rowCount={totalCount}
        filterModel={filterModel}
        onFilterModelChange={handleFilterChange}
        sortModel={sortModel}
        onSortModelChange={handleSortChange}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationChange}
        pageSizeOptions={[5, 10, 25, 50, 100]}
      />
    </Box>
  );
}
