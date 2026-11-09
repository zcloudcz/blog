---
title: "Vyvíjím fakturační aplikaci. Sám. S týmem."
date: 2026-08-10T15:01:25+02:00
description: "Jak vzniká Fakvio: jeden člověk, GitHub Projects board a tým AI agentů s jasnými rolami. A proč je to spíš management než programování."
tags:
  - ai-agents
  - fakvio
  - dotnet
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_vyv%C3%ADj%C3%ADm-faktura%C4%8Dn%C3%AD-aplikaci-s%C3%A1m-s-t%C3%BDmem-activity-7492565774813954048-djFq"
image: cover.png
icon: receipt-text
icons:
  - kanban
  - bot
---

Vyvíjím fakturační aplikaci. Sám. S týmem.

Zní to jako protimluv, ale přesně tak vzniká [Fakvio](https://fakvio.cz), můj SaaS pro fakturaci. Pod kapotou je multi-tenant aplikace v .NET, UI v Blazor WASM, data v PostgreSQL a úlohy na pozadí v Azure Functions.

Nemám kolegy. Mám agenty.

## Tým, který nechodí na obědy

Celý vývoj běží přes GitHub Projects board a tým AI agentů, z nichž každý má svou roli:

- **Analytik** vezme user story, doptá se mě na nejasnosti v komentářích issue a rozpadne ji na úkoly do backlogu.
- **Developer** vezme úkol, naimplementuje ho na feature branchi a otevře draft PR.
- **Reviewer** zkontroluje PR proti zadání a konvencím projektu.
- **Tester** doplní testy a hlídá, aby CI bylo zelené.
- **Ops** po splnění všech bran mergne.
- **Warden** je takový „scrum master“: uklízí board a hlásí nekonzistence.

Board tak není jen nástěnka pro mě. Je to společný stav, ze kterého si každý agent bere práci a do kterého vrací výsledek. Issue, komentáře a PR jsou jediný komunikační kanál, takže se dá zpětně dohledat, kdo co rozhodl a proč.

## A co dělám já?

Jsem product owner a poslední instance. Píšu stories, odpovídám na dotazy analytika a schvaluji merge. Kód čtu, ale nepíšu.

Zní to jednoduše, ale je to práce. Když analytik položí otázku, musím odpovědět tak, aby z toho šlo udělat úkol, který developer nepochopí po svém. A když mi přijde PR ke schválení, chci rozumět tomu, co dělá, ne jen vidět zelené CI.

Pomáhá mi v tom `DEVGUIDE.md` v kořeni repa. Je to jediný zdroj pravdy o tom, jak věci ve Fakviu fungují: architektura, multi-tenant, autentizace, práce na pozadí, e-maily a PDF, UI vzory, testy, deploy. Pravidlo je jednoduché: každá změna procesu nebo vzoru musí tenhle dokument aktualizovat ve stejném PR. Agenti si ho čtou před každou netriviální změnou, protože vysvětluje nejen jak, ale i proč současná řešení existují.

## Kde to dnes je

- 800+ automatických testů
- dvoujazyčné UI
- AI asistent
- párování plateb z banky
- generování PDF
- e-mailové šablony

Jeden člověk, večery a víkendy.

## Největší lekce

AI agenti nejsou magie. Fungují přesně tak dobře, jak dobrá jsou zadání. Nejasná story se nepromění v dobrý kód jen proto, že ji zpracovává model místo člověka. Promění se v sebevědomě napsaný kód, který řeší něco trochu jiného.

Je to management, ne programování.

A jak pracujete vy? Jaké máte AI workflow?
