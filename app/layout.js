// app/layout.js
import { Outfit } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

// Load the font at the top level
const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <style>{`
          body { font-family: ${outfit.style.fontFamily}; }
        `}</style>
      </Head>
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
