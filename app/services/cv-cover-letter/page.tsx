'use client';

import {
  FileText, CheckCircle2, ArrowRight, Shield, Clock,
  ChevronRight, BadgeCheck, GraduationCap, Briefcase,
  RefreshCcw, Globe, Phone, Mail, MessageCircle,
  UserCheck, Zap, Eye, Filter,
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
  whoForBadge: string;
  whoForH2Line1: string;
  whoForH2Line2: string;
  whoForPara: string;
  whoFor: { title: string; desc: string }[];
  whatsIncludedBadge: string;
  whatsIncludedH2Line1: string;
  whatsIncludedH2Line2: string;
  deliverables: { title: string; desc: string }[];
  howItWorksBadge: string;
  howItWorksH2Line1: string;
  howItWorksH2Line2: string;
  process: { step: string; title: string; desc: string }[];
  guaranteeH2: string;
  guaranteePara: string;
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
  statsItems: { stat: string; label: string }[];
}> = {
  en: {
    breadcrumbHome: 'Home',
    breadcrumbServices: 'Services',
    breadcrumbCurrent: 'CV & Cover Letter',
    badge: 'Professional CV Writing',
    h1Line1: 'Your CV has 7 seconds.',
    h1Line2: 'Make them count.',
    heroPara: 'Most CVs never reach a human recruiter — filtered by algorithms or dismissed at a glance. We know exactly what ATS software and hiring managers look for, and we build your story around it.',
    ctaPrimary: 'Book a Free Call',
    ctaWhatsApp: 'Chat on WhatsApp',
    trust1: 'Pay only after full satisfaction',
    trust2: 'First draft in 3–5 business days',
    trust3: '48h express option available',
    trust4: 'ATS-optimised layout',
    whoForBadge: 'Is This For You?',
    whoForH2Line1: 'We write for every',
    whoForH2Line2: 'stage of your career.',
    whoForPara: 'Whether you are just starting out or targeting a senior role — we adapt the approach to your situation.',
    whoFor: [
      { title: 'Fresh Graduates', desc: 'Entering the job market without callbacks? We turn your potential into a CV that opens doors — even without years of experience.' },
      { title: 'Career Changers', desc: 'Pivoting to a new sector and unsure how to reframe your background? We translate your experience into the language of your new industry.' },
      { title: 'Mid-Career Professionals', desc: 'Years of results that are not landing the roles they deserve. We restructure your story to reflect the seniority and impact you have built.' },
      { title: 'Applying Abroad', desc: 'Targeting opportunities in the UAE, UK, South Africa, or Europe? Different markets expect different formats. We adapt your documents accordingly.' },
    ],
    whatsIncludedBadge: "What's Included",
    whatsIncludedH2Line1: 'Everything you need',
    whatsIncludedH2Line2: 'to land the interview.',
    deliverables: [
      { title: 'ATS-Optimised CV', desc: 'Keyword-rich layout that passes automated screening and impresses the human reading it next.' },
      { title: 'Tailored Cover Letter', desc: 'A compelling narrative written specifically for the role — not a generic template.' },
      { title: '48h Express Option', desc: 'Need it fast? We offer a priority turnaround for time-sensitive applications.' },
      { title: 'Unlimited Revisions', desc: 'We keep refining until you are proud to send it. No cap on revision rounds.' },
      { title: 'Recruiter-Ready Layout', desc: 'Clean, modern design that is easy to scan in seconds — because that is all you get.' },
      { title: 'Satisfaction Guarantee', desc: 'No invoice until you have reviewed the final documents and are fully satisfied.' },
    ],
    howItWorksBadge: 'How It Works',
    howItWorksH2Line1: 'From conversation',
    howItWorksH2Line2: 'to dream job.',
    process: [
      { step: '01', title: 'Free Consultation', desc: 'A quick call or WhatsApp chat. We learn about your background, target roles, and goals.' },
      { step: '02', title: 'Information Gather', desc: 'We send you a simple form to capture your experience, skills, and achievements in detail.' },
      { step: '03', title: 'First Draft', desc: 'Your professionally written CV and cover letter are ready within 3–5 business days.' },
      { step: '04', title: 'Your Feedback', desc: 'You review, we refine. As many rounds as needed until every word feels right.' },
      { step: '05', title: 'Final Documents', desc: 'Delivered as polished PDF and editable Word files. Payment is requested at this stage only.' },
    ],
    guaranteeH2: 'You pay only when you are satisfied',
    guaranteePara: 'We do not send an invoice until you have reviewed the final documents and confirmed you are happy. Unlimited revisions are included as standard. No exceptions.',
    faqTitle: 'Common questions',
    faqs: [
      { q: 'How long does it take?', a: 'Your first draft is typically ready within 3–5 business days. If you need it faster, ask about our 48-hour express option.' },
      { q: 'What information do you need from me?', a: 'After a brief consultation, we send you a simple form to complete. We need your work history, education, key achievements, and target role. We handle the writing from there.' },
      { q: 'What is ATS and why does it matter?', a: 'ATS (Applicant Tracking System) is software that scans CVs before a human does. Many applications are rejected automatically due to formatting or missing keywords. We build every CV to pass these filters first.' },
      { q: 'Do you write CVs for any industry?', a: 'Yes — we write for all sectors including hospitality, finance, IT, engineering, healthcare, education, and public service. We adapt the language and structure to fit your field.' },
      { q: 'Can you help if I am applying outside Mauritius?', a: 'Absolutely. CV format expectations vary significantly between the GCC, UK, Europe, and South Africa. We know the differences and tailor your documents to the target market.' },
      { q: 'What is the cost?', a: 'Pricing depends on your career level and the documents required. Contact us for a free, no-obligation quote after a quick consultation.' },
    ],
    contactBadge: 'Book a Free Call',
    contactH2Line1: "Let's talk about",
    contactH2Line2: 'your next move.',
    contactPara: 'A free, no-pressure call or visit to understand what you are aiming for and how we can help. No commitment required.',
    contactPhoneLabel: 'Phone / WhatsApp',
    contactEmailLabel: 'Email',
    whatsAppBtn: 'Chat on WhatsApp',
    formTitle: 'Book your free consultation',
    formDropdownLabel: 'Your current situation',
    formDropdownOptions: ['Fresh Graduate', 'Career Change', 'Mid-Career Professional', 'Applying Abroad', 'Other'],
    formMessagePlaceholder: 'What role are you targeting? Any specific industry or country?',
    formSubmitLabel: 'Book My Free Call',
    statsItems: [
      { stat: '7 seconds', label: 'Average time a recruiter spends on a CV at first glance' },
      { stat: '98%', label: 'Of large companies use ATS software to filter applications automatically' },
      { stat: '1 in 10', label: 'Applications ever reach the hiring manager — the rest are screened out' },
    ],
  },
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbServices: 'Services',
    breadcrumbCurrent: 'CV & Lettre de motivation',
    badge: 'Rédaction de CV professionnel',
    h1Line1: 'Votre CV a 7 secondes.',
    h1Line2: 'Faites-les compter.',
    heroPara: 'La plupart des CV n\'atteignent jamais un recruteur humain — filtrés par des algorithmes ou ignorés en un coup d\'œil. Nous savons exactement ce que les logiciels ATS et les responsables du recrutement recherchent, et nous construisons votre histoire autour de cela.',
    ctaPrimary: 'Prendre rendez-vous',
    ctaWhatsApp: 'Écrire sur WhatsApp',
    trust1: 'Paiement uniquement après satisfaction',
    trust2: 'Premier brouillon en 3 à 5 jours ouvrés',
    trust3: 'Option express 48h disponible',
    trust4: 'Mise en page optimisée ATS',
    whoForBadge: 'Est-ce pour vous ?',
    whoForH2Line1: 'Nous rédigeons pour chaque',
    whoForH2Line2: 'étape de votre carrière.',
    whoForPara: 'Que vous débutiez dans la vie professionnelle ou que vous visiez un poste senior — nous adaptons notre approche à votre situation.',
    whoFor: [
      { title: 'Jeunes diplômés', desc: 'Vous entrez sur le marché du travail sans retours ? Nous transformons votre potentiel en un CV qui ouvre des portes — même sans des années d\'expérience.' },
      { title: 'Reconversion professionnelle', desc: 'Vous changez de secteur et ne savez pas comment revaloriser votre parcours ? Nous traduisons votre expérience dans le langage de votre nouvelle industrie.' },
      { title: 'Professionnels en milieu de carrière', desc: 'Des années de résultats qui ne vous donnent pas accès aux postes que vous méritez. Nous restructurons votre histoire pour refléter la séniorité et l\'impact que vous avez construits.' },
      { title: 'Candidatures à l\'étranger', desc: 'Vous ciblez des opportunités aux Émirats, au Royaume-Uni, en Afrique du Sud ou en Europe ? Chaque marché a ses propres formats. Nous adaptons vos documents en conséquence.' },
    ],
    whatsIncludedBadge: 'Ce qui est inclus',
    whatsIncludedH2Line1: 'Tout ce dont vous avez besoin',
    whatsIncludedH2Line2: 'pour décrocher l\'entretien.',
    deliverables: [
      { title: 'CV optimisé ATS', desc: 'Une mise en page riche en mots-clés qui passe les filtres automatiques et impressionne le recruteur humain.' },
      { title: 'Lettre de motivation personnalisée', desc: 'Un récit percutant rédigé spécifiquement pour le poste visé — pas un modèle générique.' },
      { title: 'Option express 48h', desc: 'Besoin d\'un délai rapide ? Nous proposons un service prioritaire pour les candidatures urgentes.' },
      { title: 'Révisions illimitées', desc: 'Nous affinons jusqu\'à ce que vous soyez fier de l\'envoyer. Aucune limite au nombre de révisions.' },
      { title: 'Mise en page prête pour les recruteurs', desc: 'Design épuré et moderne, facile à parcourir en quelques secondes — car c\'est tout ce dont vous disposez.' },
      { title: 'Garantie satisfaction', desc: 'Aucune facture tant que vous n\'avez pas examiné les documents finaux et confirmé votre satisfaction.' },
    ],
    howItWorksBadge: 'Comment ça marche',
    howItWorksH2Line1: 'De la conversation',
    howItWorksH2Line2: 'à l\'emploi de vos rêves.',
    process: [
      { step: '01', title: 'Consultation gratuite', desc: 'Un appel rapide ou une discussion WhatsApp. Nous découvrons votre parcours, vos objectifs et les postes visés.' },
      { step: '02', title: 'Collecte d\'informations', desc: 'Nous vous envoyons un formulaire simple pour recueillir en détail votre expérience, vos compétences et vos réalisations.' },
      { step: '03', title: 'Premier brouillon', desc: 'Votre CV et votre lettre de motivation rédigés professionnellement sont prêts en 3 à 5 jours ouvrés.' },
      { step: '04', title: 'Vos retours', desc: 'Vous relisez, nous affinons. Autant de cycles que nécessaire jusqu\'à ce que chaque mot soit parfait.' },
      { step: '05', title: 'Documents finaux', desc: 'Livrés en PDF soigné et en fichier Word modifiable. Le paiement est demandé à cette étape uniquement.' },
    ],
    guaranteeH2: 'Vous ne payez que lorsque vous êtes satisfait',
    guaranteePara: 'Nous n\'envoyons pas de facture tant que vous n\'avez pas examiné les documents finaux et confirmé votre satisfaction. Les révisions illimitées sont incluses par défaut. Sans exception.',
    faqTitle: 'Questions fréquentes',
    faqs: [
      { q: 'Combien de temps cela prend-il ?', a: 'Votre premier brouillon est généralement prêt en 3 à 5 jours ouvrés. Si vous avez besoin de rapidité, renseignez-vous sur notre option express 48 heures.' },
      { q: 'Quelles informations me demandez-vous ?', a: 'Après une courte consultation, nous vous envoyons un formulaire simple à remplir. Nous avons besoin de votre historique professionnel, de votre formation, de vos principales réalisations et du poste visé. Nous nous occupons de la rédaction à partir de là.' },
      { q: 'Qu\'est-ce que l\'ATS et pourquoi est-ce important ?', a: 'L\'ATS (Applicant Tracking System) est un logiciel qui analyse les CV avant tout recruteur humain. De nombreuses candidatures sont rejetées automatiquement en raison de la mise en forme ou de mots-clés manquants. Nous construisons chaque CV pour passer ces filtres en premier.' },
      { q: 'Rédigez-vous des CV pour tous les secteurs ?', a: 'Oui — nous rédigeons pour tous les secteurs, notamment l\'hôtellerie, la finance, l\'informatique, l\'ingénierie, la santé, l\'éducation et la fonction publique. Nous adaptons le langage et la structure à votre domaine.' },
      { q: 'Pouvez-vous m\'aider si je postule à l\'étranger ?', a: 'Absolument. Les attentes en matière de format de CV varient considérablement entre les pays du Golfe, le Royaume-Uni, l\'Europe et l\'Afrique du Sud. Nous connaissons ces différences et adaptons vos documents au marché cible.' },
      { q: 'Quel est le tarif ?', a: 'Le tarif dépend de votre niveau de carrière et des documents requis. Contactez-nous pour un devis gratuit et sans engagement après une courte consultation.' },
    ],
    contactBadge: 'Prendre rendez-vous',
    contactH2Line1: 'Parlons de',
    contactH2Line2: 'votre prochaine étape.',
    contactPara: 'Un appel ou une visite gratuite et sans pression pour comprendre vos objectifs et comment nous pouvons vous aider. Aucun engagement requis.',
    contactPhoneLabel: 'Téléphone / WhatsApp',
    contactEmailLabel: 'E-mail',
    whatsAppBtn: 'Écrire sur WhatsApp',
    formTitle: 'Réservez votre consultation gratuite',
    formDropdownLabel: 'Votre situation actuelle',
    formDropdownOptions: ['Jeune diplômé', 'Reconversion professionnelle', 'Professionnel en milieu de carrière', 'Candidature à l\'étranger', 'Autre'],
    formMessagePlaceholder: 'Quel poste visez-vous ? Un secteur ou un pays particulier ?',
    formSubmitLabel: 'Réserver mon appel gratuit',
    statsItems: [
      { stat: '7 secondes', label: 'Temps moyen qu\'un recruteur consacre à un CV au premier regard' },
      { stat: '98 %', label: 'Des grandes entreprises utilisent un logiciel ATS pour filtrer les candidatures automatiquement' },
      { stat: '1 sur 10', label: 'Candidatures qui atteignent le responsable du recrutement — les autres sont éliminées' },
    ],
  },
};

