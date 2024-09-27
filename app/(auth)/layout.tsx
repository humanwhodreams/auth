import { Brand } from '@/components/ui/brand';
import Link from 'next/link';
import { ReactNode } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/cn';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

const NAVLINKS = [
  {
    label: 'Terms',
    href: '/terms',
  },
  {
    label: 'Privacy',
    href: '/privacy',
  },
];

function Header() {
  return (
    <header className="w-full sticky top-0 inset-x-0">
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-14 py-1.5">
        <Brand />
        <div className="flex items-center">
          {NAVLINKS.map((navlink) => (
            <Link
              key={navlink.href}
              href={navlink.href}
              className={cn(buttonVariants({ variant: 'ghost', size: 'xs' }))}
            >
              {navlink.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
