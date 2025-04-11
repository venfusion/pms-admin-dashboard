import { Box, Chip, LinearProgress, Typography } from '@mui/material';

type ProgressLineProps = {
  status: string;
  quantity: number;
  totalQuantity: number;
  bgColor: string;
  color: string;
};

export function ProgressLine({
  status,
  quantity,
  totalQuantity,
  bgColor,
  color,
}: ProgressLineProps) {
  const percentage = Math.round((quantity / totalQuantity) * 100);
  return (
    <Box sx={{ width: '100%', mt: 1, mb: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Chip
            label={status}
            sx={{
              backgroundColor: bgColor,
              border: '1px solid #e0e0e0',
              borderRadius: '30px',
              fontWeight: 'bold',
              color: color,
              mr: 1,
              height: 25,
            }}
          />
          <Typography variant='body2' color='text.secondary'>
            {quantity} leases
          </Typography>
        </Box>
        <Typography variant='body2'>{percentage}%</Typography>
      </Box>

      <LinearProgress
        variant='determinate'
        value={percentage}
        sx={{
          height: 8,
          borderRadius: 5,
          backgroundColor: '#f0f0f0',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#000000',
            borderRadius: 5,
          },
        }}
      />
    </Box>
  );
}
