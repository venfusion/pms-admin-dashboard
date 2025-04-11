import dayjs, { Dayjs } from 'dayjs';
import { z } from 'zod';

import { PolicyPaymentType, PolicyStatus } from '../types/policy.type';

export const policyListFilterFormSchema = z.object({
  userId: z
    .string({
      invalid_type_error: 'User ID must be a string',
    })
    .nullish(),
  propertyId: z
    .string({
      invalid_type_error: 'Property ID must be a string',
    })
    .nullish(),
  addressId: z
    .string({
      invalid_type_error: 'Address ID must be a string',
    })
    .nullish(),
  unitId: z
    .string({
      invalid_type_error: 'Unit ID must be a string',
    })
    .nullish(),
  medicalPaymentsCoverage: z
    .boolean({
      invalid_type_error: 'Medical payments coverage must be a boolean value',
    })
    .optional(),
  scheduledPersonalPropertyCoverage: z
    .boolean({
      invalid_type_error: 'Scheduled personal property coverage must be a boolean value',
    })
    .optional(),
  waterBackupCoverage: z
    .boolean({
      invalid_type_error: 'Water backup coverage must be a boolean value',
    })
    .optional(),
  earthquakeCoverage: z
    .boolean({
      invalid_type_error: 'Earthquake coverage must be a boolean value',
    })
    .optional(),
  floodCoverage: z
    .boolean({
      invalid_type_error: 'Flood coverage must be a boolean value',
    })
    .optional(),
  identityTheftCoverage: z
    .boolean({
      invalid_type_error: 'Identity theft coverage must be a boolean value',
    })
    .optional(),
  petLiabilityCoverage: z
    .boolean({
      invalid_type_error: 'Pet liability coverage must be a boolean value',
    })
    .optional(),
  effectiveStartDate: z
    .instanceof(dayjs as unknown as typeof Dayjs, {
      message: 'Invalid effective start date format',
    })
    .nullish(),
  effectiveEndDate: z
    .instanceof(dayjs as unknown as typeof Dayjs, {
      message: 'Invalid effective end date format',
    })
    .nullish(),
  expiryStartDate: z
    .instanceof(dayjs as unknown as typeof Dayjs, {
      message: 'Invalid expiry start date format',
    })
    .nullish(),
  expiryEndDate: z
    .instanceof(dayjs as unknown as typeof Dayjs, {
      message: 'Invalid expiry end date format',
    })
    .nullish(),
  status: z
    .nativeEnum(PolicyStatus, {
      errorMap: () => ({ message: 'Please select a valid policy status' }),
    })
    .array()
    .optional(),
  paymentType: z
    .nativeEnum(PolicyPaymentType, {
      errorMap: () => ({ message: 'Please select a valid payment type' }),
    })
    .nullish(),
  sortBy: z
    .enum(['createdAt', 'updatedAt', 'effectiveDate', 'expiryDate'], {
      errorMap: () => ({ message: 'Please select a valid sort option' }),
    })
    .nullish(),
  orderBy: z
    .enum(['asc', 'desc'], {
      errorMap: () => ({ message: 'Please select a valid order' }),
    })
    .nullish(),
});

export type PolicyListFilterFormSchema = z.infer<typeof policyListFilterFormSchema>;
