import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional CV & Cover Letter | Island Pro Consulting',
  description: 'ATS-optimised CVs and tailored cover letters crafted by professionals. Stand out in Mauritius and beyond. No payment before full satisfaction.',
  keywords: 'CV writing Mauritius, cover letter Mauritius, ATS CV Mauritius, professional CV Rodrigues, job application Mauritius',
  openGraph: {
    title: 'Professional CV & Cover Letter | Island Pro Consulting',
    description: 'ATS-optimised CVs and tailored cover letters for Mauritius job seekers. Land more interviews. No payment before satisfaction.',
    images: [{ url: '/logo.jpg', width: 800, height: 600, alt: 'CV & Cover Letter — Island Pro Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional CV & Cover Letter | Island Pro Consulting',
    description: 'ATS-optimised CVs and cover letters for Mauritius. Land more interviews. No payment before satisfaction.',
    images: ['/logo.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
