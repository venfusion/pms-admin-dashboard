import { Box, Card, CardContent, Grid2 as Grid, Typography } from '@mui/material';

import { policyDetailsStyles } from '../../styles/policy-details.style';
import { Policy } from '../../types/policy.type';
import { CoverageAdditionalItem } from './coverage-additional-item';

type CoverageAdditionalCardProps = {
  // TODO: make it not optional during integration
  data?: Policy;
};

// right now i am using hardcoded prices but will use prices from data object when integrating
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CoverageAdditionalCard({ data }: CoverageAdditionalCardProps) {
  return (
    <Card sx={policyDetailsStyles.card}>
      <CardContent sx={policyDetailsStyles.cardContent}>
        <Typography variant='h2' sx={policyDetailsStyles.cardTitle} fontSize={24}>
          Additional Coverage
        </Typography>
        <Typography variant='body2' sx={policyDetailsStyles.cardSubtitle}>
          Optional coverage details for this policy
        </Typography>

        <Box sx={policyDetailsStyles.section}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <CoverageAdditionalItem
                title='Scheduled Personal Property'
                subtitle='Coverage for high-value items'
                price={10000}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <CoverageAdditionalItem
                title='Identity Theft'
                subtitle='Coverage for identity theft expenses'
                price={400}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <CoverageAdditionalItem
                title='Water Backup'
                subtitle='Coverage for water damage'
                price={50}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <CoverageAdditionalItem
                title='Pet Liability'
                subtitle='Coverage for pet-related incidents'
                price={150.0}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <CoverageAdditionalItem
                title='Earthquake'
                subtitle='Coverage for earthquake damage'
                price={200}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <CoverageAdditionalItem
                title='Flood'
                subtitle='Coverage for flood damage'
                price={20000}
              />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
