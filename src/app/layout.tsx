import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import "react-medium-image-zoom/dist/styles.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/Theme";
import SocialsContacts from "@/components/SocialsContacts";
import { Toaster } from "@/components/ui/toaster";
import SplashScreen from "@/components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Hady Osman",
  },
  description:
    "Hello, I'm Hady Osman, A Frontend Developer. \nI specialize in building innovative, scalable, and maintainable web applications using cutting-edge technologies.",
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
  openGraph: {
    title: "Hady Osman's Portfolio",
    description: "Check out my work!",
    url: "https://portfolio-hady-osman.vercel.app",
    siteName: "Hady Osman's Portfolio",
    images: [
      {
        url: "./opengraph-image.png",
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
