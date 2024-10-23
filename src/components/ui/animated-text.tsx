'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimationControls, useInView } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
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
  const isInView = useInView(eleRef, { once });

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;

    const show = () => {
      controls.start('visible');
      timeOut = setTimeout(async () => {
        await controls.start('hidden');
         controls.start('visible');
      }, delay);
    };

    if (isInView) {
      show();
    } else {
      controls.start('hidden');
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [isInView, controls, delay]);

  return (
    <Wrapper className={className}>
      <span className='sr-only'>{text}</span>
      <motion.div
        ref={eleRef}
        aria-hidden
        variants={{
          hidden: {
            transition: { staggerDirection: -1, staggerChildren: 0.08 }
          },
          visible: { transition: { staggerChildren: 0.08 } }
        }}
        initial='hidden'
        animate={controls}
      >
        {text.map((line, idx) => (
          <motion.div className='' key={`${line}-${idx}`}>
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
