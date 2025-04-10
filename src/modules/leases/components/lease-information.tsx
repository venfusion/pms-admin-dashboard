import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import DoorFrontOutlinedIcon from '@mui/icons-material/DoorFrontOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Box, Card, CardContent, Divider, Grid2 as Grid, Typography } from '@mui/material';

import { style } from '../styles';

export function LeaseInformation() {
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
  };

  return (
    <Card sx={{ py: 2, px: 1 }}>
      <CardContent>
        <Box display={'flex'} flexDirection={'column'} gap={1} mb={4}>
          <Typography variant='h4' component='h2' mb={0} gutterBottom>
            Lease Information
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
              <Typography variant='body2' color='text.secondary' gutterBottom fontWeight={600}>
                Property
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <HomeOutlinedIcon color='primary' />
                <Typography variant='body1'>{leaseData.property.name}</Typography>
              </Box>
            </Grid>

            <Grid size={6}>
              <Typography variant='body2' color='text.secondary' gutterBottom fontWeight={600}>
                Unit
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <DoorFrontOutlinedIcon color='primary' />
                <Typography variant='body1'>{leaseData.unit.name}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box>
          <Typography variant='body2' color='text.secondary' gutterBottom fontWeight={600}>
            Building Addresses
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
            <CorporateFareRoundedIcon color='primary' />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body1'>Sunset Apartments - East Wing</Typography>
              <Typography
                variant='subtitle2'
                color='text.secondary'
              >{`${leaseData.address.number} ${leaseData.address.street}, ${leaseData.address.city}, ${leaseData.address.state} ${leaseData.address.zipCode}`}</Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box>
          <Grid container spacing={2}>
            <Grid size={6}>
              <Typography variant='body2' color='text.secondary' gutterBottom fontWeight={600}>
                Status
              </Typography>
              <Box sx={style.badgeContainer}>
                <Typography sx={{ fontSize: '12px', fontWeight: 600 }}>
                  {leaseData.status}
                </Typography>
              </Box>
            </Grid>

            <Grid size={6}>
              <Typography variant='body2' color='text.secondary' gutterBottom fontWeight={600}>
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
              <Typography variant='body2' color='text.secondary' gutterBottom fontWeight={600}>
                Start Date
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CalendarMonthRoundedIcon color='primary' />
                <Typography variant='body1'>{leaseData.startDate}</Typography>
              </Box>
            </Grid>

            <Grid size={6}>
              <Typography variant='body2' color='text.secondary' gutterBottom fontWeight={600}>
                End Date
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CalendarMonthRoundedIcon color='primary' />
                <Typography variant='body1'>{leaseData.endDate}</Typography>
              </Box>
            </Grid>

            <Grid size={6}>
              <Typography variant='body2' color='text.secondary' gutterBottom fontWeight={600}>
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
  );
}
