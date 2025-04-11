import { Grid2 as Grid } from '@mui/material';
import { useParams } from 'react-router';

import { CompanyDetailsActions } from './components/company-details-actions';
import { CompanyDetailsHeader } from './components/company-details-header';
import { CompanyDetailsInfo } from './components/company-details-info';
import { CompanyDetailsLeaseDistribution } from './components/company-details-lease-distribution';
import { CompanyDetailsLeaseOverview } from './components/company-details-lease-overview';
export function CompaniesDetails() {
  const { id } = useParams();
  const companyData = {
    id: id,
    name: 'Horizont Property Management',
    marketingName: 'Horizon Living',
    description:
      'Horizon Property Management is a leading property management company specializing in residential and commercial properties. With over 10 years of experience, we provide exceptional service to property owners and tenants alike.',
    createdAt: 'September 15th, 2023',
    properties: 12,
    addresses: 23,
    customers: 123,
    activeLease: 86,
    totalLease: 142,
    statuses: {
      draft: 8,
      pending: 12,
      rejected: 3,
      signed: 15,
      cancelled: 5,
      expired: 10,
      terminated: 3,
    },
  };

  return (
    <>
      <CompanyDetailsHeader
        companyName={companyData.name}
        marketingName={companyData.marketingName}
      />
      <Grid container spacing={3} sx={{ p: 2 }}>
        <Grid size={{ xs: 12, md: 12 }}>
          <CompanyDetailsInfo
            description={companyData.description}
            createdAt={companyData.createdAt}
            properties={companyData.properties}
            addresses={companyData.addresses}
            customers={companyData.customers}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <CompanyDetailsLeaseOverview
            totalLease={companyData.totalLease}
            activeLease={companyData.activeLease}
            statuses={companyData.statuses}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <CompanyDetailsLeaseDistribution
            totalLease={companyData.totalLease}
            activeLease={companyData.activeLease}
            statuses={companyData.statuses}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <CompanyDetailsActions />
        </Grid>
      </Grid>
    </>
  );
}
