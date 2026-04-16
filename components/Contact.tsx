'use client';
import { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';

const SERVICES_LIST = [
  'Website Development',
  'Finance Management (ProCashbook)',
  'Business Plan Writing',
  'CV & Cover Letter',
  'Digital Marketing',
  'Tax & Compliance',
  'Business Registration',
  'Other',
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  }

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
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-purple/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={30} className="text-purple" />
                </div>
                <h3 className="text-xl font-black text-navy mb-2">Message sent!</h3>
                <p className="text-navy/60 text-sm">
                  Thank you for reaching out. We will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-black text-navy mb-6">Send us a message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-navy/60">Full Name *</label>
                    <input type="text" required placeholder="Jean-Marc Dupont"
                      className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-navy/60">Email *</label>
                    <input type="email" required placeholder="you@example.com"
                      className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-navy/60">Phone / WhatsApp</label>
                  <input type="tel" placeholder="+230 5XXX XXXX"
                    className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-navy/60">Service Interested In *</label>
                  <select required
                    className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all appearance-none">
                    <option value="">Select a service...</option>
                    {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-navy/60">Your Message *</label>
                  <textarea required rows={4} placeholder="Tell us about your project..."
                    className="px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all resize-none" />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2 purple-gradient text-white font-bold text-sm py-3.5 rounded-xl hover:opacity-90 transition-all disabled:opacity-60 shadow-purple mt-2">
                  {loading
                    ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                    : <><Send size={15} /> Send Message</>
                  }
                </button>
                <p className="text-xs text-navy/40 text-center">We respond within 24 hours. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
