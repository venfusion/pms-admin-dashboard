import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import DoorFrontOutlinedIcon from '@mui/icons-material/DoorFrontOutlined';
import EditIcon from '@mui/icons-material/Edit';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid2 as Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useMemo } from 'react';

import { style } from './styles';

export function LeaseDetails() {
  // Mock data based on the screenshot - replace with actual API call later
  const leaseData = {
    name: 'Lease Agreement',
    tenant: 'John Doe',
    address: {
      number: '1250',
      street: 'Ocean Avenue',
      city: 'Bay Harbor',
      state: 'CA',
      zipCode: '94123',
    },
    property: {
      name: 'Sunset Apartments',
    },
    unit: {
      name: 'Apartment 3B',
    },
    status: 'ACTIVE',
    leaseType: 'Yearly Lease',
    startDate: 'January 10th, 2023',
    endDate: 'January 10th, 2024',
    createdAt: 'December 10th, 2022',
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
    <Box sx={{ p: 0 }}>
      <Box display='flex' alignItems='center' gap={2} justifyContent='space-between' mb={2}>
        <Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 1 }}>
            <Typography variant='h4' component='h1'>
              {leaseData.name}
            </Typography>

            <Box sx={style.badgeContainer}>
              <Typography sx={{ fontSize: '12px', fontWeight: 600 }}>{leaseData.status}</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PersonOutlineOutlinedIcon color='primary' />
              <Typography variant='body1'>{leaseData.tenant}</Typography>
            </Box>

            <Box
              sx={{ width: '5px', height: '5px', borderRadius: '100%', bgcolor: 'text.secondary' }}
            ></Box>

            <Box sx={style.badgeContainer}>
              <Typography sx={{ fontSize: '12px', fontWeight: 600 }}>
                {leaseData.leaseType}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box display='flex' alignItems='center' gap={1}>
          <Button variant='contained' color='primary' sx={{ gap: 1 }}>
            <EditIcon />
            Edit
          </Button>
          <Button variant='contained' color='error' sx={{ gap: 1 }}>
            <DeleteIcon />
            Delete
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid size={6}>
          <Card sx={{ py: 2, px: 1 }}>
            <CardContent>
              <Box display={'flex'} flexDirection={'column'} gap={1} mb={4}>
                <Typography variant='h4' component='h2' mb={0} gutterBottom>
                  Leases Information
                </Typography>
                <Typography color='text.secondary' gutterBottom>
                  Detailed informatin about this lease
                </Typography>
              </Box>

              <Box>
                <Typography variant='body2' color='text.secondary' gutterBottom fontWeight={600}>
                  Tenant
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PersonOutlineOutlinedIcon color='primary' />
                  <Typography variant='body1'>{leaseData.tenant}</Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box>
                <Grid container spacing={2}>
                  <Grid size={6}>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      gutterBottom
                      fontWeight={600}
                    >
                      Property
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <HomeOutlinedIcon color='primary' />
                      <Typography variant='body1'>{leaseData.name}</Typography>
                    </Box>
                  </Grid>

                  <Grid size={6}>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      gutterBottom
                      fontWeight={600}
                    >
                      Unit
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <DoorFrontOutlinedIcon color='primary' />
                      <Typography variant='body1'>{leaseData.name}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box>
                <Typography variant='body2' color='text.secondary' gutterBottom fontWeight={600}>
                  Building Addresses
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CorporateFareRoundedIcon color='primary' />
                  <Typography variant='body1'>Sunset Apartments - East Wing</Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box>
                <Grid container spacing={2}>
                  <Grid size={6}>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      gutterBottom
                      fontWeight={600}
                    >
                      Status
                    </Typography>
                    <Box sx={style.badgeContainer}>
                      <Typography sx={{ fontSize: '12px', fontWeight: 600 }}>
                        {leaseData.status}
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid size={6}>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      gutterBottom
                      fontWeight={600}
                    >
                      Type
                    </Typography>
                    <Box sx={style.badgeContainer}>
                      <Typography sx={{ fontSize: '12px', fontWeight: 600 }}>
                        {leaseData.leaseType}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box>
                <Grid container columnSpacing={2} rowSpacing={4}>
                  <Grid size={6}>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      gutterBottom
                      fontWeight={600}
                    >
                      Start Date
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CalendarMonthRoundedIcon color='primary' />
                      <Typography variant='body1'>{leaseData.startDate}</Typography>
                    </Box>
                  </Grid>

                  <Grid size={6}>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      gutterBottom
                      fontWeight={600}
                    >
                      End Date
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CalendarMonthRoundedIcon color='primary' />
                      <Typography variant='body1'>{leaseData.endDate}</Typography>
                    </Box>
                  </Grid>

                  <Grid size={6}>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      gutterBottom
                      fontWeight={600}
                    >
                      Created At
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CalendarMonthRoundedIcon color='primary' />
                      <Typography variant='body1'>{leaseData.createdAt}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={6}>
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
                        {plan.price}
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
        </Grid>
      </Grid>
    </Box>
  );
}
