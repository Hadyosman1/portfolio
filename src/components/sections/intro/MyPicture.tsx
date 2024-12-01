import Image from 'next/image';

import myImage from '@/../../public/images/me.png';
import glow_circle from '@/../../public/images/shapes/glow_circle.svg';
import CssIcon from '@/components/icons/logos/cssIcon';
import HtmlIcon from '@/components/icons/logos/htmlIcon';
import NextJsIcon from '@/components/icons/logos/nextJsIcon';
import JsIcon from '@/components/icons/logos/jsIcon';
import ReactIcon from '@/components/icons/logos/reactIcon';
import TypeScriptIcon from '@/components/icons/logos/typeScriptIcon';
import ReduxIcon from '@/components/icons/logos/reduxIcon';
import TailwindCssIcon from '@/components/icons/logos/tailwindcss';
import BootstrapIcon from '@/components/icons/logos/bootstrapIcon';
import GitIcon from '@/components/icons/logos/gitIcon';
import GithubIcon from '@/components/icons/logos/githubIcon';

const MyPicture = () => {
  return (
    <div className='my_picture_wrapper relative max-w-[360px] shrink scale-[0.8] selection:bg-transparent max-sm:scale-[0.65]'>
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

      <CssIcon
        className='skill-intro-animation absolute -start-16 z-10 size-11 -translate-y-full'
        style={{ bottom: '80px', filter: `drop-shadow( 0px 0px 10px #1572B6)` }}
      />

      <HtmlIcon
        className='skill-intro-animation absolute -start-10 z-10 size-11 -translate-y-full'
        style={{
          bottom: '160px',
          animationDelay: '0.2s',
          filter: `drop-shadow( 0px 0px 10px #F16C34)`
        }}
      />

      <JsIcon
        className='skill-intro-animation absolute -start-4 z-10 size-11 -translate-y-full'
        style={{
          bottom: '240px',
          animationDelay: '0.3s',
          filter: `drop-shadow( 0px 0px 10px #f3dc1f)`
        }}
      />

      <TypeScriptIcon
        className='skill-intro-animation absolute start-6 z-10 size-10 -translate-y-full'
        style={{
          bottom: '320px',
          animationDelay: '0.4s',
          filter: `drop-shadow( 0px 0px 10px #4c9ed7)`
        }}
      />

      <NextJsIcon
        className='skill-intro-animation absolute z-10 size-11 -translate-y-full'
        style={{
          insetInlineStart: '85px',
          animationDelay: '0.5s',
          bottom: '375px',
          filter: `drop-shadow( 0px 0px 10px #9aaaca)`
        }}
      />

      <ReactIcon
        className='skill-intro-animation absolute z-10 size-11 -translate-y-full'
        style={{
          insetInlineStart: '165px',
          animationDelay: '0.6s',
          bottom: '395px',
          filter: `drop-shadow( 0px 0px 10px #7ccfff)`
        }}
      />

      <ReduxIcon
        className='skill-intro-animation absolute z-10 size-10 -translate-y-full'
        style={{
          insetInlineEnd: '72px',
          animationDelay: '0.7s',
          bottom: '375px',
          filter: `drop-shadow( 0px 0px 10px #8a63d2)`
        }}
      />

      <TailwindCssIcon
        className='skill-intro-animation absolute z-10 size-12 -translate-y-full'
        style={{
          insetInlineEnd: '20px',
          animationDelay: '0.8s',
          bottom: '300px',
          filter: `drop-shadow( 0px 0px 10px #4fd1c5)`
        }}
      />

      <BootstrapIcon
        className='skill-intro-animation absolute z-10 size-11 -translate-y-full'
        style={{
          insetInlineEnd: '-15px',
          animationDelay: '0.9s',
          bottom: '235px',
          filter: `drop-shadow( 0px 0px 10px #7952b3)`
        }}
      />

      <GitIcon
        className='skill-intro-animation absolute z-10 size-11 -translate-y-full'
        style={{
          insetInlineEnd: '-45px',
          animationDelay: '1s',
          bottom: '160px',
          filter: `drop-shadow( 0px 0px 10px #f05033)`
        }}
      />

      <GithubIcon
        className='skill-intro-animation absolute z-10 size-11 -translate-y-full'
        style={{
          insetInlineEnd: '-70px',
          animationDelay: '1.1s',
          bottom: '80px',
          filter: `drop-shadow( 0px 0px 10px #76887899)`
        }}
      />
    </div>
  );
};

export default MyPicture;
