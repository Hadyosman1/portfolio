import Link from 'next/link';

const Logo = ({ lng }: { lng: string }) => {
  return (
    <Link
      data-click-sound={true}
      className='border-b border-accent-foreground font-kalam text-2xl font-bold'
      href={`/${lng}#intro-section`}
    >
      <span className='pointer-events-none  relative inline-block ltr:-rotate-12 ltr:[letter-spacing:-2px]'>
        Hady
      </span>
    </Link>
  );
};

export default Logo;
