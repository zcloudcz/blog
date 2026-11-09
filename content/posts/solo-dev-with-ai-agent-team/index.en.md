---
title: "Building an invoicing app. Alone. With a team."
date: 2026-08-10T15:01:25+02:00
description: "How Fakvio gets built: one person, a GitHub Projects board and a team of AI agents with clear roles. And why it is more management than programming."
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

I'm building an invoicing app. Alone. With a team.

Sounds like a contradiction, but that is exactly how [Fakvio](https://fakvio.cz), my invoicing SaaS, comes to life. Under the hood it is a multi-tenant .NET application with a Blazor WASM UI, PostgreSQL for data and Azure Functions for background jobs.

I don't have colleagues. I have agents.

## A team that never takes a lunch break

All development runs through a GitHub Projects board and a team of AI agents, each with its own role:

- **Analyst** takes a user story, asks me about anything unclear in the issue comments and breaks it down into backlog tasks.
- **Developer** picks a task, implements it on a feature branch and opens a draft PR.
- **Reviewer** checks the PR against the spec and the project's conventions.
- **Tester** adds tests and makes sure CI stays green.
- **Ops** merges once every gate has passed.
- **Warden** is a kind of scrum master: it tidies up the board and reports inconsistencies.

So the board is not just a to-do list for me. It is shared state: every agent pulls work from it and pushes results back. Issues, comments and PRs are the only communication channel, which means I can always trace who decided what and why.

## So what do I do?

I'm the product owner and the final authority. I write stories, answer the analyst's questions and approve merges. I read the code, but I don't write it.

That sounds easy, but it is real work. When the analyst asks a question, my answer has to be precise enough to become a task the developer can't misread. And when a PR lands for approval, I want to understand what it does, not just see green CI.

What helps is `DEVGUIDE.md` in the repo root. It is the single source of truth for how things work in Fakvio: architecture, multi-tenancy, authentication, background work, e-mail and PDF flows, UI patterns, tests, deployment. The rule is simple: any change to a process or pattern has to update that document in the same PR. Agents read it before any non-trivial change, because it explains not only how things work but why the current solutions exist.

## Where it stands today

- 800+ automated tests
- bilingual UI
- AI assistant
- bank payment matching
- PDF generation
- e-mail templates

One person, evenings and weekends.

## The biggest lesson

AI agents are not magic. They work exactly as well as the specs you give them. A vague story doesn't turn into good code just because a model handles it instead of a human. It turns into confidently written code that solves something slightly different.

It's management, not programming.

How about you? What does your AI workflow look like?
