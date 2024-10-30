'use client';

import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
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

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';

const ChangeLangBtn = ({ lng: currentLanguage }: { lng: string }) => {
  const { t } = useTranslation(currentLanguage, 'translation');
  const pathname = usePathname();
  const pathWithOutLang = pathname.split('/').slice(2).join('/');

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button data-click-sound={true} variant='ghost' size='icon'>
              <Languages className='icon-sm' />
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
            <Link
              href={`/en/${pathWithOutLang}`}
              data-click-sound={true}
              className='w-full'
            >
              English
            </Link>
          </DropdownMenuItem>
          <hr className='my-0.5 opacity-0' />
          <DropdownMenuItem
            asChild
            className={cn(
              'cursor-pointer',
              currentLanguage === 'ar' && 'bg-accent'
            )}
          >
            <Link
              href={`/ar/${pathWithOutLang}`}
              data-click-sound={true}
              className='w-full'
            >
              عربي
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
        <TooltipContent>{t('changeLanguage')}</TooltipContent>
      </Tooltip>
    </DropdownMenu>
  );
};

export default ChangeLangBtn;
