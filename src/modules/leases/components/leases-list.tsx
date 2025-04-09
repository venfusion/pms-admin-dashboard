import { Delete, Edit, FilterAlt } from '@mui/icons-material';
import { Box, Button, Chip } from '@mui/material';
import {
  GridColDef,
  GridFilterModel,
  GridPaginationModel,
  GridRowId,
  GridSortModel,
} from '@mui/x-data-grid';
import { DateTime } from 'luxon';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { Table, TableAction } from '#/shared/components/table/table';
import { formatDate } from '#/shared/utils/format-date.util';

import { Lease, LeaseType, Status } from '../types/lease.type';
import { getRandomEnumValue } from '../utils/get-random-enum.util';
import { getStatusColor } from '../utils/get-status-color.util';

const SAMPLE_DATA = Array.from({ length: 100 }, (_, index) => ({
  id: `uuid${index}`,
  userId: `uuid${index}`,
  propertyId: `uuid${index}`,
  unitId: `uuid${index}`,
  addressId: `uuid${index}`,
  status: getRandomEnumValue(Status),
  type: getRandomEnumValue(LeaseType),
  rentalPlanId: `uuid${index}`,
  startDate: DateTime.now().minus({ days: index }).toISO(),
  endDate: DateTime.now().plus({ days: index }).toISO(),
}));

export function LeasesListPage() {
  const [rows, setRows] = useState<Lease[]>([]);
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
      { field: 'userId', headerName: 'User ID', flex: 1, filterable: true },
      { field: 'propertyId', headerName: 'Property ID', flex: 1 },
      { field: 'unitId', headerName: 'Unit ID', flex: 1 },
      { field: 'addressId', headerName: 'Address ID', flex: 1 },
      {
        field: 'status',
        headerName: 'Status',
        flex: 1,
        renderCell: (params) => {
          return (
            <Chip
              label={params.value}
              color={getStatusColor(params.value)}
              variant='outlined'
              size='small'
              sx={{ textTransform: 'capitalize' }}
            />
          );
        },
      },
      { field: 'type', headerName: 'Type', flex: 1 },
      { field: 'rentalPlanId', headerName: 'Rental-plan ID', flex: 1 },
      {
        field: 'startDate',
        headerName: 'Start date',
        flex: 1,
        renderCell: (params) => {
          if (!params.value) return null;
          return formatDate(params.value);
        },
      },
      {
        field: 'endDate',
        headerName: 'End date',
        flex: 1,
        renderCell: (params) => {
          if (!params.value) return null;
          return formatDate(params.value);
        },
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

  const applyFilters = useCallback((data: Lease[], filterItems: GridFilterModel['items']) => {
    if (!filterItems.length) return data;

    return data.filter((lease) =>
      filterItems.every((filter) => {
        const fieldValue = lease[filter.field as keyof Lease];
        const filterValue = String(filter.value || '').toLowerCase();

        if (!filterValue) return true;
        return String(fieldValue).toLowerCase().includes(filterValue);
      }),
    );
  }, []);

  const applySorting = useCallback((data: Lease[], sortItems: GridSortModel) => {
    if (!sortItems.length) return data;

    const { field, sort } = sortItems[0];
    return [...data].sort((a, b) => {
      const aVal = a[field as keyof Lease];
      const bVal = b[field as keyof Lease];

      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sort === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }

      if (field === 'startDate' || field === 'endDate') {
        const aDate = DateTime.fromISO(aVal as string).valueOf();
        const bDate = DateTime.fromISO(bVal as string).valueOf();
        return sort === 'asc' ? aDate - bDate : bDate - aDate;
      }

      return 0;
    });
  }, []);

  const applyPagination = useCallback((data: Lease[], page: number, pageSize: number) => {
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

  const getMockLeases = useCallback(() => {
    try {
      // In prod, this would be an API call
      setTimeout(() => {
        const filtered = applyFilters(SAMPLE_DATA, filterModel.items);
        const sorted = applySorting(filtered, sortModel);
        const paginated = applyPagination(sorted, paginationModel.page, paginationModel.pageSize);

        setTotalCount(filtered.length);
        setRows(paginated);
      }, 300);
    } catch (error) {
      console.error('Error fetching leases:', error);
      setRows([]);
      setTotalCount(0);
    }
  }, [filterModel.items, sortModel, paginationModel, applyFilters, applySorting, applyPagination]);

  useEffect(() => {
    getMockLeases();
  }, [getMockLeases]);

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
