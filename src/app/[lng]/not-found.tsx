'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const NotFoundPage = () => {
  const { lng } = useParams();

  return (
    <div className='flex w-full py-32 flex-col items-center justify-center gap-5 px-3 text-center'>
      <div>
        <h1 className='text-6xl font-bold'>404</h1>
        <h2 className='text-3xl font-bold max-w-[500px]'>
          {lng === 'en'
            ? 'Sorry, the page you are looking for not found.'
            : 'نأسف , الصفحة التي تريد الوصول لها غير موجودة'}
        </h2>
      </div>
      <Button className='hover:underline' asChild>
        <Link href={`/${lng}`}>
          {lng === 'en' ? 'Go Home' : 'الصفحة الرئيسية'}
        </Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
