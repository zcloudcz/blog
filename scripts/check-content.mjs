#!/usr/bin/env node
// Validates blog content before build: every post exists in cs and en, has the required
// front matter, and no file contains the em dash (house style rule).
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const postsDir = join(root, "content", "posts");
const LANGS = ["cs", "en"];
const REQUIRED = ["title", "date", "description", "tags", "image"];
const EM_DASH = "\u2014";
const errors = [];

function frontMatter(text, file) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) { errors.push(`${file}: missing YAML front matter`); return {}; }
  const fm = {};
  let key = null;
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (kv) { key = kv[1]; fm[key] = kv[2].replace(/^["']|["']$/g, ""); continue; }
    if (key && /^\s+-\s+/.test(line)) fm[key] = (fm[key] ? fm[key] + "," : "") + line.replace(/^\s+-\s+/, "");
  }
  return fm;
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out); else out.push(p);
  }
  return out;
}

for (const slug of readdirSync(postsDir)) {
  const dir = join(postsDir, slug);
  if (!statSync(dir).isDirectory()) continue;
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) errors.push(`${slug}: folder name must be lowercase kebab-case`);
  const fms = {};
  for (const lang of LANGS) {
    const file = join(dir, `index.${lang}.md`);
    if (!existsSync(file)) { errors.push(`${slug}: missing index.${lang}.md (every post must be bilingual)`); continue; }
    const fm = frontMatter(readFileSync(file, "utf8"), `${slug}/index.${lang}.md`);
    for (const k of REQUIRED) if (!fm[k] || fm[k] === "[]") errors.push(`${slug}/index.${lang}.md: missing "${k}"`);
    if (fm.description && fm.description.length > 170) errors.push(`${slug}/index.${lang}.md: description over 170 chars`);
    fms[lang] = fm;
  }
  const cover = join(dir, "cover.png");
  if (!existsSync(cover)) errors.push(`${slug}: missing cover.png (run: node tools/cover/make-cover.mjs ${slug})`);
  else {
    const b = readFileSync(cover);
    const w = b.readUInt32BE(16), h = b.readUInt32BE(20);
    if (w !== 1200 || h !== 630) errors.push(`${slug}/cover.png must be 1200x630 (is ${w}x${h})`);
  }
  if (fms.cs && fms.en) {
    if (fms.cs.date !== fms.en.date) errors.push(`${slug}: cs and en must share the same date`);
    if ((fms.cs.draft === "true") !== (fms.en.draft === "true")) errors.push(`${slug}: draft flag differs between cs and en`);
  }
}

for (const sub of ["content", "i18n", "layouts", "editorial"]) {
  const d = join(root, sub);
  if (!existsSync(d)) continue;
  for (const f of walk(d)) {
    if (readFileSync(f, "utf8").includes(EM_DASH)) errors.push(`${f.slice(root.length)}: contains an em dash (U+2014), use comma, colon or period`);
  }
}

if (errors.length) {
  console.error(`Content check failed (${errors.length}):\n- ` + errors.join("\n- "));
  process.exit(1);
}
console.log("Content check OK");
