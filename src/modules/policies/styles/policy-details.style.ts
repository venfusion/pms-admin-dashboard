import { MuiStylesObject } from '#/shared/types/mui-styles.type';

export const policyDetailsStyles = {
  card: {
    height: '100%',
    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#1c1c1c' : '#f7f7f7'),
    color: 'text.primary',
    p: 2,
    borderRadius: 2,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
  },
  cardContent: {
    p: 1,
    '&:last-child': {
      pb: 2,
    },
  },
  cardTitle: {
    color: 'text.primary',
    fontWeight: 'bold',
    mb: 0.5,
  },
  cardSubtitle: {
    color: 'text.secondary',
    mb: 2,
  },
  section: {
    mt: 2,
  },
} satisfies MuiStylesObject;
