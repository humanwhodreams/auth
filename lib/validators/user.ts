import { z } from 'zod';

const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .max(32, 'Password must be fewer than 32 characters')
  .regex(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
    'At least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'
  );

const userSchema = z.object({
  name: z
    .string()
    .max(32, 'Name must be fewer than 32 characters')
    .default('User')
    .optional(),
  emailAddress: z
    .string()
    .min(3, 'Email must be at least 3 characters')
    .max(150, 'Email must be fewer than 150 chracters')
    .email(),
  password: passwordSchema,
  bio: z.string().max(300, 'Bio must be fewer than 300 characters').optional(),
});

type UserSchema = z.infer<typeof userSchema>;

export { userSchema, type UserSchema };
