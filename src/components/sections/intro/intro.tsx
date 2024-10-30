'use client';

import Image from 'next/image';
import { useTranslation } from '@/app/i18n/client';

import AnimatedText from '../../ui/animated-text';
import HireMeAndDownloadCV from '@/components/hire-me-and-download-cv';

import myImage from '@/../../public/images/me.png';
import glow_circle from '@/../../public/images/shapes/glow_circle.svg';

import { motion } from 'framer-motion';

const Intro = ({ lng }: { lng: string }) => {
  const { t, i18n } = useTranslation(lng, 'translation');
  const currentLanguage = i18n.resolvedLanguage;

  return (
    <section id='intro-section overflow-x-hidden'>
      <div className='home_section container-md flex h-full flex-col items-center gap-9 py-10 md:flex-row'>
        <div className='grow'>
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
                  {t('intro.heading.line1')}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -150 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {t('intro.heading.line2')}
                </motion.div>
              </motion.h1>
            ) : (
              <AnimatedText
                el='h1'
                text={[t('intro.heading.line1'), t('intro.heading.line2')]}
                className='text-center text-xl font-extrabold text-foreground md:text-start md:text-3xl'
                delay={5000}
              />
            )}

            <motion.h2
              initial={{ opacity: 0, x: 250, y: 250, rotate: 80 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 1 }}
              className='mt-3 max-w-[570px] text-balance text-center text-lg font-medium text-muted-foreground md:text-start md:text-xl'
            >
              {t('intro.description')}
            </motion.h2>
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

        <div className='my_picture_wrapper relative max-w-[360px] shrink overflow-x-clip selection:bg-transparent'>
          <Image
            priority
            unoptimized
            className='h-auto w-full brightness-90'
            width={360}
            height={0}
            src={myImage}
            alt='Hady Osman'
          />

          <Image
            fill
            priority
            sizes='(min-width: 0px) 360px'
            className='absolute inset-0 z-[-1] h-full w-full translate-y-8 scale-105'
            src={glow_circle}
            alt='shape'
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
