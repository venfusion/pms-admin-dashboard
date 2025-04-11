import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Typography } from '@mui/material';

import { compnayDetailsHeaderStyles } from '../styles/company-details-header.style';
import image from '../styles/image.png';

type PolicyDetailsHeaderProps = {
  companyName: string;
  marketingName: string;
};

export function CompanyDetailsHeader({ companyName, marketingName }: PolicyDetailsHeaderProps) {
  return (
    <Box sx={compnayDetailsHeaderStyles.container}>
      <Box sx={compnayDetailsHeaderStyles.leftContainer}>
        <Box component='img' src={image} sx={compnayDetailsHeaderStyles.logo} />
        <Box>
          <Typography variant='h1' sx={compnayDetailsHeaderStyles.title} fontWeight='bold'>
            {companyName}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={compnayDetailsHeaderStyles.subtitle}
          >
            {marketingName}
          </Typography>
        </Box>
      </Box>
      <Box sx={compnayDetailsHeaderStyles.rightContainer}>
        <Button variant='contained' sx={compnayDetailsHeaderStyles.editBtn}>
          <EditIcon />
          Edit
        </Button>
        <Button variant='contained' sx={compnayDetailsHeaderStyles.deleteBtn}>
          <DeleteIcon />
          Delete
        </Button>
      </Box>
    </Box>
  );
}
