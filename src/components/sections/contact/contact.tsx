'use client';

import { useTranslation } from '@/app/i18n/client';
import SectionHeading from '@/components/ui/section-heading';

const Contact = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, 'translation');

  return (
    <section id='contact-section' className='home_section container-md'>
      <SectionHeading>{t('contact')}</SectionHeading>
    </section>
  );
};

export default Contact;
