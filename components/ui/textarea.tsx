import * as React from 'react';

import { cn } from '@/lib/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { focusError, focusInput } from '@/lib/focuses';

const textareaVariants = cva(
  [
    'flex w-full rounded-md border border-input px-3 py-2 text-base placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
    focusInput,
  ],
  {
    variants: {
      variant: {
        default: 'bg-background',
        muted: 'bg-muted',
      },
      sizes: {
        sm: 'min-h-[40px]',
        default: 'min-h-[80px]',
        lg: 'min-h-[120px]',
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

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, sizes, hasError, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          textareaVariants({ variant, sizes, hasError, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
