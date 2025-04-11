import { MuiStylesObject } from '#/shared/types/mui-styles.type';

export const compnayDetailsLeaseDistributionStyles = {
  card: {
    height: '100%',
    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#1c1c1c' : '#FDFDFD'),
    color: 'text.primary',
    borderRadius: 2,
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.25)',
  },
  cardContent: {
    '&:last-child': {
      pb: 2,
    },
  },
  lease: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5,
    mb: 4,
  },
  leases: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between',
  },
} satisfies MuiStylesObject;
