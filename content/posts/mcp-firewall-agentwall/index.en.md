---
title: "Securing AI agents with an MCP firewall"
date: 2026-09-21T09:03:43+02:00
description: "Forbid an agent to delete data via MCP and it tries curl. Why an MCP firewall must be the only path to a protected system, and how AgentWall approaches it."
tags:
  - ai-security
  - mcp
  - agentwall
  - ai-agents
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_aiagents-aisecurity-mcp-activity-7507696043480731648-aQZp"
image: cover.png
icon: shield-check
icons:
  - lock-keyhole
  - bot
---

Everyone is talking about AI agent security. My approach is an MCP firewall: [AgentWall](https://agentwall.cz).

## The agent finds another way

You forbid an AI agent to delete data through MCP. It tries curl instead. If it has access and credentials, it succeeds.

That is why watching **tool calling** alone is not enough. A rule that only covers one channel gets bypassed through another. It does not even take bad intent: a model mistake or a prompt injection is enough, and the agent "helps itself" with whatever is at hand.

## The MCP firewall has to be the only path

**An MCP firewall has to be the only path to the protected system:**

- **it holds the credentials:** the gateway has the tokens, not the agent,
- **it checks every action:** the agent may only call an approved tool with allowed arguments, and anything not allowed is denied,
- **risky operations go through only after human approval:** in AgentWall an approval is valid once and only for the exact arguments the human saw,
- **it keeps an audit trail:** a record that cannot be silently rewritten.

## Under your own control

**AgentWall** can run **on-premise or on EU infrastructure**. With growing dependence on American cloud services, being able to keep access, rules and audit under your own control is a pretty nice bonus.

## Close the direct routes

A firewall is not enough if there is an open road right next to it. The direct routes have to be closed by **a sandbox and network rules**: the agent runs in a sandbox, can only get out through AgentWall and never holds the system credentials. Only then does curl have nothing to succeed with.

AgentWall does not build its own sandbox, though. It plugs into the sandbox the client already has (Claude Code `/sandbox`, the Codex sandbox or Docker Sandboxes) and puts two enforcement points on the single way out: an MCP gateway for tools and an egress proxy for the network. The egress proxy also blocks private and internal addresses after DNS resolution, so the agent cannot reach the internal network even through an allowed domain.

**Agent security starts where "you must not" means "you don't have permission".**
