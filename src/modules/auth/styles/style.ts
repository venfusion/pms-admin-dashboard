import { MuiStylesObject } from '#/shared/types/mui-styles.type';

export const style = {
  mainBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rootContainer: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: 400,
    border: '1px solid #ddd',
    padding: '40px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    cursor: 'pointer',
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputs: {
    '& .MuiInputBase-root': { height: 45 },
    '& .MuiInputBase-input': { padding: '10px 12px' },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#333',
      },
    },
  },
} satisfies MuiStylesObject;
