import { MuiStylesObject } from '#/shared/types/mui-styles.type';

export const policyListTableToolbarStyles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    p: 2,
    gap: 2,
    width: '100%',
  },
  filtersContainer: {
    display: 'flex',
    gap: 1,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  filterGroup: {
    minWidth: '220px',
    maxWidth: '300px',
  },
  select: {
    width: '100%',
  },
  actionsContainer: {
    marginLeft: 'auto',
  },
} satisfies MuiStylesObject;
