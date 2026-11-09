---
title: "Fakvio: I type a sentence, the invoice is done"
date: 2026-11-17T08:00:00+01:00
description: "I don't issue invoices through a form anymore, just one sentence in Claude or ChatGPT. How the Fakvio MCP server makes it work and where it gets tricky."
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

I used to issue an invoice by opening the app, clicking through a form and copying a company ID. Today I type one sentence into Claude or ChatGPT and the invoice is done.

That is the common thread of all my apps: if I don't have to open them, I don't. They have MCP and an API.

## The problem: a form

For a sole trader, invoicing is routine. Pick the client, fill in the item, price and due date, issue it, download the PDF, send the e-mail. Every step is simple. Together it is clicking nobody enjoys and nobody gets anything out of.

## The fix: an MCP server

[Fakvio](https://fakvio.cz), my invoicing app for Czech sole traders and small businesses, has an MCP server. MCP is the protocol an AI agent uses to call an app's tools. In Fakvio it covers invoices, clients including the Czech business register (ARES), PDFs, e-mails, received invoices, VAT and tax calculations.

Connecting it in claude.ai or ChatGPT means the address `https://mcp.fakvio.cz/mcp` and a login on Fakvio's own page. The password never goes into the chat. At login I choose whether the AI may only read or also write.

Then it looks like this:

> **Me:** Issue an invoice to Novák s.r.o. for CZK 15,000 for consulting, due in 14 days.
>
> **Agent:** finds the company, issues the invoice with a number from my series and a QR payment code, and sends back a PDF link.
>
> **Me:** E-mail it and copy my accountant.
>
> **Agent:** sends the e-mail with the PDF and ISDOC. It can show me the subject and text for review first.

For a new client the company ID is enough, the details come from ARES. The PDF link is valid for 10 minutes. Originally MCP returned the file as base64 inside the tool result, and a chat client can't turn that into a file.

My rule: every Fakvio feature must also work through MCP. The AI assistant built into the app, on the other hand, I removed. It wasn't reliable and MCP replaced it.

## Where it gets tricky

**The agent trusts tools more than it should.** I asked for my last 6 invoices. The agent returned six invoices, just not the latest ones. The server sorted by document number as text and I have two number series. The agent never checked the sort order and presented the result with confidence. The server now sorts by issue date, but the lesson stands: for "the last N", ask what it is sorted by.

**For the AI, the tool description is the truth.** The e-mail tool said "with PDF attachment" in its description. So the AI claimed ISDOC couldn't be attached, even though it always was. A tool description has to match the behavior.

**ChatGPT is stricter than Claude.** One numeric limit ended up in the JSON schema as a string and ChatGPT rejected the whole tool list because of it. Claude Code didn't mind. The first OAuth connection needed two fixes on my side, the scope format among them. And both ChatGPT and claude.ai keep the tool list from the moment you connected. A new tool shows up only after you disconnect and reconnect, in a new conversation.

## What it brings

I issue invoices where I already work: in the chat. I open the app only when I want to. The same way I can ask what is overdue or how much to pay in advances. Fakvio is free and doesn't resell AI tokens, I pay for AI in my own subscription.

Takeaway: if people don't want to open your app, don't give them a better form. Give them MCP and an API.
