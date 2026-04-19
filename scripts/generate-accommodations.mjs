import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const xlsx = require('xlsx');

const db = JSON.parse(readFileSync('./public/rodrigues-accommodations.json', 'utf-8'));

// First backup the original
writeFileSync('./public/rodrigues-accommodations-original.json', JSON.stringify(db, null, 2));

const wb = xlsx.readFile('./public/reviewed list 1.xlsx');
const ws = wb.Sheets[wb.SheetNames[0]];
const reviewed = xlsx.utils.sheet_to_json(ws, { defval: '' });

function norm(s) {
  return s.toLowerCase()
    .replace(/hotel|resort|spa|boutik|management|residence|gite|guest house|lodge|villa|tourist|auberge/g, '')
    .replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
}
function score(a, b) {
  const na = norm(a).split(' ').filter(x => x.length > 2);
  const nb = norm(b).split(' ').filter(x => x.length > 2);
  let h = 0;
  for (const w of na) for (const v of nb) if (w === v) h++;
  return h;
}

const SKIPS = [
  'La Belle Rodriguaise', 'Le Flamboyant Hotel', 'Escales Vacances',
  'Cotton Bay Resort & Spa', 'Tekoma Boutik Hotel And Spa',
  'Cocotiers Rodrigues Boutik Hotel', 'Le Benitier', 'Nou Lacaze',
  'The Beach House Rodrigues', 'Chez Ro-Lande',
  'Mourouk Ebony Management', // now C Mourouk by Constance Resorts — website already good
];

