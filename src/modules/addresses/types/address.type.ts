export type Address = {
  id: string;
  propertyId: string;
  companyId: string;
  number?: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  longitude: number;
  latitude: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
};
