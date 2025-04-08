import { Apartment, CalendarToday, LocationOn, Person } from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Divider, Grid, Typography } from '@mui/material';

import { formatCurrency } from '#/shared/utils/format-currency.util';

import { policyDetailsStyles } from '../../styles/policy-details.style';
import { policyOverviewStyles } from '../../styles/policy-overview.style';

type PolicyOverviewProps = {
  policyholder: string;
  unit: string;
  property: string;
  address: string;
  status: string;
  paymentType: string;
  createdDate: string;
  effectiveDate: string;
  expiryDate: string;
  price: number;
  deductible: number;
};

export function PolicyOverview({
  policyholder,
  unit,
  property,
  address,
  status,
  paymentType,
  createdDate,
  effectiveDate,
  expiryDate,
  price,
  deductible,
}: PolicyOverviewProps) {
  return (
    <Card sx={policyDetailsStyles.card}>
      <CardContent sx={policyDetailsStyles.cardContent}>
        <Typography variant='h2' sx={policyDetailsStyles.cardTitle} fontSize={24}>
          Policy Information
        </Typography>
        <Typography variant='body2' sx={policyDetailsStyles.cardSubtitle}>
          Detailed information about this insurance policy
        </Typography>

        <Box sx={policyDetailsStyles.section}>
          <Typography variant='body1' sx={policyOverviewStyles.sectionTitle}>
            Policyholder
          </Typography>
          <Box sx={policyOverviewStyles.valueWithIconContainer}>
            <Person fontSize='small' sx={policyOverviewStyles.icon} />
            <Typography variant='body2' mt={0.2}>
              {policyholder}
            </Typography>
          </Box>
        </Box>

        <Divider sx={policyOverviewStyles.divider} />

        <Box sx={policyDetailsStyles.section}>
          <Typography variant='body1' sx={policyOverviewStyles.sectionTitle}>
            Lease Information
          </Typography>
          <Box sx={{ ...policyOverviewStyles.valueWithIconContainer, mb: 0.5 }}>
            <Apartment fontSize='small' sx={policyOverviewStyles.icon} />
            <Typography variant='body2' mt={0.2}>
              {'Unit ' + unit} ・ {'Property ' + property}
            </Typography>
          </Box>
          <Box sx={policyOverviewStyles.valueWithIconContainer}>
            <LocationOn fontSize='small' sx={policyOverviewStyles.icon} />
            <Typography variant='body2' mt={0.2}>
              {address}
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2} sx={policyOverviewStyles.gridContainer}>
          <Grid item xs={12} sm={6}>
            <Typography variant='body2' sx={policyOverviewStyles.sectionTitle} fontWeight='medium'>
              Status
            </Typography>
            <Chip label={status} color='success' size='small' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='body2' sx={policyOverviewStyles.sectionTitle} fontWeight='medium'>
              Payment Type
            </Typography>
            <Chip label={paymentType} color='primary' size='small' />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={policyOverviewStyles.gridContainer}>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography
                variant='body2'
                sx={policyOverviewStyles.sectionTitle}
                fontWeight='medium'
              >
                Created Date
              </Typography>
              <Typography variant='body2' sx={policyOverviewStyles.valueWithIconContainer}>
                <CalendarToday fontSize='small' sx={policyOverviewStyles.calendarIcon} />
                {createdDate}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography
                variant='body2'
                sx={policyOverviewStyles.sectionTitle}
                fontWeight='medium'
              >
                Effective Date
              </Typography>
              <Typography variant='body2' sx={policyOverviewStyles.valueWithIconContainer}>
                <CalendarToday fontSize='small' sx={policyOverviewStyles.calendarIcon} />
                {effectiveDate}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box>
              <Typography
                variant='body2'
                sx={policyOverviewStyles.sectionTitle}
                fontWeight='medium'
              >
                Expiry Date
              </Typography>
              <Typography variant='body2' sx={policyOverviewStyles.valueWithIconContainer}>
                <CalendarToday fontSize='small' sx={policyOverviewStyles.calendarIcon} />
                {expiryDate}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={policyOverviewStyles.gridContainer}>
          <Grid item xs={12} sm={6}>
            <Typography variant='body2' sx={policyOverviewStyles.sectionTitle} fontWeight='medium'>
              Price
            </Typography>
            <Typography variant='body2' sx={policyOverviewStyles.valueWithIconContainer}>
              {formatCurrency(price)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='body2' sx={policyOverviewStyles.sectionTitle} fontWeight='medium'>
              Deductible
            </Typography>
            <Typography variant='body2' sx={policyOverviewStyles.valueWithIconContainer}>
              {formatCurrency(deductible)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
