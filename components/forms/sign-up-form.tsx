'use client';

import { type SignUpSchema, signUpSchema } from '@/lib/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2Icon } from 'lucide-react';

export function SignUpForm() {
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
    },
  });

  async function onSubmit(values: SignUpSchema) {
    console.log(values);
    form.reset();
  }

  const error = {
    name: form.getFieldState('name').error,
    email: form.getFieldState('email').error,
    password: form.getFieldState('password').error,
    confirm: form.getFieldState('confirm').error,
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:w-96 space-y-3 my-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name (optional)</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Humanwhodreams"
                  variant={'muted'}
                  sizes={'lg'}
                  hasError={error.name && true}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="name@do.main"
                  variant={'muted'}
                  sizes={'lg'}
                  hasError={error.email && true}
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
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="•••••••••••••••"
                  variant={'muted'}
                  sizes={'lg'}
                  hasError={error.confirm && true}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2Icon className="size-4 mr-2 animate-spin flex-shrink-0 text-current" />
              Creating account
            </>
          ) : (
            <>Create account</>
          )}
        </Button>
      </form>
    </Form>
  );
}
