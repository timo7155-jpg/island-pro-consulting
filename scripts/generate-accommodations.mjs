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
    subject: 'Zi Limon — note 5⭐ Google, prochaine étape : votre site web',
    hook: "Zi Limon affiche une note parfaite de 5/5 sur Google Place — l'un des meilleurs scores de toute l'île de Rodrigues. Pourtant, un voyageur qui vous cherche en ligne ne trouve aucun site web pour admirer votre hébergement et réserver en toute confiance. Avec l'extension prochaine de l'aéroport de Rodrigues, des centaines de nouveaux visiteurs arriveront — et ils commencent toujours par rechercher en ligne."
  },
  'Fenetre Sur Mer': {
    p: 1, angle: 'top_rating',
    subject: 'Fenêtre Sur Mer — 4.9⭐ sur Google, construisons votre vitrine en ligne',
    hook: "Fenêtre Sur Mer affiche 4.9/5 sur Google Place — parmi les meilleures notes de tout Rodrigues. Vos clients vous adorent, mais combien de voyageurs potentiels passent à côté, faute de site web ? Sans présence en ligne, chaque semaine représente des réservations directes perdues au profit de plateformes qui prélèvent jusqu'à 25% de commission."
  },
  'Happy Destination': {
    p: 1, angle: 'facebook_active',
    subject: 'Happy Destination — transformez vos 4.7⭐ Facebook en réservations directes',
    hook: "Happy Destination bénéficie d'une belle note de 4.7/5 sur Facebook — la preuve que vous offrez une expérience de qualité. Mais 78% des voyageurs cherchent un site web avant de confirmer leur réservation. Sans site, vous perdez chaque semaine des clients au profit de concurrents qui ont déjà fait ce pas."
  },
  'Residence Les Succulents': {
    p: 1, angle: 'facebook_good',
    subject: 'Résidence Les Succulents — une belle réputation qui mérite une présence en ligne',
    hook: "Résidence Les Succulents jouit d'une bonne réputation sur Facebook, signe d'un accueil de qualité. Pourtant, votre visibilité en dehors de Facebook reste très limitée : pas de site web, peu de présence sur Google. Un visiteur qui vous cherche sur internet passe souvent à côté. Un site professionnel changerait radicalement la donne."
  },
  'Les Hirondelles Tourist Residence': {
    p: 1, angle: 'good_rating',
    subject: 'Les Hirondelles Tourist Residence — 4⭐ Google et des réservations directes',
    hook: "Les Hirondelles Tourist Residence est bien noté sur Google avec 4/5 — vos clients apprécient ce que vous faites. Imaginez si ces voyageurs pouvaient atterrir sur un beau site web, voir vos chambres, découvrir la vue et réserver directement chez vous, sans intermédiaire ni commission."
  },
  'Auberge Anse Aux Anglais': {
    p: 1, angle: 'google_rated',
    subject: 'Auberge Anse Aux Anglais — construisons votre présence en ligne ensemble',
    hook: "Auberge Anse Aux Anglais est présente sur Google Place avec une note de 3.5/5 — une base solide. Une présence en ligne complète avec un site web professionnel, de meilleures photos et un référencement optimisé vous permettrait d'attirer plus de clients et de renforcer considérablement votre image."
  },
  'Le Dahlia': {
    p: 1, angle: 'old_site_2014',
    subject: 'Le Dahlia — votre site de 2014 vous coûte des réservations chaque jour',
    hook: "Nous avons visité le site de Le Dahlia — il date de 2014 et est hébergé sur une plateforme gratuite. En 2026, cela peut sérieusement nuire à votre image : les voyageurs s'attendent à trouver un site moderne, attrayant et facile à utiliser sur mobile. Un site professionnel peut être livré en 5 à 10 jours ouvrables, et vous ne payez qu'une fois entièrement satisfait."
  },
  "Chez Paquerette - La Soufflerie": {
    p: 1, angle: 'bad_site',
    subject: 'Chez Pâquerette — votre site mérite une transformation à la hauteur de votre hébergement',
    hook: "Chez Pâquerette - La Soufflerie a un site WordPress, mais son apparence actuelle ne reflète pas vraiment la qualité de votre hébergement et de ce site exceptionnel. Vous méritez un site moderne qui donne envie, met en valeur La Soufflerie et convertit les visiteurs en clients — sans payer quoi que ce soit avant d'être totalement satisfait."
  },
  'Rodrigues Cocovilla': {
    p: 1, angle: 'domain_waiting',
    subject: 'Rodrigues Cocovilla — votre nom de domaine vous attend, construisons votre site',
    hook: "Rodrigues Cocovilla a déjà acquis son nom de domaine — une excellente décision. Il ne manque plus que le site lui-même pour commencer à générer des réservations directes dès aujourd'hui. Nous pouvons livrer un site professionnel complet en 5 à 10 jours ouvrables, sans aucun paiement avant votre satisfaction totale."
  },
  'Oasis Nature Lodge': {
    p: 1, angle: 'wrong_template',
    subject: 'Oasis Nature Lodge — votre domaine mérite un vrai site à votre image',
    hook: "Oasis Nature Lodge possède un nom de domaine, mais le site actuel utilise un modèle WordPress générique sans rapport avec votre hébergement. Les voyageurs qui vous découvrent en ligne repartent déçus. Transformons ce domaine en une vraie vitrine professionnelle qui représente fidèlement la qualité d'Oasis Nature Lodge."
  },
  "Chez Jenny's": {
    p: 1, angle: 'old_site',
    subject: "Chez Jenny's — un nouveau site pour capter les voyageurs d'aujourd'hui",
    hook: "Le site actuel de Chez Jenny's montre son âge, et les voyageurs d'aujourd'hui jugent un hébergement en quelques secondes sur son site web. Une refonte moderne avec de belles photos de Port Mathurin et de votre hébergement vous permettrait d'attirer une nouvelle clientèle qui réserve directement chez vous."
  },
  'Villa Zourit': {
    p: 1, angle: 'old_site_recent',
    subject: 'Villa Zourit — modernisons votre présence en ligne pour 2026',
    hook: "Le site de Villa Zourit date de 2019 — déjà trop vieux pour les standards actuels. Photos haute qualité, navigation mobile fluide, réservation directe intégrée : une refonte complète vous donnerait un vrai avantage face à vos concurrents, au moment même où le tourisme à Rodrigues va s'accélérer avec l'extension de l'aéroport."
  },
  'Mourouk Ebony Management': {
    p: 1, angle: 'needs_revamp',
    subject: 'Mourouk Ebony — modernisez votre site pour plus de réservations directes',
    hook: "Mourouk Ebony bénéficie d'une belle réputation, mais son site actuel pourrait mieux refléter la qualité de l'expérience que vous proposez. Meilleures photos, navigation repensée, moteur de réservation directe : une modernisation ciblée vous donnerait un avantage concurrentiel significatif en ligne."
  },
  'Le Goeland': {
    p: 2, angle: 'very_low_presence',
    subject: 'Le Goéland — construisons votre visibilité en ligne ensemble',
    hook: "Le Goéland dispose actuellement d'une très faible présence en ligne, ce qui signifie que des voyageurs qui vous chercheraient ne vous trouvent pas et réservent ailleurs. Un site professionnel et une fiche Google bien configurée pourraient significativement augmenter votre visibilité et votre taux d'occupation."
  },
  'Domaine Solitude': {
    p: 2, angle: 'very_low_presence',
    subject: 'Domaine Solitude — soyez visible là où vos futurs clients vous cherchent',
    hook: "Domaine Solitude n'est pas encore bien visible en ligne. À l'heure où la majorité des réservations se planifient depuis un smartphone, ne pas avoir de site web signifie rater une grande partie du marché — surtout avec la croissance rapide du tourisme à Rodrigues et l'extension de l'aéroport en cours."
  },
  'Le Diamant Bleu': {
    p: 2, angle: 'very_low_presence',
    subject: 'Le Diamant Bleu — une présence en ligne digne de ce beau nom',
    hook: "Le Diamant Bleu mérite une présence en ligne à la hauteur de son nom. Actuellement, très peu de voyageurs peuvent vous trouver sur internet. Un site professionnel avec un design élégant vous donnerait la visibilité que votre hébergement mérite vraiment."
  },
  'Green Papaya': {
    p: 2, angle: 'no_presence',
    subject: 'Green Papaya — votre première fenêtre sur les voyageurs du monde entier',
    hook: "Green Papaya n'a pour l'instant aucune présence en ligne visible. Dans un secteur où la grande majorité des réservations se font via internet, cela représente un frein important à votre croissance. Un site web professionnel serait votre premier outil pour capter des voyageurs qui ne vous connaissent pas encore."
  },
  'Residence Anse Aux Huitres': {
    p: 2, angle: 'no_presence',
    subject: 'Résidence Anse aux Huîtres — mettez ce cadre magnifique à la portée du monde',
    hook: "Résidence Anse aux Huîtres n'est pas encore visible sur internet. Anse aux Huîtres est l'un des endroits les plus préservés de Rodrigues — un site web permettrait de partager cette beauté avec des voyageurs du monde entier et de les inviter à réserver directement chez vous, sans commission de plateforme."
  },
  'Sea View Lodge': {
    p: 2, angle: 'not_on_google',
    subject: 'Sea View Lodge — commencez par être trouvé en ligne',
    hook: "Sea View Lodge n'est pas encore référencé sur Google Place et les informations disponibles en ligne ne sont pas à jour. Avant même de parler de site web, des étapes simples peuvent changer votre visibilité immédiatement — et nous pouvons vous accompagner à chaque étape, à votre rythme."
  },
  'Le Renouveau': {
    p: 2, angle: 'not_on_google',
    subject: 'Le Renouveau — des voyageurs vous cherchent sur Google et ne vous trouvent pas',
    hook: "Le Renouveau n'apparaît pas encore sur Google Maps ni Google Place. Chaque mois, des dizaines de visiteurs cherchent un hébergement dans votre zone — et sans fiche Google ni site web, vous êtes invisible pour eux. C'est une opportunité simple à saisir, et nous pouvons vous aider dès aujourd'hui."
  },
  'La Retraite': {
    p: 2, angle: 'not_on_google',
    subject: "La Retraite — soyez visible sur Google avant l'arrivée des prochains touristes",
    hook: "La Retraite n'est pas encore référencée sur Google Place, ce qui vous rend invisible pour la majorité des voyageurs qui planifient leur séjour à Rodrigues depuis internet. Avec l'extension de l'aéroport, le flux de touristes va augmenter. C'est le bon moment pour créer votre présence en ligne."
  },
  'Gite Des Pesers': {
    p: 2, angle: 'not_on_google',
    subject: "Gîte Des Pesers — créez votre présence en ligne et attirez plus de visiteurs",
    hook: "Gîte Des Pesers n'est pas encore référencé sur Google Place. Des voyageurs cherchent chaque mois un hébergement à Baie Du Nord — sans fiche Google ni site web, vous passez à côté de ces opportunités. Nous pouvons vous aider à démarrer, étape par étape."
  },
  'La Tourelle': {
    p: 2, angle: 'not_on_google',
    subject: "La Tourelle — soyez trouvé par les voyageurs qui cherchent à Rodrigues",
    hook: "La Tourelle n'apparaît pas encore sur Google Maps. Dans un secteur où les touristes planifient tout depuis leur téléphone, être absent de Google signifie rater une grande partie des réservations potentielles. Un site web et une fiche Google peuvent changer cela rapidement."
  },
  'Mango Villa': {
    p: 2, angle: 'not_on_google',
    subject: "Mango Villa — créez votre première présence en ligne dès maintenant",
    hook: "Mango Villa n'est pas encore visible sur Google Place ni sur internet. Avec l'extension de l'aéroport de Rodrigues et la croissance du tourisme sur l'île, c'est exactement le bon moment pour créer votre présence numérique et commencer à capter des réservations directes."
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
    `${name} — un site web professionnel pour développer votre activité à Rodrigues`);
  const emailHook = isSkip ? '' : (custom ? custom.hook :
    `${name} n'a pas encore de site web, ce qui limite votre visibilité auprès des voyageurs qui planifient leur séjour en ligne. Avec l'extension prochaine de l'aéroport de Rodrigues et la croissance du tourisme sur l'île, c'est maintenant le moment idéal pour créer votre présence numérique et commencer à générer des réservations directes, sans commission.`);

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
