import { userSchema, type UserSchema } from '@/lib/validators/user';
import {
  type SignInSchema,
  type SignUpSchema,
  signInSchema,
  signUpSchema,
} from '@/lib/validators/auth';

export { userSchema, signInSchema, signUpSchema };

export type { UserSchema, SignInSchema, SignUpSchema };
