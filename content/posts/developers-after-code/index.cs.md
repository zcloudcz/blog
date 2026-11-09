---
title: "Co budou dělat vývojáři, až nebudou muset psát kód?"
date: 2026-09-08T10:56:22+02:00
description: "Práce vývojáře se přesouvá od psaní kódu k návrhu, rozhodování a odpovědnosti za produkt. Co o tom říkají data od Anthropicu, Stack Overflow a DORA 2025."
tags:
  - future-of-work
  - ai-agents
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_announcing-the-2025-dora-report-google-activity-7503013353653489664-GhFr"
image: cover.png
icon: users
icons:
  - brain-circuit
  - code-xml
---

Práce vývojáře se postupně přesouvá od samotného psaní kódu k návrhu, rozhodování a odpovědnosti za výsledný produkt. A data už tenhle posun ukazují.

## Co říkají data

[Anthropic analyzoval 500 000 coding interakcí](https://www.anthropic.com/research/impact-software-development). U Claude Code bylo 79 % interakcí klasifikováno jako automatizace: AI tedy práci přímo prováděla, místo aby člověku pouze radila.

Podle [Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/ai) 84 % vývojářů AI používá nebo ji plánuje používat a 51 % profesionálních developerů ji používá denně.

Zároveň je u přesnosti AI výstupů vidět značná nedůvěra:

- přibližně 33 % respondentů AI výstupům důvěřuje,
- přibližně 46 % respondentů jim nedůvěřuje.

Konkrétně jde o součet odpovědí „somewhat“ a „highly“ trust/distrust, takže jsou čísla zaokrouhlená.

A zajímavý je i pohled na oblasti, kam vývojáři AI zatím pouštět nechtějí:

- 76 % neplánuje používat AI pro deployment a monitoring,
- 69 % ji neplánuje používat pro project planning.

## Nové rozdělení práce

Vzniká tak poměrně jasné rozdělení. AI přebírá stále větší část implementace: endpointy, komponenty, testy, boilerplate nebo rutinní refactoring.

Hodnota člověka se naopak přesouvá jinam:

- pochopení business problému,
- product thinking a analýza,
- architektura a technologické trade-offy,
- řízení AI agentů,
- review a validace výsledku,
- bezpečnost,
- dotažení aplikace až do produkce,
- monitoring a práce s reálným provozem.

## AI jako zesilovač

[DORA 2025](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report) popisuje AI jako zesilovač existujícího engineering procesu. Dobře fungujícím týmům pomáhá zvýšit výkon. Ve špatně nastaveném procesu naopak zesiluje problémy. Vyšší využití AI je spojeno s vyšším delivery throughputem a product performance, ale stále také s nižší stabilitou software delivery.

Rychlejší výroba kódu tedy sama o sobě nestačí. Čím levnější a rychlejší bude implementace, tím důležitější budou kvalitní specifikace, architektura, automatické testy, review, observability a schopnost bezpečně dostat změnu do produkce.

## Zpátky k softwarovým inženýrům

Možná se tak nevracíme od programátorů k analytikům. Možná se vracíme od programátorů k softwarovým inženýrům. K lidem, kteří dokážou vzít business problém a dostat ho:

od požadavku → přes návrh → přes AI agenty → až k fungujícímu produktu v produkci.

Samotná schopnost napsat C#, Java nebo TypeScript tím nezmizí. Jen už nemusí být tou nejcennější částí práce.

Kód se postupně stává levnější. Rozhodnutí, odpovědnost a schopnost dodat fungující software nikoliv.

## Zdroje

- [Anthropic Economic Index: AI's impact on software development](https://www.anthropic.com/research/impact-software-development)
- [Stack Overflow Developer Survey 2025: AI](https://survey.stackoverflow.co/2025/ai)
- [Google: Announcing the 2025 DORA Report](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report)
