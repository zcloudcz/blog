---
title: "AI agent potřebuje oprávnění, ne jen instrukce"
date: 2026-10-01T13:15:37+02:00
description: "Čím víc práce svěříme AI, tím důležitější je určit, kam agent smí a co může udělat. Instrukce „tohle nedělej“ nestačí. Proto vyvíjím AgentWall."
tags:
  - ai-security
  - agentwall
  - ai-agents
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_agentwall-ai-agent-navrhuje-agentwall-rozhoduje-activity-7511383316256923649-6ajo"
image: cover.png
icon: lock-keyhole
icons:
  - shield-check
  - bot
---

Poslouchal jsem poslední podcast Petra Ludwiga, který namluvila jeho AI Lana. A znovu mě to utvrdilo v tom, že AgentWall má smysl a kontrola oprávnění AI agentů bude nutnost.

## Instrukce nejsou bezpečnostní hranice

Čím víc práce AI svěříme, tím důležitější bude určit, kam smí a co může udělat. Instrukce „tohle nedělej“ sama o sobě nestačí.

Prompt není bezpečnostní hranice. Model ho může špatně pochopit, může ho přebít prompt injection z dokumentu, který agent zrovna čte, nebo si agent prostě najde jinou cestu k cíli. Hranice musí být tam, kde ji agent nemůže přepsat: v prostředí, ve kterém běží, a v tom, k čemu má vůbec přístup.

## Co AgentWall dělá

Proto vyvíjím [AgentWall](https://agentwall.cz):

- **kontrolované prostředí pro agenta:** agent běží v sandboxu a ven se dostane jen přes AgentWall,
- **řízený přístup k nástrojům:** agent smí volat jen nástroje, které mu politika povolí,
- **omezení nebezpečných operací:** citlivé akce čekají na schválení člověkem,
- **auditní stopa jeho akcí:** co agent udělal, je zaznamenané a dohledatelné.

AgentWall je vendor-neutral: nezáleží na tom, v jakém nástroji agent běží, ani na tom, jaký model je pod ním. Pravidla platí pro agenta, ne pro konkrétního dodavatele.

Moje heslo pro AgentWall je jednoduché: AI agent navrhuje, AgentWall rozhoduje.

## SSH klíče agent nepotřebuje

Agent potřebuje upravit kód. Nemusí přitom mít přístup k vašim SSH klíčům.

To je celé. Ne „věřím, že je nepoužije“, ale „nemá je k dispozici“.
