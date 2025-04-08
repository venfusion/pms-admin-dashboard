import { MuiStylesObject } from '#/shared/types/mui-styles.type';

export const coverageAdditionalStyles = {
  itemCard: {
    color: 'text.secondary',
    border: '1px solid',
    borderRadius: 2,
    borderColor: (theme) => (theme.palette.mode === 'dark' ? '#424242' : '#e0e0e0'),
    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#1c1c1c' : '#f7f7f7'),
  },
  itemCardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:last-child': {
      p: 2,
    },
  },
  cardContentSubTitle: {
    color: 'text.secondary',
  },
  price: {
    color: 'text.secondary',
  },
} satisfies MuiStylesObject;
