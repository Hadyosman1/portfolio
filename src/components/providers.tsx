'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { TooltipProvider } from './ui/tooltip';

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider
      disableTransitionOnChange
      enableSystem
      attribute='class'
      defaultTheme='system'
    >
      <TooltipProvider delayDuration={300}>{children}</TooltipProvider>
    </ThemeProvider>
  );
};

export default Providers;
