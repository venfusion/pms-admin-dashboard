import { LocationOn } from '@mui/icons-material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import { Box, Card, CardContent, Divider, Grid2 as Grid, Typography } from '@mui/material';

import { compnayDetailsInfoStyles } from '../styles/company-details-info.style';

type CompanyDetailsInfoProps = {
  description: string;
  createdAt: string;
  properties: number;
  addresses: number;
  customers: number;
};

export function CompanyDetailsInfo({
  description,
  createdAt,
  properties,
  addresses,
  customers,
}: CompanyDetailsInfoProps) {
  return (
    <Card sx={compnayDetailsInfoStyles.card}>
      <CardContent sx={compnayDetailsInfoStyles.cardContent}>
        <Box sx={compnayDetailsInfoStyles.company}>
          <Typography variant='h6' fontWeight='bold'>
            Company Information
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Detailed information about this company
          </Typography>
        </Box>

        <Box sx={compnayDetailsInfoStyles.company}>
          <Typography variant='body2' color='text.secondary' fontWeight='bold'>
            Description
          </Typography>
          <Typography variant='body2'>{description}</Typography>
        </Box>

        <Divider />

        <Box mt={2}>
          <Grid container spacing={4}>
            <Grid size={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant='body2' color='text.secondary'>
                  Created Date
                </Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                  <CalendarTodayIcon sx={{ mr: 1 }} fontSize='small' />
                  {createdAt}
                </Typography>
              </Box>
            </Grid>
            <Grid size={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant='body2' color='text.secondary'>
                  Properties
                </Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                  <HomeIcon sx={{ mr: 1 }} fontSize='small' />
                  {properties} properties
                </Typography>
              </Box>
            </Grid>
            <Grid size={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant='body2' color='text.secondary'>
                  Addresses
                </Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOn sx={{ mr: 1 }} fontSize='small' />
                  {addresses} addresses
                </Typography>
              </Box>
            </Grid>
            <Grid size={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant='body2' color='text.secondary'>
                  Customers
                </Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                  <PeopleIcon sx={{ mr: 1 }} fontSize='small' />
                  {customers} customers
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
