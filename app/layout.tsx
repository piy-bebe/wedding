import { Open_Sans } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Intro from '@/components/intro';

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-open-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Свадебное приглашение Виктора и Светланы',
  description: 'Приглашение на свадьбу Виктора и Светланы',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${openSans.variable} ${playfair.variable}`} lang="ru">
      <body>
        <Intro />
        {children}
      </body>
    </html>
  );
}
