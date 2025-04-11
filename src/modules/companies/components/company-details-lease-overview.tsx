import { Box, Card, CardContent, Divider, LinearProgress, Typography } from '@mui/material';

import { compnayDetailsLeaseOverviewStyles } from '../styles/company-details-lease-overview.style';

type CompanyDetailsLeaseOverviewProps = {
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

type StatusKey =
  | 'draft'
  | 'pending'
  | 'rejected'
  | 'signed'
  | 'cancelled'
  | 'expired'
  | 'terminated';

export function CompanyDetailsLeaseOverview({
  totalLease,
  activeLease,
  statuses,
}: CompanyDetailsLeaseOverviewProps) {
  const statusColors = {
    draft: '#f0f0f0',
    pending: '#f0f0f0',
    rejected: '#f44336',
    signed: '#000000',
    cancelled: '#f44336',
    expired: '#f0f0f0',
    terminated: '#f44336',
  };

  const textColors = {
    draft: '#000000',
    pending: '#000000',
    rejected: '#ffffff',
    signed: '#ffffff',
    cancelled: '#ffffff',
    expired: '#000000',
    terminated: '#ffffff',
  };
  const activeLeasePercentage = Math.round((activeLease / totalLease) * 100);
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  const statusKeys = Object.keys(statuses) as StatusKey[];

  return (
    <Card sx={compnayDetailsLeaseOverviewStyles.card}>
      <CardContent sx={compnayDetailsLeaseOverviewStyles.cardContent}>
        <Box sx={compnayDetailsLeaseOverviewStyles.lease}>
          <Typography variant='h6' fontWeight='bold'>
            Lease Overview
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Summary of all leases managed by this company
          </Typography>
        </Box>

        <Box sx={compnayDetailsLeaseOverviewStyles.leases}>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography variant='body2' color='text.secondary' fontWeight='bold'>
              Total Leases
            </Typography>
            <Typography variant='body2'>{totalLease}</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography variant='body2' color='text.secondary' fontWeight='bold'>
              Active Leases
            </Typography>
            <Typography variant='body2'>
              {activeLease} ({activeLeasePercentage}%)
            </Typography>
          </Box>
          <LinearProgress
            variant='determinate'
            value={activeLeasePercentage}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: '#f0f0f0',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#000000',
                borderRadius: 5,
              },
              mt: 2,
            }}
          />
        </Box>
        <Divider />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            height: '150px',
            mt: 2,
          }}
        >
          {statusKeys.map((status) => (
            <Box
              key={status}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                m: 0.5,
              }}
            >
              <Typography variant='body1'>{capitalize(status)}</Typography>
              <Box
                sx={{
                  bgcolor: statusColors[status],
                  color: textColors[status],
                  borderRadius: '20px',
                  width: 30,
                  height: 22,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'medium',
                }}
              >
                {statuses[status]}
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
