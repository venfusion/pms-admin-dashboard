import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { rentalPlanStyles } from '../styles/rental-plan-styles';

const plans = [
  { name: 'Monthly', cycle: 'Every month' },
  { name: 'Quarterly', cycle: 'Every 3 months' },
  { name: 'Semi-annually', cycle: 'Every 6 months' },
  { name: 'Yearly', cycle: 'Every month' },
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
const styles = rentalPlanStyles;
export function RentalPlanPanel() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(rentalPlans[0]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPlan = rentalPlans.find((plan) => plan.name === event.target.value) ?? rentalPlans[0];
    setSelectedPlan(newPlan);
  };
  const selectedPlanPrices = Object.values(selectedPlan);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.headerContainer}>
        <Box>
          <Typography sx={styles.mainTitle}>Rental Plan</Typography>
          <Typography sx={styles.subTitle}>{selectedPlan.name}</Typography>
        </Box>
        <Button sx={styles.changeButton} onClick={handleOpen}>
          Change Plan
        </Button>
      </Box>
      <Box sx={styles.headerRow}>
        <Typography sx={styles.headerColumn}>Plan</Typography>
        <Typography sx={styles.headerColumn}>Price</Typography>
        <Typography sx={styles.headerColumn}>Billing Cycle</Typography>
      </Box>
      {plans.map((plan, index) => (
        <Box
          key={index}
          sx={{
            ...styles.planRow,
            borderBottom: index !== plans.length - 1 ? 1 : 0,
          }}
        >
          <Typography sx={{ ...styles.valueStyle, ...styles.planWidth }}>{plan.name}</Typography>
          <Typography sx={{ ...styles.valueStyle, ...styles.planWidth }}>
            {selectedPlanPrices[index + 1]}
          </Typography>
          <Typography sx={{ ...styles.valueStyle, ...styles.planWidth }}>{plan.cycle}</Typography>
        </Box>
      ))}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Select Rental Plan</DialogTitle>
        <DialogContent>
          <Typography>
            Choose a rental plan for this unit. Current plan: {selectedPlan.name}
          </Typography>
          <RadioGroup value={selectedPlan.name} onChange={handleChange}>
            {rentalPlans.map((plan, index) => (
              <Box key={index} sx={styles.dialogPlanContainer}>
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
              </Box>
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
    </Box>
  );
}
