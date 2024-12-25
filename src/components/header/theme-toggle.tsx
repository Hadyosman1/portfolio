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
import { useTranslation } from '@/app/i18n/client';

const ThemeToggle = ({ lng }: { lng: string }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useTranslation(lng, 'translation');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size={'icon'}
          variant='ghost'
          data-click-sound={true}
          onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
          }}
        >
          <span className='sr-only'>{t('toggleTheme')}</span>
          {resolvedTheme === 'dark' ? (
            <SunIcon className='icon-sm' />
          ) : (
            <MoonIcon className='icon-sm' />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{t('toggleTheme')}</TooltipContent>
    </Tooltip>
  );
};

export default ThemeToggle;
