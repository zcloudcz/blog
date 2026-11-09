---
title: "I wrote yet another .NET mapper. Maybe for the software museum."
date: 2026-08-20T10:00:25+02:00
description: "ZMapper combines AutoMapper's ergonomics with Mapperly-style source generation. But does saving boilerplate still matter when AI agents write it for us?"
tags:
  - dotnet
  - open-source
  - ai-agents
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_github-zcloudczzmapper-high-performance-activity-7496113904885014529-pSj-"
---

In the winter of 2025/26 I wrote another .NET mapper.

Because that's exactly what the .NET ecosystem was missing. Another mapper. 😅

It's called **ZMapper**.

## AutoMapper DX + source generation

The idea is simple: take AutoMapper's ergonomics and combine them with Mapperly's approach.

- the familiar `CreateMap`, `ForMember`, `MapFrom`,
- mapping code generated at compile time,
- no runtime reflection,
- errors and missing properties caught at build time,
- performance close to hand-written mapping,
- profiles, DI, collections, nested objects, reverse mapping and more.

Under the hood it's a Roslyn incremental source generator. You write the configuration just like in AutoMapper, either with `CreateMap` in a partial class or in profiles implementing `IMapperProfile`. At compile time the generator turns it into plain C#, including extension methods like `.ToPerson()`.

Build-time checking isn't just a marketing line. An unmapped destination property raises warning ZMAP001, and a profile that isn't `partial` fails with a readable ZMAP002 error instead of a cryptic CS0260. You hit mapping mistakes in your IDE, not in production.

The package targets .NET 10, .NET 8 and .NET Standard 2.0, the generator ships inside a single NuGet package, and the benchmarks in the repo compare it with hand-written mapping, Mapperly and AutoMapper. I use it myself in [Fakvio](https://fakvio.cz) for entity mapping.

The result is something like: AutoMapper DX + source generation.

## Now for the absurd part

When I was writing ZMapper, figuring out how to write less boilerplate made a lot of sense.

A few months later, I'm wondering whether anyone will use it at all. 😄

Because these days we often don't write that boilerplate. We tell an agent:

> "Map this DTO to the entity."

…and it just produces those 20 lines of C#.

For years we built libraries and abstractions meant to save us from writing code. But AI is changing the economics of development. When a human isn't the one writing the code, maybe the number of lines doesn't matter that much anymore.

So maybe we're entering an odd phase where the main question is no longer:

> "How do I write less code?"

but:

> "Does it still make sense to build abstractions whose main purpose is to save typing?"

## Anyway, it's out

ZMapper is out and it's open source. Maybe for the software museum. 👇

- GitHub: [github.com/zcloudcz/ZMapper](https://github.com/zcloudcz/ZMapper)
- NuGet: [nuget.org/packages/ZMapper](https://www.nuget.org/packages/ZMapper)

Do you still use mappers in the age of AI coding agents?

*Originally posted on [LinkedIn](https://cz.linkedin.com/posts/martin-zahalka_github-zcloudczzmapper-high-performance-activity-7496113904885014529-pSj-) (in Czech).*
