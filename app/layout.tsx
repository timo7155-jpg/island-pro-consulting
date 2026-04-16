import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Island Pro Consulting — Business Solutions for Mauritius',
  description: 'Professional consulting services for Mauritian SMEs: website development, finance management, business plans, CV writing, digital marketing, tax advisory and business registration.',
  keywords: 'consulting Mauritius, business plan Mauritius, website development Mauritius, CV writing Mauritius, Island Pro Consulting',
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
