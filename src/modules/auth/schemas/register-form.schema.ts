import { z } from 'zod';

export const registerSchema = z
  .object({
    firstName: z.string().max(50, 'First name must be at most 50 characters'),
    lastName: z.string().max(50, 'Last name must be at most 50 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(8, 'Password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {});

export type RegisterFormData = z.infer<typeof registerSchema>;
