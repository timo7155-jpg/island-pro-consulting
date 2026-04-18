import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Registration Mauritius | Island Pro Consulting',
  description: 'End-to-end company registration, MRA registration, permits and licences in Mauritius. We handle the paperwork so you can focus on your business.',
  keywords: 'business registration Mauritius, company registration Mauritius, MRA registration, business licence Mauritius, start company Mauritius',
  openGraph: {
    title: 'Business Registration Mauritius | Island Pro Consulting',
    description: 'End-to-end company registration, MRA registration, permits & licences. We handle the paperwork — you focus on your business.',
    images: [{ url: '/logo.jpg', width: 800, height: 600, alt: 'Business Registration — Island Pro Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Registration Mauritius | Island Pro Consulting',
    description: 'Company registration, MRA registration, permits & licences in Mauritius. We handle the paperwork.',
    images: ['/logo.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
