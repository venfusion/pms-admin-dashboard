import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { GridToolbarContainer } from '@mui/x-data-grid';
import { useState } from 'react';

import { policyListTableToolbarStyles } from '../styles/policy-list-table-toolbar.style.ts';

type FilterOption = {
  label: string;
  value: string;
};

export function PolicyListTableToolbar() {
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [paymentTypeFilter, setPaymentTypeFilter] = useState<string>('');

  const statusOptions: FilterOption[] = [
    { label: 'Active', value: 'ACTIVE' },
    { label: 'Draft', value: 'DRAFT' },
    { label: 'Cancelled', value: 'CANCELLED' },
    { label: 'Expired', value: 'EXPIRED' },
    { label: 'Terminated', value: 'TERMINATED' },
  ];

  const paymentTypeOptions: FilterOption[] = [
    { label: 'Monthly', value: 'MONTHLY' },
    { label: 'Yearly', value: 'YEARLY' },
  ];

  const handleStatusChange = (event: SelectChangeEvent<typeof statusFilter>) => {
    const {
      target: { value },
    } = event;
    setStatusFilter(typeof value === 'string' ? value.split(',') : value);
  };

  const handlePaymentTypeChange = (event: SelectChangeEvent) => {
    setPaymentTypeFilter(event.target.value);
  };

  const clearFilters = () => {
    setStatusFilter([]);
    setPaymentTypeFilter('');
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStatusLabel(value: string): string {
    return statusOptions.find((option) => option.value === value)?.label || value;
  }

  function getPaymentTypeLabel(value: string): string {
    return paymentTypeOptions.find((option) => option.value === value)?.label || '';
  }

  return (
    <GridToolbarContainer sx={policyListTableToolbarStyles.container}>
      <Box sx={policyListTableToolbarStyles.filtersContainer}>
        <FormControl sx={policyListTableToolbarStyles.filterGroup}>
          <InputLabel id='status-filter-label'>Status</InputLabel>
          <Select
            labelId='status-filter-label'
            id='status-filter'
            multiple
            value={statusFilter}
            onChange={handleStatusChange}
            input={<OutlinedInput label='Status' />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={getStatusLabel(value)} size='small' />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
            sx={policyListTableToolbarStyles.select}
          >
            {statusOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={policyListTableToolbarStyles.filterGroup}>
          <InputLabel id='payment-type-filter-label'>Payment Type</InputLabel>
          <Select
            labelId='payment-type-filter-label'
            id='payment-type-filter'
            value={paymentTypeFilter}
            onChange={handlePaymentTypeChange}
            input={<OutlinedInput label='Payment Type' />}
            renderValue={(selected) => {
              return getPaymentTypeLabel(selected);
            }}
            MenuProps={MenuProps}
            sx={policyListTableToolbarStyles.select}
          >
            {paymentTypeOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={policyListTableToolbarStyles.actionsContainer}>
        <Button
          variant='outlined'
          size='small'
          onClick={clearFilters}
          disabled={statusFilter.length === 0 && !paymentTypeFilter}
        >
          Clear Filters
        </Button>
      </Box>
    </GridToolbarContainer>
  );
}
