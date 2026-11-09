---
title: "Napsal jsem další .NET mapper. Třeba do muzea softwaru."
date: 2026-08-20T10:00:25+02:00
description: "ZMapper spojuje ergonomii AutoMapperu se source generation jako Mapperly. Jenže má ještě smysl šetřit boilerplate, když ho za nás píšou AI agenti?"
tags:
  - dotnet
  - open-source
  - ai-agents
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_github-zcloudczzmapper-high-performance-activity-7496113904885014529-pSj-"
image: cover.png
icon: code-xml
icons:
  - workflow
  - sparkles
---

V zimě 2025/26 jsem napsal další .NET mapper.

Protože přesně to .NET ekosystému chybělo. Další mapper. 😅

Jmenuje se **ZMapper**.

## AutoMapper DX + source generation

Myšlenka je jednoduchá: vzít ergonomii AutoMapperu a spojit ji s přístupem Mapperly.

- známé `CreateMap`, `ForMember`, `MapFrom`,
- mapping se generuje při kompilaci,
- žádná runtime reflection,
- chyby a chybějící properties lze odhalit už při buildu,
- výkon blízký ručně napsanému mappingu,
- profiles, DI, collections, nested objects, reverse mapping a další.

Pod kapotou je to Roslyn incremental source generator. Konfiguraci napíšete stejně jako v AutoMapperu, buď přímo přes `CreateMap` v partial třídě, nebo v profilech implementujících `IMapperProfile`. Generátor z ní při kompilaci vyrobí obyčejný C# kód, včetně extension metod typu `.ToPerson()`.

Kontrola při buildu není jen marketingová věta. Nenamapovaná cílová vlastnost vyhodí varování ZMAP001, profil, který není `partial`, skončí srozumitelnou chybou ZMAP002 místo kryptického CS0260. Na chybu v mapování tak narazíte v IDE, ne v produkci.

Balíček cílí na .NET 10, .NET 8 i .NET Standard 2.0, generátor je přibalený přímo v jediném NuGetu a benchmarky v repu ho srovnávají s ručním mappingem, Mapperly a AutoMapperem. Sám ho používám ve [Fakviu](https://fakvio.cz) na mapování entit.

Výsledkem je něco jako: AutoMapper DX + source generation.

## A teď ta absurdní část

Když jsem ZMapper psal, dávalo mi tenkrát velký smysl řešit, jak psát méně boilerplate kódu.

Jenže o pár měsíců později si říkám, jestli ho vůbec bude někdo používat. 😄

Protože dnes už ten boilerplate často nepíšeme. Napíšeme agentovi:

> „Namapuj mi DTO na entitu.“

…a on těch 20 řádků C# prostě vyrobí.

Celé roky jsme vytvářeli knihovny a abstrakce, které nám měly ušetřit psaní kódu. AI ale mění ekonomiku vývoje. Když kód nepíše člověk, možná už není tak důležité, kolik řádků má.

Možná se tedy dostáváme do zvláštní fáze, kdy už není hlavní otázka:

> „Jak napsat méně kódu?“

ale:

> „Má ještě smysl vytvářet abstrakce, jejichž hlavním účelem je šetřit psaní kódu?“

## Každopádně je venku

ZMapper je venku a je open-source. Třeba do muzea softwaru. 👇

- GitHub: [github.com/zcloudcz/ZMapper](https://github.com/zcloudcz/ZMapper)
- NuGet: [nuget.org/packages/ZMapper](https://www.nuget.org/packages/ZMapper)

Používáte mappery v době AI coding agentů?
