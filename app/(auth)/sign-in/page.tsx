import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { cn } from '@/lib/cn';
import { focusRing } from '@/lib/focuses';

export default function Page() {
  return (
    <Section>
      <div>
        <h1>Sign in</h1>
        <p className="paragraph lead">Enter your credentials to gain access</p>
      </div>
      <div>
        <p className="paragraph">
          Do not have an account?{' '}
          <Link
            href={'/sign-up'}
            className={cn(
              'text-muted-foreground hover:text-primary',
              focusRing
            )}
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}
