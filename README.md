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
  cover.png        # optional, referenced as image: cover.png
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
# image: cover.png   # optional og:image, 1200x630
# draft: true        # optional, never published
---
```

Rules (enforced by `node scripts/check-content.mjs` in CI):

- both `index.cs.md` and `index.en.md` exist, same `date`, same `draft` flag
- `title`, `date`, `description`, `tags` present, description max 170 chars
- no em dash (U+2014) anywhere: use comma, colon or period

A future `date` = scheduled post: merged now, published by the daily build on that day.

Editorial workflow for the AI agent (topics, approval, LinkedIn): see `editorial/WRITING-GUIDE.md`, `editorial/backlog.md` and `editorial/linkedin-plan.md`.

## Local preview

```bash
node scripts/check-content.mjs
hugo server --buildFuture        # live preview, search not available
# full build with search:
hugo --minify --gc && npx pagefind@1.6.0 --site public && python3 -m http.server -d public 8080
```
