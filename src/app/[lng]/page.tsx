import { Metadata } from 'next';

import Contact from '@/components/sections/contact/contact';
import Intro from '@/components/sections/intro/intro';
import Projects from '@/components/sections/projects/projects';
import Skills from '@/components/sections/skills/skills';
import About from '@/components/sections/about/about';

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <div id='home-sections-wrapper'>
      <Intro lng={lng} />
      <About lng={lng} />
      <Projects lng={lng} />
      <Skills />
      <Contact lng={lng} />
    </div>
  );
}

export const metadata: Metadata = {
  title: {
    default: 'Hady Osman | Portfolio',
    template: '%s | Portfolio'
  },
  description: "Hady's Portfolio",
  keywords: ['Hady Osman', 'Portfolio', 'Web Developer', 'Frontend Developer']
};
