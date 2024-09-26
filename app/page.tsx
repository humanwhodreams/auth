import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <div className="p-24 space-y-4">
      <h1>Welcome to Auth</h1>
      <div className="flex items-center gap-4">
        <Button type="button">
          <code>/Sign in</code>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
}
