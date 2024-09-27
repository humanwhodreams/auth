import * as React from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
