import type { Metadata } from 'next';
import Navbar       from '@/components/Navbar';
import Hero         from '@/components/Hero';
import Stats        from '@/components/Stats';
import Services     from '@/components/Services';
import About        from '@/components/About';
import WhyUs        from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import Contact      from '@/components/Contact';
import Footer       from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Island Pro Consulting — Business Solutions for Mauritius & Rodrigues',
  description: 'Expert business consulting for Mauritian SMEs. Websites, business plans, digital marketing, company registration, CV writing, grants & more. Based in Rodrigues — in-person meetings available.',
  keywords: 'consulting Mauritius, business consulting Rodrigues, website development Mauritius, business plan Mauritius, digital marketing Mauritius, grants Mauritius, company registration Mauritius, Island Pro Consulting',
  openGraph: {
    title: 'Island Pro Consulting — Business Solutions for Mauritius & Rodrigues',
    description: 'Expert consulting for Mauritian SMEs: websites, business plans, digital marketing, company registration & more. Based in Rodrigues.',
    images: [{ url: '/logo.jpg', width: 800, height: 600, alt: 'Island Pro Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Island Pro Consulting — Business Solutions for Mauritius & Rodrigues',
    description: 'Expert consulting for Mauritian SMEs: websites, business plans, digital marketing, company registration & more.',
    images: ['/logo.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
