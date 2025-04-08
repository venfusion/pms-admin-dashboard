import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid2 as Grid,
  Paper,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router';

export const RentalPlanDetails = () => {
  const { id } = useParams();
  const [checked, setChecked] = useState(false);
  const rentalPlanData = {
    id: id,
    name: 'Premiun One Bedroom',
    unitsUsing: 8,
    createdAt: 'September 15th, 2023',
    propertyName: 'Sunset Apartments',
    monthly: 2500,
    quarterly: 5000,
    semiAnnualy: 10000,
    yearly: 20000,
  };
  const plans = useMemo(() => {
    return [
      {
        title: 'Monthly',
        description: 'Billed every month',
        price: rentalPlanData.monthly || '',
      },
      {
        title: 'Quarterly',
        description: 'Billed every 3 months',
        price: rentalPlanData.quarterly || '',
      },
      {
        title: 'Semi-annually',
        description: 'Billed every 6 months',
        price: rentalPlanData.semiAnnualy || '',
      },
      {
        title: 'Yearly',
        description: 'Billed every 12 months',
        price: rentalPlanData.yearly || '',
      },
    ].filter((plan) => plan.price);
  }, [
    rentalPlanData.monthly,
    rentalPlanData.quarterly,
    rentalPlanData.semiAnnualy,
    rentalPlanData.yearly,
  ]);
  return (
    <Box sx={{ p: 0 }}>
      <Box display='flex' justifyContent='space-between' alignItems='center' mb={2}>
        <Typography variant='h4' component='h1'>
          {rentalPlanData.name}
        </Typography>
        <Box display='flex' gap={2}>
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
      <Grid container spacing={3} alignItems='stretch'>
        <Grid size={6}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #ddd',
            }}
          >
            <CardContent>
              <Typography variant='h6' fontWeight='bold'>
                Plan Information
              </Typography>
              <Typography color='textSecondary' mb={6}>
                Detailed information about this rental plan
              </Typography>

              <Grid container spacing={4}>
                <Grid size={12}>
                  <Typography fontWeight='bold'>Property</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <HomeIcon fontSize='medium' color='primary' />
                    <Typography variant='body1'>{rentalPlanData.propertyName}</Typography>
                  </Box>
                </Grid>
                <Grid size={12}>
                  <Divider />
                </Grid>
                <Grid size={12} display='flex' justifyContent='space-between'>
                  <Box>
                    <Typography variant='subtitle1' fontWeight='bold'>
                      Default Plan
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      This plan is automatically assigned to new units
                    </Typography>
                  </Box>
                  <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                </Grid>
                <Grid size={12}>
                  <Divider />
                </Grid>
                <Grid size={6}>
                  <Typography fontWeight='bold'>Created Date</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarTodayIcon color='primary' />
                    <Typography variant='body1'>{rentalPlanData.createdAt}</Typography>
                  </Box>
                </Grid>
                <Grid size={6}>
                  <Typography fontWeight='bold'>Units Using This Plan</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PeopleIcon color='primary' />
                    <Typography variant='body1'>{rentalPlanData.unitsUsing}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={6}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #ddd',
            }}
          >
            <CardContent>
              <Typography variant='h6' fontWeight='bold'>
                Pricing Structure
              </Typography>
              <Typography color='textSecondary' mb={6}>
                Pricing options for this rental plan
              </Typography>

              <Stack spacing={2}>
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
                        {`$${plan.price}`}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={12}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #ddd',
            }}
          >
            <CardContent>
              <Box display='flex' justifyContent='space-between' alignItems='center' mb={3}>
                <Paper elevation={0} sx={{ mb: 3 }}>
                  <Typography variant='h4' component='h1'>
                    Units Using This Plan
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    color='text.secondary'
                    sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                  >
                    {`${rentalPlanData.unitsUsing} units are currently using this rental plan`}
                  </Typography>
                </Paper>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #ddd',
                  borderRadius: 2,
                  padding: 3,
                }}
              >
                <Grid display='flex' justifyContent='space-between' alignItems='center' pb={2}>
                  <Grid>
                    <Typography fontWeight='bold'>View Units</Typography>
                    <Typography color='textSecondary'>
                      See all units that are using this rental plan
                    </Typography>
                  </Grid>
                  <Button variant='outlined' color='inherit'>
                    View Units
                  </Button>
                </Grid>
                <Divider />
                <Grid display='flex' justifyContent='space-between' alignItems='center' pt={2}>
                  <Grid>
                    <Typography fontWeight='bold'>Assign to Units</Typography>
                    <Typography color='textSecondary'>
                      Assign this rental plan to additional units
                    </Typography>
                  </Grid>
                  <Button
                    variant='contained'
                    sx={{
                      backgroundColor: 'black',
                      color: 'white',
                      '&:hover': { backgroundColor: '#333' },
                    }}
                  >
                    Assign Plan
                  </Button>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
