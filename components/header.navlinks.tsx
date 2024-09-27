import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from './theme-toggle';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/cn';

const NAVLINKS = [
  {
    label: 'Documentation',
    href: '#',
  },
  {
    label: 'Components',
    href: '#',
  },
  {
    label: 'Blog',
    href: '#',
  },
];

export function NavLinks() {
  return (
    <div className="flex items-center gap-x-2">
      {NAVLINKS.map((navlink, idx) => (
        <Link
          key={idx}
          href={navlink.href}
          className={cn(buttonVariants({ variant: 'link' }))}
        >
          {navlink.label}
        </Link>
      ))}
      <Separator orientation="vertical" className="h-6 w-px rounded-full" />
      <ThemeToggle />
      <Link href={'#'} className={cn(buttonVariants({ variant: 'secondary' }))}>
        Sign in
      </Link>
      <Link href={'#'} className={cn(buttonVariants({}))}>
        Get access
      </Link>
    </div>
  );
}
