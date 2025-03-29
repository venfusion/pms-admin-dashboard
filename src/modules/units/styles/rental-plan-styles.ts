import { MuiStylesObject } from '#/shared/types/mui-styles.type';

export const rentalPlanStyles = {
  container: {
    mx: 3,
    p: 3,
    width: '45%',
    boxShadow: 2,
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: 4,
  },
  mainTitle: { fontWeight: 'bold', mb: 0.5 },
  subTitle: {
    color: 'gray',
  },
  changeButton: {
    borderRadius: 1,
    textTransform: 'none',
    px: 2,
  },
  headerRow: {
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    color: 'text.secondary',
    fontWeight: 'normal',
  },
  headerColumn: {
    width: '30%',
  },
  planRow: {
    py: 2.5,
    fontWeight: 'bold',
  },
  valueStyle: {
    fontWeight: 'bolder',
    fontSize: '1.1rem',
  },
  planWidth: {
    width: 200,
  },
  dialogPlanContainer: {
    p: 2,
    border: 1,
    borderColor: 'gray.300',
    borderRadius: 2,
    mb: 2,
  },
  planLabel: {
    display: 'flex',
    gap: 20,
  },
  planDetails: {
    display: 'flex',
    gap: 1,
    mt: 1,
  },
  planTag: {
    border: 1,
    p: 1,
    borderRadius: 5,
    fontSize: '0.8rem',
  },
} satisfies MuiStylesObject;
