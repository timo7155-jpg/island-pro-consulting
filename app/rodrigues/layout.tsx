import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Consulting in Rodrigues | Island Pro Consulting',
  description: 'Based in Terre Rouge, Rodrigues — we offer in-person business consulting for Rodrigues entrepreneurs. Websites, business plans, CV writing, company registration and more.',
  keywords: 'consulting Rodrigues, business consultant Rodrigues, website Rodrigues, business plan Rodrigues, company registration Rodrigues, Terre Rouge Rodrigues',
  openGraph: {
    title: 'Business Consulting in Rodrigues | Island Pro Consulting',
    description: 'In-person consulting for Rodrigues entrepreneurs. Websites, business plans, CV writing, company registration & more. Based in Terre Rouge.',
    images: [{ url: '/logo.jpg', width: 800, height: 600, alt: 'Island Pro Consulting — Rodrigues' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Consulting in Rodrigues | Island Pro Consulting',
    description: 'In-person consulting for Rodrigues entrepreneurs. Websites, business plans, company registration & more.',
    images: ['/logo.jpg'],
  },
};

export default function RodriguesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
