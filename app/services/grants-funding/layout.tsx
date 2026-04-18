import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grant & Funding Applications Mauritius | Island Pro Consulting',
  description: 'Expert support for government grants, subsidised loans, and tax incentives for Mauritius SMEs. End-to-end application writing and submission — we find what you qualify for.',
  keywords: 'grants Mauritius, funding SME Mauritius, government grants Mauritius, subsidised loans Mauritius, grants Rodrigues',
  openGraph: {
    title: 'Grant & Funding Applications Mauritius | Island Pro Consulting',
    description: 'We find grants and funding your business qualifies for — and write the full application. Rodrigues grants included.',
    images: [{ url: '/logo.jpg', width: 800, height: 600, alt: 'Grants & Funding — Island Pro Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grant & Funding Applications Mauritius | Island Pro Consulting',
    description: 'We find grants your business qualifies for and write the full application. Rodrigues grants included.',
    images: ['/logo.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
