---
title: "AI agent mi „opravil“ bug tak, že ho schoval"
date: 2026-09-03T10:00:45+02:00
description: "Dev-agent obalil endpointy do try-catch a chyba zmizela. Root cause ale zůstala. Proč v multi-agent workflow musí rozhodovat kód, test nebo experiment."
tags:
  - ai-agents
  - code-review
  - automation
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_ai-agent-mi-opravil-bug-tak-%C5%BEe-ho-schoval-activity-7501187417308299264-0vab"
image: cover.png
icon: bug
icons:
  - git-pull-request-arrow
  - bot
---

AI agent mi „opravil“ bug tak, že ho schoval.

## Try-catch jako lék na všechno

Problém vypadal jednoduše: HTTP 500 na jednom endpointu.

Dev-agent našel elegantní řešení. Obalil 8 GET endpointů do try-catch. Hotovo. Chyba nikde.

Jenže root cause byla rozbitá DB migrace. Endpoint nepadal kvůli tomu, že by mu chyběl try-catch. Padal proto, že databáze neodpovídala tomu, co kód očekával. Try-catch tu chybu jen přestal ukazovat.

Z pohledu agenta to přitom dávalo smysl. Úkol zněl „endpoint vrací 500“ a po změně už 500 nevracel. Metrika splněna, problém zůstal. A to je přesně ten typ opravy, který v rychlém review člověka snadno proklouzne, protože diff vypadá rozumně a defenzivně.

Reviewer ho zastavil jednou větou:

> Root cause identified but not fixed.

Druhé kolo už opravilo skutečný problém.

## Hádka o jeden komentář

Ještě lepší byla hádka o jeden komentář v kódu.

Dev tvrdil, že instanci disposne .NET DI container. Reviewer řekl: ne. A místo dalšího sebevědomého tvrzení napsal experiment a změřil to.

Pak to šlo takhle:

1. Dev komentář opravil. Pořád špatně.
2. Další experiment. Další zamítnutí.
3. Až třetí kolo prošlo.

Žádný z agentů nevyhrál tím, že by byl hlasitější. Vyhrál ten, kdo měl důkaz.

## Rozhodnout má kód, ne sebevědomí modelu

Tohle mě na multi-agent workflow baví asi nejvíc. Dvě AI se můžou hádat. Rozhodnout by ale měl kód, test nebo experiment. Ne sebevědomí modelu.

Je to vzorec, který se mi v review opakuje: tvrzení, ať v dokumentaci, nebo v komentáři, se ověřuje proti tomu, co kód skutečně dělá. Model umí napsat cokoliv přesvědčivě. Experiment se přesvědčit nenechá.

Moje AI nevěří tvrzením. Ani vlastním!

## Proč nechci, aby agent kontroloval sám sebe

A přesně proto nechci, aby agent po sobě jen „zkontroloval práci“ a odklikl si hotovo. Agent, který napsal try-catch kolem osmi endpointů, by si sám pravděpodobně řekl, že chyba je pryč. Z jeho pohledu by měl pravdu: 500 už nevidí.

Samostatný reviewer se dívá jinou otázkou. Ne „zmizel symptom?“, ale „byla opravena příčina?“. A když se dva agenti neshodnou, nerozhoduje se hlasováním, ale testem.

Jaké nejzajímavější chyby už vám agenti vyrobili?
