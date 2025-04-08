import { Grid } from '@mui/material';

import { CoverageAdditionalCard } from './components/policy-details/coverage-additional-card';
import { CoveragePrimaryCard } from './components/policy-details/coverage-primary-card';
import { PolicyDetailsHeader } from './components/policy-details/policy-details-header';
import { PolicyOverview } from './components/policy-details/policy-overview-card';
import { PolicyPaymentType, PolicyStatus } from './types/policy.type';

export function PolicyDetails() {
  return (
    <>
      <PolicyDetailsHeader
        status={PolicyStatus.ACTIVE}
        paymentType={PolicyPaymentType.MONTHLY}
        userFullName='John Doe'
      />
      <Grid container spacing={3} sx={{ p: 2 }}>
        <Grid item xs={12} md={6}>
          <PolicyOverview
            policyholder='John Doe'
            unit='3B'
            property='Sunset Apartments'
            address='1250 Ocean Avenue, Bay Harbor, CA 94123'
            status='ACTIVE'
            paymentType='Yearly Payment'
            createdDate='December 5th, 2022'
            effectiveDate='January 1st, 2023'
            expiryDate='January 1st, 2024'
            price={240}
            deductible={500}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CoveragePrimaryCard />
        </Grid>
        <Grid item xs={12}>
          <CoverageAdditionalCard />
        </Grid>
      </Grid>
    </>
  );
}
