import ApartmentIcon from '@mui/icons-material/Apartment';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid2 as Grid,
  Paper,
  Typography,
} from '@mui/material';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

export const AddressDetails = () => {
  const propertyData = {
    name: 'Sunset Apartments',
    address: {
      number: '1250',
      street: 'Ocean Avenue',
      city: 'Bay Harbor',
      state: 'CA',
      zipCode: '94123',
    },
    companyName: 'Horizon Property Management',
    unitsCount: 24,
    createdAt: 'June 10th, 2022',
    coordinates: {
      lat: 37.7749,
      lng: -122.4194,
    },
  };

  const defaultState = {
    center: [propertyData.coordinates.lat, propertyData.coordinates.lng],
    zoom: 15,
  };

  return (
    <Box sx={{ p: 0 }}>
      <Box display='flex' alignItems='center' gap={2} justifyContent='space-between'>
        <Paper elevation={0} sx={{ mb: 3 }}>
          <Typography variant='h4' component='h1'>
            {propertyData.name}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <LocationOnIcon fontSize='small' />
            {`${propertyData.address.number} ${propertyData.address.street}, ${propertyData.address.city}, ${propertyData.address.state} ${propertyData.address.zipCode}`}
          </Typography>
        </Paper>

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
              <Grid container spacing={2}>
                <Grid size={6}>
                  <Typography variant='body2' color='text.secondary' gutterBottom fontWeight={600}>
                    Company Name
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ApartmentIcon color='primary' />
                    <Typography variant='body1'>{propertyData.companyName}</Typography>
                  </Box>
                </Grid>

                <Grid size={6}>
                  <Typography variant='body2' color='text.secondary' gutterBottom fontWeight={600}>
                    Property Name
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <HomeIcon color='primary' />
                    <Typography variant='body1'>{propertyData.name}</Typography>
                  </Box>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              <Box>
                <Typography variant='body2' color='text.secondary' fontWeight={600} gutterBottom>
                  Address
                </Typography>

                <Grid container spacing={2} pt={2}>
                  <Grid size={6}>
                    <Typography variant='body2' color='text.secondary'>
                      Number
                    </Typography>
                    <Typography variant='body1'>{propertyData.address.number}</Typography>
                  </Grid>
                  <Grid size={6}>
                    <Typography variant='body2' color='text.secondary'>
                      Street
                    </Typography>
                    <Typography variant='body1'>{propertyData.address.street}</Typography>
                  </Grid>
                  <Grid size={6}>
                    <Typography variant='body2' color='text.secondary'>
                      City
                    </Typography>
                    <Typography variant='body1'>{propertyData.address.city}</Typography>
                  </Grid>
                  <Grid size={6}>
                    <Typography variant='body2' color='text.secondary'>
                      State
                    </Typography>
                    <Typography variant='body1'>{propertyData.address.state}</Typography>
                  </Grid>
                  <Grid size={6}>
                    <Typography variant='body2' color='text.secondary'>
                      Zip Code
                    </Typography>
                    <Typography variant='body1'>{propertyData.address.zipCode}</Typography>
                  </Grid>
                </Grid>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box>
                <Grid container spacing={2}>
                  <Grid size={6}>
                    <Typography variant='body2' color='text.secondary' gutterBottom>
                      Created At
                    </Typography>
                    <Typography variant='body1'>{propertyData.createdAt}</Typography>
                  </Grid>
                  <Grid size={6}>
                    <Typography variant='body2' color='text.secondary' gutterBottom>
                      Units Count
                    </Typography>
                    <Typography variant='body1'>{propertyData.unitsCount}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant='h4' component='h1'>
                Location Map
              </Typography>
              <Typography variant='subtitle1' color='text.secondary'>
                Propery location visualization
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Box height={270} borderRadius={2} overflow='hidden' bgcolor='grey.100'>
                <YMaps>
                  <Map defaultState={defaultState} style={{ width: '100%', height: '100%' }}>
                    <Placemark
                      geometry={[propertyData.coordinates.lat, propertyData.coordinates.lng]}
                    />
                  </Map>
                </YMaps>
              </Box>

              <Typography variant='body2' color='text.secondary' sx={{ mt: 1 }}>
                Coordinates: {propertyData.coordinates.lat}, {propertyData.coordinates.lng}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
