import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { rentalPlanStyles as styles } from '../styles/rental-plan-styles';

const plans = [
  { name: 'Monthly', cycle: 'Every month' },
  { name: 'Quarterly', cycle: 'Every 3 months' },
  { name: 'Semi-annually', cycle: 'Every 6 months' },
  { name: 'Yearly', cycle: 'Every 12 months' },
];

const rentalPlans = [
  {
    name: 'Premium One Bedroom',
    price: '$1,850',
    quarterly: '$5,400',
    semiAnnual: '$10,500',
    annual: '$19,800',
  },
  {
    name: 'Standard One Bedroom',
    price: '$1,650',
    quarterly: '$4,800',
    semiAnnual: '$9,300',
    annual: '$17,600',
  },
  {
    name: 'Economy One Bedroom',
    price: '$1,450',
    quarterly: '$4,200',
    semiAnnual: '$8,100',
    annual: '$15,400',
  },
];

export function RentalPlanPanel() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(rentalPlans[0]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPlan = rentalPlans.find((plan) => plan.name === event.target.value) ?? rentalPlans[0];
    setSelectedPlan(newPlan);
  };

  const getPriceForPlan = (index: number) => {
    switch (index) {
      case 0:
        return selectedPlan.price;
      case 1:
        return selectedPlan.quarterly;
      case 2:
        return selectedPlan.semiAnnual;
      case 3:
        return selectedPlan.annual;
      default:
        return '';
    }
  };

  return (
    <Card sx={styles.container}>
      <Box sx={styles.headerContainer}>
        <Box>
          <Typography variant='h5' sx={styles.mainTitle}>
            Rental Plan
          </Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            {selectedPlan.name}
          </Typography>
        </Box>
        <Button variant='outlined' sx={styles.changeButton} onClick={handleOpen}>
          Change Plan
        </Button>
      </Box>

      <TableContainer component={Paper} elevation={0}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={styles.headerRow}>Plan</TableCell>
              <TableCell sx={styles.headerRow}>Price</TableCell>
              <TableCell sx={styles.headerRow}>Billing Cycle</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plans.map((plan, index) => (
              <TableRow key={index}>
                <TableCell sx={styles.planRow}>{plan.name}</TableCell>
                <TableCell sx={styles.planRow}>{getPriceForPlan(index)}</TableCell>
                <TableCell sx={styles.planRow}>{plan.cycle}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Select Rental Plan</DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <Typography sx={{ mb: 3 }}>
            Choose a rental plan for this unit. Current plan: {selectedPlan.name}
          </Typography>
          <RadioGroup value={selectedPlan.name} onChange={handleChange}>
            {rentalPlans.map((plan, index) => (
              <Card key={index} sx={styles.dialogPlanContainer}>
                <FormControlLabel
                  value={plan.name}
                  control={<Radio />}
                  label={
                    <Box sx={styles.planLabel}>
                      <Typography fontWeight='bold'>{plan.name}</Typography>
                      <Typography fontWeight='bold'>{plan.price}/month</Typography>
                    </Box>
                  }
                />
                <Typography sx={styles.subTitle}>
                  Luxury one bedroom apartment with premium amenities
                </Typography>
                <Box sx={styles.planDetails}>
                  <Typography sx={styles.planTag}>Quarterly: {plan.quarterly}</Typography>
                  <Typography sx={styles.planTag}>Semi-annual: {plan.semiAnnual}</Typography>
                  <Typography sx={styles.planTag}>Annual: {plan.annual}</Typography>
                </Box>
              </Card>
            ))}
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' onClick={handleClose}>
            Select
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
