---
title: "PdfJoin: spojení PDF a obrázků bez uploadu na cizí server"
date: 2026-08-25T10:00:16+02:00
description: "Potřebujete spojit pár PDF nebo obrázků? PdfJoin to udělá přímo v prohlížeči. Soubory neopustí vaše zařízení, bez registrace a zdarma."
tags:
  - privacy
  - web
  - open-source
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_pdfjoin-slou%C4%8Den%C3%AD-pdf-activity-7497925802747924498-aiez"
image: cover.png
icon: file-stack
icons:
  - lock-keyhole
  - globe
---

Potřebujete rychle spojit pár PDF nebo obrázků do jednoho PDF, znáte to?

Otevřete nějaký online nástroj plný reklam, nahrajete tam smlouvu, fakturu, scan nebo fotky… a doufáte, že je všechno v pohodě. 😅

Přesně proto jsem si postavil [PdfJoin](https://pdf.zcloud.cz).

## Dělá jednu věc

- vezme PDF i obrázky,
- nechá vás je seřadit,
- spojí je,
- vytvoří jedno výsledné PDF.

Navíc si můžete zvolit formát stránek: původní, A4 nebo A3, a jestli se má obsah do stránky celý vejít, nebo ji vyplnit. Orientace se nastaví automaticky podle stránky. Chtěl jsem, aby volba byla na uživateli, ne na nástroji.

## Ale hlavně

- **Soubory nikdy neopustí vaše zařízení.**
- Všechno běží přímo v prohlížeči.
- Žádný upload na server.
- Žádná registrace.
- Zdarma.

U nástroje, do kterého lidi nahrávají smlouvy a faktury, je soukromí to hlavní. Nejjednodušší způsob, jak data neztratit, je vůbec je nedostat. Proto je PdfJoin čistě client-side a nemá server, kam by se cokoli posílalo.

## Technicky

TypeScript, čistý frontend, žádný backend. Konkrétně Vite, [pdf-lib](https://pdf-lib.js.org/) na skládání výsledného PDF, pdf.js na náhledy stránek a SortableJS na řazení přetažením. Hostované je to na GitHub Pages a zdroják je veřejný na [GitHubu](https://github.com/zcloudcz/PdfJoin).

Jedna drobnost z vývoje, která se může hodit každému, kdo renderuje PDF přes pdf.js: výchozí render pro zobrazení plánuje práci přes `requestAnimationFrame`. Když je záložka na pozadí, Chrome rAF nespouští, takže `page.render().promise` se nevyřeší, dokud se záložka nepřekreslí. V automatizovaných testech to vypadá jako náhodné zaseknutí. Řešení je předat do renderu `intent: 'print'`, který jede přes `setTimeout` a viditelnost záložky ho nezajímá.

## Vyzkoušejte

[pdf.zcloud.cz](https://pdf.zcloud.cz), třeba se bude hodit. 🙂 Zpětná vazba vítána.
