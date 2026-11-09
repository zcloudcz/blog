---
title: "An AI agent needs permissions, not just instructions"
date: 2026-10-01T13:15:37+02:00
description: "The more work we hand to AI, the more it matters where an agent may go and what it can do. \"Don't do this\" is not enough. That is why I am building AgentWall."
tags:
  - ai-security
  - agentwall
  - ai-agents
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_agentwall-ai-agent-navrhuje-agentwall-rozhoduje-activity-7511383316256923649-6ajo"
image: cover.png
icon: lock-keyhole
icons:
  - shield-check
  - bot
---

I was listening to the latest podcast from Petr Ludwig, voiced by his AI, Lana. And it confirmed once again that AgentWall makes sense and that controlling AI agent permissions is going to be a necessity.

## Instructions are not a security boundary

The more work we hand over to AI, the more important it becomes to define where it may go and what it can do. An instruction like "don't do this" is not enough on its own.

A prompt is not a security boundary. The model can misread it, a prompt injection in a document the agent happens to be reading can override it, or the agent can simply find another way to its goal. The boundary has to be somewhere the agent cannot rewrite it: in the environment it runs in and in what it has access to at all.

## What AgentWall does

That is why I am building [AgentWall](https://agentwall.cz):

- **a controlled environment for the agent:** the agent runs in a sandbox and can only reach the outside through AgentWall,
- **managed access to tools:** the agent may only call the tools its policy allows,
- **limits on dangerous operations:** sensitive actions wait for human approval,
- **an audit trail of its actions:** what the agent did is recorded and traceable.

AgentWall is vendor-neutral: it does not matter which tool the agent runs in, or which model sits underneath. The rules apply to the agent, not to a particular vendor.

My motto for AgentWall is simple: the AI agent proposes, AgentWall decides.

## The agent doesn't need your SSH keys

An agent needs to change some code. It does not need access to your SSH keys to do that.

That's it. Not "I trust it won't use them", but "it doesn't have them".
