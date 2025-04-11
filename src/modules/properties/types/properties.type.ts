export interface Property {
  id: string;
  name: string;
  marketingName: string;
  location: string;
  longitude: number;
  latitude: number;
  minPersonalPropertyCoverage: number;
  minPersonalLiabilityCoverage: number;
  companyId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}
