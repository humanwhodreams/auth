import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="p-24 space-y-4">
      <h1>Welcome to Auth</h1>
      <Button type="button">
        <code>/Sign in</code>
      </Button>
    </div>
  );
}