const CUSTOM = {
  'Zi Limon': {
    p: 1, angle: 'top_rating_5',
    subject: 'Zi Limon — une note 5⭐ qui mérite une belle vitrine en ligne',
    hook: "Zi Limon affiche une note parfaite de 5/5 sur Google Place — l'un des meilleurs scores de toute l'île de Rodrigues. C'est le reflet d'un accueil et d'une expérience vraiment remarquables. Pour que cette belle réputation attire encore plus de voyageurs, un site web professionnel permettrait à vos futurs clients de vous découvrir, d'admirer votre hébergement et de réserver directement chez vous en toute confiance."
  },
  'Fenetre Sur Mer': {
    p: 1, angle: 'top_rating',
    subject: 'Fenêtre Sur Mer — 4.9⭐ sur Google, une belle vitrine en ligne pour aller encore plus loin',
    hook: "Fenêtre Sur Mer affiche 4.9/5 sur Google Place — parmi les meilleures notes de tout Rodrigues. Vos clients vous font confiance et le font savoir. Pour que cette excellente réputation rayonne encore plus loin et attire de nouveaux voyageurs, un site web professionnel serait la prochaine étape naturelle : une belle vitrine en ligne pour partager votre cadre et faciliter les réservations directes."
  },
  'Happy Destination': {
    p: 1, angle: 'facebook_active',
    subject: 'Happy Destination — 4.7⭐ Facebook, développons ensemble votre présence en ligne',
    hook: "Happy Destination bénéficie d'une belle note de 4.7/5 sur Facebook — le signe d'un accueil chaleureux et d'une expérience appréciée de vos clients. Pour toucher encore plus de voyageurs qui planifient leur séjour en ligne, un site web professionnel serait un complément idéal à votre présence Facebook — et vous permettrait de recevoir des réservations directes, sans commission de plateforme."
  },
  'Residence Les Succulents': {
    p: 1, angle: 'facebook_good',
    subject: 'Résidence Les Succulents — une belle réputation à faire rayonner en ligne',
    hook: "Résidence Les Succulents jouit d'une belle réputation sur Facebook, le signe d'un accueil de qualité et de clients satisfaits. Pour étendre cette visibilité au-delà de Facebook — notamment sur Google, où la majorité des voyageurs commencent leur recherche — un site web professionnel serait un beau complément pour faire connaître votre hébergement à une clientèle encore plus large."
  },
  'Les Hirondelles Tourist Residence': {
    p: 1, angle: 'good_rating',
    subject: 'Les Hirondelles Tourist Residence — 4⭐ sur Google, allons encore plus loin ensemble',
    hook: "Les Hirondelles Tourist Residence est bien noté sur Google avec 4/5 — vos clients apprécient ce que vous faites, et c'est une très belle base. Pour transformer encore plus de visiteurs curieux en clients confirmés, imaginez-les pouvoir découvrir vos chambres, explorer votre cadre et réserver directement chez vous depuis un beau site web, sans intermédiaire."
  },
  'Auberge Anse Aux Anglais': {
    p: 1, angle: 'google_rated',
    subject: 'Auberge Anse Aux Anglais — développons votre présence en ligne ensemble',
    hook: "Auberge Anse Aux Anglais est déjà présente sur Google Place avec une note de 3.5/5 — une belle base de départ. Pour renforcer encore votre image et attirer un public plus large, une présence web complète avec un site professionnel et de belles photos pourrait faire toute la différence auprès des voyageurs qui planifient leur séjour à Rodrigues."
  },
  'Le Dahlia': {
    p: 1, angle: 'old_site_2014',
    subject: 'Le Dahlia — donnons à votre site une belle mise à jour',
    hook: "Nous avons visité le site de Le Dahlia et nous pensons qu'il mérite une belle mise à jour — il date de 2014 et les standards du web ont beaucoup évolué depuis. Une refonte soignée, avec un design moderne et agréable sur mobile, permettrait à votre hébergement de se présenter sous son meilleur jour et d'accueillir davantage de réservations directes. Et vous ne payez qu'une fois entièrement satisfait du résultat."
  },
  "Chez Paquerette - La Soufflerie": {
    p: 1, angle: 'bad_site',
    subject: 'Chez Pâquerette — sublimez votre hébergement avec un site à sa hauteur',
    hook: "Chez Pâquerette - La Soufflerie a déjà fait le bon choix d'avoir un site web. Pour que celui-ci reflète vraiment le charme et la qualité exceptionnelle de La Soufflerie, une refonte avec un design moderne et de belles photos pourrait transformer chaque visite en ligne en une véritable envie de réserver — sans rien payer avant d'être totalement satisfait du résultat."
  },
  'Rodrigues Cocovilla': {
    p: 1, angle: 'domain_waiting',
    subject: 'Rodrigues Cocovilla — votre nom de domaine est prêt, construisons votre site',
    hook: "Rodrigues Cocovilla a déjà fait le pas d'acquérir son propre nom de domaine — c'est une excellente décision. La prochaine étape naturelle serait de le faire vivre avec un site professionnel qui présente votre hébergement et invite les voyageurs à réserver directement chez vous. Nous pouvons vous livrer un site complet en 5 à 10 jours ouvrables, sans aucun paiement avant votre satisfaction totale."
  },
  'Oasis Nature Lodge': {
    p: 1, angle: 'wrong_template',
    subject: 'Oasis Nature Lodge — créons un site vraiment à votre image',
    hook: "Oasis Nature Lodge a son propre nom de domaine — c'est déjà un excellent point de départ. Pour aller encore plus loin, un site conçu spécialement pour votre lodge — avec un design qui reflète fidèlement son atmosphère et sa qualité — donnerait aux voyageurs une vraie envie de choisir Oasis Nature Lodge dès leur première visite en ligne."
  },
  "Chez Jenny's": {
    p: 1, angle: 'old_site',
    subject: "Chez Jenny's — modernisons votre site pour mieux séduire les voyageurs d'aujourd'hui",
    hook: "Le site de Chez Jenny's a du potentiel, et une modernisation lui permettrait de mieux refléter le charme de votre hébergement. Aujourd'hui, les voyageurs découvrent leur prochaine destination en quelques secondes sur leur téléphone — un site au goût du jour, avec de belles photos de Port Mathurin et de votre hébergement, ferait toute la différence pour les convaincre de réserver directement chez vous."
  },
  'Villa Zourit': {
    p: 1, angle: 'old_site_recent',
    subject: 'Villa Zourit — modernisons votre présence en ligne pour mieux vous démarquer',
    hook: "Le site de Villa Zourit a bien servi jusqu'ici, et une modernisation lui donnerait un beau second souffle. Photos haute qualité, navigation fluide sur mobile, réservation directe intégrée : une mise à jour soignée aiderait Villa Zourit à se démarquer et à accueillir encore plus de voyageurs qui cherchent un hébergement de qualité à Rodrigues."
  },
  'Mourouk Ebony Management': {
    p: 1, angle: 'needs_revamp',
    subject: 'Mourouk Ebony — modernisez votre site pour mieux refléter votre qualité',
    hook: "Mourouk Ebony bénéficie d'une belle réputation, et son site web pourrait encore mieux mettre en valeur la qualité de l'expérience que vous proposez. De belles photos, une navigation repensée et un moteur de réservation directe permettraient à votre établissement de se présenter sous son meilleur jour en ligne."
  },
  'Le Goeland': {
    p: 2, angle: 'very_low_presence',
    subject: 'Le Goéland — faisons connaître votre hébergement à plus de voyageurs',
    hook: "Le Goéland a certainement beaucoup à offrir à ses visiteurs. Pour partager cela avec des voyageurs du monde entier, un site web professionnel et une fiche Google bien configurée seraient une belle première étape — une façon simple et efficace de faire connaître votre hébergement à ceux qui planifient leur séjour à Rodrigues."
  },
  'Domaine Solitude': {
    p: 2, angle: 'very_low_presence',
    subject: 'Domaine Solitude — développons votre visibilité en ligne ensemble',
    hook: "Domaine Solitude mérite d'être découvert par bien plus de voyageurs. Aujourd'hui, la majorité des séjours se planifient depuis un smartphone — avoir un beau site web permettrait à votre hébergement d'apparaître là où vos futurs clients vous cherchent et de les accueillir en toute confiance."
  },
  'Le Diamant Bleu': {
    p: 2, angle: 'very_low_presence',
    subject: 'Le Diamant Bleu — une présence en ligne à la hauteur de ce beau nom',
    hook: "Le Diamant Bleu est un nom qui inspire déjà le voyage. Pour que des visiteurs du monde entier puissent vous découvrir facilement, un site web professionnel avec un design soigné serait une belle manière de développer votre clientèle et de faire briller votre hébergement en ligne."
  },
  'Green Papaya': {
    p: 2, angle: 'no_presence',
    subject: 'Green Papaya — ouvrons votre première fenêtre sur les voyageurs du monde',
    hook: "Green Papaya est un hébergement qui mérite d'être connu bien au-delà de Rodrigues. Un site web professionnel serait votre première vitrine sur le monde — un moyen simple de partager ce que vous avez à offrir et d'accueillir des voyageurs qui seraient ravis de vous découvrir."
  },
  'Residence Anse Aux Huitres': {
    p: 2, angle: 'no_presence',
    subject: 'Résidence Anse aux Huîtres — partageons ce cadre magnifique avec le monde',
    hook: "Résidence Anse aux Huîtres profite d'un cadre naturel exceptionnel dans l'un des endroits les plus préservés de Rodrigues. Un site web professionnel serait une belle façon de partager cette beauté avec des voyageurs du monde entier et de les inviter à venir séjourner chez vous — directement, sans commission de plateforme."
  },
  'Sea View Lodge': {
    p: 2, angle: 'not_on_google',
    subject: 'Sea View Lodge — facilitons votre découverte en ligne',
    hook: "Sea View Lodge a tout pour plaire à des visiteurs en quête d'un beau séjour à Rodrigues. Pour leur permettre de vous trouver facilement, quelques étapes simples — comme une fiche Google à jour et un site web soigné — peuvent faire une vraie différence. Nous serions ravis de vous accompagner à chaque étape, à votre rythme."
  },
  'Le Renouveau': {
    p: 2, angle: 'not_on_google',
    subject: 'Le Renouveau — faisons connaître votre hébergement sur Google',
    hook: "Le Renouveau a de belles choses à proposer à ses visiteurs. Pour que des voyageurs qui cherchent un hébergement dans votre région puissent vous découvrir facilement, une fiche Google bien configurée et un site web professionnel seraient un excellent point de départ — et nous serions heureux de vous y accompagner."
  },
  'La Retraite': {
    p: 2, angle: 'not_on_google',
    subject: 'La Retraite — faisons découvrir votre hébergement aux voyageurs en ligne',
    hook: "La Retraite est un hébergement qui pourrait séduire de nombreux voyageurs à la recherche d'un cadre calme et authentique à Rodrigues. Pour faciliter cette découverte en ligne, une présence sur Google Maps et un site web professionnel seraient un beau complément à votre offre actuelle — et nous serions heureux de vous aider à franchir ce pas."
  },
  'Gite Des Pesers': {
    p: 2, angle: 'not_on_google',
    subject: 'Gîte Des Pesers — aidons les voyageurs à vous trouver à Baie Du Nord',
    hook: "Gîte Des Pesers a tout pour attirer des voyageurs qui cherchent à découvrir Baie Du Nord et ses environs. Un premier pas simple — une fiche Google et un site web professionnel — permettrait à ces visiteurs de vous trouver facilement et de réserver directement chez vous. Nous pouvons vous accompagner à démarrer, étape par étape."
  },
  'La Tourelle': {
    p: 2, angle: 'not_on_google',
    subject: 'La Tourelle — permettons aux voyageurs de vous découvrir en ligne',
    hook: "La Tourelle est un hébergement qui mérite d'être mieux connu des voyageurs qui planifient un séjour à Rodrigues. Aujourd'hui, la plupart des touristes commencent leur recherche sur Google — un site web et une fiche Google bien configurée vous permettraient d'apparaître naturellement dans leurs résultats et de les accueillir chez vous."
  },
  'Mango Villa': {
    p: 2, angle: 'not_on_google',
    subject: 'Mango Villa — développons ensemble votre présence en ligne',
    hook: "Mango Villa a tout ce qu'il faut pour séduire des voyageurs à la recherche d'un hébergement de charme à Rodrigues. Pour leur permettre de vous découvrir facilement en ligne, créer votre présence numérique serait une belle opportunité de développer votre clientèle — et nous serions ravis de vous accompagner dans cette démarche."
  },
};

