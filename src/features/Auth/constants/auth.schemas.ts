import * as z from 'zod';

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 4 characters')
    .max(20, 'Username is too long'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
