import { MuiStylesObject } from '#/shared/types/mui-styles.type';

export const policyOverviewStyles = {
  sectionTitle: {
    fontWeight: 'bold',
    color: 'text.primary',
    mb: 1,
  },
  valueWithIconContainer: {
    display: 'flex',
    alignItems: 'center',
    color: 'text.secondary',
  },
  icon: {
    mr: 1,
  },
  calendarIcon: {
    mr: 1,
    fontSize: '1rem',
  },
  divider: {
    my: 2,
    borderColor: (theme) => (theme.palette.mode === 'dark' ? '#424242' : '#e0e0e0'),
  },
  gridContainer: {
    p: 0,
    mt: 1,
  },
} satisfies MuiStylesObject;
