import { userSchema } from '@/lib/validators/user';
import { z } from 'zod';

const signInSchema = userSchema.pick({ email: true, password: true });
const signUpSchema = userSchema
.pick({
  name: true,
  email: true,
  password: true,
  confirm: true,
})
  .refine((data) => data.password === data.confirm, {
    path: ['confirm'],
    message: 'Passwords do not match',
  });

type SignInSchema = z.infer<typeof signInSchema>;
type SignUpSchema = z.infer<typeof signUpSchema>;

export { signInSchema, type SignInSchema };
export { signUpSchema, type SignUpSchema };
