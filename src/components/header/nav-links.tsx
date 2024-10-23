'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import useSpyScroll from '@/hooks/useSpyScroll';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';

import { cn } from '@/lib/utils';

const NavLinks = ({
  toggleNav,
  isNavOpen
}: {
  isNavOpen: boolean;
  toggleNav: () => void;
}) => {
  const router = useRouter();

  const { t } = useTranslation();
  const { pathWithHash, setPathWithHash } = useSpyScroll(
    '#home-sections-wrapper'
  );

  const links = useMemo(
    () => [
      { href: '/#about-section', label: t('about') },
      { href: '/#projects-section', label: t('projects') },
      { href: '/#skills-section', label: t('skills') },
      { href: '/#contact-section', label: t('contact') }
    ],
    [t]
  );

  const isLinkActive = (href: string) => {
    return href === pathWithHash;
  };

  const handleNavigate = (href: string) => {
    setPathWithHash(href);
    router.replace(href);
    if (isNavOpen) toggleNav();
  };

  const MotionButton = motion.create(Button);

  return (
    <>
      {links.map(({ href, label }) => (
        <li className='w-full sm:w-auto' key={href}>
          <MotionButton
            onClick={() => handleNavigate(href)}
            variant={'ghost'}
            size={'sm'}
            className={cn(
              'w-full sm:w-auto',
              isLinkActive(href) &&
                'ring-1 ring-muted-foreground hover:bg-transparent',
              'relative z-[1] underline-offset-2 hover:underline'
            )}
          >
            {label}
            {isLinkActive(href) && (
              <motion.span
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.4 }}
                transition={{ ease: 'easeIn', duration: 0.2 }}
                layoutId='nav-link'
                className='active_link_background absolute rounded-md'
              />
            )}
          </MotionButton>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
