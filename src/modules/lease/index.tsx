import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Box, Button, Grid2 as Grid, Typography } from '@mui/material';

import { LeaseInformation } from './components/lease-information';
import { RentalPlan } from './components/rental-plan';
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
          <LeaseInformation />
        </Grid>

        <Grid size={6}>
          <RentalPlan />
        </Grid>
      </Grid>
    </Box>
  );
}
