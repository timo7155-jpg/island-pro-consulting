import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Management Mauritius | Island Pro Consulting',
  description: 'Professional social media management for Mauritius businesses. Facebook, Instagram & TikTok content creation, scheduling, and community management in French and English.',
  keywords: 'social media management Mauritius, Facebook management Mauritius, Instagram management Mauritius, content creation Mauritius, TikTok Mauritius',
  openGraph: {
    title: 'Social Media Management Mauritius | Island Pro Consulting',
    description: 'Facebook, Instagram & TikTok fully managed for Mauritius businesses. Content, scheduling, community management in FR & EN.',
    images: [{ url: '/logo.jpg', width: 800, height: 600, alt: 'Social Media Management — Island Pro Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Management Mauritius | Island Pro Consulting',
    description: 'Facebook, Instagram & TikTok fully managed for Mauritius businesses in French and English.',
    images: ['/logo.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