const results = reviewed.map(r => {
  const name = r['Accommodation Name'];
  const site = r['Website Discovered'];
  const quality = r['Website Quality (Good / Needs Revamp)'];
  const notes = r['My Personal Notes'];

  let best = null, bestScore = 0;
  for (const d of db) {
    const s = score(name, d.name);
    if (s > bestScore) { bestScore = s; best = d; }
  }

  const email = (best && bestScore >= 1) ? best.email : null;
  const phone = (best && bestScore >= 1) ? best.phone : null;
  const location = (best && bestScore >= 1) ? best.location : 'Rodrigues';

  const isSkip = SKIPS.includes(name);

  let wsStatus = 'none';
  if (site && site !== 'no website') {
    if (quality.toLowerCase().includes('good')) wsStatus = 'good';
    else if (quality.toLowerCase().includes('needs')) wsStatus = 'outdated';
    else if (quality === 'bad') wsStatus = 'bad';
    else wsStatus = 'outdated';
  }

  const custom = CUSTOM[name];
  const priority = isSkip ? 99 : (custom ? custom.p : 3);
  const angle = isSkip ? 'skip' : (custom ? custom.angle : 'generic');
  const emailSubject = isSkip ? '' : (custom ? custom.subject :
    `${name} — développons ensemble votre présence en ligne à Rodrigues`);
  const emailHook = isSkip ? '' : (custom ? custom.hook :
    `Nous avons découvert ${name} lors de nos recherches sur les hébergements de Rodrigues, et nous pensons qu'un site web professionnel pourrait vraiment vous aider à développer votre clientèle et à vous faire connaître auprès de voyageurs qui seraient ravis de vous découvrir. Avec la croissance du tourisme sur l'île, de plus en plus de visiteurs planifient leur séjour entièrement en ligne — et nous serions heureux de vous accompagner dans cette démarche, à votre rythme et sans aucun paiement avant votre totale satisfaction.`);

  return {
    name, email, phone, location,
    type: 'Accommodation',
    website_status: wsStatus,
    outreach_status: isSkip ? 'skipped' : 'pending',
    priority,
    notes,
    email_angle: angle,
    email_subject: emailSubject,
    email_hook: emailHook,
  };
});

writeFileSync('./public/rodrigues-accommodations.json', JSON.stringify(results, null, 2));
console.log('Written', results.length, 'businesses');
console.log('Skip:', results.filter(r => r.outreach_status === 'skipped').length);
console.log('Pending P1:', results.filter(r => r.priority === 1).length);
console.log('Pending P2:', results.filter(r => r.priority === 2).length);
console.log('Pending P3:', results.filter(r => r.priority === 3).length);
