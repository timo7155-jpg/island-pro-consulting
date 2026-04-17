import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Development Mauritius | Island Pro Consulting',
  description: 'Professional website design and development for Mauritian businesses. Mobile-first, SEO-optimised, fast delivery. From landing pages to full e-commerce solutions.',
  keywords: 'website development Mauritius, web design Mauritius, website Rodrigues, e-commerce Mauritius, landing page Mauritius, SEO website Mauritius',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
