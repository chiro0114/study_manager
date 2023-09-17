import { Montserrat } from 'next/font/google';
import Wrapper from '@/components/Wrapper';
import './globals.css';
import { css, cva } from '@/styled-system/css';

export const metadata = {
  title: 'study management app',
  description: 'Generated by create next app',
};

const monstserrat = Montserrat({
  subsets: ['cyrillic'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={monstserrat.className}>
      <body className={css({ minH: '100vh' })}>{children}</body>
    </html>
  );
}
