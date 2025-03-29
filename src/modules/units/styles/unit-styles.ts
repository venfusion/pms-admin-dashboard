import { MuiStylesObject } from '#/shared/types/mui-styles.type';

export const unitStyles = {
  container: {
    mx: 3,
    p: 3,
    width: '55%',
    boxShadow: 2,
  },
  mainTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bolder',
  },
  subTitle: {
    color: 'gray',
  },
  label: {
    color: 'gray',
    fontWeight: 'bold',
  },
  value: {
    fontWeight: 'bolder',
    fontSize: '1.1rem',
  },
  icon: {
    color: 'gray',
  },
  sectionFirstRow: {
    py: 2,
    display: 'flex',
    gap: 15,
  },
  sectionAddressRow: {
    py: 2,
    flexDirection: 'column',
    gap: 0,
  },
  sectionPropertyRow: {
    py: 2,
    display: 'flex',
    gap: 15,
  },
  lastSection: {
    pt: 2,
  },
  iconTextContainer: {
    display: 'flex',
    alignItems: 'start',
    gap: 1,
    my: 1,
  },
} satisfies MuiStylesObject;
