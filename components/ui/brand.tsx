import Link from 'next/link';
import { cn } from '@/lib/cn';
import { focusRing } from '@/lib/focuses';

interface Props {
  href?: `/${string}`;
  className?: string;
}

export function Brand({ className, href }: Props) {
  return (
    <Link
      href={href || '/'}
      className={cn(
        'text-3xl font-semibold tracking-tight leading-none',
        focusRing,
        className
      )}
    >
      ✱Auth
    </Link>
  );
}
