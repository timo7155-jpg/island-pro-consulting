import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Island Pro Consulting',
  description: 'Terms of Service for Island Pro Consulting — the conditions governing our professional services.',
};

export default function TermsOfService() {
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
            <h1 className="text-3xl lg:text-4xl font-black text-navy tracking-tight mb-3">Terms of Service</h1>
            <p className="text-navy/50 text-sm">Last updated: April 2026</p>
          </div>

          <div className="space-y-10">

            <Section title="1. Agreement">
              <p>By engaging the services of Island Pro Consulting ("we", "us", "our"), you ("the Client") agree to be bound by these Terms of Service. These terms apply to all services provided by Island Pro Consulting, including website development, business plan writing, digital marketing, CV writing, social media management, business registration, and consulting.</p>
            </Section>

            <Section title="2. Services">
              <p>We agree to provide the services as discussed and confirmed between both parties. The scope, deliverables, timeline, and pricing will be outlined in a written proposal or invoice prior to commencement of work.</p>
              <p>We reserve the right to decline any project at our discretion.</p>
            </Section>

            <Section title="3. Payment">
              <ul>
                <li>A deposit may be required before work begins, as agreed in the proposal.</li>
                <li>Final payment is due upon delivery of the completed work, unless otherwise agreed.</li>
                <li>We operate on a <strong>no payment before full satisfaction</strong> policy for eligible services — meaning final payment is only required once the client confirms satisfaction with the deliverable.</li>
                <li>Late payment may result in suspension of services or delivery.</li>
              </ul>
            </Section>

            <Section title="4. Client Responsibilities">
              <p>The Client agrees to:</p>
              <ul>
                <li>Provide accurate, complete, and timely information required to complete the project</li>
                <li>Review and provide feedback within a reasonable timeframe</li>
                <li>Ensure that any materials provided (logos, images, text) do not infringe third-party rights</li>
              </ul>
            </Section>

            <Section title="5. Revisions">
              <p>The number of revisions included is specified in each service offer. Additional revisions beyond those included may be subject to additional charges, as agreed in advance.</p>
            </Section>

            <Section title="6. Intellectual Property">
              <p>Upon receipt of full payment, all rights to the final deliverables are transferred to the Client. Island Pro Consulting retains the right to display completed work in its portfolio unless the Client requests otherwise in writing.</p>
              <p>We retain ownership of all preliminary concepts, drafts, and working files not included in the final deliverable.</p>
            </Section>

            <Section title="7. Confidentiality">
              <p>We treat all client information and project details as strictly confidential. We will not disclose your business information, plans, or data to any third party without your written consent, except where required by law.</p>
            </Section>

            <Section title="8. Limitation of Liability">
              <p>Island Pro Consulting shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or deliverables. Our total liability shall not exceed the amount paid by the Client for the specific service in question.</p>
              <p>We do not guarantee specific business outcomes (e.g. loan approval, permit success, ranking positions) as these depend on third-party decisions beyond our control.</p>
            </Section>

            <Section title="9. Cancellation">
              <p>Either party may cancel a project with written notice. Work completed up to the point of cancellation may be invoiced proportionally. Deposits are non-refundable unless otherwise agreed.</p>
            </Section>

            <Section title="10. Governing Law">
              <p>These Terms of Service are governed by the laws of the Republic of Mauritius. Any disputes shall be subject to the jurisdiction of the courts of Mauritius.</p>
            </Section>

            <Section title="11. Contact">
              <p>For any questions regarding these terms:</p>
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
