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

import { Address } from '../types/address.type';

const SAMPLE_DATA = Array.from({ length: 50 }, (_, index) => {
  const latitude = parseFloat((Math.random() * 180 - 90).toFixed(2));
  const longitude = parseFloat((Math.random() * 360 - 180).toFixed(2));
  const zipCode = String(Math.floor(Math.random() * 90000 + 10000));

  return {
    id: `address-${index}`,
    propertyId: `property-${index}`,
    companyId: `company-${index}`,
    number: `${Math.floor(Math.random() * 1000)}`,
    street: `Street ${index}`,
    city: `City ${index}`,
    state: `State ${index}`,
    zipCode,
    latitude,
    longitude,
  };
});

export function AddressesListPage() {
  const [rows, setRows] = useState<Address[]>([]);
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
        field: 'propertyId',
        headerName: 'Property ID',
        flex: 1,
        filterable: true,
      },
      {
        field: 'companyId',
        headerName: 'Company ID',
        flex: 1,
        filterable: true,
      },
      {
        field: 'number',
        headerName: 'Number',
        flex: 1,
        filterable: true,
      },
      {
        field: 'street',
        headerName: 'Street',
        flex: 1,
        filterable: true,
      },
      {
        field: 'city',
        headerName: 'City',
        flex: 1,
        filterable: true,
      },
      {
        field: 'state',
        headerName: 'State',
        flex: 1,
        filterable: true,
      },
      {
        field: 'zipCode',
        headerName: 'ZipCode',
        flex: 1,
      },
      {
        field: 'street',
        headerName: 'Street',
        flex: 1,
      },
      {
        field: 'longitude',
        headerName: 'Longitude',
        flex: 1,
      },
      {
        field: 'latitude',
        headerName: 'Latitude',
        flex: 1,
      },
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

  const applyFilters = useCallback((data: Address[], filterItems: GridFilterModel['items']) => {
    if (!filterItems.length) return data;

    return data.filter((address) =>
      filterItems.every((filter) => {
        const fieldValue = address[filter.field as keyof Address];
        const filterValue = String(filter.value || '').toLowerCase();

        if (!filterValue) return true;
        return String(fieldValue).toLowerCase().includes(filterValue);
      }),
    );
  }, []);

  const applySorting = useCallback((data: Address[], sortItems: GridSortModel) => {
    if (!sortItems.length) return data;

    const { field, sort } = sortItems[0];
    return [...data].sort((a, b) => {
      const aVal = a[field as keyof Address];
      const bVal = b[field as keyof Address];

      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sort === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }

      return 0;
    });
  }, []);

  const applyPagination = useCallback((data: Address[], page: number, pageSize: number) => {
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

  const getMockAddresses = useCallback(() => {
    try {
      // In prod, this would be an API call
      const filtered = applyFilters(SAMPLE_DATA, filterModel.items);
      const sorted = applySorting(filtered, sortModel);
      const paginated = applyPagination(sorted, paginationModel.page, paginationModel.pageSize);

      setTotalCount(filtered.length);
      setRows(paginated);
    } catch (error) {
      console.error('Error fetching addresses:', error);
      setRows([]);
      setTotalCount(0);
    }
  }, [filterModel.items, sortModel, paginationModel, applyFilters, applySorting, applyPagination]);

  useEffect(() => {
    getMockAddresses();
  }, [getMockAddresses]);

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
