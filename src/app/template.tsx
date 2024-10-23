'use client';

import { ReactNode, useEffect } from 'react';

import '@/i18n';
import { useTranslation } from 'react-i18next';
import { setCookie } from '@/lib/cookies';

const RootTemplate = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    setCookie('Lang', lang);
  }, [lang, dir]);

  return <>{children}</>;
};

export default RootTemplate;
