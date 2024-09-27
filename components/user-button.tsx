import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOutIcon, SettingsIcon, UserIcon } from 'lucide-react';

import Avatar from 'boring-avatars';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/cn';

interface UserButtonProps {
  userName: string;
}

export function UserButton({ userName }: UserButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type="button"
        className={cn(
          buttonVariants({
            variant: 'secondary',
            size: 'xs',
            className: 'rounded-full px-1',
          })
        )}
        title={userName}
      >
        <Avatar
          size={24}
          name={userName || 'Humanwhodreams'}
          colors={['#ffba08', '#f48c06', '#dc2f02', '#6a040f', '#03071e']}
        />
        <span className="w-[180px] truncate">{userName}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem asChild>
          <Link href={'#'}>
            <UserIcon className="mr-2 size-4 text-muted-foreground" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={'#'}>
            <SettingsIcon className="mr-2 size-4 text-muted-foreground" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={'#'}>
            <LogOutIcon className="mr-2 size-4 text-muted-foreground" />
            <span>Sign out</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
