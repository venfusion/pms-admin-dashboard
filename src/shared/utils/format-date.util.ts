import { DateTime } from 'luxon';

export const formatDate = (dateString: string, format = 'MMM dd, yyyy'): string => {
  const date = DateTime.fromISO(dateString);

  if (!date.isValid) return 'Invalid date';

  return date.toFormat(format);
};