const WHO_FOR_ICONS = [GraduationCap, RefreshCcw, Briefcase, Globe];
const WHO_FOR_COLORS = ['purple', 'gold', 'purple', 'gold'];
const DELIVERABLE_ICONS = [FileText, BadgeCheck, Zap, RefreshCcw, Eye, Shield];

/* ── CV Mockup ─────────────────────────────────────────────────────── */
function CVMockup() {
  return (
    <div className="relative flex items-center justify-center py-8 lg:py-12">
      {/* Glow */}
      <div className="absolute w-[380px] h-[500px] rounded-3xl bg-purple/25 blur-[90px]" />
      <div className="absolute w-[300px] h-[420px] bg-black/40 blur-2xl translate-y-8 translate-x-3 rounded-2xl" />

      {/* CV sheet — slight tilt */}
      <div className="relative bg-white shadow-2xl rounded-xl overflow-hidden"
        style={{ width: '260px', transform: 'rotate(-2deg)' }}>

        {/* Left accent bar */}
        <div className="flex min-h-[380px]">
          <div className="w-2.5 flex-shrink-0"
            style={{ background: 'linear-gradient(180deg,#8B2FE8 0%,#C040F0 50%,#F0B429 100%)' }} />

          <div className="flex-1">
            {/* Header */}
            <div className="px-4 pt-4 pb-3" style={{ background: '#0D1126' }}>
              <div className="w-10 h-10 rounded-full bg-purple/30 mb-2 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-white/20" />
              </div>
              <div className="h-2 w-28 bg-white/80 rounded-full mb-1" />
              <div className="h-1.5 w-20 bg-white/30 rounded-full mb-2" />
              <div className="flex gap-3">
                {['Email', 'Phone', 'LinkedIn'].map(l => (
                  <div key={l} className="flex items-center gap-0.5">
                    <div className="w-1 h-1 rounded-full bg-purple/60" />
                    <div className="h-1 w-10 bg-white/20 rounded-full" />
                  </div>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="px-4 py-3 space-y-3" style={{ background: '#FAFAFA' }}>
              {/* Section: Summary */}
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: '#8B2FE8' }} />
                  <div className="h-1.5 w-16 rounded-full" style={{ background: '#8B2FE8', opacity: 0.7 }} />
                </div>
                {[32, 28, 30, 24].map((w, i) => (
                  <div key={i} className="h-1 bg-gray-200 rounded-full mb-1" style={{ width: `${w * 3}px` }} />
                ))}
              </div>

              {/* Section: Experience */}
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: '#8B2FE8' }} />
                  <div className="h-1.5 w-20 rounded-full" style={{ background: '#8B2FE8', opacity: 0.7 }} />
                </div>
                <div className="space-y-2">
                  {[1, 2].map(j => (
                    <div key={j} className="pl-2 border-l-2" style={{ borderColor: '#8B2FE808' }}>
                      <div className="h-1.5 w-24 bg-gray-800 rounded-full mb-1 opacity-50" />
                      <div className="h-1 w-16 bg-gray-400 rounded-full mb-1 opacity-40" />
                      {[28, 32, 20].map((w, i) => (
                        <div key={i} className="h-1 bg-gray-200 rounded-full mb-0.5" style={{ width: `${w * 3}px` }} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Section: Skills */}
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: '#F0B429' }} />
                  <div className="h-1.5 w-12 rounded-full" style={{ background: '#F0B429', opacity: 0.7 }} />
                </div>
                <div className="flex flex-wrap gap-1">
                  {[14, 18, 12, 16, 10, 14].map((w, i) => (
                    <div key={i} className="h-3 rounded-full"
                      style={{
                        width: `${w * 3}px`,
                        background: i % 2 === 0 ? 'rgba(139,47,232,0.12)' : 'rgba(240,180,41,0.15)',
                      }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 flex justify-between border-t border-gray-100">
          <span style={{ fontSize: '6px', color: '#9CA3AF', fontFamily: 'system-ui' }}>ATS OPTIMISED</span>
          <span style={{ fontSize: '6px', color: '#8B2FE8', fontWeight: 700, fontFamily: 'system-ui' }}>Island Pro Consulting</span>
        </div>
      </div>

      {/* Chips */}
      <div className="absolute -bottom-1 -right-4 bg-white rounded-2xl shadow-xl border border-navy/8 px-3 py-2 flex items-center gap-2"
        style={{ transform: 'rotate(2deg)' }}>
        <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg,#8B2FE8,#C040F0)' }}>
          <CheckCircle2 size={14} className="text-white" />
        </div>
        <div>
          <p className="text-[9px] text-navy/40 font-bold leading-none mb-0.5">Delivery</p>
          <p className="text-navy font-black text-sm leading-none">48 hours</p>
        </div>
      </div>

      <div className="absolute top-8 -left-5 rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2"
        style={{ background: '#F0B429', transform: 'rotate(2deg)' }}>
        <Shield size={12} className="text-navy flex-shrink-0" />
        <p className="text-[10px] text-navy font-black leading-tight">Pay after<br />satisfaction</p>
      </div>
    </div>
  );
}

export default function CVPage() {
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
                <UserCheck size={12} /> {txt.badge}
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
                <a href="https://wa.me/23058137384?text=Hello%2C%20I%20am%20interested%20in%20a%20professional%20CV."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all">
                  <MessageCircle size={16} /> {txt.ctaWhatsApp}
                </a>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-white/8">
                {[
                  { icon: Shield,   text: txt.trust1 },
                  { icon: Clock,    text: txt.trust2 },
                  { icon: Zap,      text: txt.trust3 },
                  { icon: Filter,   text: txt.trust4 },
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

            <CVMockup />
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-gold py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {txt.statsItems.map(s => (
              <div key={s.stat}>
                <p className="text-navy font-black text-2xl lg:text-3xl">{s.stat}</p>
                <p className="text-navy/70 text-xs leading-snug mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Is This For ── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              {txt.whoForBadge}
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              {txt.whoForH2Line1}<br />{txt.whoForH2Line2}
            </h2>
            <p className="text-navy/60 text-lg max-w-2xl mx-auto">
              {txt.whoForPara}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {txt.whoFor.map((w, i) => {
              const Icon = WHO_FOR_ICONS[i];
              const isPurple = WHO_FOR_COLORS[i] === 'purple';
              return (
                <div key={i}
                  className="group bg-white rounded-3xl border-2 border-navy/6 hover:border-purple/20 hover:-translate-y-1 hover:shadow-purple transition-all duration-300 p-8">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                    isPurple ? 'bg-purple/10 text-purple' : 'bg-gold/10 text-gold-dark'
                  }`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-black text-navy mb-3">{w.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What You Get ── */}
      <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gold/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-4">
              {txt.whatsIncludedBadge}
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
              {txt.whatsIncludedH2Line1}<br />
              <span className="purple-text">{txt.whatsIncludedH2Line2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {txt.deliverables.map((d, i) => {
              const Icon = DELIVERABLE_ICONS[i];
              const useGold = i % 3 === 1;
              return (
                <div key={i}
                  className="bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 hover:border-purple/30 transition-all">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    useGold ? 'bg-gold/10' : 'bg-purple/15'
                  }`}>
                    <Icon size={18} className={useGold ? 'text-gold' : 'text-purple-light'} />
                  </div>
                  <h4 className="text-white font-black text-sm mb-2">{d.title}</h4>
                  <p className="text-white/45 text-xs leading-relaxed">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              {txt.howItWorksBadge}
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              {txt.howItWorksH2Line1}<br />
              <span className="purple-text">{txt.howItWorksH2Line2}</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-0.5 bg-navy/8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {txt.process.map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="relative w-16 h-16 rounded-2xl purple-gradient flex items-center justify-center mb-4 shadow-purple flex-shrink-0 z-10">
                    <span className="text-white font-black text-lg">{p.step}</span>
                  </div>
                  <h4 className="text-navy font-black text-sm mb-2">{p.title}</h4>
                  <p className="text-navy/55 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Guarantee ── */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 purple-gradient opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-5">
            <Shield size={24} className="text-gold" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-4">{txt.guaranteeH2}</h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-xl mx-auto">
            {txt.guaranteePara}
          </p>
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
              <a href="https://wa.me/23058137384?text=Hello%20Island%20Pro%20Consulting%2C%20I%20need%20a%20professional%20CV."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-all">
                <MessageCircle size={16} /> {txt.whatsAppBtn}
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-card">
              <h3 className="text-lg font-black text-navy mb-6">{txt.formTitle}</h3>
              <ContactForm
                service="CV & Cover Letter"
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
