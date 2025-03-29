import { Apartment, Business, CalendarMonth, Home, PersonOutline } from '@mui/icons-material';
import { Box, Card, Divider, Typography } from '@mui/material';

import { unitStyles as styles } from '../styles/unit-styles';

export function UnitInformationPanel() {
  return (
    <Card sx={styles.container}>
      <Typography sx={styles.mainTitle}>Unit Information</Typography>
      <Typography sx={styles.subTitle}>Detailed information about this apartment</Typography>

      <Box sx={styles.sectionFirstRow}>
        <Box>
          <Typography sx={styles.label}>Unit Name</Typography>
          <Box sx={styles.iconTextContainer}>
            <Business sx={styles.icon} />
            <Typography sx={styles.value}>Apartment 3B</Typography>
          </Box>
        </Box>
        <Box>
          <Typography sx={styles.label}>Size</Typography>
          <Typography sx={styles.value}>750 sq ft</Typography>
        </Box>
      </Box>
      <Divider variant='middle' />

      <Box sx={styles.sectionAddressRow}>
        <Typography sx={styles.label}>Building Address</Typography>
        <Box sx={styles.iconTextContainer}>
          <Apartment sx={styles.icon} />
          <Box>
            <Typography sx={styles.value}>Sunset Apartments - East Wing</Typography>
            <Typography sx={styles.subTitle}>1250 Ocean Avenue, Bay Harbor, CA 94123</Typography>
          </Box>
        </Box>
      </Box>
      <Divider variant='middle' />

      <Box sx={styles.sectionPropertyRow}>
        <Box>
          <Typography sx={styles.label}>Property</Typography>
          <Box sx={styles.iconTextContainer}>
            <Home sx={styles.icon} />
            <Typography sx={styles.value}>Sunset Apartments</Typography>
          </Box>
        </Box>
        <Box>
          <Typography sx={styles.label}>Company</Typography>
          <Box sx={styles.iconTextContainer}>
            <PersonOutline sx={styles.icon} />
            <Typography sx={styles.value}>Horizon Property Management</Typography>
          </Box>
        </Box>
      </Box>
      <Divider variant='middle' />

      <Box sx={styles.lastSection}>
        <Typography sx={styles.label}>Created Date</Typography>
        <Box sx={styles.iconTextContainer}>
          <CalendarMonth sx={styles.icon} />
          <Typography sx={styles.value}>August 15th, 2022</Typography>
        </Box>
      </Box>
    </Card>
  );
}
