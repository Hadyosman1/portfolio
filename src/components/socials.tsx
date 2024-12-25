import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import WhatsAppIcon from '@/components/icons/logos/whatsAppIcon';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { useTranslation } from '@/app/i18n/client';

const Socials = ({ className, lng }: { className?: string; lng: string }) => {
  const { t } = useTranslation(lng, 'translation');

  const socials = [
    {
      label: t('socials.linkedin'),
      icon: <LinkedInLogoIcon className='icon-sm' />,
      href: 'https://linkedin.com/in/hady-osman'
    },
    {
      label: t('socials.github'),
      icon: <GitHubLogoIcon className='icon-sm' />,
      href: 'https://github.com/Hadyosman1'
    },
    {
      label: t('socials.whatsApp'),
      icon: <WhatsAppIcon className='icon-sm' />,
      href: 'https://wa.me/+201157793069'
    }
  ];

  return (
    <div className={cn('flex gap-1', className)}>
      {socials.map(({ icon, href, label }) => (
        <Tooltip key={href}>
          <TooltipTrigger asChild>
            <Button asChild variant={'ghost'} size={'icon'}>
              <a
                data-click-sound={true}
                rel='noopener noreferrer'
                target='_blank'
                href={href}
              >
                <span className='sr-only'>{label}</span>
                {icon}
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default Socials;
