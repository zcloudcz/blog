---
title: "I don't build websites, so AI manages them for me"
date: 2026-09-11T12:00:25+02:00
description: "A Website Manager skill for AI: creates the repo, deploys to GitHub Pages, sets DNS at Wedos and Google indexing. No admin UI and no extra SaaS."
tags:
  - ai-agents
  - github-pages
  - automation
  - mcp
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_ai-agents-github-activity-7504116636375998465-zbY0"
---

I don't build websites. I'm not a designer. SEO bores me. And on top of that, I'm lazy.

So I built my own **Website Manager skill for AI**. Not an app. Not another admin panel. A local skill that gives the AI the tools it needs to manage a website for me.

## Why bother

What I mostly make are simple static presentation sites, usually for friends. And when I do something for a friend, I don't want to charge for it. So ideally I don't want to pay for hosting either.

## What the skill does

The result:

- **Hosting:** the site runs for free on GitHub Pages.
- **GitHub:** the skill is connected to GitHub and can create a repo, upload the site and configure Pages.
- **DNS:** it sets up DNS and the custom domain through Wedos.
- **Google:** it takes care of getting the site indexed.

Wedos was not a random pick: I needed a registrar with a public DNS API so records can be managed programmatically. I set one DNS rule right at the start: the automation never deletes anything, not even a conflicting record. It reports the conflict and a human decides.

## What it looks like in practice

I do practically none of this by hand. I just tell the AI something like:

> Build a website for my friend's company.

We fine-tune the look, and then:

> Deploy it to friendsdomain.cz.

The local skill handles the rest. GitHub. Wedos. Google.

No custom admin interface. No extra SaaS. Just an AI agent with access to the right tools.

## A skill instead of another UI

I like this idea more and more: instead of building yet another UI, some things can simply be exposed to an agent as a skill or an MCP server.

An admin interface has to be designed, written, hosted and maintained. A skill is a description of the procedure plus a few tools the agent can call. For tasks I do a few times a year and don't want to remember where everything is configured, that is exactly the right level of investment.

*Originally posted on [LinkedIn](https://cz.linkedin.com/posts/martin-zahalka_ai-agents-github-activity-7504116636375998465-zbY0) (in Czech).*
