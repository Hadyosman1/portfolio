'use client';

import useClickSound from '@/hooks/useClickSound';
import { ReactNode } from 'react';

const RootTemplate = ({ children }: { children: ReactNode }) => {
  useClickSound();

  return <>{children}</>;
};

export default RootTemplate;
