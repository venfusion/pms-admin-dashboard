export type Lease = {
  id: string;
  userId: string;
  propertyId: string;
  unitId: string;
  addressId: string;
  status: string;
  type: string;
  rentalPlanId: string;
  startDate: Date;
  endDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
};
