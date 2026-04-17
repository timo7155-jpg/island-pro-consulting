import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://islandproconsulting.mu'),
  title: 'Island Pro Consulting — Business Solutions for Mauritius',
  description: 'Professional consulting services for Mauritian SMEs: website development, business plans, CV writing, digital marketing, grants and business registration. Based in Rodrigues.',
  keywords: 'consulting Mauritius, business plan Mauritius, website development Mauritius, CV writing Mauritius, digital marketing Mauritius, grants Mauritius, business registration Mauritius, consulting Rodrigues, Island Pro Consulting',
  openGraph: {
    type: 'website',
    locale: 'en_MU',
    url: 'https://islandproconsulting.mu',
    siteName: 'Island Pro Consulting',
    title: 'Island Pro Consulting — Business Solutions for Mauritius',
    description: 'Professional consulting services for Mauritian SMEs. Websites, business plans, grants, digital marketing & more. Based in Rodrigues.',
    images: [{ url: '/logo.jpg', width: 800, height: 600, alt: 'Island Pro Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Island Pro Consulting — Business Solutions for Mauritius',
    description: 'Professional consulting services for Mauritian SMEs. Websites, business plans, grants, digital marketing & more.',
    images: ['/logo.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
