import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import { Box, Button, Card, CardContent, Grid2 as Grid, Typography } from '@mui/material';

import { compnayDetailsActionsStyles } from '../styles/company-details-actions.style';

export function CompanyDetailsActions() {
  const actions = [
    {
      title: 'View Properties',
      description: 'See all properties managed by this company',
      icon: <HomeIcon sx={{ fontSize: 40 }} />,
      action: 'View Properties',
    },
    {
      title: 'Manage Customers',
      description: 'View and manage customer accounts',
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      action: 'Manage Customers',
    },
    {
      title: 'View Leases',
      description: 'Browse all leases for this company',
      icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
      action: 'View Leases',
    },
  ];
  return (
    <Card sx={compnayDetailsActionsStyles.card}>
      <CardContent sx={compnayDetailsActionsStyles.cardContent}>
        <Box sx={compnayDetailsActionsStyles.company}>
          <Typography variant='h6' fontWeight='bold'>
            Quick Actions
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Common tasks for managing this company
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {actions.map((action, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 1,
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                {action.icon}
                <Typography variant='h6' sx={{ mt: 1, mb: 1, textAlign: 'center' }}>
                  {action.title}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ mb: 1, textAlign: 'center' }}
                >
                  {action.description}
                </Typography>
                <Button
                  variant='outlined'
                  color='inherit'
                  fullWidth
                  sx={{
                    textTransform: 'none',
                    borderColor: '#e0e0e0',
                    color: 'text.primary',
                  }}
                >
                  {action.action}
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
