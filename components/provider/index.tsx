import { ReactNode } from 'react';
import { TailwindIndicator } from '../ui/tailwind-indicator';

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <>
      {children}
      <TailwindIndicator align='center'/>
    </>
  );
}
