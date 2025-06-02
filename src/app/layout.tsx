import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "react-medium-image-zoom/dist/styles.css";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SocialsContacts from "@/components/SocialsContacts";
import SplashScreen from "@/components/SplashScreen";
import { ThemeProvider } from "@/components/Theme";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Hady Osman",
  },
  description: `Hi, I'm Hady Osman — a Frontend Developer specializing in building innovative, scalable, and maintainable web applications using modern technologies.`,
  metadataBase: new URL("https://portfolio-hady-osman.vercel.app"),

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: "Hady Osman's Portfolio",
    description: "Check out my work!",
    creator: "@hadyOsman_",
    images: ["https://portfolio-hady-osman.vercel.app/opengraph-image.png"],
  },
  openGraph: {
    title: "Hady Osman's Portfolio",
    description: "Check out my work!",
    url: "https://portfolio-hady-osman.vercel.app",
    siteName: "Hady Osman's Portfolio",
    images: [
      {
        url: "https://portfolio-hady-osman.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "My Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="NTFef-xI-yQfCP8r9q2n4hY9U9gJD6duN6ukbuhHhYU"
        />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-svh flex-col">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <SocialsContacts />
          <SplashScreen />
        </ThemeProvider>
      </body>
    </html>
  );
}
