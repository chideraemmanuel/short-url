'use client';

import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import { Toaster } from '@/components/ui/sonner';

const ThemeProvider = dynamic(
  () =>
    import('@/providers/theme-provider').then((module) => module.ThemeProvider),
  {
    ssr: false,
  }
);

interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <>
      <ThemeProvider defaultTheme="dark">
        <Toaster richColors position="top-center" />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
