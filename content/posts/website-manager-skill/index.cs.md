---
title: "Nedělám weby, tak je za mě spravuje AI"
date: 2026-09-11T12:00:25+02:00
description: "Website Manager skill pro AI: založí repo, nasadí web na GitHub Pages, nastaví DNS u Wedosu a indexaci v Googlu. Bez admin rozhraní a bez dalšího SaaS."
tags:
  - ai-agents
  - github-pages
  - automation
  - mcp
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_ai-agents-github-activity-7504116636375998465-zbY0"
---

Nedělám weby. Nejsem grafik. SEO mě nebaví. A navíc jsem líný.

Takže jsem si vytvořil vlastní **Website Manager skill pro AI**. Ne aplikaci. Ne další admin rozhraní. Ale lokální skill, který dává AI nástroje potřebné k tomu, aby web zvládla spravovat za mě.

## Proč vůbec

Dělám hlavně jednoduché statické prezentace, většinou pro kamarády. A když něco dělám pro kámoše, nechci za to nic. Takže ideálně nechci platit ani hosting.

## Co skill umí

Výsledek:

- **Hosting:** web běží zdarma na GitHub Pages.
- **GitHub:** skill je napojený na GitHub a umí založit repo, nahrát web a nastavit Pages.
- **DNS:** přes Wedos nastaví DNS a vlastní doménu.
- **Google:** zařídí indexování webu.

Wedos jsem nevybral náhodou: potřeboval jsem registrátora s veřejným DNS API, přes které jde záznamy spravovat programově. Jedno pravidlo jsem si u DNS nastavil hned na začátku: automatika nikdy nic nemaže, ani kolidující záznam. Kolizi jen vypíše a rozhodne člověk.

## Jak to vypadá v praxi

Já přitom prakticky nic z toho nedělám ručně. Prostě AI řeknu třeba:

> Vytvoř mi web pro kamarádovu firmu.

Doladíme vzhled a pak:

> Nasaď ho na kamaradovadomena.cz.

A lokální skill se postará o zbytek. GitHub. Wedos. Google.

Žádné vlastní administrační rozhraní. Žádný další SaaS. Jen AI agent s přístupem ke správným nástrojům.

## Skill místo dalšího UI

Čím dál víc mě baví myšlenka, že místo stavění dalšího UI stačí některé věci prostě zpřístupnit agentovi jako skill nebo MCP.

Admin rozhraní je potřeba navrhnout, napsat, hostovat a udržovat. Skill je popis postupu plus pár nástrojů, které agent umí zavolat. Pro věci, které dělám párkrát do roka a nechci si pamatovat, kde se co nastavuje, je to přesně ta správná míra investice.

*Původně vyšlo na [LinkedInu](https://cz.linkedin.com/posts/martin-zahalka_ai-agents-github-activity-7504116636375998465-zbY0).*
