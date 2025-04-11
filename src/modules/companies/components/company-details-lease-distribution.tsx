import { Box, Card, CardContent, Typography } from '@mui/material';

import { compnayDetailsLeaseDistributionStyles } from '../styles/company-details-lease-distribution';
import { ProgressLine } from './progress-line';

type CompanyDetailsLeaseDistributionProps = {
  totalLease: number;
  activeLease: number;
  statuses: {
    draft: number;
    pending: number;
    rejected: number;
    signed: number;
    cancelled: number;
    expired: number;
    terminated: number;
  };
};

export function CompanyDetailsLeaseDistribution({
  totalLease,
  activeLease,
  statuses,
}: CompanyDetailsLeaseDistributionProps) {
  return (
    <Card sx={compnayDetailsLeaseDistributionStyles.card}>
      <CardContent sx={compnayDetailsLeaseDistributionStyles.cardContent}>
        <Box sx={compnayDetailsLeaseDistributionStyles.lease}>
          <Typography variant='h6' fontWeight='bold'>
            Lease Status Distribution
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Breakdown of leases by status
          </Typography>
        </Box>

        <Box sx={compnayDetailsLeaseDistributionStyles.leases}>
          <ProgressLine
            status={'ACTIVE'}
            quantity={activeLease}
            totalQuantity={totalLease}
            bgColor='#ffffff'
            color='#09090b'
          />
          <ProgressLine
            status={'SIGNED'}
            quantity={statuses.signed}
            totalQuantity={totalLease}
            bgColor='#09090b'
            color='#ffffff'
          />
          <ProgressLine
            status={'PENDING'}
            quantity={statuses.pending}
            totalQuantity={totalLease}
            bgColor='#f4f4f5'
            color='#09090b'
          />
          <ProgressLine
            status={'EXPIRED'}
            quantity={statuses.expired}
            totalQuantity={totalLease}
            bgColor='#ffffff'
            color='#09090b'
          />
          <ProgressLine
            status={'DRAFT'}
            quantity={statuses.draft}
            totalQuantity={totalLease}
            bgColor='#ffffff'
            color='#09090b'
          />
          <ProgressLine
            status={'CANCELLED'}
            quantity={statuses.cancelled}
            totalQuantity={totalLease}
            bgColor='#ef4444'
            color='#ffffff'
          />
          <ProgressLine
            status={'REJECTED'}
            quantity={statuses.rejected}
            totalQuantity={totalLease}
            bgColor='#ef4444'
            color='#ffffff'
          />
          <ProgressLine
            status={'TERMINATED'}
            quantity={statuses.terminated}
            totalQuantity={totalLease}
            bgColor='#ef4444'
            color='#ffffff'
          />
        </Box>
      </CardContent>
    </Card>
  );
}
