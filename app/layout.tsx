import type { Metadata } from 'next';
import './globals.css';
import Providers from '../providers';

export const metadata: Metadata = {
  // title: 'Free URL Shortener | ShortURL',
  title: 'Simple URL Shortener Tool | ShortURL',
  description:
    'Quickly transform lengthy URLs into short, shareable links. No sign-ups, no hassle—just simple and fast link shortening.',
  keywords: [
    'URL shortener',
    'shorten links',
    'link shortening tool',
    'free URL shortener',
    'short URLs',
    'link shortener',
    'create short links',
    'shorten URL',
    'easy link shortener',
    'reduce link size',
    'quick URL shortener',
    'compact URLs',
    'shareable links',
    'short link generator',
    'no sign-up URL shortener',
    'fast link shortening',
    'link shortener free',
    'short URL generator',
    'simple URL shortener',
    'link shortening service',
  ],
  openGraph: {
    description:
      'Shorten long URLs into compact, easy-to-share links with no sign-up required. Quick, simple, and completely free!',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
