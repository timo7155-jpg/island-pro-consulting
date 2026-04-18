import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Email Marketing for Mauritius Businesses | Island Pro Consulting',
  description: 'Professional email marketing campaigns for accommodation and tourism businesses in Mauritius. Brevo & Mailchimp setup, automated sequences, and list building.',
  keywords: 'email marketing Mauritius, Mailchimp Mauritius, Brevo Mauritius, email campaigns Mauritius, newsletter Mauritius',
  openGraph: {
    title: 'Email Marketing for Mauritius Businesses | Island Pro Consulting',
    description: 'Brevo & Mailchimp setup, automated email sequences, and list building for Mauritius businesses. Turn your list into revenue.',
    images: [{ url: '/logo.jpg', width: 800, height: 600, alt: 'Email Marketing — Island Pro Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email Marketing for Mauritius Businesses | Island Pro Consulting',
    description: 'Brevo & Mailchimp setup, automated sequences and list building for Mauritius businesses.',
    images: ['/logo.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
