#!/usr/bin/env node
// Generates a 1200x630 cover image (cover.png) for every post bundle that lacks one.
// The same file is used as the in-page hero, the list thumbnail and og:image.
// Usage: node tools/cover/make-cover.mjs [--force] [slug ...]
// Optional front matter in index.cs.md: icon (lucide name), icons (2 extra), palette (see PALETTES).
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..");
const postsDir = join(root, "content", "posts");
const iconDir = join(here, "node_modules", "lucide-static", "icons");
const W = 1200, H = 630;

// Light pastel backgrounds with one saturated accent each. Teal is the zcloud.cz brand.
const PALETTES = {
  teal:   { bg1: "#eef8f7", bg2: "#d9efec", blob: ["#9fd8d0", "#c6ebe6", "#7cc6bd"], ink: "#0b5d68" },
  indigo: { bg1: "#f1f2fd", bg2: "#e0e3fa", blob: ["#b9c0f3", "#d7dbf8", "#9ea8ee"], ink: "#3b3f9e" },
  amber:  { bg1: "#fff8ec", bg2: "#fdebc9", blob: ["#f8d08a", "#fbe2b3", "#f3b95c"], ink: "#9a5a05" },
  violet: { bg1: "#f7f1fd", bg2: "#ebdffa", blob: ["#d2b8f3", "#e6d7f8", "#bb97ec"], ink: "#5e2c9e" },
  sky:    { bg1: "#eef7fd", bg2: "#d8edfa", blob: ["#9fd0f2", "#c5e3f7", "#78bdec"], ink: "#105f93" },
  rose:   { bg1: "#fdf1f3", bg2: "#fadce2", blob: ["#f2b2bf", "#f8d2da", "#ea8fa2"], ink: "#9b2c45" },
  green:  { bg1: "#f0f9f1", bg2: "#d9f0dc", blob: ["#a8dcb0", "#cbead0", "#82cb8e"], ink: "#23733a" },
};
// First matching tag decides palette and default icons.
const TAG_STYLE = [
  ["ai-security", "indigo", ["shield-check", "lock-keyhole", "bot"]],
  ["agentwall", "indigo", ["shield-check", "lock-keyhole", "bot"]],
  ["code-review", "amber", ["git-pull-request-arrow", "bug", "bot"]],
  ["costs", "amber", ["coins", "brain-circuit", "bot"]],
  ["dotnet", "violet", ["code-xml", "workflow", "sparkles"]],
  ["privacy", "sky", ["file-stack", "lock-keyhole", "globe"]],
  ["github-pages", "green", ["globe", "workflow", "bot"]],
  ["future-of-work", "rose", ["users", "brain-circuit", "sparkles"]],
  ["ai-agents", "teal", ["bot", "workflow", "sparkles"]],
];

function frontMatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  const fm = { tags: [] };
  if (!m) return fm;
  let key = null;
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (kv) { key = kv[1]; const v = kv[2].replace(/^["']|["']$/g, ""); if (v) fm[key] = v; continue; }
    const li = line.match(/^\s+-\s+(.*)$/);
    if (li && key) (fm[key] = Array.isArray(fm[key]) ? fm[key] : []).push(li[1].trim());
  }
  return fm;
}

// Small deterministic PRNG so the same slug always renders the same picture.
function rng(seed) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507), h = Math.imul(h ^ (h >>> 13), 3266489909), (h ^= h >>> 16) >>> 0) / 4294967296);
}

function iconInner(name) {
  const file = join(iconDir, `${name}.svg`);
  if (!existsSync(file)) throw new Error(`Unknown lucide icon "${name}"`);
  const svg = readFileSync(file, "utf8");
  return svg.slice(svg.indexOf(">", svg.indexOf("<svg")) + 1, svg.lastIndexOf("</svg>"));
}

function card(x, y, size, icon, ink, strokeW) {
  const scale = (size * 0.56) / 24, off = size * 0.22;
  return `
  <g filter="url(#shadow)"><rect x="${x}" y="${y}" width="${size}" height="${size}" rx="${size * 0.22}" fill="#ffffff"/></g>
  <g transform="translate(${x + off} ${y + off}) scale(${scale})" fill="none" stroke="${ink}" stroke-width="${strokeW / scale}" stroke-linecap="round" stroke-linejoin="round">${iconInner(icon)}</g>`;
}

function render(slug, fm) {
  const tags = fm.tags || [];
  const style = TAG_STYLE.find(([t]) => tags.includes(t)) || TAG_STYLE[TAG_STYLE.length - 1];
  const p = PALETTES[fm.palette] || PALETTES[style[1]];
  const icons = [fm.icon || style[2][0], ...((fm.icons && [].concat(fm.icons)) || style[2].slice(1))];
  const r = rng(slug);
  const blobs = p.blob.map((c, i) => {
    const cx = 120 + r() * 960, cy = 60 + r() * 510, rad = 150 + r() * 170;
    return `<circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="${rad.toFixed(0)}" fill="${c}" opacity="${(0.55 + i * 0.1).toFixed(2)}" filter="url(#blur)"/>`;
  }).join("");
  const logo = readFileSync(join(root, "static", "logo.png")).toString("base64");
  // Main card right of centre, two satellites around it; jitter keeps covers from looking identical.
  const mx = 470 + r() * 120, my = 150 + r() * 40;
  const s1 = [mx - 250 - r() * 50, my + 170 + r() * 50], s2 = [mx + 370 + r() * 60, my - 60 + r() * 60];
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p.bg1}"/><stop offset="1" stop-color="${p.bg2}"/></linearGradient>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.6" fill="${p.ink}" opacity="0.10"/></pattern>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="60"/></filter>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="${p.ink}" flood-opacity="0.18"/></filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${blobs}
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  ${card(s1[0], s1[1], 150, icons[1], p.ink, 3.6)}
  ${card(s2[0], s2[1], 130, icons[2], p.ink, 3.4)}
  ${card(mx, my, 300, icons[0], p.ink, 5.5)}
  <g transform="translate(978 486)">
    <rect width="150" height="72" rx="20" fill="#003840"/>
    <image x="24" y="12" width="102" height="48" preserveAspectRatio="xMidYMid meet" xlink:href="data:image/png;base64,${logo}"/>
  </g>
</svg>`;
}

const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));
for (const slug of readdirSync(postsDir)) {
  const dir = join(postsDir, slug);
  const src = join(dir, "index.cs.md");
  if (!existsSync(src) || (only.length && !only.includes(slug))) continue;
  const out = join(dir, "cover.png");
  if (existsSync(out) && !force) continue;
  const svg = render(slug, frontMatter(readFileSync(src, "utf8")));
  const png = new Resvg(svg, { fitTo: { mode: "width", value: W } }).render().asPng();
  writeFileSync(out, png);
  console.log(`cover: ${slug}/cover.png (${(png.length / 1024).toFixed(0)} KB)`);
}
