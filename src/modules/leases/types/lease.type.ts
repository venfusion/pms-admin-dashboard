export type Lease = {
  id: string;
  userId: string;
  propertyId: string;
  unitId: string;
  addressId: string;
  status: string;
  type: string;
  rentalPlanId: string;
  startDate: string;
  endDate: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
};

export enum Status {
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',
  DRAFT = 'DRAFT',
  REJECTED = 'REJECTED',
  SIGNED = 'SIGNED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
  TERMINATED = 'TERMINATED',
}

export type StatusColor = 'success' | 'warning' | 'error' | 'info' | 'default';

export const STATUS_COLOR_MAP: Record<Status, StatusColor> = {
  [Status.ACTIVE]: 'success',
  [Status.PENDING]: 'warning',
  [Status.DRAFT]: 'default',
  [Status.REJECTED]: 'error',
  [Status.SIGNED]: 'info',
  [Status.CANCELLED]: 'error',
  [Status.EXPIRED]: 'warning',
  [Status.TERMINATED]: 'error',
};

export enum LeaseType {
  MONTHLY = 'monthly',
  WEEKLY = 'weekly',
  DAILY = 'daily',
  YEARLY = 'yearly',
  QUARTERLY = 'quarterly',
}
