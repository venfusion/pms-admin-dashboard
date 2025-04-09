import { Box, Card, CardContent, Typography } from '@mui/material';

import { formatCurrency } from '#/shared/utils/format-currency.util';

import { coverageAdditionalStyles } from '../../styles/coverage-additional.style';
import { policyDetailsStyles } from '../../styles/policy-details.style';

type CoverageAdditionalCardProps = {
  title: string;
  subtitle: string;
  price: number | string;
};

export function CoverageAdditionalItem({ title, subtitle, price }: CoverageAdditionalCardProps) {
  return (
    <Card sx={coverageAdditionalStyles.itemCard}>
      <CardContent sx={coverageAdditionalStyles.itemCardContent}>
        <Box>
          <Typography variant='subtitle1' sx={policyDetailsStyles.cardTitle} fontSize={14}>
            {title}
          </Typography>
          <Typography
            variant='body2'
            sx={coverageAdditionalStyles.cardContentSubTitle}
            fontSize={12}
          >
            {subtitle}
          </Typography>
        </Box>
        <Typography variant='subtitle2' sx={coverageAdditionalStyles.price}>
          {formatCurrency(price)}
        </Typography>
      </CardContent>
    </Card>
  );
}
