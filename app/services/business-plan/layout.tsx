import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pro Business Plan Writing | Island Pro Consulting',
  description: 'Professionally written, investor-ready business plans tailored for Mauritius. Permit applications, land lease, funding & bank loans. No payment before full satisfaction.',
  keywords: 'business plan Mauritius, investor business plan, bank loan business plan, land lease business plan Rodrigues, business plan writing Mauritius',
  openGraph: {
    title: 'Pro Business Plan Writing | Island Pro Consulting',
    description: 'Investor-ready business plans for Mauritius — permits, land lease, bank loans. Professional. No payment before you are satisfied.',
    images: [{ url: '/logo.jpg', width: 800, height: 600, alt: 'Business Plan Writing — Island Pro Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro Business Plan Writing | Island Pro Consulting',
    description: 'Investor-ready business plans for Mauritius — permits, land lease, bank loans. No payment before satisfaction.',
    images: ['/logo.jpg'],
  },
};

export default function BusinessPlanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
