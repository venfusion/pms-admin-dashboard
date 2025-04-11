import { MuiStylesObject } from '#/shared/types/mui-styles.type';

export const compnayDetailsHeaderStyles = {
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
  title: {
    fontSize: 28,
  },
  logo: {
    width: 70,
    height: 70,
    objectFit: 'cover',
    borderRadius: 1,
    mr: 2,
  },
  leftContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  subtitle: {
    color: 'text.primary',
    mt: 1,
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
    color: '#fffffff',
    borderColor: 'transparent',
  },
} satisfies MuiStylesObject;
