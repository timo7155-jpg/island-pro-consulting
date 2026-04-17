const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'rodrigues_utf8.txt');
const outputFile = path.join(__dirname, 'public', 'rodrigues-accommodations.json');

const text = fs.readFileSync(inputFile, 'utf8');
const rawLines = text.split('\n');

// Section header detection
const SECTION_HEADERS = {
  'HOTELS': 'Hotel',
  'TOURIST RESIDENCES': 'Tourist Residence',
  "CHAMBRE D'HOTES": "Chambre D'Hôtes",
  'GITES': 'Gite',
  'GUEST HOUSES': 'Guest House',
};

let currentSection = '';
const entries = [];
let current = null;

// Phase 1: group lines into entry objects
for (let i = 0; i < rawLines.length; i++) {
  const line = rawLines[i];
  const trimmed = line.trim();

  // Skip blank lines (but continuation logic happens after)
  if (!trimmed) continue;

  // Detect section header
  const upperTrimmed = trimmed.toUpperCase().replace(/[''']/g, "'");
  const sectionMatch = Object.keys(SECTION_HEADERS).find(k => upperTrimmed === k);
  if (sectionMatch) {
    currentSection = SECTION_HEADERS[sectionMatch];
    continue;
  }

  // Skip title/header lines
  if (trimmed.startsWith('LIST OF') || trimmed.startsWith('SN ') || trimmed.startsWith('CASE OF') ||
      trimmed.startsWith('NAME') || trimmed.startsWith('LICENCE') || trimmed === 'NAME') continue;

  // New numbered entry: line starts with digits followed by 2+ spaces
  const snMatch = line.match(/^(\d+)\s{2,}(.*)/);
  if (snMatch) {
    if (current) entries.push(current);
    current = {
      sn: parseInt(snMatch[1]),
      section: currentSection,
      mainLine: snMatch[2].trim(),
      continuations: [],
    };
    continue;
  }

  // Continuation: line starts with spaces (indented)
  if (current && line.match(/^\s{2,}/)) {
    current.continuations.push(trimmed);
  }
}
if (current) entries.push(current);

// Phase 2: parse each entry's main line into fields
function parseFields(line) {
  // Split by 2 or more spaces
  return line.split(/\s{2,}/).map(f => f.trim()).filter(f => f && f !== 'ISSUED ON 22 DEC 2025');
}

function cleanIssued(str) {
  return str.replace(/\s*ISSUED ON\s+\d+\s+\w+\s+\d+\s*$/i, '').trim();
}

const result = [];

for (const entry of entries) {
  const fields = parseFields(entry.mainLine);

  // Fields order from table: applicant, tradeName, address, type, contact, email
  // But sometimes entries have fewer (missing email, or merged fields)

  let applicant = '';
  let tradeName = '';
  let address = '';
  let type = '';
  let contact = '';
  let email = '';

  if (fields.length >= 6) {
    applicant = fields[0];
    tradeName = fields[1];
    address = fields[2];
    type = fields[3];
    contact = cleanIssued(fields[4]);
    email = cleanIssued(fields[5]);
    // Sometimes there's an extra "ISSUED ON..." field at end
  } else if (fields.length === 5) {
    applicant = fields[0];
    tradeName = fields[1];
    address = fields[2];
    type = fields[3];
    // Check if last field is email or contact
    const last = cleanIssued(fields[4]);
    if (last.includes('@')) {
      email = last;
    } else {
      contact = last;
    }
  } else if (fields.length === 4) {
    applicant = fields[0];
    tradeName = fields[1];
    address = fields[2];
    const last = cleanIssued(fields[3]);
    if (last.includes('@')) {
      email = last;
    } else if (last.match(/Tourist Residence|Hotel|Guest House|Gite|Chambre/i)) {
      type = last;
    } else {
      contact = last;
    }
  } else if (fields.length === 3) {
    applicant = fields[0];
    tradeName = fields[1];
    address = fields[2];
  } else if (fields.length >= 1) {
    applicant = fields[0];
    tradeName = fields[1] || '';
  }

  // Fall back type to section
  if (!type) type = entry.section;

  // Normalize type typo and encoding issues
  type = type.replace(/Toursit/g, 'Tourist').replace(/D'Hotes/g, "D'Hôtes").trim();

  // If type doesn't look like a valid accommodation type, field-shift happened
  const validTypes = ['Hotel', 'Tourist Residence', "Chambre D'Hôtes", 'Gite', 'Guest House'];
  if (!validTypes.some(vt => type.startsWith(vt))) {
    // Fields shifted - type got the contact column value; use section fallback
    type = entry.section;
    // Reassign fields: in this case address was probably tradeName, etc.
    // Best effort: keep what we have but fix type
  }

  // Remove junk from email
  email = email.replace(/ISSUED ON.*/i, '').trim();

  // Check continuations for additional email or trade name extension
  for (const cont of entry.continuations) {
    // "Rep by X   TradeName" lines — extract trade name continuation from second column
    if (/^rep by/i.test(cont)) {
      const repFields = parseFields(cont);
      // repFields[0] = "Rep by X", repFields[1] might be trade name continuation
      if (repFields.length >= 2) {
        const second = repFields[1];
        if (second && !second.includes('@') && !second.match(/^\d/) &&
            !second.match(/ISSUED/i) && second.length < 50) {
          // Append to trade name if it's a text continuation
          tradeName = (tradeName + ' ' + second).trim();
        }
      }
      continue;
    }
    if (/^ISSUED ON/i.test(cont)) continue;

    const contFields = parseFields(cont);

    // If continuation has email and we don't have one
    if (!email) {
      const emailField = contFields.find(f => f.includes('@'));
      if (emailField) email = cleanIssued(emailField);
    }

    // If continuation has extra email (second email on a row below)
    if (!email) {
      const emailField = cont.match(/[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}/);
      if (emailField) email = emailField[0];
    }

    // If trade name is short and continuation looks like trade name extension
    // (no @, no digits, no "Rep by")
    if (tradeName && !cont.includes('@') && !cont.match(/\d{5,}/) &&
        !cont.match(/^(rep|issued)/i) && contFields.length === 1 && cont.length < 40) {
      tradeName = tradeName + ' ' + cont;
    }

    // Contact continuation
    if (!contact && cont.match(/^\d/) && !cont.includes('@')) {
      contact = cont.split(/\s{2,}/)[0];
    }
  }

  // Additional email extraction from continuation lines (look for raw email in any line)
  if (!email) {
    for (const cont of entry.continuations) {
      const m = cont.match(/[\w._%+\-]+@[\w.\-]+\.[a-zA-Z]{2,}/);
      if (m) { email = m[0]; break; }
    }
  }

  // Clean up
  tradeName = tradeName.trim();
  applicant = applicant.replace(/,$/, '').trim();
  contact = contact.replace(/\s*ISSUED ON.*/i, '').trim();
  email = email.toLowerCase().trim();

  // Determine priority and websiteStatus
  const priority = email ? 'high' : 'low';

  result.push({
    name:            tradeName || applicant,
    email:           email || null,
    phone:           contact || null,
    location:        address || null,
    type,
    website_status:  'unknown',
    outreach_status: 'pending',
    priority,
    notes:           '',
  });
}

// ─── Manual corrections for PDF rendering artifacts ───────────────────────────
// These entries have overlapping text layers in the PDF that pdftotext merges.
// Verified against the original document.
const MANUAL_FIXES = [
  // Tourist Residence #26 – applicant name garbled ("VCAhrLisEtNinCe É...")
  { match: e => e.name === 'Lacaze TiMay' && e.email === 'lacazetimay@gmail.com',
    fix:   e => ({ ...e, name: 'Lacaze TiMay' }) },  // name correct, nothing to fix

  // Tourist Residence #73 – address garbled ("PAollrete MTaatmhaurriinn")
  { match: e => e.name === 'Residence Bethel' && e.email === 'augustinvirginie4@gmail.com',
    fix:   e => ({ ...e, location: 'Port Mathurin' }) },

  // Guest House #20 – applicant+tradeName merged, "Coromandel" becomes name
  { match: e => (e.email || '').includes('bruno.collard@autempsdantan') && (e.name === 'Coromandel' || !e.name),
    fix:   e => ({ ...e, name: 'Au Temps D\'Antan', email: 'bruno.collard@autempsdantan.mu', location: 'Coromandel', type: 'Guest House' }) },

  // Tourist Residence #69 – contact column garbled (phone unreadable from PDF)
  { match: e => e.name === 'Mont Des Oliviers' && e.email === 'mtdesoli2510@gmail.com',
    fix:   e => ({ ...e, phone: null }) },  // phone was garbled, clear it

  // Tourist Residence #26 applicant fix
  { match: e => e.name === 'Lacaze TiMay' && e.location === 'Barclays St,Port Mathurin',
    fix:   e => ({ ...e, location: 'Port Mathurin' }) },
];

for (const entry of result) {
  for (const { match, fix } of MANUAL_FIXES) {
    if (match(entry)) {
      const patched = fix(entry);
      Object.assign(entry, patched);
    }
  }
}

// Deduplicate by name (some entries might repeat)
const seen = new Set();
const deduplicated = result.filter(r => {
  const key = r.name.toLowerCase().trim();
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

fs.writeFileSync(outputFile, JSON.stringify(deduplicated, null, 2));
console.log(`✅ Parsed ${deduplicated.length} accommodations`);
console.log(`   - With email: ${deduplicated.filter(r => r.email).length}`);
console.log(`   - Without email: ${deduplicated.filter(r => !r.email).length}`);

// Summary by type
const byType = {};
for (const r of deduplicated) {
  byType[r.type] = (byType[r.type] || 0) + 1;
}
console.log('\nBy type:');
for (const [t, c] of Object.entries(byType)) {
  console.log(`   ${t}: ${c}`);
}

// Show first 5 entries
console.log('\nFirst 5 entries:');
deduplicated.slice(0, 5).forEach(e => {
  console.log(`  [${e.type}] ${e.name} | ${e.address} | ${e.email}`);
});
