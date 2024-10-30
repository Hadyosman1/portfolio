'use client';
import { useTranslation } from '@/app/i18n/client';

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
      data-click-sound={true}
      className={`relative transform overflow-hidden rounded-md px-4 py-2 text-xs font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md sm:px-6 sm:py-3 sm:text-base ${
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

export default function HireMeAndDownloadCV({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, 'translation');
  const handleHireMe = () => {
    // window.location.href = 'mailto:your.email@example.com';
  };

  const handleDownloadCV = () => {
    // window.open('/path-to-your-cv.pdf', '_blank');
  };

  return (
    <div className='flex flex-wrap gap-x-3 gap-y-2'>
      <ActionButton
        primary
        onClick={handleHireMe}
        icon={<ArrowRight size={20} className='rtl:-rotate-180' />}
      >
        {t('intro.hireMe')}
      </ActionButton>
      <ActionButton onClick={handleDownloadCV} icon={<Download size={20} />}>
        {t('intro.downloadCv')}
      </ActionButton>
    </div>
  );
}
