---
title: "Můj AI developer nesmí mergnout nic, co mu neschválí AI od konkurence"
date: 2026-08-17T08:30:03+02:00
description: "Hydra je můj AI vývojář na Claude, ale každou netriviální změnu mu musí zrevidovat Codex od OpenAI. Proč dávám přednost cross-model review."
tags:
  - ai-agents
  - code-review
  - llm
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_m%C5%AFj-ai-developer-nesm%C3%AD-mergnout-nic-co-mu-activity-7495003995686752256-4WtZ"
image: cover.png
icon: git-pull-request-arrow
icons:
  - bot
  - scale
---

Můj AI developer nesmí mergnout nic, co mu neschválí AI od konkurence.

Seznamte se s Hydrou, agentem, kterého používám pro každodenní vývoj. Hydra je softwarový inženýr postavený aktuálně na Claude. Píše kód, píše testy a vybírá nástroje.

Ale má jedno tvrdé pravidlo: **každou netriviální změnu musí zrevidovat Codex od OpenAI.**

Dvě AI hlavy od dvou konkurenčních firem. Proto Hydra. 🐉

## Feedback jsou vstupy, ne rozkazy

To důležité: připomínky od Codexu nejsou příkazy, které se slepě provedou. Hydra sama rozhodne, co s nimi:

- reálné bugy opraví,
- hnidopišství proti konvencím repa odmítne,
- neshody mi reportuje i se zdůvodněním.

Kdyby Hydra přijala každý nález, review by se stalo generátorem změn, ne kontrolou. Reviewer, který nezná všechny konvence projektu, umí navrhnout „vylepšení“, které je ve skutečnosti krok zpátky. Proto chci, aby u každé odmítnuté připomínky bylo napsané proč. Když se modely neshodnou, rozhodnutí je na mně, a ten zápis mi ho výrazně usnadní.

## Žádné tiché sebe-review

Když Codex neběží, Hydra se nesmí potichu „zrevidovat sama“ a tvářit se, že je hotovo. Buď review proběhne, nebo ho udělám sám.

Tohle pravidlo je pro mě stejně důležité jako review samotné. Proces, který se při výpadku nástroje tiše degraduje na „nějak to prošlo“, je horší než proces, který se zastaví a řekne to nahlas. Naštěstí se to moc neděje. 🙂

## Proč jiný model

Nejslabší místo AI vývoje je podle mě chvíle, kdy model kontroluje sám sebe. Stejný model má stejné slepé skvrny jako při psaní kódu: co přehlédl při implementaci, nejspíš přehlédne i při kontrole.

Druhý pár očí jiného modelu chytá jiné chyby. A hlavně nutí toho prvního argumentovat a obhájit svoje rozhodnutí. Už jen to, že Hydra musí napsat, proč nějakou připomínku odmítá, odhalí místa, kde si sama nebyla jistá.

Je to vlastně totéž, co funguje v lidském týmu. Autor kódu není ten nejlepší, kdo ho má schválit.

## A vy?

Používáte cross-model review? Nebo necháváte AI kontrolovat samu sebe? A pokud jste dál, nasdílíte tipy, jak to děláte jinak?
