#!/usr/bin/env node
/**
 * Walks FR keys (source of truth) and verifies every other locale has the same set.
 * Logs missing/extra keys; non-zero exit if mismatch.
 */
import fs from 'node:fs';
import path from 'node:path';

const LOCALES_DIR = path.resolve('src/i18n/locales');
const LANGS = ['fr', 'en', 'es', 'de', 'it', 'ru'];

function flatten(obj, prefix = '') {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      Object.assign(out, flatten(v, key));
    } else {
      out[key] = v;
    }
  }
  return out;
}

const data = Object.fromEntries(
  LANGS.map((l) => [l, flatten(JSON.parse(fs.readFileSync(path.join(LOCALES_DIR, `${l}.json`), 'utf8')))]),
);

const fr = new Set(Object.keys(data.fr));
let hasErr = false;

for (const lang of LANGS) {
  if (lang === 'fr') continue;
  const cur = new Set(Object.keys(data[lang]));
  const missing = [...fr].filter((k) => !cur.has(k));
  const extra = [...cur].filter((k) => !fr.has(k));
  if (missing.length || extra.length) {
    hasErr = true;
    console.log(`\n[${lang}] missing: ${missing.length}, extra: ${extra.length}`);
    if (missing.length) console.log('  missing:', missing.slice(0, 20).join(', ') + (missing.length > 20 ? '…' : ''));
    if (extra.length) console.log('  extra:  ', extra.slice(0, 20).join(', ') + (extra.length > 20 ? '…' : ''));
  } else {
    console.log(`[${lang}] ✓ ${cur.size} keys in sync`);
  }
}

process.exit(hasErr ? 1 : 0);
