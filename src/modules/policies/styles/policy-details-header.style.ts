import { MuiStylesObject } from '#/shared/types/mui-styles.type';

export const policyDetailsHeaderStyles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    p: 2,
    flexDirection: {
      xs: 'column',
      lg: 'row',
    },
    gap: 2,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  title: {
    fontSize: 28,
  },
  status: {
    fontSize: 10,
    height: 20,
  },
  userWithIcon: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  icon: {
    color: 'text.secondary',
  },
  userFullName: {
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    pt: 0.5,
  },
  paymentType: {
    fontSize: 10,
    height: 20,
    mb: 0.2,
  },
  rightContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  editBtn: {
    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#1c1c1c' : '#f7f7f7'),
    color: 'text.primary',
    borderColor: 'text.primary',
    borderWidth: 1,
  },
  deleteBtn: {
    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#c62828' : '#b71c1c'),
    color: 'text.primary',
    borderColor: 'transparent',
  },
} satisfies MuiStylesObject;
