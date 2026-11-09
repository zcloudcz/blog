---
title: "Fakvio: napíšu chatu a faktura je hotová"
date: 2026-11-17T08:00:00+01:00
description: "Fakturu nevystavuju ve formuláři, ale jednou větou v Claude nebo ChatGPT. Jak to funguje přes MCP server Fakvia a co je na tom záludné."
tags:
  - fakvio
  - mcp
  - ai-agents
  - automation
image: cover.png
icon: receipt-text
icons:
  - message-square
  - bot
---

Fakturu jsem dřív vystavoval tak, že jsem otevřel aplikaci, proklikal formulář a opsal IČO. Dnes napíšu jednu větu do Claude nebo ChatGPT a faktura je hotová.

To je společná linka všech mých aplikací: pokud do nich nemusím, nelezu do nich. Mají MCP a API.

## Problém: formulář

Fakturace je pro živnostníka rutina. Vybrat klienta, vyplnit položku, cenu a splatnost, vystavit, stáhnout PDF, poslat e-mail. Každý krok je jednoduchý. Dohromady je to klikání, které nikoho nebaví a ze kterého nic nemám.

## Řešení: MCP server

[Fakvio](https://fakvio.cz), moje fakturace pro živnostníky a malé firmy, má MCP server. MCP je protokol, přes který AI agent volá nástroje aplikace. Ve Fakviu pokrývá faktury, klienty včetně ARES, PDF, e-maily, přijaté faktury, DPH i daňové výpočty.

Připojení v claude.ai nebo ChatGPT je adresa `https://mcp.fakvio.cz/mcp` a přihlášení na stránce Fakvia. Heslo do chatu nepíšu. Při přihlášení volím, jestli AI smí jen číst, nebo i zapisovat.

Pak to vypadá takhle:

> **Já:** Vystav fakturu firmě Novák s.r.o. na 15 000 Kč za konzultace, splatnost 14 dní.
>
> **Agent:** najde firmu, vystaví fakturu s číslem z mé řady a QR platbou a pošle odkaz na PDF.
>
> **Já:** Pošli ji e-mailem a do kopie dej účetní.
>
> **Agent:** odešle e-mail s PDF a ISDOC. Předmět a text mi může nejdřív ukázat ke kontrole.

Nového klienta stačí zadat IČO, údaje se doplní z ARES. Odkaz na PDF platí 10 minut. Původně MCP vracelo soubor jako base64 v textu výsledku, jenže z toho chat soubor neudělá.

Platí u mě pravidlo: každá funkce Fakvia musí umět i MCP. AI asistenta přímo v aplikaci jsem naopak vyhodil. Nepracoval spolehlivě a MCP ho nahradilo.

## Co je na tom záludné

**Agent věří nástrojům víc, než by měl.** Chtěl jsem vidět posledních 6 faktur. Agent mi vrátil šest faktur, jen nebyly poslední. Server řadil podle čísla dokladu jako textu a já mám dvě číselné řady. Agent řazení neověřil a výsledek podal s jistotou. Server teď řadí podle data vystavení, ale poučení platí dál: u „posledních N“ se ptejte, podle čeho se řadí.

**Popis nástroje je pro AI pravda.** Nástroj pro odeslání e-mailu měl v popisu „with PDF attachment“. AI proto tvrdila, že ISDOC přiložit nejde, přestože se přikládal vždy. Popis nástroje musí odpovídat chování.

**ChatGPT je přísnější než Claude.** Jeden číselný limit se v JSON schématu zapsal jako text a ChatGPT kvůli němu odmítl celý seznam nástrojů. Claude Code to snesl. Při prvním připojení přes OAuth jsem opravoval dvě chyby na své straně, mimo jiné formát scope. A ChatGPT i claude.ai si drží seznam nástrojů z doby připojení. Nový nástroj uvidí až po odpojení a novém připojení konektoru, a to v nové konverzaci.

## Co to přináší

Fakturu vystavím tam, kde stejně pracuju: v chatu. Aplikaci otevřu, jen když chci. Stejnou cestou jde i otázka, co je po splatnosti nebo kolik zaplatit na zálohách. Fakvio je zdarma a tokeny k AI neprodává, AI si platím ve svém předplatném.

Poučení: pokud lidi vaši aplikaci nechtějí otevírat, nedávejte jim lepší formulář. Dejte jim MCP a API.
