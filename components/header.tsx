'use client';

import { Brand } from '@/components/ui/brand';
import { HeaderMobile } from './header.mobile';
import { NavLinks } from './header.navlinks';
import { cn } from '@/lib/cn';
import { useMediaQuery } from '@/hooks/use-media-query';

interface Props {
  classes?: {
    header?: string;
    nav?: string;
  };
}

export function Header({ classes }: Props) {
  const IS_MOBILE = useMediaQuery('(max-width: 768px)');

  return (
    <header className={cn('w-full sticky top-0 inset-x-0', classes?.header)}>
      <nav
        className={cn(
          'flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-14 py-1.5',
          classes?.nav
        )}
      >
        <Brand />

        {IS_MOBILE ? <HeaderMobile /> : <NavLinks />}
      </nav>
    </header>
  );
}
