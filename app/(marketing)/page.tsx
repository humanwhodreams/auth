import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { UserButton } from '@/components/user-button';
import { buttonVariants } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <Section className="space-y-4">
        <h1>Authentication workflow guide.</h1>
        <p className="md:w-3/5 lead">
          Full authentication flow built using Auth.js, React.js, Next.js,
          Tailwindcss, Typescript, Drizzle, and NeonDB.
        </p>

        <div className='flex flex-col items-center gap-2 md:flex-row'>
          <Link
            href={'#'}
            className={buttonVariants({ variant: 'tertiary', size: 'lg' })}
          >
            Get access &mdash; For Free
          </Link>
          <Link
            href={'#'}
            className={buttonVariants({ variant: 'secondary', size: 'lg' })}
          >
            GitHub
          </Link>
        </div>
      </Section>
      <Section>
        <UserButton userName='Enoabasi Ephraim Essien'/>
      </Section>
    </>
  );
}
