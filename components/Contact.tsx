'use client';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-6">
              Get in Touch
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight leading-tight mb-5">
              Ready to take your<br />
              <span className="purple-text">business further?</span>
            </h2>
            <p className="text-navy/60 leading-relaxed mb-10">
              Tell us about your project and we will get back to you within 24 hours with a tailored proposal.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone,  label: 'Phone / WhatsApp', value: '+230 5813 7384',                 href: 'https://wa.me/23058137384' },
                { icon: Mail,   label: 'Email',             value: 'contact@islandproconsulting.mu', href: 'mailto:contact@islandproconsulting.mu' },
                { icon: MapPin, label: 'Location',          value: 'Mauritius, Indian Ocean',        href: '#' },
              ].map(c => {
                const Icon = c.icon;
                return (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-2xl bg-purple/8 flex items-center justify-center flex-shrink-0 group-hover:bg-purple/15 transition-colors">
                      <Icon size={18} className="text-purple group-hover:text-purple-mid transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-navy/40 font-medium">{c.label}</p>
                      <p className="text-sm text-navy font-bold">{c.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <a href="https://wa.me/23058137384?text=Hello%20Island%20Pro%20Consulting%2C%20I%20am%20interested%20in%20your%20services."
              target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-all">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-3xl border border-navy/8 p-8 shadow-card">
            <ContactForm
              service="General Enquiry"
              dropdownLabel="Service Interested In"
              dropdownOptions={['Website Development','Finance Management (ProCashbook)','Business Plan Writing','CV & Cover Letter','Digital Marketing','Business Registration','Other']}
              messagePlaceholder="Tell us about your project..."
              submitLabel="Send Message"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
