import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import WhatsAppIcon from '@/../../public/icons/whatsAppIcon';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const socials = [
  {
    label: 'Linkedin',
    icon: <LinkedInLogoIcon className='icon-sm' />,
    href: 'https://linkedin.com/in/hady-osman'
  },
  {
    label: 'Github',
    icon: <GitHubLogoIcon className='icon-sm' />,
    href: 'https://github.com/Hadyosman1'
  },
  {
    label: 'WhatsApp',
    icon: <WhatsAppIcon className='icon-sm' />,
    href: 'https://wa.me/+201157793069'
  }
];

const Socials = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex gap-1', className)}>
      {socials.map(({ icon, href, label }) => (
        <Tooltip key={href}>
          <TooltipTrigger asChild>
            <Button asChild variant={'ghost'} size={'icon'}>
              <a target='_blank' href={href}>
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
