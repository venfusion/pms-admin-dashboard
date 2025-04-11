import { MuiStylesObject } from '#/shared/types/mui-styles.type';

export const compnayDetailsActionsStyles = {
  card: {
    height: '100%',
    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#1c1c1c' : '#FDFDFD'),
    color: 'text.primary',
    borderRadius: 2,
    p: 1,
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.25)',
  },
  cardContent: {
    '&:last-child': {
      pb: 2,
    },
  },
  company: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    mb: 2,
  },
} satisfies MuiStylesObject;
