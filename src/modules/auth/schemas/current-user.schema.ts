import { z } from 'zod';

export const currentUserSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export type CurrentUser = z.infer<typeof currentUserSchema>;
