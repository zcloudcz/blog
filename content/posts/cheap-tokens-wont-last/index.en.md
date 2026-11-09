---
title: "I pay less for AI development than for coffee. That can't last."
date: 2026-08-19T09:30:13+02:00
description: "Today we run on cheap tokens and use the strongest model for everything. What happens when inference gets pricier? Cheaper models and smaller tasks."
tags:
  - llm
  - costs
  - ai-agents
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_ai-deepseek-llm-activity-7495743915434790912-5AE5"
image: cover.png
icon: coins
icons:
  - brain-circuit
  - bot
---

I pay less for AI development than I do for coffee. That can't last. ☕

Right now we're running on cheap tokens. The strongest model for architecture. The strongest model for refactoring. And why not, the strongest model for renaming a variable too. Brute force, because we can afford it.

The general logic, though, says inference prices will go up. And then the question is: what next?

## Two ways forward

I see two.

### 1. Cheaper models

Open source, DeepSeek and friends, self-hosting. Not as smart, but good enough for plenty of tasks.

### 2. Decomposing the work

A weaker model can't handle: "Refactor my application."

But it can:

- change one method,
- update call sites following a pattern,
- run the tests,
- hand the result back for review.

The smaller and more precise the task, the weaker the model you can get away with. A big task requires the model to understand the context, design a solution, weigh the trade-offs and then carry it out consistently. A small task with a clear spec and a test that says "done" takes most of that off its plate. The intelligence moves into the spec.

## A mixed fleet

I think the future is a mixed fleet:

- **an expensive model** as architect and reviewer,
- **cheap models** doing the execution.

Just like a human team. A senior engineer doesn't write every line. They split the work and check the result.

I'm already heading that way with [Fakvio](https://fakvio.cz): small tasks, clear criteria, tests and review at every step. Today it's for quality. Tomorrow it may be for economics.

## The price war has started

What's interesting is that AI companies are already responding to price pressure. OpenAI and Anthropic are even cutting prices and pushing for cheaper operation. Partly because cheaper Chinese models like DeepSeek have a big say in how the market prices things.

So the price war has clearly begun. The question is whether that will be enough. And more importantly: can these companies make money at these prices in the long run, especially when AI usage is growing this fast?

Because even though tokens are getting cheaper right now, it's far from certain that current prices are sustainable. A workflow that assumes the strongest model is cheap enough for everything is a bet on one particular pricing policy. A workflow built on small tasks and checks at every step works with expensive and cheap models alike.

Are you building your AI workflow on the assumption that tokens stay cheap?
