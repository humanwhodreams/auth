'use client';

import { type SignInSchema, signInSchema } from '@/lib/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { cn } from '@/lib/cn';

export function SignInForm() {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      emailAddress: '',
      password: '',
    },
  });

  function onSubmit(values: SignInSchema) {
    console.log(values);
  }

  const error = {
    emailAddress: form.getFieldState('emailAddress').error,
    password: form.getFieldState('password').error,
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:w-96 space-y-3 my-4"
      >
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="name@do.main"
                  variant={'muted'}
                  sizes={'lg'}
                  hasError={error.emailAddress && true}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="•••••••••••••••"
                  variant={'muted'}
                  sizes={'lg'}
                  hasError={error.password && true}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Link
            href={'/forgot-password'}
            className={cn(buttonVariants({ variant: 'link' }))}
          >
            Forgot password?
          </Link>
        </div>
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>
    </Form>
  );
}
