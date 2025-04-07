import type { ChipProps } from '@mui/material';
import { Chip, Typography } from '@mui/material';
import { GridColDef, GridPaginationModel, GridRenderCellParams, GridRowId } from '@mui/x-data-grid';
import { useSearchParams } from 'react-router';

import { Table } from '#/shared/components/table/table';
import { formatCurrency } from '#/shared/utils/format-currency.util';
import { formatDate } from '#/shared/utils/format-date.util';

import { usePolicies } from '../hooks/queries/use-policies';
import { Policy, PolicyPaymentType, PolicyStatus } from '../types/policy.type';
import { PolicyListTableToolbar } from './policy-list-table-toolbar';

type ChipColor = ChipProps['color'];

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Policy ID',
    flex: 1,
    minWidth: 150,
    renderCell: (params: GridRenderCellParams<Policy, string>) => (
      <Typography variant='body2' sx={{ fontFamily: 'monospace' }}>
        {params.value?.substring(0, 8)}...
      </Typography>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 0.8,
    minWidth: 120,
    renderCell: (params: GridRenderCellParams<Policy, string>) => {
      const status = params.value as PolicyStatus;
      const statusColors: Record<PolicyStatus, ChipColor> = {
        [PolicyStatus.ACTIVE]: 'success',
        [PolicyStatus.DRAFT]: 'default',
        [PolicyStatus.CANCELLED]: 'error',
        [PolicyStatus.EXPIRED]: 'warning',
        [PolicyStatus.TERMINATED]: 'error',
      };

      return <Chip label={status} color={statusColors[status]} size='small' variant='filled' />;
    },
  },
  {
    field: 'effectiveDate',
    headerName: 'Effective Date',
    flex: 1,
    minWidth: 120,
    valueFormatter: (value: string | null | undefined) => (value ? formatDate(value) : 'N/A'),
  },
  {
    field: 'expiryDate',
    headerName: 'Expiry Date',
    flex: 1,
    minWidth: 120,
    valueFormatter: (value: string | null | undefined) => (value ? formatDate(value) : 'N/A'),
  },
  {
    field: 'paymentType',
    headerName: 'Payment',
    flex: 0.8,
    minWidth: 100,
    valueFormatter: (value: PolicyPaymentType | null | undefined) => {
      if (!value) return 'N/A';
      return value === PolicyPaymentType.MONTHLY ? 'Monthly' : 'Yearly';
    },
  },
  {
    field: 'price',
    headerName: 'Price',
    flex: 0.8,
    minWidth: 100,
    valueFormatter: (value: string | null | undefined) => {
      return value ? formatCurrency(value) : 'N/A';
    },
  },
  {
    field: 'deductible',
    headerName: 'Deductible',
    flex: 0.8,
    minWidth: 100,
    valueFormatter: (value: string | null | undefined) => {
      return value ? formatCurrency(value) : 'N/A';
    },
  },
  {
    field: 'personalPropertyCoverage',
    headerName: 'Property Coverage',
    flex: 1,
    minWidth: 150,
    valueFormatter: (value: string | null | undefined) => {
      return value ? formatCurrency(value) : 'N/A';
    },
  },
  {
    field: 'personalLiabilityCoverage',
    headerName: 'Liability Coverage',
    flex: 1,
    minWidth: 150,
    valueFormatter: (value: string | null | undefined) => {
      return value ? formatCurrency(value) : 'N/A';
    },
  },
];

const rowActions = [
  {
    label: 'View Details',
    handler: (id: GridRowId) => {
      console.log(`View details for policy ${id}`);
    },
  },
  {
    label: 'Edit Policy',
    handler: (id: GridRowId) => {
      console.log(`Edit policy ${id}`);
    },
  },
];

export function PolicyListTable() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(Number(searchParams.get('page') ?? '') || 1, 1);
  const limit = Math.max(Number(searchParams.get('limit') ?? '') || 20, 5);

  const { isLoading, data } = usePolicies({
    page,
    limit,
  });

  const handlePaginationModelChange = (model: GridPaginationModel) => {
    const newParams = new URLSearchParams(searchParams);

    if (model.pageSize !== limit) {
      const currentRecordPosition = (page - 1) * limit;
      const newPage = Math.floor(currentRecordPosition / model.pageSize) + 1;

      newParams.set('page', newPage.toString());
    } else {
      newParams.set('page', (model.page + 1).toString());
    }
    newParams.set('limit', model.pageSize.toString());

    setSearchParams(newParams);
  };

  return (
    <Table
      columns={columns}
      rows={data?.data.policies || []}
      loading={isLoading}
      rowCount={data?.metadata?.total || 0}
      paginationModel={{ page: page - 1, pageSize: limit }}
      pageSizeOptions={[10, 20, 50]}
      onPaginationModelChange={(model) => handlePaginationModelChange(model)}
      getRowId={(row: Policy) => row.id}
      rowActions={rowActions}
      customToolbar={PolicyListTableToolbar}
    />
  );
}
