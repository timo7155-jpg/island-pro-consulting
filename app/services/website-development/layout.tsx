import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Development Mauritius | Island Pro Consulting',
  description: 'Professional website design and development for Mauritian businesses. Mobile-first, SEO-optimised, fast delivery. Direct booking sites, e-commerce, and landing pages.',
  keywords: 'website development Mauritius, web design Mauritius, website Rodrigues, e-commerce Mauritius, direct booking website Mauritius, SEO website Mauritius',
  openGraph: {
    title: 'Website Development Mauritius | Island Pro Consulting',
    description: 'Mobile-first, SEO-optimised websites for Mauritian businesses. Direct booking sites, e-commerce & landing pages. Fast delivery.',
    images: [{ url: '/logo.jpg', width: 800, height: 600, alt: 'Website Development — Island Pro Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Mauritius | Island Pro Consulting',
    description: 'Mobile-first, SEO-optimised websites for Mauritian businesses. Direct booking sites, e-commerce & landing pages.',
    images: ['/logo.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
