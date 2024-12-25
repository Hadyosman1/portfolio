'use client';

import { useTranslation } from '@/app/i18n/client';

import AnimatedText from '../../ui/animated-text';
import HireMeAndDownloadCV from '@/components/hire-me-and-download-cv';

import { motion } from 'framer-motion';
import MyPicture from './MyPicture';

const Intro = ({ lng }: { lng: string }) => {
  const { t, i18n } = useTranslation(lng, 'translation');
  const currentLanguage = i18n.resolvedLanguage;

  return (
    <section id='intro-section'>
      <div className='container-md flex h-full flex-col items-center gap-9 py-28 max-md:gap-20 md:flex-row'>
        <div id='intro-content' className='grow'>
          <div className=''>
            {currentLanguage === 'ar' ? (
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ staggerChildren: 1 }}
                className='text-center text-2xl font-extrabold text-foreground md:text-start md:text-4xl'
              >
                <motion.div
                  initial={{ opacity: 0, x: 150 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className='mb-[10px]'
                >
                  {t('introSection.heading.line1')}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -150 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {t('introSection.heading.line2')}
                </motion.div>
              </motion.h1>
            ) : (
              <AnimatedText
                el='h1'
                text={[
                  t('introSection.heading.line1'),
                  t('introSection.heading.line2')
                ]}
                className='text-center text-xl font-extrabold text-foreground md:text-start md:text-3xl'
                delay={5000}
              />
            )}

            <motion.p
              initial={{ opacity: 0, x: 250, y: 250, rotate: 80 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 1 }}
              className='mt-6 max-w-[480px] text-balance text-center text-base font-medium text-muted-foreground md:text-start md:text-lg rtl:leading-8'
            >
              {t('introSection.description')}
            </motion.p>
          </div>

          <motion.div
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 0.5,
              delay: 0.2
            }}
            className='mt-6 flex items-center justify-center gap-2 md:justify-start'
          >
            <HireMeAndDownloadCV lng={lng} />
          </motion.div>
        </div>
        <MyPicture />
      </div>
    </section>
  );
};

export default Intro;
