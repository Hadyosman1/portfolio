'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, scale: 0.7, y: -20 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

type Props = {
  text: string | string[];
  className?: string;
  el?: keyof JSX.IntrinsicElements;
  once?: boolean;
  delay?: number;
};

const AnimatedText = ({
  text: t,
  className,
  el: Wrapper = 'p',
  once = false,
  delay = 500
}: Props) => {
  const text = Array.isArray(t) ? t : [t];
  const controls = useAnimationControls();
  const eleRef = useRef(null);

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;
    let innerTimeOut: ReturnType<typeof setTimeout>;

    const show = () => {
      try {
        controls.start('visible');
        if (once) return;

        timeOut = setTimeout(async () => {
          await controls.start('hidden');
          innerTimeOut = setTimeout(() => show(), 200);
        }, delay);
      } catch (error) {
        console.error(error);
      }
    };
    show();
    // if (once) controls.start('visible');
    // else controls.start('hidden');

    return () => {
      clearTimeout(innerTimeOut);
      clearTimeout(timeOut);
    };
  }, [controls, delay, once]);

  return (
    <Wrapper className={className}>
      <span className='sr-only'>{text}</span>
      <motion.div
        ref={eleRef}
        aria-hidden
        variants={{
          hidden: {
            transition: { staggerChildren: 0.06 }
          },
          visible: { transition: { staggerChildren: 0.06 } }
        }}
        initial='hidden'
        animate={controls}
      >
        {text.map((line, idx) => (
          <motion.div className='mb-2' key={`${line}-${idx}`}>
            {line.split(' ').map((word, idx) => (
              <motion.span
                className='mx-[4px] whitespace-nowrap'
                key={`${word}-${idx}`}
              >
                {word.split('').map((char, idx) => (
                  <motion.span
                    key={`${char}-${idx}`}
                    variants={variants}
                    className={char !== ' ' ? 'inline-block' : ''}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </Wrapper>
  );
};

export default AnimatedText;
