import { Person } from '@mui/icons-material';
import { Box, Button, capitalize, Chip, Typography } from '@mui/material';

import { policyDetailsHeaderStyles } from '../../styles/policy-details-header.style';
import { PolicyPaymentType, PolicyStatus } from '../../types/policy.type';

type PolicyDetailsHeaderProps = {
  status: PolicyStatus;
  userFullName: string;
  paymentType: PolicyPaymentType;
};

export function PolicyDetailsHeader({
  status,
  userFullName,
  paymentType,
}: PolicyDetailsHeaderProps) {
  return (
    <Box sx={policyDetailsHeaderStyles.container}>
      <Box>
        <Box sx={policyDetailsHeaderStyles.titleContainer}>
          <Typography variant='h1' sx={policyDetailsHeaderStyles.title}>
            Renter's Insurance Policy
          </Typography>
          <Chip
            label={capitalize(status)}
            color='success'
            size='small'
            sx={policyDetailsHeaderStyles.status}
          />
        </Box>
        <Box sx={policyDetailsHeaderStyles.userWithIcon}>
          <Person sx={policyDetailsHeaderStyles.icon} />
          <Box sx={policyDetailsHeaderStyles.userFullName}>
            <Typography variant='body2'>{userFullName}</Typography> ・
            <Chip
              label={capitalize(paymentType)}
              color='success'
              size='small'
              sx={policyDetailsHeaderStyles.paymentType}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={policyDetailsHeaderStyles.rightContainer}>
        <Button variant='outlined' sx={policyDetailsHeaderStyles.editBtn}>
          Edit
        </Button>
        <Button variant='outlined' sx={policyDetailsHeaderStyles.deleteBtn}>
          Delete
        </Button>
      </Box>
    </Box>
  );
}
