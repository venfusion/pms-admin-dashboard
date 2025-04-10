import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';

import { style } from '../styles';

export function RentalPlan() {
  // Mock data based on the screenshot - replace with actual API call later
  const leaseData = {
    leaseType: 'Yearly Lease',
    pricing: {
      monthly: 1850,
      quarterly: 5400,
      semiAnnualy: 10500,
      yearly: 19800,
    },
  };

  const plans = useMemo(
    () => [
      {
        title: 'Monthly',
        description: 'Billed every month',
        price: leaseData?.pricing?.monthly || '',
      },
      {
        title: 'Quarterly',
        description: 'Billed every 3 months',
        price: leaseData?.pricing?.quarterly || '',
      },
      {
        title: 'Semi-annually',
        description: 'Billed every 6 months',
        price: leaseData?.pricing?.semiAnnualy || '',
      },
      {
        title: 'Yearly',
        description: 'Billed every 12 months',
        price: leaseData?.pricing?.yearly || '',
      },
    ],
    [],
  );

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box>
          <Typography variant='h4' component='h2'>
            Rental Plan
          </Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            Pricing options for this lease
          </Typography>
        </Box>

        <Stack spacing={2} my={4}>
          {plans.map((plan, index) => (
            <Card key={index} sx={{ borderRadius: 2, border: '1px solid #ddd', padding: 1 }}>
              <CardContent
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <Typography fontWeight='bold'>{plan.title}</Typography>
                  <Typography color='textSecondary'>{plan.description}</Typography>
                </Box>
                <Typography fontWeight={600} fontSize={'1.5rem'} color='primary'>
                  ${plan.price}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>

        <Box display={'flex'} alignItems={'center'} gap={1}>
          <Typography color='text.secondary'>Current plan:</Typography>
          <Box sx={style.badgeContainer}>
            <Typography sx={{ fontSize: '12px', fontWeight: 600 }}>
              {leaseData.leaseType}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
