'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
          }}
          size={'icon'}
          variant='ghost'
        >
          {resolvedTheme === 'dark' ? (
            <SunIcon className='icon-sm' />
          ) : (
            <MoonIcon className='icon-sm' />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>Toggle theme</TooltipContent>
    </Tooltip>
  );
};

export default ThemeToggle;
