import localFont from 'next/font/local';
import { Cairo } from 'next/font/google';

import './globals.css';

import { dir } from 'i18next';
import { languages } from '../i18n/settings';

import Providers from '@/components/providers';
import Header from '@/components/header/header';
import Footer from '@/components/footer';
import RootTemplate from '@/app/[lng]/template';

import { cn } from '@/lib/utils';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});
const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo'
});

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: string;
  };
}>) {
  const { lng } = params;

  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/seo/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/seo/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/seo/favicon-16x16.png'
        />
        <link rel='icon' href='/seo/favicon.ico' />
        <link rel='manifest' href='/seo/site.webmanifest' />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/seo/android-chrome-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='512x512'
          href='/seo/android-chrome-512x512.png'
        />
      </head>
      <body
        className={cn(
          'flex min-h-svh flex-col antialiased',
          geistSans.variable,
          geistMono.variable,
          cairo.variable
        )}
      >
        <Providers>
          <RootTemplate key={'root_template'}>
            <Header lng={lng} />
            <main className='grow'>{children}</main>
            <Footer />
          </RootTemplate>
        </Providers>
      </body>
    </html>
  );
}
