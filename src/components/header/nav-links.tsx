'use client';

import { useMemo } from 'react';
import { useTranslation } from '@/app/i18n/client';
import useSpyScroll from '@/hooks/useSpyScroll';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const NavLinks = ({
  toggleNav,
  isNavOpen,
  lng
}: {
  isNavOpen: boolean;
  toggleNav: () => void;
  lng: string;
}) => {
  const {
    t,
    i18n: { resolvedLanguage }
  } = useTranslation(lng, 'translation');
  const { pathWithHash, setPathWithHash } = useSpyScroll(
    '#home-sections-wrapper'
  );

  const links = useMemo(
    () => [
      { href: `/${resolvedLanguage}#about-section`, label: t('about') },
      { href: `/${resolvedLanguage}#projects-section`, label: t('projects') },
      { href: `/${resolvedLanguage}#skills-section`, label: t('skills') },
      { href: `/${resolvedLanguage}#contact-section`, label: t('contact') }
    ],
    [t, resolvedLanguage]
  );

  const isLinkActive = (href: string) => {
    return href === pathWithHash;
  };

  const handleNavigate = (href: string) => {
    setPathWithHash(href);
    if (isNavOpen) toggleNav();
  };

  const MotionButton = motion.create(Button);

  return (
    <>
      {links.map(({ href, label }) => (
        <li className='w-full sm:w-auto' key={href}>
          <MotionButton
            asChild
            variant={'ghost'}
            size={'sm'}
            className={cn(
              'w-full transform-gpu font-semibold transition-all sm:w-auto',
              isLinkActive(href) && 'hover:bg-transparent',
              'relative z-[1] underline-offset-2 hover:underline'
            )}
          >
            <Link
              href={href}
              onClick={() => handleNavigate(href)}
              data-click-sound={true}
            >
              {label}
              {isLinkActive(href) && (
                <motion.span
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.4 }}
                  transition={{ ease: 'easeIn', duration: 0.2 }}
                  layoutId='nav-link'
                  className='active_link_background absolute rounded-md ring-1 ring-muted-foreground'
                />
              )}
            </Link>
          </MotionButton>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
