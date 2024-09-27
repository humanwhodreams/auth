import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { cn } from '@/lib/cn';
import { focusRing } from '@/lib/focuses';

export default function Page() {
  return (
    <Section>
      <div>
        <h1>Sign up</h1>
        <p className="paragraph lead">Enter your credentials to gain access</p>
      </div>
      <div>
        <p className="paragraph">
          Already have an account?{' '}
          <Link
            href={'/sign-in'}
            className={cn(
              'text-muted-foreground hover:text-primary',
              focusRing
            )}
          >
            Sign in
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}
