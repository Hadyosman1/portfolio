'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import AnimatedText from '../../ui/animated-text';
import HireMeAndDownloadCV from '@/components/hire-me-and-download-cv';

import myImage from '@/../../public/images/me.png';
import dots_grid from '@/../../public/images/shapes/dots_grid.png';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Intro = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <section
      id='intro-section'
      className='home-section-min-h flex flex-col items-center gap-12 py-10 sm:flex-row'
    >
      <div className='grow'>
        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className={cn(
            'text-2xl font-extrabold text-foreground md:text-4xl',
            currentLanguage === 'ar' ? 'block' : 'hidden'
          )}
        >
          <div className='mb-[10px]'>{t('intro.heading.line1')}</div>
          <div>{t('intro.heading.line2')}</div>
        </motion.h1>

        <AnimatedText
          el='h1'
          text={[t('intro.heading.line1'), t('intro.heading.line2')]}
          className={cn(
            'text-xl font-extrabold text-foreground md:text-3xl',
            currentLanguage === 'ar' ? 'hidden' : 'block'
          )}
          delay={5000}
        />

        <motion.h2
          initial={{ opacity: 0, x: 250, y: 250, rotate: 80 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 1 }}
          className='mt-3 text-balance text-lg font-medium text-muted-foreground sm:max-w-[500px] md:text-xl'
        >
          {t('intro.description')}
        </motion.h2>

        <motion.div
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'tween',
            duration: 0.5,
            delay: 0.2
          }}
          className='mt-4 flex items-center gap-2'
        >
          <HireMeAndDownloadCV />
        </motion.div>
      </div>

      <div className='my_picture_wrapper relative max-w-[360px] shrink overflow-hidden selection:bg-transparent'>
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
          sizes='min-width(0px) 360px'
          className='absolute inset-0 z-[-1] translate-y-1/4 object-cover opacity-50'
          src={dots_grid}
          alt='dots grid'
        />
      </div>
    </section>
  );
};

export default Intro;
