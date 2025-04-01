import { MuiStylesObject } from '#/shared/types/mui-styles.type';

export const UnitDetailsStyles = {
  container: { px: 3 },
  header: {
    mx: 1,
    p: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: { fontSize: '2rem', fontWeight: 'bolder' },
  addressContainer: { display: 'flex', alignItems: 'center', color: 'gray' },
  buttonContainer: { display: 'flex', gap: 2 },
  editButton: { border: 1, px: 3 },
  deleteButton: { border: 1, px: 3 },
  contentContainer: { display: 'flex' },
} satisfies MuiStylesObject;
