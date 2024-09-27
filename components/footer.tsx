import Link from 'next/link';
import { cn } from '@/lib/cn';
import { focusRing } from '@/lib/focuses';

export function Footer() {
  return (
    <footer className='w-full'>
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-14 py-1.5">
        <p className="muted">
          Built in public by{' '}
          <Link href={'#'} className={cn('hover:text-primary', focusRing)}>
            humanwhodreams ↗
          </Link>
        </p>
        <p className="muted">&copy; 2024. MIT License</p>
      </nav>
    </footer>
  );
}
