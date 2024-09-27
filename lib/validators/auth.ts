import { userSchema } from '@/lib/validators/user';
import { z } from 'zod';

const signInSchema = userSchema.pick({ emailAddress: true, password: true });
const signUpSchema = z
  .object({
    name: userSchema.pick({ name: true }),
    emailAddress: userSchema.pick({ emailAddress: true }),
    password: userSchema.pick({ password: true }),
    confirmPassword: userSchema.pick({ password: true }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

type SignInSchema = z.infer<typeof signInSchema>;
type SignUpSchema = z.infer<typeof signUpSchema>;

export { signInSchema, type SignInSchema };
export { signUpSchema, type SignUpSchema };
