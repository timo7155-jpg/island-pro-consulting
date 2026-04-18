import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing for Mauritius SMEs | Island Pro Consulting',
  description: 'Social media, SEO, Google Ads, and content marketing tailored for Mauritian businesses. Reach more customers, grow your revenue.',
  keywords: 'digital marketing Mauritius, SEO Mauritius, Google Ads Mauritius, social media marketing Mauritius, digital marketing Rodrigues',
  openGraph: {
    title: 'Digital Marketing for Mauritius SMEs | Island Pro Consulting',
    description: 'SEO, Google Ads, social media & content marketing for Mauritian businesses. Reach more customers and grow your revenue.',
    images: [{ url: '/logo.jpg', width: 800, height: 600, alt: 'Digital Marketing — Island Pro Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing for Mauritius SMEs | Island Pro Consulting',
    description: 'SEO, Google Ads, social media & content marketing for Mauritian businesses. Grow your revenue.',
    images: ['/logo.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
