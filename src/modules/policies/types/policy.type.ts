export enum PolicyStatus {
  DRAFT = 'DRAFT',
  CANCELLED = 'CANCELLED',
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
  TERMINATED = 'TERMINATED',
}

export enum PolicyPaymentType {
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}

export type Policy = {
  id: string;
  leaseId: string;
  userId: string;
  propertyId: string;
  unitId?: string;
  addressId: string;
  status: PolicyStatus;
  effectiveDate: string;
  expiryDate?: string;
  paymentType: PolicyPaymentType;
  price: string;
  deductible: string;
  personalPropertyCoverage: string;
  personalLiabilityCoverage: string;
  lossOfUseCoverage?: string;
  medicalPaymentsCoverage?: string;
  scheduledPersonalPropertyCoverage?: string;
  waterBackupCoverage?: string;
  earthquakeCoverage?: string;
  floodCoverage?: string;
  identityTheftCoverage?: string;
  petLiabilityCoverage?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};
