# blog.zcloud.cz

Bilingual (cs/en) blog by Martin Zahálka, zcloud.cz. Static site: Hugo + Pagefind search, hosted on GitHub Pages.

## Stack

- **Hugo** (extended, version pinned in `.github/workflows/deploy.yml`), custom minimal layouts in `layouts/`, no theme dependency.
- **Pagefind** builds a static search index after Hugo (`/hledat/`, `/en/search/`), one index per language.
- **GitHub Actions** builds every PR (content check + build) and deploys `main` to Pages. A daily scheduled run (05:00 UTC) publishes posts whose date has arrived.

## URLs

- Czech (default): `/`, posts `/posts/<slug>/`, tags `/tags/<tag>/`, search `/hledat/`, RSS `/index.xml`
- English: `/en/`, posts `/en/posts/<slug>/`, search `/en/search/`, RSS `/en/index.xml`
- Pagination: `/page/2/`, 10 posts per page (`hugo.toml`, `pagination.pagerSize`).

## Writing a post

Every post is a page bundle with both languages, same folder name (slug in English, kebab-case):

```
content/posts/<slug>/
  index.cs.md
  index.en.md
  cover.png        # required, 1200x630: page hero, list thumbnail and og:image
```

Front matter (both files, same `date`):

```yaml
---
title: "..."
date: 2026-11-12T08:00:00+01:00
description: "One or two sentences, max 170 chars. Used in lists, search and og:description."
tags:
  - ai-agents
  - dotnet
image: cover.png
icon: bug            # optional lucide icon name for the generated cover (lucide.dev/icons)
icons: [git-pull-request-arrow, bot]   # optional two side icons
# draft: true        # optional, never published
---
```

Rules (enforced by `node scripts/check-content.mjs` in CI):

- both `index.cs.md` and `index.en.md` exist, same `date`, same `draft` flag
- `title`, `date`, `description`, `tags` present, description max 170 chars
- no em dash (U+2014) anywhere: use comma, colon or period

A future `date` = scheduled post: merged now, published by the daily build on that day.

Editorial workflow for the AI agent (topics, approval, LinkedIn): see `editorial/WRITING-GUIDE.md`, `editorial/backlog.md` and `editorial/linkedin-plan.md`.

## GEO a SEO (povinné)

Blog musí být čitelný pro vyhledávače i AI asistenty (ChatGPT, Claude, Perplexity, Google AI). Tyto věci se nesmí rozbít, kontroluj je po každé změně šablon:

- `<html lang>` podle jazyka (`cs-CZ`, `en-US`), viz `layouts/baseof.html`.
- Každá stránka má `<meta name="description">` (popis článku, jinak shrnutí, jinak `params.description` jazyka) a `<link rel="canonical">`, viz `layouts/_partials/head.html`.
- JSON-LD v `layouts/_partials/jsonld.html`: úvodní stránka `WebSite` + `Blog` + `Person` (Martin Zahálka) + `Organization` (ZCLOUD, https://zcloud.cz/, IČO 07783809, Boskovice, CZ); článek `BlogPosting` (headline, datePublished, dateModified, author, publisher, inLanguage, url, description). Skládej jen přes `dict` + `jsonify`, nikdy ručně psaný JSON.
- `llms.txt` generuje Hugo pro každý jazyk (`/llms.txt`, `/en/llms.txt`, šablona `layouts/home.llms.txt`, výstupní formát `llms` v `hugo.toml`). Obsahuje název, shrnutí blogu a seznam všech článků s odkazem a popisem. Nový článek se tam objeví sám, stačí vyplněný `description`.
- `robots.txt` (`layouts/robots.txt`) odkazuje na `sitemap.xml` a nesmí blokovat AI crawlery (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended).
- Žádná dlouhá pomlčka (U+2014) v šablonách ani ve vygenerovaném HTML, XML a TXT (hlídá CI).

Rychlá kontrola po buildu: `public/index.html` a `public/en/index.html` mají `lang`, description, canonical a JSON-LD, který projde `json.loads`; existují `public/llms.txt`, `public/en/llms.txt` a `public/robots.txt` se `Sitemap:`.

## Cover images

Every post needs `cover.png` (1200x630). Generate it from the post tags/icons:

```bash
cd tools/cover && npm ci && cd ../..
node tools/cover/make-cover.mjs <slug>          # only missing covers; --force to regenerate
```

A hand-made or AI image works too: save it as `cover.png` at 1200x630. Hugo makes webp sizes for the page; the PNG is the og:image.

## Local preview

```bash
node scripts/check-content.mjs
hugo server --buildFuture        # live preview, search not available
# full build with search:
hugo --minify --gc && npx pagefind@1.6.0 --site public && python3 -m http.server -d public 8080
```
