import { MuiStylesObject } from '#/shared/types/mui-styles.type';

export const policyListFilterFormStyles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  dateGroup: {
    display: 'flex',
    gap: 1,
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 2,
  },
} satisfies MuiStylesObject;
