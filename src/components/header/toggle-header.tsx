import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const ToggleHeader = ({
  isNavOpen,
  toggleNav
}: {
  isNavOpen: boolean;
  toggleNav: () => void;
}) => {
  return (
    <Button
      data-click-sound={true}
      variant='outline'
      size='icon'
      dir='ltr'
      className='ms-auto sm:hidden'
      onClick={toggleNav}
    >
      <span className='sr-only'>
        Toggle Navigation
        {isNavOpen ? '(open)' : '(closed)'}
      </span>

      <div
        className={
          'relative pointer-events-none flex h-5 w-5 flex-col items-center justify-center rounded-md transition-all'
        }
      >
        <span
          className={cn(
            'absolute left-0 top-0 h-[3px] w-full rounded-md bg-foreground transition-all duration-200',
            isNavOpen && 'top-1/2 -translate-y-1/2 rotate-45'
          )}
        />
        <span
          className={cn(
            'h-[3.20px] w-full rounded-md bg-foreground transition-all',
            isNavOpen && 'opacity-0'
          )}
        />
        <span
          className={cn(
            'absolute bottom-0 left-0 h-[3px] w-full rounded-md bg-foreground transition-all duration-200',
            isNavOpen && 'top-1/2 -translate-y-1/2 -rotate-45'
          )}
        />
      </div>
    </Button>
  );
};

export default ToggleHeader;
