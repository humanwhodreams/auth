import { ReactNode } from 'react';
import { TailwindIndicator } from '../ui/tailwind-indicator';
import { ThemeProvider } from './theme';

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <TailwindIndicator align="center" />
      </ThemeProvider>
    </>
  );
}
