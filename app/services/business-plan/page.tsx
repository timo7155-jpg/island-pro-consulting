'use client';

import Image from 'next/image';
import {
  FileText, CheckCircle2, ArrowRight, Shield, Clock, Star,
  Building2, MapPin, TrendingUp, Landmark, ChevronRight,
  Users, BadgeCheck, Lightbulb, BarChart3, BookOpen,
  Phone, Mail, MessageCircle,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { useLanguage, Lang } from '@/contexts/LanguageContext';

const T: Record<Lang, {
  breadcrumb: { home: string; services: string; current: string };
  badge: string;
  heroH1a: string; heroH1b: string;
  heroDesc: string; heroDescBold: string;
  ctaConsult: string; ctaWhatsApp: string;
  trust: string[];
  guaranteeBanner: string; guaranteeBannerDesc: string;
  useCasesLabel: string; useCasesH2a: string; useCasesH2b: string; useCasesDesc: string;
  useCases: { label: string; headline: string; desc: string; examples: string[]; badge?: string }[];
  includedLabel: string; includedH2a: string; includedH2b: string; includedDesc: string;
  included: string[];
  includedCallout: string; includedCalloutDesc: string;
  processLabel: string; processH2a: string; processH2b: string;
  process: { step: string; title: string; desc: string }[];
  guaranteeH2: string;
  guarantees: { title: string; desc: string }[];
  guaranteeFooter: string;
  faqH2: string;
  faqs: { q: string; a: string }[];
  contactBadge: string; contactH2a: string; contactH2b: string; contactDesc: string;
  contacts: { label: string; value: string; href: string }[];
  formTitle: string;
  dropdownLabel: string; dropdownOptions: string[];
  messagePlaceholder: string; submitLabel: string;
  chipPages: string; chipSatisfaction: string;
}> = {
  en: {
    breadcrumb: { home: 'Home', services: 'Services', current: 'Business Plan Writing' },
    badge: 'Pro Business Plan',
    heroH1a: 'Business plans that open',
    heroH1b: 'doors in Mauritius.',
    heroDesc: 'Investor-ready. Bank-approved. Government-compliant. Professionally written plans tailored to Mauritian standards — with a simple promise: ',
    heroDescBold: 'you pay only after you are fully satisfied.',
    ctaConsult: 'Get a Free Consultation',
    ctaWhatsApp: 'Chat on WhatsApp',
    trust: [
      'Pay only after full satisfaction',
      'First draft in 5–7 business days',
      '25–35 pages, fully structured',
      'Rodrigues specialist',
    ],
    guaranteeBanner: 'Satisfaction Guarantee — ',
    guaranteeBannerDesc: 'No invoice is raised until you have reviewed the final plan and are 100% satisfied. No risk.',
    useCasesLabel: '4 Reasons People Come to Us',
    useCasesH2a: 'What do you need',
    useCasesH2b: 'your plan to achieve?',
    useCasesDesc: 'Every plan we write is built around a specific goal — we do not produce generic templates.',
    useCases: [
      {
        label: 'Government Permit Application',
        headline: 'Present a plan that speaks to authorities.',
        desc: 'Regulatory bodies and ministries expect a structured, credible document before granting operational or construction permits. We write clear, compliant plans that address what reviewers need to see.',
        examples: ['Restaurant & food business permits', 'Tourism activity licences', 'Small business operating permits', 'Healthcare & wellness authorisations'],
      },
      {
        label: 'Commercial Land Lease — Rodrigues',
        headline: 'Support your land lease application in Rodrigues.',
        desc: 'A well-prepared business plan strengthens your application to the Rodrigues Regional Assembly and demonstrates the seriousness of your project. We understand the local context and help you present your case with clarity.',
        examples: ['Agricultural & eco-tourism projects', 'Accommodation development applications', 'Fishing & marine activity ventures', 'Craft & local produce businesses'],
        badge: 'Rodrigues Specialist',
      },
      {
        label: 'Business Funding & Investment',
        headline: 'Make your project fundable.',
        desc: "Whether you are approaching local development bodies, applying for SME support programmes, or presenting to private investors — your plan must be compelling, structured, and financially credible.",
        examples: ['SME support programmes', 'Local development funding bodies', 'Private investor presentations', 'Grant & subsidy applications'],
      },
      {
        label: 'Bank Loan Support',
        headline: 'Walk into your bank with confidence.',
        desc: "Banks need to see that you understand your market, your numbers, and your risks. We produce loan-ready business plans that satisfy the lender's requirements — and give your application a real edge.",
        examples: ['All local commercial banks', 'SME & entrepreneurship loan schemes', 'Property-backed business loans', 'Equipment & vehicle financing'],
      },
    ],
    includedLabel: "What's Included",
    includedH2a: '25 to 35 pages of',
    includedH2b: 'substance, not filler.',
    includedDesc: 'Every section is written specifically for your business. We will walk you through every detail during your consultation.',
    included: [
      'Executive Summary', 'Company Overview', 'Products & Services', 'Market Analysis',
      'Marketing & Sales Strategy', 'Operations Plan', 'Financial Projections (3–5 years)',
      'Risk Analysis', 'Appendices & Supporting Documents',
    ],
    includedCallout: 'Typically 25–35 pages delivered',
    includedCalloutDesc: 'Includes cover page, table of contents, all sections above, financial tables, and appendices. Delivered as a polished PDF and editable Word document.',
    processLabel: 'How It Works',
    processH2a: 'Simple. Transparent.',
    processH2b: 'Zero risk.',
    process: [
      { step: '01', title: 'Free Consultation',    desc: 'We start with a call or WhatsApp chat to understand your project, goals, and deadline. No commitment required.' },
      { step: '02', title: 'Discovery & Research', desc: 'We gather everything we need about your business, your market, and your submission requirements.' },
      { step: '03', title: 'First Draft',           desc: 'You receive a complete first draft — typically within 5–7 business days — for your review and feedback.' },
      { step: '04', title: 'Revisions',             desc: 'We refine until you are 100% satisfied. Unlimited revision rounds are included at no extra cost.' },
      { step: '05', title: 'Final Delivery',        desc: 'You receive a polished, professional PDF ready to submit. Payment is due only at this stage.' },
    ],
    guaranteeH2: 'Our commitment to you',
    guarantees: [
      { title: 'Satisfaction First',     desc: 'We do not invoice until you have read, reviewed, and approved every page of your plan.' },
      { title: 'Unlimited Revisions',    desc: 'As many revision rounds as you need are included. We keep refining until it is exactly right.' },
      { title: 'Built for Your Purpose', desc: 'Whether it is a bank, a regulator, or an investor — your plan is written for that specific reader.' },
    ],
    guaranteeFooter: 'Every business plan we have delivered has met the expectations of our clients. Your satisfaction is not a bonus — it is the condition.',
    faqH2: 'Common questions',
    faqs: [
      { q: 'How long does it take?', a: 'Most plans are delivered as a first draft within 5–7 business days. Urgent timelines can be accommodated — contact us to discuss.' },
      { q: 'What information do I need to provide?', a: 'We start with a free consultation call or WhatsApp chat to gather everything we need. You do not need to prepare a document in advance — just bring your idea and we handle the rest.' },
      { q: 'Do you work with businesses in Rodrigues?', a: 'Absolutely. We are very familiar with Rodrigues Regional Assembly processes, land lease application requirements, and the local business environment. Several of our business plans have been specifically produced for Rodrigues-based ventures.' },
      { q: 'What is the cost?', a: 'Pricing depends on the complexity of your project and the intended purpose of the plan. Contact us for a free, no-obligation quote.' },
      { q: 'Can I use the plan for multiple purposes (e.g. bank loan AND permit)?', a: 'Yes — we structure plans that serve multiple purposes where appropriate, or advise you on whether a separate plan per purpose is the better approach.' },
    ],
    contactBadge: 'Free Consultation',
    contactH2a: 'Tell us about your project.',
    contactH2b: 'We will handle the rest.',
    contactDesc: 'No commitment. No fee. Just a conversation about your goals — and a clear path forward.',
    contacts: [
      { label: 'Phone / WhatsApp', value: '+230 5813 7384', href: 'https://wa.me/23058137384' },
      { label: 'Email', value: 'contact@islandproconsulting.mu', href: 'mailto:contact@islandproconsulting.mu' },
    ],
    formTitle: 'Request your free consultation',
    dropdownLabel: 'Purpose of your business plan',
    dropdownOptions: ['Government Permit Application', 'Commercial Land Lease — Rodrigues', 'Business Funding / Investment', 'Bank Loan Support', 'Multiple purposes', 'Other'],
    messagePlaceholder: 'Briefly describe your business idea and what you need the plan for...',
    submitLabel: 'Request Free Consultation',
    chipPages: 'Pages',
    chipSatisfaction: 'Pay after\nsatisfaction',
  },
  fr: {
    breadcrumb: { home: 'Accueil', services: 'Services', current: "Rédaction de Plan d'Affaires" },
    badge: "Plan d'Affaires Pro",
    heroH1a: "Des plans d'affaires qui ouvrent",
    heroH1b: 'des portes à Maurice.',
    heroDesc: "Prêt pour les investisseurs. Approuvé par les banques. Conforme aux réglementations. Des plans rédigés professionnellement selon les normes mauriciennes — avec une promesse simple : ",
    heroDescBold: 'vous payez seulement après satisfaction totale.',
    ctaConsult: 'Consultation gratuite',
    ctaWhatsApp: 'Discuter sur WhatsApp',
    trust: [
      'Paiement après satisfaction totale',
      'Premier brouillon en 5–7 jours ouvrables',
      '25–35 pages, entièrement structurées',
      'Spécialiste Rodrigues',
    ],
    guaranteeBanner: 'Garantie de satisfaction — ',
    guaranteeBannerDesc: "Aucune facture n'est émise avant que vous ayez examiné le plan final et que vous soyez 100 % satisfait. Zéro risque.",
    useCasesLabel: '4 raisons pour lesquelles les clients viennent chez nous',
    useCasesH2a: "Quel est l'objectif de",
    useCasesH2b: "votre plan d'affaires ?",
    useCasesDesc: "Chaque plan que nous rédigeons est construit autour d'un objectif précis — nous ne produisons pas de modèles génériques.",
    useCases: [
      {
        label: 'Demande de Permis Gouvernemental',
        headline: 'Présentez un plan qui parle aux autorités.',
        desc: "Les organismes de réglementation et les ministères exigent un document structuré et crédible avant d'accorder des permis d'exploitation ou de construction. Nous rédigeons des plans clairs et conformes qui répondent à ce que les examinateurs doivent voir.",
        examples: ["Permis restaurant & activités alimentaires", "Licences d'activités touristiques", "Permis d'exploitation PME", "Autorisations santé & bien-être"],
      },
      {
        label: 'Bail Commercial — Rodrigues',
        headline: 'Renforcez votre demande de bail à Rodrigues.',
        desc: "Un plan d'affaires bien préparé renforce votre dossier auprès de l'Assemblée Régionale de Rodrigues et démontre le sérieux de votre projet. Nous comprenons le contexte local et vous aidons à présenter votre dossier avec clarté.",
        examples: ["Projets agricoles & éco-touristiques", "Dossiers de développement d'hébergement", "Activités de pêche & maritimes", "Artisanat & commerces locaux"],
        badge: 'Spécialiste Rodrigues',
      },
      {
        label: 'Financement & Investissement',
        headline: 'Rendez votre projet finançable.',
        desc: "Que vous approchiez des organismes de développement local, postuliez à des programmes de soutien aux PME, ou vous adressiez à des investisseurs privés — votre plan doit être convaincant, structuré et financièrement crédible.",
        examples: ['Programmes de soutien PME', 'Organismes de financement local', 'Présentations à des investisseurs privés', 'Dossiers de subventions'],
      },
      {
        label: 'Prêt Bancaire',
        headline: 'Entrez dans votre banque avec confiance.',
        desc: "Les banques ont besoin de voir que vous comprenez votre marché, vos chiffres et vos risques. Nous produisons des plans prêts pour le financement bancaire qui satisfont aux exigences des prêteurs — et donnent à votre dossier un avantage réel.",
        examples: ['Toutes les banques commerciales locales', 'Prêts PME & entrepreneuriat', 'Prêts adossés à la propriété', "Financement d'équipements & véhicules"],
      },
    ],
    includedLabel: 'Ce qui est inclus',
    includedH2a: '25 à 35 pages de',
    includedH2b: 'contenu, pas de remplissage.',
    includedDesc: 'Chaque section est rédigée spécifiquement pour votre entreprise. Nous passerons chaque détail en revue lors de votre consultation.',
    included: [
      "Résumé Exécutif", "Présentation de l'Entreprise", "Produits & Services", "Analyse de Marché",
      "Stratégie Marketing & Ventes", "Plan Opérationnel", "Projections Financières (3–5 ans)",
      "Analyse des Risques", "Annexes & Documents Justificatifs",
    ],
    includedCallout: 'Livraison habituelle : 25–35 pages',
    includedCalloutDesc: "Comprend la page de couverture, la table des matières, toutes les sections ci-dessus, les tableaux financiers et les annexes. Livré en PDF soigné et en document Word modifiable.",
    processLabel: 'Comment ça marche',
    processH2a: 'Simple. Transparent.',
    processH2b: 'Zéro risque.',
    process: [
      { step: '01', title: 'Consultation gratuite',  desc: "Nous commençons par un appel ou une discussion WhatsApp pour comprendre votre projet, vos objectifs et votre délai. Aucun engagement requis." },
      { step: '02', title: 'Découverte & Recherche', desc: "Nous rassemblons tout ce dont nous avons besoin sur votre entreprise, votre marché et vos exigences de soumission." },
      { step: '03', title: 'Premier Brouillon',      desc: "Vous recevez un premier brouillon complet — généralement dans les 5–7 jours ouvrables — pour votre révision et vos commentaires." },
      { step: '04', title: 'Révisions',              desc: "Nous affinons jusqu'à ce que vous soyez satisfait à 100 %. Des rondes de révision illimitées sont incluses sans frais supplémentaires." },
      { step: '05', title: 'Livraison Finale',       desc: "Vous recevez un PDF soigné et professionnel prêt à soumettre. Le paiement n'est dû qu'à cette étape." },
    ],
    guaranteeH2: 'Notre engagement envers vous',
    guarantees: [
      { title: 'Satisfaction Prioritaire', desc: "Nous ne facturons pas avant que vous ayez lu, révisé et approuvé chaque page de votre plan." },
      { title: 'Révisions Illimitées',     desc: "Autant de rondes de révision que vous en avez besoin sont incluses. Nous continuons à affiner jusqu'à ce que ce soit exactement juste." },
      { title: 'Conçu pour Votre Objectif', desc: "Que ce soit pour une banque, un régulateur ou un investisseur — votre plan est rédigé pour ce lecteur spécifique." },
    ],
    guaranteeFooter: "Chaque plan d'affaires que nous avons livré a répondu aux attentes de nos clients. Votre satisfaction n'est pas un bonus — c'est la condition.",
    faqH2: 'Questions fréquentes',
    faqs: [
      { q: 'Combien de temps cela prend-il ?', a: "La plupart des plans sont livrés en premier brouillon dans les 5–7 jours ouvrables. Les délais urgents peuvent être accommodés — contactez-nous pour en discuter." },
      { q: 'Quelles informations dois-je fournir ?', a: "Nous commençons par un appel de consultation gratuit ou une discussion WhatsApp pour rassembler tout ce dont nous avons besoin. Vous n'avez pas besoin de préparer un document à l'avance — apportez simplement votre idée et nous nous occupons du reste." },
      { q: 'Travaillez-vous avec des entreprises à Rodrigues ?', a: "Absolument. Nous sommes très familiers avec les processus de l'Assemblée Régionale de Rodrigues, les exigences pour les demandes de bail commercial et l'environnement des affaires local. Plusieurs de nos plans d'affaires ont été spécifiquement produits pour des entreprises basées à Rodrigues." },
      { q: 'Quel est le coût ?', a: "Le tarif dépend de la complexité de votre projet et de l'objectif visé du plan. Contactez-nous pour un devis gratuit et sans engagement." },
      { q: 'Puis-je utiliser le plan à plusieurs fins (ex. prêt bancaire ET permis) ?', a: "Oui — nous structurons des plans qui servent plusieurs objectifs si c'est approprié, ou nous vous conseillons sur la nécessité d'un plan séparé par objectif." },
    ],
    contactBadge: 'Consultation Gratuite',
    contactH2a: 'Parlez-nous de votre projet.',
    contactH2b: 'Nous nous occupons du reste.',
    contactDesc: "Aucun engagement. Aucun frais. Juste une conversation sur vos objectifs — et une voie claire à suivre.",
    contacts: [
      { label: 'Téléphone / WhatsApp', value: '+230 5813 7384', href: 'https://wa.me/23058137384' },
      { label: 'Email', value: 'contact@islandproconsulting.mu', href: 'mailto:contact@islandproconsulting.mu' },
    ],
    formTitle: 'Demandez votre consultation gratuite',
    dropdownLabel: "Objectif de votre plan d'affaires",
    dropdownOptions: ["Demande de permis gouvernemental", "Bail commercial — Rodrigues", "Financement / Investissement", "Prêt bancaire", "Plusieurs objectifs", "Autre"],
    messagePlaceholder: "Décrivez brièvement votre idée d'entreprise et l'utilisation prévue du plan...",
    submitLabel: 'Demander une consultation gratuite',
    chipPages: 'Pages',
    chipSatisfaction: 'Payez après\nsatisfaction',
  },
};

const USE_CASE_META = [
  { icon: Building2, color: 'purple' },
  { icon: MapPin,    color: 'gold' },
  { icon: TrendingUp, color: 'purple' },
  { icon: Landmark,  color: 'gold' },
] as const;

const WHAT_INCLUDED_ICONS = [BookOpen, Users, Lightbulb, BarChart3, TrendingUp, Building2, FileText, Shield, BadgeCheck];

function BPCoverMockup({ txt }: { txt: typeof T['en'] }) {
  return (
    <div className="relative flex items-center justify-center py-8 lg:py-12">
      <div className="absolute w-[420px] h-[540px] rounded-3xl bg-purple/30 blur-[90px]" />
      <div className="absolute w-[340px] h-[460px] bg-black/50 blur-2xl translate-y-8 translate-x-4 rounded-2xl" />
      <div className="relative rounded-2xl overflow-hidden shadow-2xl w-[200px] lg:w-[320px]"
        style={{ transform: 'rotate(2deg)' }}>
        <Image
          src="/bp.png"
          alt="Business Plan Cover — Island Pro Consulting"
          width={320}
          height={452}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="hidden lg:flex absolute bottom-8 -right-4 bg-white rounded-2xl shadow-xl border border-navy/8 px-3 py-2 items-center gap-2"
        style={{ transform: 'rotate(-2deg)' }}>
        <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg,#8B2FE8,#C040F0)' }}>
          <FileText size={14} className="text-white" />
        </div>
        <div>
          <p className="text-[9px] text-navy/40 font-bold leading-none mb-0.5">{txt.chipPages}</p>
          <p className="text-navy font-black text-sm leading-none">25–35</p>
        </div>
      </div>

      <div className="hidden lg:flex absolute top-8 -left-6 rounded-2xl shadow-xl px-3 py-2 items-center gap-2"
        style={{ background: '#F0B429', transform: 'rotate(-3deg)' }}>
        <Shield size={13} className="text-navy flex-shrink-0" />
        <p className="text-[10px] text-navy font-black leading-tight whitespace-pre-line">{txt.chipSatisfaction}</p>
      </div>
    </div>
  );
}

export default function BusinessPlanPage() {
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
            <a href="/" className="hover:text-white/60 transition-colors">{txt.breadcrumb.home}</a>
            <ChevronRight size={12} />
            <a href="/#services" className="hover:text-white/60 transition-colors">{txt.breadcrumb.services}</a>
            <ChevronRight size={12} />
            <span className="text-purple-light">{txt.breadcrumb.current}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center pb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-6">
                <FileText size={12} /> {txt.badge}
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                {txt.heroH1a}<br />
                <span className="purple-text">{txt.heroH1b}</span>
              </h1>
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-10">
                {txt.heroDesc}<span className="text-white font-semibold">{txt.heroDescBold}</span>
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#contact"
                  className="inline-flex items-center gap-2 purple-gradient text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all shadow-purple">
                  {txt.ctaConsult} <ArrowRight size={16} />
                </a>
                <a href="https://wa.me/23058137384?text=Hello%2C%20I%20am%20interested%20in%20a%20business%20plan."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-4 rounded-xl hover:opacity-90 transition-all">
                  <MessageCircle size={16} /> {txt.ctaWhatsApp}
                </a>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-white/8">
                {[
                  { icon: Shield,     text: txt.trust[0] },
                  { icon: Clock,      text: txt.trust[1] },
                  { icon: FileText,   text: txt.trust[2] },
                  { icon: BadgeCheck, text: txt.trust[3] },
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

            <BPCoverMockup txt={txt} />
          </div>
        </div>
      </section>

      {/* ── Guarantee Banner ── */}
      <section className="bg-gold py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <Shield size={20} className="text-navy flex-shrink-0" />
          <p className="text-navy font-black text-sm">
            {txt.guaranteeBanner}<span className="font-medium">{txt.guaranteeBannerDesc}</span>
          </p>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              {txt.useCasesLabel}
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              {txt.useCasesH2a}<br />{txt.useCasesH2b}
            </h2>
            <p className="text-navy/60 text-lg max-w-2xl mx-auto">{txt.useCasesDesc}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {txt.useCases.map((uc, i) => {
              const { icon: Icon, color } = USE_CASE_META[i];
              const isPurple = color === 'purple';
              return (
                <div key={i}
                  className="group bg-white rounded-3xl border-2 border-navy/6 hover:border-purple/20 hover:-translate-y-1 hover:shadow-purple transition-all duration-300 p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-purple/3 to-purple-light/3" />
                  <div className="relative">
                    {uc.badge && (
                      <span className="absolute top-0 right-0 text-[10px] font-black bg-gold/15 text-gold-dark px-2.5 py-1 rounded-full uppercase tracking-wide">
                        {uc.badge}
                      </span>
                    )}
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${isPurple ? 'bg-purple/10 text-purple' : 'bg-gold/10 text-gold-dark'}`}>
                      <Icon size={22} />
                    </div>
                    <p className={`text-xs font-black uppercase tracking-widest mb-2 ${isPurple ? 'text-purple' : 'text-gold-dark'}`}>
                      {uc.label}
                    </p>
                    <h3 className="text-xl font-black text-navy mb-3">{uc.headline}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed mb-5">{uc.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {uc.examples.map(ex => (
                        <li key={ex} className="flex items-start gap-2 text-xs text-navy/50">
                          <CheckCircle2 size={13} className={`mt-0.5 flex-shrink-0 ${isPurple ? 'text-purple' : 'text-gold'}`} />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gold/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-4">
              {txt.includedLabel}
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
              {txt.includedH2a}<br />
              <span className="purple-text">{txt.includedH2b}</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">{txt.includedDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {txt.included.map((item, i) => {
              const Icon = WHAT_INCLUDED_ICONS[i];
              const useGold = i % 3 === 1;
              return (
                <div key={i}
                  className="bg-white/5 border border-white/8 rounded-2xl px-5 py-4 flex items-center gap-4 hover:bg-white/8 hover:border-purple/30 transition-all">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${useGold ? 'bg-gold/10' : 'bg-purple/15'}`}>
                    <Icon size={16} className={useGold ? 'text-gold' : 'text-purple-light'} />
                  </div>
                  <span className="text-white font-bold text-sm">{item}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-white/5 border border-purple/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl purple-gradient flex items-center justify-center flex-shrink-0 shadow-purple">
              <span className="text-white font-black text-lg">35</span>
            </div>
            <div>
              <p className="text-white font-black mb-1">{txt.includedCallout}</p>
              <p className="text-white/40 text-sm">{txt.includedCalloutDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple font-bold text-xs px-4 py-2 rounded-full mb-4">
              {txt.processLabel}
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              {txt.processH2a}<br />
              <span className="purple-text">{txt.processH2b}</span>
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

      {/* ── Satisfaction Guarantee ── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 purple-gradient opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6">
            <Shield size={28} className="text-gold" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-5">{txt.guaranteeH2}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {txt.guarantees.map((g, i) => {
              const Icon = [Star, Clock, BadgeCheck][i];
              return (
                <div key={g.title} className="bg-white/8 border border-white/12 rounded-2xl p-6">
                  <Icon size={22} className="text-gold mx-auto mb-3" />
                  <h4 className="text-white font-black text-sm mb-2">{g.title}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{g.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="text-white/40 text-sm">{txt.guaranteeFooter}</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 lg:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-navy tracking-tight mb-3">{txt.faqH2}</h2>
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

      {/* ── Contact / CTA ── */}
      <section id="contact" className="py-24 lg:py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple/20 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light font-bold text-xs px-4 py-2 rounded-full mb-6">
                {txt.contactBadge}
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-5">
                {txt.contactH2a}<br />
                <span className="purple-text">{txt.contactH2b}</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-10">{txt.contactDesc}</p>

              <div className="space-y-5 mb-8">
                {txt.contacts.map(c => {
                  const Icon = c.label.includes('WhatsApp') || c.label.includes('Téléphone') ? Phone : Mail;
                  return (
                    <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-4 group">
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

              <a href="https://wa.me/23058137384?text=Hello%20Island%20Pro%20Consulting%2C%20I%20need%20a%20business%20plan."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-all">
                <MessageCircle size={16} /> {txt.ctaWhatsApp}
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-card">
              <h3 className="text-lg font-black text-navy mb-6">{txt.formTitle}</h3>
              <ContactForm
                service="Pro Business Plan"
                dropdownLabel={txt.dropdownLabel}
                dropdownOptions={txt.dropdownOptions}
                messagePlaceholder={txt.messagePlaceholder}
                submitLabel={txt.submitLabel}
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
