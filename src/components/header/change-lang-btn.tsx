'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';
import { useRef } from 'react';

import { useTranslation } from 'react-i18next';

const ChangeLangBtn = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const triggerButtonRef = useRef(null);

  const handleChangeLang = (lang: 'ar' | 'en') => {
    i18n.changeLanguage(lang);
  };

  return (
    <Tooltip>
      <DropdownMenu>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button ref={triggerButtonRef} variant='ghost' size='icon'>
              <Globe className='icon-sm' />
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>

        <DropdownMenuContent align={'end'}>
          <DropdownMenuItem
            asChild
            className={cn(
              'cursor-pointer',
              currentLanguage === 'en' && 'bg-accent'
            )}
          >
            <button className='w-full' onClick={() => handleChangeLang('en')}>
              English
            </button>
          </DropdownMenuItem>
          <hr className='my-0.5 opacity-0' />
          <DropdownMenuItem
            asChild
            className={cn(
              'cursor-pointer',
              currentLanguage === 'ar' && 'bg-accent'
            )}
          >
            <button className='w-full' onClick={() => handleChangeLang('ar')}>
              عربي
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TooltipContent>Change Language</TooltipContent>
    </Tooltip>
  );
};

export default ChangeLangBtn;
