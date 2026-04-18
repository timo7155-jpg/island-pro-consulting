'use client';
import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

interface Props {
  service:       string;           // e.g. "Business Plan"
  dropdownLabel?: string;          // label for the select field
  dropdownOptions?: string[];      // options list
  messagePlaceholder?: string;
  submitLabel?: string;
}

const inputCls = 'px-4 py-3 text-sm border border-navy/15 rounded-xl bg-cream outline-none focus:border-purple focus:ring-2 focus:ring-purple/10 transition-all w-full';

export default function ContactForm({
  service,
  dropdownLabel,
  dropdownOptions,
  messagePlaceholder,
  submitLabel,
}: Props) {
  const { lang } = useLanguage();
  const txt = translations[lang].contact;
  const mp = messagePlaceholder ?? txt.formPlaceholder;
  const sl = submitLabel ?? txt.formSubmit;

  const [loading, setLoading] = useState(false);
  const [sent,    setSent]    = useState(false);
  const [error,   setError]   = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const fd  = new FormData(e.currentTarget);
    const body = {
      service,
      name:     fd.get('name'),
      email:    fd.get('email'),
      phone:    fd.get('phone'),
      subject:  dropdownLabel,
      dropdown: fd.get('dropdown'),
      message:  fd.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(body),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError(txt.formError);
      }
    } catch {
      setError(txt.formError);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-purple/10 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={30} className="text-purple" />
        </div>
        <h3 className="text-xl font-black text-navy mb-2">{txt.formSent}</h3>
        <p className="text-navy/60 text-sm">{txt.formSentDesc}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-navy/60">{txt.formName} *</label>
          <input name="name" type="text" required placeholder="Jean-Marc Dupont" className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-navy/60">{txt.formEmail} *</label>
          <input name="email" type="email" required placeholder="you@example.com" className={inputCls} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold text-navy/60">{txt.formPhone}</label>
        <input name="phone" type="tel" placeholder="+230 5XXX XXXX" className={inputCls} />
      </div>

      {dropdownLabel && dropdownOptions && (
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-navy/60">{dropdownLabel} *</label>
          <select name="dropdown" required className={`${inputCls} appearance-none`}>
            <option value="">{txt.formSelect}</option>
            {dropdownOptions.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold text-navy/60">{txt.formMessage} *</label>
        <textarea name="message" required rows={4} placeholder={mp}
          className={`${inputCls} resize-none`} />
      </div>

      {error && (
        <p className="text-xs text-red-500 text-center">{error}</p>
      )}

      <button type="submit" disabled={loading}
        className="w-full flex items-center justify-center gap-2 purple-gradient text-white font-bold text-sm py-3.5 rounded-xl hover:opacity-90 transition-all shadow-purple mt-2 disabled:opacity-60">
        {loading
          ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> {txt.formSending}</>
          : <><ArrowRight size={15} /> {sl}</>
        }
      </button>
      <p className="text-xs text-navy/40 text-center">{txt.formReply}</p>
    </form>
  );
}
