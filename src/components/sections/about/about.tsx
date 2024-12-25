'use client';

import { useTranslation } from '@/app/i18n/client';
import SectionHeading from '@/components/ui/section-heading';

const About = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, 'translation');

  return (
    <section
      id='about-section'
      className='home_section container-md text-white'
    >
      <SectionHeading>{t('about')}</SectionHeading>
    </section>
  );
};

export default About;
