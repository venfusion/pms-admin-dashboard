import { Delete, EditNote, LocationOnOutlined } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

import { RentalPlanPanel } from './components/rental-plan';
import { UnitInformationPanel } from './components/unit-information.component';
import { UnitDetailsStyles } from './styles/units-page.style';

const styles = UnitDetailsStyles;

export function UnitDetailsPage() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Box>
          <Typography sx={styles.title}>Apartment 3B</Typography>
          <Box sx={styles.addressContainer}>
            <LocationOnOutlined style={{ color: 'gray' }} />
            <Typography>1250 Ocean Avenue, Bay Harbor, CA 94123</Typography>
          </Box>
        </Box>
        <Box sx={styles.buttonContainer}>
          <Button sx={styles.editButton}>
            <EditNote /> Edit
          </Button>
          <Button color='error' sx={styles.deleteButton}>
            <Delete /> Delete
          </Button>
        </Box>
      </Box>
      <Box sx={styles.contentContainer}>
        <UnitInformationPanel />
        <RentalPlanPanel />
      </Box>
    </Box>
  );
}
