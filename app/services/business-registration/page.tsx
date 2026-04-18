'use client';

import {
  ArrowRight, Shield, Clock, ChevronRight, BadgeCheck,
  Building2, Phone, Mail,
  MessageCircle, Landmark, ClipboardList, Stamp,
  Users, Globe, Zap,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { Lang } from '@/contexts/LanguageContext';

const T: Record<Lang, {
  breadcrumbHome: string;
  breadcrumbServices: string;
  breadcrumbCurrent: string;
  badge: string;
  h1Line1: string;
  h1Line2: string;
  heroPara: string;
  ctaPrimary: string;
  ctaWhatsApp: string;
  trust1: string;
  trust2: string;
  trust3: string;
  trust4: string;
  whatWeHandleBadge: string;
  whatWeHandleH2Line1: string;
  whatWeHandleH2Line2: string;
  whatWeHandlePara: string;
  stepsWeHandle: { title: string; desc: string }[];
  businessStructuresBadge: string;
  businessStructuresH2Line1: string;
  businessStructuresH2Line2: string;
  businessStructuresPara: string;
  structures: { title: string; desc: string }[];
  whyWorkWithUsBadge: string;
  whyWorkWithUsH2Line1: string;
  whyWorkWithUsH2Line2: string;
  whyItems: { title: string; desc: string }[];
  howItWorksBadge: string;
  howItWorksH2Line1: string;
  howItWorksH2Line2: string;
  process: { step: string; title: string; desc: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  contactBadge: string;
  contactH2Line1: string;
  contactH2Line2: string;
  contactPara: string;
  contactPhoneLabel: string;
  contactEmailLabel: string;
  whatsAppBtn: string;
  formTitle: string;
  formDropdownLabel: string;
  formDropdownOptions: string[];
  formMessagePlaceholder: string;
  formSubmitLabel: string;
}> = {
  en: {
    breadcrumbHome: 'Home',
    breadcrumbServices: 'Services',
    breadcrumbCurrent: 'Business Registration',
    badge: 'Business Registration',
    h1Line1: 'Start right',
    h1Line2: 'from day one.',
    heroPara: 'Registering a business in Mauritius involves multiple authorities, forms, and deadlines. We handle every step — from company registration to MRA, permits, and licences — so you can focus on what you do best.',
    ctaPrimary: 'Book a Free Call',
    ctaWhatsApp: 'Chat on WhatsApp',
    trust1: 'Fully compliant from the start',
    trust2: 'Fast processing, no unnecessary delays',
    trust3: 'Mauritius & Rodrigues expertise',
    trust4: 'All business structures covered',
    whatWeHandleBadge: 'What We Handle',
    whatWeHandleH2Line1: 'One point of contact.',
    whatWeHandleH2Line2: 'Every registration sorted.',
    whatWeHandlePara: 'We coordinate across all the relevant authorities so you do not have to chase multiple offices yourself.',
    stepsWeHandle: [
      { title: 'Company Registration', desc: 'We register your business with the Registrar of Companies — sole trader, partnership, or limited company.' },
      { title: 'MRA Business Registration', desc: 'Tax registration with the Mauritius Revenue Authority, including VAT registration where applicable.' },
      { title: 'Business Licence & Permits', desc: 'Sector-specific licences and operating permits required by your municipality or relevant authority.' },
      { title: 'Other Official Formalities', desc: 'Social security registration (NSF/NPF), trade licences, and any additional administrative requirements.' },
    ],
    businessStructuresBadge: 'Business Structures',
    businessStructuresH2Line1: 'Not sure which structure',
    businessStructuresH2Line2: 'is right for you?',
    businessStructuresPara: 'We advise you on the most appropriate legal structure before any paperwork begins.',
    structures: [
      { title: 'Sole Trader', desc: 'Simplest form. You trade under your own name. Ideal for freelancers and one-person businesses.' },
      { title: 'Partnership', desc: 'Two or more individuals sharing ownership, profits, and responsibilities.' },
      { title: 'Private Ltd Company', desc: 'A separate legal entity. Offers liability protection and a more credible business image.' },
      { title: 'GBC / Offshore', desc: 'Global Business Corporations for international trading — subject to specific requirements.' },
    ],
    whyWorkWithUsBadge: 'Why Work With Us',
    whyWorkWithUsH2Line1: 'We have done this before.',
    whyWorkWithUsH2Line2: 'Many times.',
    whyItems: [
      { title: 'Save Time', desc: 'Navigating government portals and offices is time-consuming. We know the process inside out and handle it efficiently.' },
      { title: 'Avoid Costly Mistakes', desc: 'Errors in registration documents can cause delays or penalties. We ensure every form is correct the first time.' },
      { title: 'Local Expertise', desc: 'We are familiar with Mauritius registration requirements, fees, and timelines — including Rodrigues-specific processes.' },
      { title: 'End-to-End Support', desc: 'From choosing the right business structure to receiving your official certificates — we are with you at every step.' },
    ],
    howItWorksBadge: 'How It Works',
    howItWorksH2Line1: 'From conversation',
    howItWorksH2Line2: 'to official certificate.',
    process: [
      { step: '01', title: 'Free Consultation', desc: 'We discuss your business type, sector, and goals to recommend the right structure and registrations needed.' },
      { step: '02', title: 'Document Preparation', desc: 'We prepare and verify all required documents — memorandum, articles, forms, and supporting materials.' },
      { step: '03', title: 'Submission', desc: 'We submit to the Registrar, MRA, and any other relevant authority on your behalf.' },
      { step: '04', title: 'Follow-Up', desc: 'We track progress, respond to any queries from authorities, and keep you updated throughout.' },
      { step: '05', title: 'Certificates Delivered', desc: 'You receive all official registration certificates and are ready to operate legally.' },
    ],
    faqTitle: 'Common questions',
    faqs: [
      { q: 'How long does registration take?', a: 'Company registration with the Registrar of Companies typically takes 1–3 business days for standard applications. MRA registration and sector permits may take additional time. We give you a realistic timeline from the start.' },
      { q: 'Do I need to be physically present?', a: 'For most steps, no. We can handle the majority of the process on your behalf. Some stages may require your signature or a personal visit, which we will notify you about in advance.' },
      { q: 'What documents do I need to provide?', a: 'Typically a valid National ID or passport, proof of address, and the proposed company name. For specific sectors or structures, additional documents may be required. We will give you a precise checklist after the consultation.' },
      { q: 'Can you register a business in Rodrigues?', a: 'Yes. We are familiar with both the Mauritius mainland and Rodrigues-specific processes, including the Rodrigues Regional Assembly requirements for certain business types.' },
      { q: 'What is the cost of your service?', a: 'Our fees depend on the registrations and permits required. Government fees are separate and paid directly by you. Contact us for a transparent, no-obligation quote.' },
      { q: 'Can you help with VAT registration?', a: 'Yes. VAT registration with the MRA is included in our service for businesses that meet or expect to meet the registration threshold.' },
    ],
    contactBadge: 'Free Consultation',
    contactH2Line1: 'Ready to launch',
    contactH2Line2: 'your business legally?',
    contactPara: 'A free call or visit to walk through your situation — what needs to be registered, in what order, and what it will cost. No commitment, no pressure.',
    contactPhoneLabel: 'Phone / WhatsApp',
    contactEmailLabel: 'Email',
    whatsAppBtn: 'Chat on WhatsApp',
    formTitle: 'Book your free consultation',
    formDropdownLabel: 'Business type',
    formDropdownOptions: ['Sole Trader / Self-employed', 'Partnership', 'Private Limited Company (Ltd)', 'Not sure yet — need advice'],
    formMessagePlaceholder: 'What type of business are you starting? In which sector?',
    formSubmitLabel: 'Book My Free Call',
  },
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbServices: 'Services',
    breadcrumbCurrent: 'Création d\'entreprise',
    badge: 'Création d\'entreprise',
    h1Line1: 'Démarrez correctement',
    h1Line2: 'dès le premier jour.',
    heroPara: 'Créer une entreprise à Maurice implique plusieurs autorités, formulaires et délais. Nous gérons chaque étape — de l\'immatriculation au MRA, aux permis et licences — pour que vous puissiez vous concentrer sur votre cœur de métier.',
    ctaPrimary: 'Prendre rendez-vous',
    ctaWhatsApp: 'Écrire sur WhatsApp',
    trust1: 'Entièrement conforme dès le départ',
    trust2: 'Traitement rapide, sans délais inutiles',
    trust3: 'Expertise Maurice & Rodrigues',
    trust4: 'Toutes les structures d\'entreprise couvertes',
    whatWeHandleBadge: 'Ce que nous gérons',
    whatWeHandleH2Line1: 'Un seul interlocuteur.',
    whatWeHandleH2Line2: 'Toutes les démarches réglées.',
    whatWeHandlePara: 'Nous coordonnons auprès de toutes les autorités concernées pour que vous n\'ayez pas à courir après plusieurs offices vous-même.',
    stepsWeHandle: [
      { title: 'Immatriculation de l\'entreprise', desc: 'Nous immatriculons votre entreprise auprès du Registre des Sociétés — entrepreneur individuel, société en nom collectif ou société à responsabilité limitée.' },
      { title: 'Enregistrement auprès de la MRA', desc: 'Enregistrement fiscal auprès de la Mauritius Revenue Authority, y compris l\'enregistrement à la TVA le cas échéant.' },
      { title: 'Licence commerciale & permis', desc: 'Licences sectorielles et permis d\'exploitation requis par votre commune ou l\'autorité compétente.' },
      { title: 'Autres formalités officielles', desc: 'Enregistrement à la sécurité sociale (NSF/NPF), patentes et toutes autres exigences administratives supplémentaires.' },
    ],
    businessStructuresBadge: 'Structures d\'entreprise',
    businessStructuresH2Line1: 'Vous ne savez pas quelle structure',
    businessStructuresH2Line2: 'vous convient ?',
    businessStructuresPara: 'Nous vous conseillons sur la structure juridique la plus adaptée avant de commencer tout document.',
    structures: [
      { title: 'Entrepreneur individuel', desc: 'La forme la plus simple. Vous exercez sous votre propre nom. Idéal pour les indépendants et les entreprises unipersonnelles.' },
      { title: 'Société en nom collectif', desc: 'Deux personnes ou plus partageant la propriété, les bénéfices et les responsabilités.' },
      { title: 'Société à responsabilité limitée', desc: 'Une entité juridique distincte. Offre une protection de la responsabilité et une image d\'entreprise plus crédible.' },
      { title: 'GBC / Offshore', desc: 'Sociétés de commerce mondial pour le commerce international — soumises à des exigences spécifiques.' },
    ],
    whyWorkWithUsBadge: 'Pourquoi travailler avec nous',
    whyWorkWithUsH2Line1: 'Nous l\'avons déjà fait.',
    whyWorkWithUsH2Line2: 'De nombreuses fois.',
    whyItems: [
      { title: 'Gain de temps', desc: 'Naviguer dans les portails et bureaux gouvernementaux prend du temps. Nous connaissons le processus sur le bout des doigts et le gérons efficacement.' },
      { title: 'Éviter les erreurs coûteuses', desc: 'Des erreurs dans les documents d\'immatriculation peuvent entraîner des retards ou des pénalités. Nous nous assurons que chaque formulaire est correct dès la première fois.' },
      { title: 'Expertise locale', desc: 'Nous maîtrisons les exigences d\'immatriculation, les frais et les délais à Maurice — y compris les processus spécifiques à Rodrigues.' },
      { title: 'Accompagnement complet', desc: 'Du choix de la bonne structure à la réception de vos certificats officiels — nous sommes à vos côtés à chaque étape.' },
    ],
    howItWorksBadge: 'Comment ça marche',
    howItWorksH2Line1: 'De la conversation',
    howItWorksH2Line2: 'au certificat officiel.',
    process: [
      { step: '01', title: 'Consultation gratuite', desc: 'Nous discutons de votre type d\'activité, de votre secteur et de vos objectifs pour recommander la bonne structure et les démarches nécessaires.' },
      { step: '02', title: 'Préparation des documents', desc: 'Nous préparons et vérifions tous les documents requis — statuts, mémorandum, formulaires et pièces justificatives.' },
      { step: '03', title: 'Soumission', desc: 'Nous soumettons au Registre des Sociétés, à la MRA et à toute autre autorité compétente en votre nom.' },
      { step: '04', title: 'Suivi', desc: 'Nous suivons l\'avancement, répondons aux questions des autorités et vous tenons informé tout au long du processus.' },
      { step: '05', title: 'Certificats remis', desc: 'Vous recevez tous les certificats d\'immatriculation officiels et êtes prêt à exercer légalement.' },
    ],
    faqTitle: 'Questions fréquentes',
    faqs: [
      { q: 'Combien de temps prend l\'immatriculation ?', a: 'L\'immatriculation d\'une entreprise auprès du Registre des Sociétés prend généralement 1 à 3 jours ouvrés pour les demandes standard. L\'enregistrement MRA et les permis sectoriels peuvent nécessiter du temps supplémentaire. Nous vous donnons un calendrier réaliste dès le départ.' },
      { q: 'Dois-je être physiquement présent ?', a: 'Pour la plupart des étapes, non. Nous pouvons gérer la majorité du processus en votre nom. Certaines étapes peuvent nécessiter votre signature ou une visite personnelle, dont nous vous informerons à l\'avance.' },
      { q: 'Quels documents dois-je fournir ?', a: 'En général, une pièce d\'identité nationale valide ou un passeport, un justificatif de domicile et le nom proposé pour l\'entreprise. Des documents supplémentaires peuvent être requis selon le secteur ou la structure. Nous vous fournirons une liste de contrôle précise après la consultation.' },
      { q: 'Pouvez-vous immatriculer une entreprise à Rodrigues ?', a: 'Oui. Nous maîtrisons les processus de la grande île de Maurice et ceux spécifiques à Rodrigues, y compris les exigences de l\'Assemblée Régionale de Rodrigues pour certains types d\'entreprises.' },
      { q: 'Quel est le coût de votre service ?', a: 'Nos honoraires dépendent des démarches et permis requis. Les frais gouvernementaux sont séparés et payés directement par vous. Contactez-nous pour un devis transparent et sans engagement.' },
      { q: 'Pouvez-vous aider avec l\'enregistrement à la TVA ?', a: 'Oui. L\'enregistrement à la TVA auprès de la MRA est inclus dans notre service pour les entreprises qui atteignent ou s\'attendent à atteindre le seuil d\'immatriculation.' },
    ],
    contactBadge: 'Consultation gratuite',
    contactH2Line1: 'Prêt à lancer',
    contactH2Line2: 'votre entreprise légalement ?',
    contactPara: 'Un appel ou une visite gratuite pour faire le point sur votre situation — ce qui doit être immatriculé, dans quel ordre et ce que ça coûtera. Aucun engagement, aucune pression.',
    contactPhoneLabel: 'Téléphone / WhatsApp',
    contactEmailLabel: 'E-mail',
    whatsAppBtn: 'Écrire sur WhatsApp',
    formTitle: 'Réservez votre consultation gratuite',
    formDropdownLabel: 'Type d\'entreprise',
    formDropdownOptions: ['Entrepreneur individuel / Auto-entrepreneur', 'Société en nom collectif', 'Société à responsabilité limitée (SARL)', 'Pas encore décidé — besoin de conseils'],
    formMessagePlaceholder: 'Quel type d\'activité démarrez-vous ? Dans quel secteur ?',
    formSubmitLabel: 'Réserver mon appel gratuit',
  },
};

const STEPS_ICONS = [Building2, Landmark, ClipboardList, Stamp];
const STEPS_COLORS = ['purple', 'gold', 'purple', 'gold'];
const WHY_ICONS = [Zap, Shield, BadgeCheck, Users];

/* ── Document stack mockup ───────────────────────────────────────────── */
function DocStackMockup() {
  return (
    <div className="relative flex items-center justify-center py-8 lg:py-12">
      <div className="absolute w-[380px] h-[480px] rounded-3xl bg-purple/25 blur-[90px]" />

      {/* Back document */}
      <div className="absolute bg-white rounded-xl shadow-lg border border-gray-100"
        style={{ width: '240px', height: '300px', transform: 'rotate(6deg) translate(20px, 10px)' }}>
        <div className="h-2 w-full rounded-t-xl" style={{ background: 'linear-gradient(90deg,#F0B429,#F5C842)' }} />
        <div className="p-5 space-y-2 pt-4">
          {[60, 45, 55, 40, 50].map((w, i) => (
            <div key={i} className="h-1.5 bg-gray-100 rounded-full" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>

      {/* Middle document */}
      <div className="absolute bg-white rounded-xl shadow-lg border border-gray-100"
        style={{ width: '240px', height: '300px', transform: 'rotate(-3deg) translate(-10px, 5px)' }}>
        <div className="h-2 w-full rounded-t-xl" style={{ background: 'linear-gradient(90deg,#8B2FE8,#C040F0)' }} />
        <div className="p-5 space-y-2 pt-4">
          {[55, 70, 45, 60, 40].map((w, i) => (
            <div key={i} className="h-1.5 bg-gray-100 rounded-full" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>

      {/* Front — main certificate */}
      <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden"
        style={{ width: '250px', transform: 'rotate(-1deg)' }}>
        {/* Purple header */}
        <div className="px-5 pt-5 pb-4" style={{ background: '#0D1126' }}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#8B2FE8,#C040F0)' }}>
              <Stamp size={13} className="text-white" />
            </div>
            <span className="text-white/50 text-[7px] font-bold uppercase tracking-widest">Certificate of Incorporation</span>
          </div>
          <p className="text-white font-black text-xs leading-tight">Republic of Mauritius</p>
          <p className="text-white/40 text-[7px] mt-0.5">Registrar of Companies</p>
        </div>

        {/* Gold divider */}
        <div className="h-1" style={{ background: 'linear-gradient(90deg,#F0B429,#F5C842)' }} />

        {/* Body */}
        <div className="px-5 py-4 space-y-3" style={{ background: '#FAFAFA' }}>
          <div>
            <p className="text-[7px] text-gray-400 font-bold uppercase tracking-widest mb-1">Company Name</p>
            <div className="h-2 w-36 bg-gray-200 rounded-full" />
          </div>
          <div>
            <p className="text-[7px] text-gray-400 font-bold uppercase tracking-widest mb-1">Registration Number</p>
            <div className="h-2 w-24 bg-gray-200 rounded-full" />
          </div>
          <div>
            <p className="text-[7px] text-gray-400 font-bold uppercase tracking-widest mb-1">Date of Incorporation</p>
            <div className="h-2 w-20 bg-gray-200 rounded-full" />
          </div>
          {/* Stamp circle */}
          <div className="flex justify-end mt-2">
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-purple/30 flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-purple/10 flex items-center justify-center">
                <Stamp size={11} className="text-purple/50" />
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-2.5 flex justify-between border-t border-gray-100">
          <span className="text-[6px] text-gray-400" style={{ fontFamily: 'system-ui' }}>OFFICIAL DOCUMENT</span>
          <span className="text-[6px] font-bold text-purple" style={{ fontFamily: 'system-ui' }}>Island Pro Consulting</span>
        </div>
      </div>

      {/* Chips */}
      <div className="absolute -bottom-1 -right-5 bg-white rounded-2xl shadow-xl border border-navy/8 px-3 py-2 flex items-center gap-2"
        style={{ transform: 'rotate(2deg)' }}>
        <div className="w-8 h-8 rounded-xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg,#8B2FE8,#C040F0)' }}>
          <Clock size={14} className="text-white" />
        </div>
        <div>
          <p className="text-[9px] text-navy/40 font-bold leading-none mb-0.5">Processing</p>
          <p className="text-navy font-black text-sm leading-none">Fast tracked</p>
        </div>
      </div>

      <div className="absolute top-8 -left-5 rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2"
        style={{ background: '#F0B429', transform: 'rotate(-2deg)' }}>
        <Shield size={12} className="text-navy flex-shrink-0" />
        <p className="text-[10px] text-navy font-black leading-tight">100%<br />compliant</p>
      </div>
    </div>
  );
}

export default function BusinessRegistrationPage() {
  const { lang } = useLanguage();
  const txt = T[lang];

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-cream pt-16 lg:pt-20">

      {/* ── Hero ── */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-4">
          <nav className="flex items-center gap-2 text-white/30 text-xs mb-12">
            <a href="/" className="hover:text-white/60 transition-colors">{txt.breadcrumbHome}</a>
            <ChevronRight size={12} />
            <a href="/#services" className="hover:text-white/60 transition-colors">{txt.breadcrumbServices}</a>
            <ChevronRight size={12} />
            <span className="text-purple-light">{txt.breadcrumbCurrent}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center pb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-6">
                <Building2 size={12} /> {txt.badge}
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                {txt.h1Line1}<br />
                <span className="purple-text">{txt.h1Line2}</span>
              </h1>
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-10">
                {txt.heroPara}
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#contact"
                  className="inline-flex items-center gap-2 purple-gradient text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all shadow-purple">
                  {txt.ctaPrimary} <ArrowRight size={16} />
                </a>
                <a href="https://wa.me/23058137384?text=Hello%2C%20I%20need%20help%20registering%20my%20business%20in%20Mauritius."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all">
                  <MessageCircle size={16} /> {txt.ctaWhatsApp}
                </a>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-white/8">
                {[
                  { icon: Shield,     text: txt.trust1 },
                  { icon: Clock,      text: txt.trust2 },
                  { icon: BadgeCheck, text: txt.trust3 },
                  { icon: Globe,      text: txt.trust4 },
                ].map(t => {
                  const Icon = t.icon;
                  return (
                    <div key={t.text} className="flex items-center gap-2 text-white/50 text-sm">
                      <Icon size={15} className="text-gold flex-shrink-0" />
                      {t.text}
                    </div>
                  );
                })}
              </div>
            </div>

            <DocStackMockup />
          </div>
        </div>
      </section>

      {/* ── What We Handle ── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              {txt.whatWeHandleBadge}
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              {txt.whatWeHandleH2Line1}<br />
              <span className="purple-text">{txt.whatWeHandleH2Line2}</span>
            </h2>
            <p className="text-navy/60 text-lg max-w-2xl mx-auto">
              {txt.whatWeHandlePara}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {txt.stepsWeHandle.map((s, i) => {
              const Icon = STEPS_ICONS[i];
              const isPurple = STEPS_COLORS[i] === 'purple';
              return (
                <div key={i}
                  className="group bg-white rounded-3xl border-2 border-navy/6 hover:border-purple/20 hover:-translate-y-1 hover:shadow-purple transition-all duration-300 p-8">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${isPurple ? 'bg-purple/10 text-purple' : 'bg-gold/10 text-gold-dark'}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-black text-navy mb-3">{s.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Business Structures ── */}
      <section className="py-24 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple/15 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-4">
              {txt.businessStructuresBadge}
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
              {txt.businessStructuresH2Line1}<br />
              <span className="purple-text">{txt.businessStructuresH2Line2}</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              {txt.businessStructuresPara}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {txt.structures.map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 hover:border-purple/30 transition-all">
                <div className="w-8 h-8 rounded-xl purple-gradient flex items-center justify-center mb-4">
                  <span className="text-white font-black text-xs">{String.fromCharCode(65 + i)}</span>
                </div>
                <h4 className="text-white font-black text-sm mb-2">{s.title}</h4>
                <p className="text-white/45 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="py-24 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              {txt.whyWorkWithUsBadge}
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-navy tracking-tight mb-4">
              {txt.whyWorkWithUsH2Line1}<br />
              <span className="purple-text">{txt.whyWorkWithUsH2Line2}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {txt.whyItems.map((w, i) => {
              const Icon = WHY_ICONS[i];
              return (
                <div key={i} className="bg-white rounded-2xl border border-navy/8 p-6 hover:border-purple/20 hover:-translate-y-0.5 transition-all">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${i % 2 === 0 ? 'bg-purple/10' : 'bg-gold/10'}`}>
                    <Icon size={18} className={i % 2 === 0 ? 'text-purple' : 'text-gold-dark'} />
                  </div>
                  <h4 className="text-navy font-black text-sm mb-2">{w.title}</h4>
                  <p className="text-navy/60 text-xs leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 purple-gradient opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-4">
              {txt.howItWorksBadge}
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
              {txt.howItWorksH2Line1}<br />
              <span className="purple-text">{txt.howItWorksH2Line2}</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-0.5 bg-white/8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {txt.process.map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="relative w-16 h-16 rounded-2xl purple-gradient flex items-center justify-center mb-4 shadow-purple flex-shrink-0 z-10">
                    <span className="text-white font-black text-lg">{p.step}</span>
                  </div>
                  <h4 className="text-white font-black text-sm mb-2">{p.title}</h4>
                  <p className="text-white/45 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-navy tracking-tight">{txt.faqTitle}</h2>
          </div>
          <div className="space-y-4">
            {txt.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-navy/8 p-6">
                <h4 className="text-navy font-black text-sm mb-2 flex items-start gap-2">
                  <span className="text-purple mt-0.5 flex-shrink-0">Q</span>
                  {faq.q}
                </h4>
                <p className="text-navy/60 text-sm leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple/20 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-6">
                {txt.contactBadge}
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-5">
                {txt.contactH2Line1}<br />
                <span className="purple-text">{txt.contactH2Line2}</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-10">
                {txt.contactPara}
              </p>
              <div className="space-y-5 mb-8">
                {[
                  { icon: Phone, label: txt.contactPhoneLabel, value: '+230 5813 7384', href: 'https://wa.me/23058137384' },
                  { icon: Mail,  label: txt.contactEmailLabel, value: 'contact@islandproconsulting.mu', href: 'mailto:contact@islandproconsulting.mu' },
                ].map(c => {
                  const Icon = c.icon;
                  return (
                    <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                      <div className="w-11 h-11 rounded-2xl bg-purple/15 flex items-center justify-center flex-shrink-0 group-hover:bg-purple/25 transition-colors">
                        <Icon size={18} className="text-purple-light" />
                      </div>
                      <div>
                        <p className="text-xs text-white/30 font-medium">{c.label}</p>
                        <p className="text-sm text-white font-bold">{c.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
              <a href="https://wa.me/23058137384?text=Hello%20Island%20Pro%20Consulting%2C%20I%20need%20help%20with%20business%20registration."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-all">
                <MessageCircle size={16} /> {txt.whatsAppBtn}
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-card">
              <h3 className="text-lg font-black text-navy mb-6">{txt.formTitle}</h3>
              <ContactForm
                service="Business Registration"
                dropdownLabel={txt.formDropdownLabel}
                dropdownOptions={txt.formDropdownOptions}
                messagePlaceholder={txt.formMessagePlaceholder}
                submitLabel={txt.formSubmitLabel}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
