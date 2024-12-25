import Link from 'next/link';
import { DevHead } from '../icons/devHead';

const Logo = ({ lng }: { lng: string }) => {
  return (
    <Link
      data-click-sound={true}
      className='block w-fit'
      href={`/${lng}#intro-section`}
    >
      <DevHead className='size-10 pointer-events-none' />
      <span className='sr-only'>Hady Osman</span>
    </Link>
  );
};

export default Logo;
