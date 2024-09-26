import { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/cn';

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export function Section({ children, className, id, ...props }: Props) {
  return (
    <section
      id={id}
      className={cn(
        'max-w-5xl mx-auto px-4 py-12 sm:px-6 md:px-8 lg:px-10 xl:px-12',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
