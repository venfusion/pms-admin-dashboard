import {
  Box,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { formatCurrency } from '#/shared/utils/format-currency.util';

import { coveragePrimaryStyles } from '../../styles/coverage-primary.style';
import { policyDetailsStyles } from '../../styles/policy-details.style';
import { Policy } from '../../types/policy.type';

type CoverageAdditionalProps = {
  // TODO: make it not optional during integration
  data?: Policy;
};

// right now i am using hardcoded prices but will use prices from data object when integrating
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CoveragePrimaryCard({ data: _data }: CoverageAdditionalProps) {
  return (
    <Card sx={policyDetailsStyles.card}>
      <CardContent sx={policyDetailsStyles.cardContent}>
        <Typography variant='h2' sx={policyDetailsStyles.cardTitle} fontSize={24}>
          Primary Coverage
        </Typography>
        <Typography variant='body2' sx={policyDetailsStyles.cardSubtitle}>
          Main coverage details for this policy
        </Typography>

        <Box sx={policyDetailsStyles.section}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell sx={coveragePrimaryStyles.tableColumns}>Coverage Type</TableCell>
                <TableCell align='right' sx={coveragePrimaryStyles.tableColumns}>
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align='left' sx={coveragePrimaryStyles.coverageType}>
                  Personal Property
                </TableCell>
                <TableCell align='right' sx={coveragePrimaryStyles.coverageAmount}>
                  {formatCurrency(50000)}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='left' sx={coveragePrimaryStyles.coverageType}>
                  Personal Liability
                </TableCell>
                <TableCell align='right' sx={coveragePrimaryStyles.coverageAmount}>
                  {formatCurrency(10000)}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='left' sx={coveragePrimaryStyles.coverageType}>
                  Loss of Use
                </TableCell>
                <TableCell align='right' sx={coveragePrimaryStyles.coverageAmount}>
                  {formatCurrency(30000)}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='left' sx={coveragePrimaryStyles.coverageType}>
                  Medical Payments
                </TableCell>
                <TableCell align='right' sx={coveragePrimaryStyles.coverageAmount}>
                  {formatCurrency(50000)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </CardContent>
    </Card>
  );
}
