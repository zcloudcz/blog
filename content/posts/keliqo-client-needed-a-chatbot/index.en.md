---
title: "A client needed a chatbot. I built a product and renamed it twice"
date: 2026-11-24T08:00:00+01:00
description: "A client needed an AI assistant in their app. Instead of a pricey contract I built Keliqo, AI search over a catalog. Then came the naming saga and a clientHold."
tags:
  - keliqo
  - saas
  - branding
image: cover.png
icon: message-circle
icons:
  - store
  - tags
---

A client wanted an AI chatbot in their mobile app. They got one, and along the way a product was born that went through three names in three weeks.

## The offer I turned down

I build a mobile app for a client, a portal for municipalities. The app was supposed to get an AI assistant: residents ask in their own words and the assistant answers from the portal's content, meaning posts, events and pages.

There was an offer from an outside company on the table. A monthly fee, a minimum commitment, and further phases with no price yet. My verdict was "throwing money away".

Not because the chatbot was useless. Because every website with a catalog needs the same thing: an online store, a city, an app. A tool like that is worth building once and renting out many times. So I built my own AI API as a product, with the client as customer number one.

## What came out of it

[Keliqo](https://keliqo.com) answers only from the customer's catalog. It pulls the catalog from a feed: Heureka, Google Merchant, CSV, Shopify or its own JSON, and detects the format by itself. You add it to a website with one line of code as a widget, and the widget speaks 17 languages.

If Keliqo is unsure, it asks one short follow-up question. If the catalog has no answer, it says so instead of making one up. Every answer links to its sources.

My favorite part is the **Try it** wizard. Paste your web address, Keliqo reads the key pages, picks up your colors and logo, and shows the assistant running on your own content. No signup. You create an account only if you want to keep the result.

The client connects the same way as anyone else. Their backend exposes public content as a feed, and the app asks through a thin proxy.

I wrote the code with Codex, and my AI agent handles deployments to the server. From the rejected offer to production took less than two months.

## The naming saga

Now the fun part.

- The working name was **AIAsistent**, AIA for short, on a zcloud.cz subdomain.
- On November 3 it was rebranded to **ZAIA**. New domain, website in 17 languages, portal moved, redirects in place.
- On November 6 ZAIA was gone and **Keliqo** was born.

ZAIA lasted three days.

I registered keliqo.com on a Friday at 10 p.m. DNS records published, rebrand deployed on the server, everything ready. The domain still did not exist. The registrar held it in **clientHold**, so the .com registry did not delegate it at all. The hold lifts only after payment or after the owner's email is verified. The next day the domain came alive and the server issued its own certificate.

Then the cleanup. The old domain now returns a 301 to keliqo.com. I shut down the old API addresses one by one, only after the logs showed who was still calling them. The client renamed their backend variables from `AIA_*` to `KELIQO_*`.

Some archaeological layers remain. The payment webhook was still called `zaia-prod` days after the rebrand. The feed format is still called `aiajson`.

## What I take away

Building a product instead of a one-off contract paid off. The client has their assistant, and the same service has a public price list for anyone, including a Free plan.

The real lesson is elsewhere: **a name is a dependency too.** Once it is in your domain, certificates, payment gateway, environment variables and someone else's code, every rename means new DNS, certificates, redirects and changes on the client side. Pick the name before you start deploying it. And do not count on a fresh domain working right away.
