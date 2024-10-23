'use client';
import { useTranslation } from 'react-i18next';

import { ReactEventHandler, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

interface IActionButtonProps {
  children: ReactNode;
  primary?: boolean;
  onClick: ReactEventHandler;
  icon: ReactNode;
}

const ActionButton = ({
  children,
  icon,
  onClick,
  primary = false
}: IActionButtonProps) => {
  return (
    <Button
      className={`relative transform overflow-hidden rounded-md px-6 py-3 font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md ${
        primary
          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
      } group border-2 dark:border-white`}
      onClick={onClick}
    >
      <span className='relative z-10 flex items-center'>
        {children}
        {icon && (
          <span
            className={`ms-2 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1`}
          >
            {icon}
          </span>
        )}
      </span>
    </Button>
  );
};

export default function HireMeAndDownloadCV() {
  const { t } = useTranslation();
  const handleHireMe = () => {
    window.location.href = 'mailto:your.email@example.com';
  };

  const handleDownloadCV = () => {
    window.open('/path-to-your-cv.pdf', '_blank');
  };

  return (
    <div className='flex flex-col gap-4 sm:flex-row'>
      <ActionButton
        onClick={handleHireMe}
        icon={<ArrowRight size={20} />}
        primary
      >
        {t('intro.hireMe')}
      </ActionButton>
      <ActionButton onClick={handleDownloadCV} icon={<Download size={20} />}>
        {t('intro.downloadCv')}
      </ActionButton>
    </div>
  );
}
