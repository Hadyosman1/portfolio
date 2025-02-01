import { Button } from "./ui/button";

import { GithubIcon, WhatsAppIcon } from "@/assets";
import { Linkedin, MailIcon } from "lucide-react";

const socialsContacts = [
  { label: "WhatsApp", icon: WhatsAppIcon, url: "https://wa.me/+201157793069" },
  {
    label: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/hady-osman",
  },
  { label: "GitHub", icon: GithubIcon, url: "https://github.com/Hadyosman1" },
  { label: "Gmail", icon: MailIcon, url: "mailto:hady.osman.dev@gmail.com" },
];

const SocialsContacts = () => {
  return (
    <ul className="fixed bottom-3 left-1/2 z-20 flex h-fit w-fit -translate-x-1/2 overflow-hidden rounded-full border border-muted-foreground/60 bg-secondary/70 sm:left-[auto] sm:right-4 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0 sm:[writing-mode:vertical-lr]">
      {socialsContacts.map(({ label, icon: Icon, url }) => (
        <li key={label}>
          <Button
            asChild
            size="icon"
            variant="ghost"
            className="rounded-none [&_svg]:size-5"
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Icon />
              <span className="sr-only">{label}</span>
            </a>
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default SocialsContacts;
