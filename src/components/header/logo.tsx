import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      className='border-b border-accent-foreground font-kalam text-2xl font-bold'
      href='/'
    >
      <span className='relative inline-block ltr:-rotate-12 ltr:[letter-spacing:-2px]'>
        Hady
      </span>
    </Link>
  );
};

export default Logo;
