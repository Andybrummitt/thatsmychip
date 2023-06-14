'use client';

import Navbar from '@/app/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import MobileNavbar from '@/app/components/MobileNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Thatsmychip.com - Reaction Game',
  description: 'Fun, Interactive Reaction based Game.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <MobileNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
