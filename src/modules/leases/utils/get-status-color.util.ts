import { Status, STATUS_COLOR_MAP, StatusColor } from '../types/lease.type';

export const getStatusColor = (status: Status): StatusColor => {
  return STATUS_COLOR_MAP[status] || 'default';
};
