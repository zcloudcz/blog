---
title: "Klient chtěl chatbota. Postavil jsem produkt a dvakrát ho přejmenoval"
date: 2026-11-24T08:00:00+01:00
description: "Klient potřeboval AI asistenta do appky. Místo drahé zakázky vzniklo Keliqo, AI vyhledávání nad katalogem. A pak přišla sága se jménem a doménou v clientHold."
tags:
  - keliqo
  - saas
  - branding
image: cover.png
icon: message-circle
icons:
  - store
  - tags
palette: violet
---

Klient chtěl do mobilní appky AI chatbota. Dostal ho a k tomu vznikl produkt, který za tři týdny vystřídal tři jména.

## Nabídka, kterou jsem odmítl

Pro klienta, portál pro obce, stavím mobilní aplikaci. Do appky měl přibýt AI asistent. Obyvatel se zeptá vlastními slovy a asistent odpoví z obsahu portálu: z příspěvků, akcí a stránek.

Na stole ležela nabídka externí firmy. Měsíční paušál, minimální závazek a další etapy zatím bez ceny. Řekl jsem tomu „vyhazování peněz“.

Chatbot přitom zbytečný nebyl. Jenže stejnou věc potřebuje každý web, který má katalog: e-shop, město i aplikace. Takový nástroj se vyplatí postavit jednou a pronajímat mnohokrát. Tak jsem postavil vlastní AI API jako produkt. Klient je první zákazník.

## Co vzniklo

[Keliqo](https://keliqo.com) odpovídá jen z katalogu zákazníka. Katalog si stáhne z feedu: Heureka, Google Merchant, CSV, Shopify nebo vlastní JSON. Formát feedu pozná samo. Na web se vloží jedním řádkem kódu jako widget a widget umí 17 jazyků.

Pokud si Keliqo není jisté, položí jednu krátkou doplňující otázku. Pokud odpověď v katalogu není, řekne to a nic si nevymyslí. Každá odpověď má odkazy na zdroje.

Nejvíc mě baví průvodce **Vyzkoušet**. Vložíte adresu webu, Keliqo přečte klíčové stránky, převezme barvy a logo a ukáže asistenta nad vaším obsahem. Bez registrace. Účet zakládáte, až si výsledek chcete nechat.

Klient se napojuje stejně jako kdokoli jiný. Jeho backend vystavuje veřejný obsah jako feed a appka se ptá přes tenkou proxy.

Kód jsem psal s Codexem, nasazení na server dělá můj AI agent. Od odmítnuté nabídky do produkce uběhly necelé dva měsíce.

## Sága se jménem

A teď zábavnější část.

- Pracovní název byl **AIAsistent**, zkráceně AIA, na subdoméně zcloud.cz.
- 3. listopadu přišel rebrand na **ZAIA**. Nová doména, web v 17 jazycích, přestěhovaný portál, přesměrování.
- 6. listopadu ZAIA skončila a vzniklo **Keliqo**.

ZAIA vydržela tři dny.

Doménu keliqo.com jsem zaregistroval v pátek ve 22:00. DNS záznamy publikované, rebrand nasazený na serveru, všechno připravené. Doména přesto neexistovala. Registrátor ji držel ve stavu **clientHold** a registr .com ji vůbec nedelegoval. Hold padne až po zaplacení nebo ověření e-mailu vlastníka. Druhý den doména naběhla a server si sám vydal certifikát.

Pak přišel úklid. Stará doména dělá 301 na keliqo.com. Staré adresy API jsem vypínal postupně, až z logů bylo vidět, kdo je ještě volá. Klient v backendu přejmenoval proměnné z `AIA_*` na `KELIQO_*`.

Archeologické vrstvy zůstaly. Webhook plateb se ještě pár dní po rebrandu jmenoval `zaia-prod`. Formát feedu se dál jmenuje `aiajson`.

## Co si z toho beru

Postavit produkt místo jednorázové zakázky se vyplatilo. Klient má asistenta a stejná služba má veřejný ceník pro kohokoli, včetně tarifu Free.

Hlavní lekce je ale jinde: **jméno je taky závislost.** Jakmile ho napíšete do domény, certifikátu, platební brány, proměnných a cizího kódu, každé přejmenování znamená nové DNS, certifikáty, přesměrování a změny u klienta. Jméno vybírejte dřív, než ho začnete nasazovat. A počítejte s tím, že čerstvá doména nemusí fungovat hned.
