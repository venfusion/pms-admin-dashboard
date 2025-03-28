import { LocationOn } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { useParams } from 'react-router';

export const PropertyDetails = () => {
  const { id } = useParams();

  const propertyData = {
    id: id,
    name: 'Sunset Apartments',
    marketingName: 'Daho Complex',
    location: '123 Main Street, Los Angeles, CA',
    minPersonalPropertyCoverage: 34000,
    minPersonalLiabilityCoverage: 12000,
    companyName: 'Daho complex',
    coordinates: {
      lat: 34.0522,
      lng: -118.2437,
    },
  };
  const defaultState = {
    center: [propertyData.coordinates.lat, propertyData.coordinates.lng],
    zoom: 15,
  };
  return (
    <Box sx={{ p: 0 }}>
      <Box display='flex' justifyContent='space-between' alignItems='center' mb={3}>
        <Typography variant='h4' fontWeight='bold'>
          Property Details
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
      <Grid container spacing={3} sx={{ height: 'auto' }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant='h6' fontWeight='bold'>
                Property Information
              </Typography>
              <Typography color='textSecondary' mb={2}>
                Detailed information about this property
              </Typography>

              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <Typography fontWeight='bold'>Name</Typography>
                  <Typography>{propertyData.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontWeight='bold'>Marketing Name</Typography>
                  <Typography>{propertyData.marketingName}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography fontWeight='bold'>Location</Typography>
                  <Grid item xs={12} display='flex' alignItems='center'>
                    <LocationOn color='primary' />
                    <Typography ml={1}>{propertyData.location}</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={6}>
                  <Typography fontWeight='bold'>Min Personal Property Coverage</Typography>
                  <Typography>{propertyData.minPersonalPropertyCoverage}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontWeight='bold'>Min Personal Liability Coverage</Typography>
                  <Typography>{propertyData.minPersonalLiabilityCoverage}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={6}>
                  <Typography fontWeight='bold'>Company Name</Typography>
                  <Typography>{propertyData.companyName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontWeight='bold'>Created Date</Typography>
                  <Typography>September 15th, 2023</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant='h6' fontWeight='bold'>
                Location Map
              </Typography>
              <Typography color='textSecondary' mb={2}>
                Property location visualization
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
              <Typography mt={2} color='textSecondary'>
                Coordinates: {propertyData.coordinates.lat}, {propertyData.coordinates.lng}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
