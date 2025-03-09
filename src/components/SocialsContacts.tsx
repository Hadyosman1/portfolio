import { Button } from "./ui/button";

import { GithubIcon, WhatsAppIcon } from "@/assets";
import { Linkedin, MailIcon } from "lucide-react";

const socialsContacts = [
  {
    label: "WhatsApp",
    icon: <WhatsAppIcon className="group-hover:text-green-500" />,
    url: "https://wa.me/+201157793069",
  },
  {
    label: "LinkedIn",
    icon: <Linkedin className="group-hover:text-blue-500" />,
    url: "https://www.linkedin.com/in/hady-osman",
  },
  {
    label: "GitHub",
    icon: <GithubIcon />,
    url: "https://github.com/Hadyosman1",
  },
  {
    label: "Gmail",
    icon: <MailIcon className="group-hover:text-orange-400" />,
    url: "mailto:hady.osman.dev@gmail.com",
  },
];

const SocialsContacts = () => {
  return (
    <ul
      id="socials-contacts-container"
      className="fixed bottom-5 left-1/2 z-20 flex h-11 w-[280px] -translate-x-1/2 overflow-hidden rounded-full border border-muted-foreground/60 bg-secondary/60 backdrop-blur-sm transition-all duration-300 hover:[box-shadow:0_0_10px_-2px_hsl(var(--foreground)_/_0.7)]"
    >
      {socialsContacts.map(({ label, icon, url }) => (
        <li className="grow" key={label}>
          <Button
            asChild
            size="icon"
            variant="ghost"
            className="group h-full w-full justify-center rounded-none [&_svg]:size-6"
          >
            <a
              href={url}
              target="_blank"
              className="*:transition-colors *:duration-300"
              rel="noopener noreferrer"
            >
              {icon}
              <span className="sr-only">{label}</span>
            </a>
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default SocialsContacts;
