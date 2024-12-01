import Link from 'next/link';

const Logo = ({ lng }: { lng: string }) => {
  return (
    <Link
      data-click-sound={true}
      className='text-3xl font-bold'
      href={`/${lng}#intro-section`}
    >
      <span className='pointer-events-none relative inline-block border-b border-b-accent-foreground italic ltr:-rotate-12'>
        H
      </span>
    </Link>
  );
};

export default Logo;
