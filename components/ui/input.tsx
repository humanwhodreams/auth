import * as React from 'react';

import { cn } from '@/lib/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { focusError, focusInput } from '@/lib/focuses';

const inputVariants = cva(
  [
    'flex w-full rounded-md border border-input px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
    focusInput,
  ],
  {
    variants: {
      variant: {
        default: 'bg-background',
        muted: 'bg-muted',
      },
      sizes: {
        default: 'h-10',
        sm: 'h-8',
        lg: 'h-12',
      },
      hasError: {
        true: focusError,
      },
    },
    defaultVariants: {
      variant: 'default',
      sizes: 'default',
      hasError: false,
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, sizes, hasError, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, sizes, hasError, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
