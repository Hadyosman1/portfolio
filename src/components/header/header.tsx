'use client';

import { useCallback, useState } from 'react';

import NavLinks from './nav-links';
import Logo from './logo';
import Socials from '../socials';
import ChangeLangBtn from './change-lang-btn';
import ThemeToggle from './theme-toggle';
import ToggleHeader from './toggle-header';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = useCallback(() => setIsNavOpen(prev => !prev), []);

  return (
    <header className='sticky top-0 z-40 overflow-x-clip bg-background/40 shadow shadow-muted-foreground backdrop-blur-sm sm:shadow-none'>
      <nav className='container flex max-w-5xl items-center gap-3 py-3 md:gap-8 rtl:flex-row-reverse'>
        <div dir='ltr'>
          <Logo />
        </div>

        <div
          dir='ltr'
          className={cn(
            isNavOpen
              ? 'right-0 flex-col items-end gap-5 border-s border-foreground bg-background/95 px-4 py-4 opacity-100 backdrop-blur-lg sm:static sm:translate-x-0 sm:translate-y-0 sm:flex-row sm:border-s-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none'
              : 'translate-x-[100vw] overflow-y-auto opacity-0 sm:translate-x-0 sm:translate-y-0 sm:flex-row sm:overflow-visible sm:opacity-100',
            'fixed bottom-0 flex h-[calc(100dvh_-_58px)] w-[80vw] grow translate-y-full sm:static sm:h-auto sm:w-auto'
          )}
        >
          <ul
            className={cn(
              'links_wrapper_border relative flex justify-center gap-3 py-1.5 sm:mx-auto sm:gap-1.5 rtl:flex-row-reverse',
              isNavOpen &&
                'flex-col items-end self-end sm:flex-row sm:items-center sm:justify-center'
            )}
          >
            <NavLinks isNavOpen={isNavOpen} toggleNav={toggleNav} />
          </ul>

          <div
            dir='ltr'
            className={cn(
              'flex items-center gap-1 md:gap-2',
              isNavOpen && 'self-center sm:self-auto'
            )}
          >
            <Socials className='border-e border-accent-foreground pe-2' />
            <div className='min-w-9'>
              <ThemeToggle />
            </div>
            <ChangeLangBtn />
          </div>
        </div>

        <ToggleHeader toggleNav={toggleNav} isNavOpen={isNavOpen} />
      </nav>
    </header>
  );
};

export default Header;
