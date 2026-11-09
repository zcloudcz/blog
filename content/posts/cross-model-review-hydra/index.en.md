---
title: "My AI developer can't merge anything a rival AI hasn't approved"
date: 2026-08-17T08:30:03+02:00
description: "Hydra is my Claude-based AI developer, but every non-trivial change has to be reviewed by OpenAI's Codex. Why I prefer cross-model review."
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

My AI developer is not allowed to merge anything that hasn't been approved by an AI from a competing company.

Meet Hydra, the agent I use for day-to-day development. Hydra is a software engineer currently built on Claude. It writes code, writes tests and picks its tools.

But it has one hard rule: **every non-trivial change must be reviewed by OpenAI's Codex.**

Two AI heads from two rival companies. Hence the name. 🐉

## Feedback is input, not orders

The key part: Codex's comments are not commands to be executed blindly. Hydra decides what to do with them:

- real bugs get fixed,
- nitpicks that go against the repo's conventions get rejected,
- disagreements get reported to me, with reasoning.

If Hydra accepted every finding, review would turn into a change generator instead of a check. A reviewer that doesn't know all of the project's conventions can easily suggest an "improvement" that is actually a step back. That's why I want every rejected comment to come with a reason. When the models disagree, the call is mine, and that written reasoning makes it much easier.

## No silent self-review

When Codex isn't available, Hydra must not quietly "review itself" and pretend the job is done. Either the review happens, or I do it myself.

To me this rule matters as much as the review itself. A process that silently degrades to "well, it got through somehow" when a tool is down is worse than one that stops and says so out loud. Fortunately, it doesn't happen often. 🙂

## Why a different model

In my view, the weakest point of AI-driven development is the moment a model checks its own work. The same model has the same blind spots it had while writing the code: whatever it missed during implementation, it will probably miss during review too.

A second pair of eyes from a different model catches different bugs. More importantly, it forces the first model to argue and defend its decisions. Just having to write down why a comment is being rejected exposes the places where Hydra wasn't sure in the first place.

It is the same thing that works in human teams. The author of the code is not the best person to approve it.

## What about you?

Do you use cross-model review? Or do you let AI check itself? And if you're further along, what do you do differently?
