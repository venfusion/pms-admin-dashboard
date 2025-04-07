import { z } from 'zod';

const envSchema = z.object({
  VITE_API_URL: z.string().url().min(1, 'VITE_API_URL is required'),
});

const parsedEnv = envSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  throw new Error(`Env validation failed: invalid environment variables`);
}

export const validatedEnv = parsedEnv.data;
