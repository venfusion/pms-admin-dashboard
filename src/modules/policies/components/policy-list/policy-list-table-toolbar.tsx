import { Box } from '@mui/material';
import { GridToolbarContainer } from '@mui/x-data-grid';

import { policyListTableToolbarStyles } from '../../styles/policy-list-table-toolbar.style.ts';
import { PolicyListFilterDialog } from './policy-list-filter-dialog.tsx';

export function PolicyListTableToolbar() {
  return (
    <GridToolbarContainer sx={policyListTableToolbarStyles.container}>
      <Box sx={policyListTableToolbarStyles.filtersContainer}>
        <Box sx={policyListTableToolbarStyles.filterDialog}>
          <PolicyListFilterDialog />
        </Box>
      </Box>
    </GridToolbarContainer>
  );
}
