import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Island Pro Consulting',
  description: 'Privacy Policy for Island Pro Consulting — how we collect, use and protect your personal data.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-16 lg:pt-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              Legal
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-navy tracking-tight mb-3">Privacy Policy</h1>
            <p className="text-navy/50 text-sm">Last updated: April 2026</p>
          </div>

          <div className="prose-custom space-y-10">

            <Section title="1. Who We Are">
              <p>Island Pro Consulting is a business consulting firm based in Terre Rouge, Rodrigues, Republic of Mauritius. We operate the website <strong>islandproconsulting.mu</strong> and provide professional services including website development, business plan writing, digital marketing, CV writing, business registration, and more.</p>
              <p>For any privacy-related enquiries, contact us at: <a href="mailto:contact@islandproconsulting.mu" className="text-purple hover:underline">contact@islandproconsulting.mu</a></p>
            </Section>

            <Section title="2. Information We Collect">
              <p>We collect information you voluntarily provide when you:</p>
              <ul>
                <li>Submit a contact or enquiry form on our website</li>
                <li>Send us an email or WhatsApp message</li>
                <li>Engage our services</li>
              </ul>
              <p>This information may include your name, email address, phone number, and details about your business or project.</p>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your enquiries and provide our services</li>
                <li>Send you quotes, proposals, or service-related communications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>We do <strong>not</strong> sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </Section>

            <Section title="4. Data Storage & Security">
              <p>Your data is stored securely and accessed only by authorised staff. We use industry-standard security measures to protect your information from unauthorised access, disclosure, or loss.</p>
              <p>Our website is hosted on Vercel (USA). By using our site, you acknowledge that your data may be processed outside of Mauritius in accordance with applicable data protection laws.</p>
            </Section>

            <Section title="5. Cookies">
              <p>Our website may use essential cookies to ensure basic functionality. We do not use tracking or advertising cookies. You can disable cookies in your browser settings at any time.</p>
            </Section>

            <Section title="6. Your Rights">
              <p>Under applicable data protection law, you have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p>To exercise any of these rights, email us at <a href="mailto:contact@islandproconsulting.mu" className="text-purple hover:underline">contact@islandproconsulting.mu</a>.</p>
            </Section>

            <Section title="7. Third-Party Services">
              <p>We use the following third-party services to operate our website and business:</p>
              <ul>
                <li><strong>Resend</strong> — email delivery for contact form submissions</li>
                <li><strong>Supabase</strong> — database for internal admin tools</li>
                <li><strong>Vercel</strong> — website hosting</li>
              </ul>
              <p>Each of these services has their own privacy policy governing how they handle data.</p>
            </Section>

            <Section title="8. Changes to This Policy">
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
            </Section>

            <Section title="9. Contact">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul>
                <li>Email: <a href="mailto:contact@islandproconsulting.mu" className="text-purple hover:underline">contact@islandproconsulting.mu</a></li>
                <li>Phone / WhatsApp: <a href="https://wa.me/23058137384" className="text-purple hover:underline">+230 5813 7384</a></li>
                <li>Address: Terre Rouge, Rodrigues, Republic of Mauritius</li>
              </ul>
            </Section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-black text-navy mb-4 pb-2 border-b border-navy/10">{title}</h2>
      <div className="space-y-3 text-navy/70 text-sm leading-relaxed [&_strong]:text-navy [&_strong]:font-bold [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-purple">
        {children}
      </div>
    </div>
  );
}
