---
title: "Platím za AI vývoj míň než za kafe. To nemůže vydržet."
date: 2026-08-19T09:30:13+02:00
description: "Dnes jedeme na levných tokenech a nejsilnější model používáme na všechno. Co až inference zdraží? Levnější modely a dekompozice práce."
tags:
  - llm
  - costs
  - ai-agents
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_ai-deepseek-llm-activity-7495743915434790912-5AE5"
image: cover.png
icon: coins
icons:
  - brain-circuit
  - bot
---

Platím za AI vývoj míň než za kafe. To nemůže vydržet. ☕

Dnes jedeme na levných tokenech. Nejsilnější model na architekturu. Nejsilnější model na refactoring. A klidně i na přejmenování proměnné. Hrubá síla, protože si ji můžeme dovolit.

Obecná logická úvaha ale říká, že ceny inference půjdou nahoru. A pak přijde otázka: co pak?

## Dvě cesty

Vidím dvě.

### 1. Levnější modely

Open-source, DeepSeek a spol., vlastní hosting. Nejsou tak chytré, ale pro spoustu úloh dostačující.

### 2. Dekompozice práce

Slabší model nezvládne: „Refaktoruj mi aplikaci.“

Ale zvládne:

- upravit jednu metodu,
- změnit call sites podle vzoru,
- spustit testy,
- vrátit výsledek ke kontrole.

Čím menší a přesnější úkol, tím slabší model stačí. Velký úkol vyžaduje, aby model sám pochopil kontext, navrhl řešení, rozhodl o kompromisech a pak ho ještě konzistentně provedl. Malý úkol s jasným zadáním a testem, který řekne „hotovo“, z toho většinu odebere. Inteligence se přesune do zadání.

## Smíšená flotila

Budoucnost podle mě bude smíšená flotila:

- **drahý model** jako architekt a reviewer,
- **levné modely** jako ty, kdo vykonávají.

Stejně jako v lidském týmu. Senior nepíše každý řádek. Rozděluje práci a kontroluje výsledek.

Na [Fakviu](https://fakvio.cz) už tímhle směrem jedu: malé úkoly, jasná kritéria, testy a review na každém kroku. Dnes kvůli kvalitě. Zítra možná kvůli ekonomice.

## Cenová válka už začala

Zajímavé je, že AI firmy už na tlak na cenu reagují. OpenAI i Anthropic dokonce zlevňují a tlačí na levnější provoz. Částečně i proto, že jim do cenotvorby výrazně promlouvají levnější čínské modely typu DeepSeek.

Cenová válka tedy evidentně začala. Otázka je, jestli to bude stačit. A hlavně: dokážou při těchto cenách dlouhodobě vydělávat, zvlášť když spotřeba AI roste tak rychle?

Protože i když tokeny právě zlevňují, není vůbec jisté, že současné ceny jsou dlouhodobě udržitelné. Workflow, které počítá s tím, že nejsilnější model je levný na všechno, je sázka na jednu konkrétní cenovou politiku. Workflow postavené na malých úkolech a kontrole na každém kroku funguje s drahým i levným modelem.

Stavíte svoje AI workflow na tom, že tokeny zůstanou levné?
