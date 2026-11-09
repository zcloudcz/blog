---
title: "Bezpečnost AI agentů přes MCP firewall"
date: 2026-09-21T09:03:43+02:00
description: "Zakážete agentovi mazat data přes MCP a on to zkusí přes curl. Proč MCP firewall musí být jedinou cestou k chráněnému systému a jak k tomu přistupuje AgentWall."
tags:
  - ai-security
  - mcp
  - agentwall
  - ai-agents
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_aiagents-aisecurity-mcp-activity-7507696043480731648-aQZp"
---

Všude se řeší bezpečnost AI agentů. Já na to jdu přes MCP firewall: [AgentWall](https://agentwall.cz).

## Agent si najde jinou cestu

Zakážete AI agentovi smazat data přes MCP. On to zkusí přes curl. Pokud má přístup a credentials, uspěje.

Proto nestačí hlídat jen **tool calling**. Pravidlo, které platí jen pro jeden kanál, agent obejde jiným kanálem. Nemusí to být ani zlý úmysl: stačí chyba modelu nebo prompt injection a agent si „pomůže“ tím, co má zrovna po ruce.

## MCP firewall musí být jedinou cestou

**MCP firewall musí být jedinou cestou k chráněnému systému:**

- **drží credentials:** tokeny k systémům má gateway, ne agent,
- **kontroluje každou akci:** agent smí volat jen schválený nástroj s povolenými argumenty, co není povoleno, je zakázáno,
- **rizikové operace pustí až po schválení člověkem:** v AgentWallu platí schválení jednou a přesně pro ty argumenty, které člověk viděl,
- **vytváří auditní stopu:** záznam, který nejde tiše přepsat.

## Pod vlastní kontrolou

**AgentWall** může běžet **on-premise nebo v EU infrastruktuře**. V době rostoucí závislosti na amerických cloudových službách je možnost udržet přístupy, pravidla i audit pod vlastní kontrolou docela příjemný bonus.

## Zavřít přímé cesty

Firewall sám nestačí, pokud vedle něj vede otevřená silnice. Přímé cesty musí zavřít **sandbox a síťová pravidla**: agent běží v sandboxu, ven se dostane jen přes AgentWall a credentials k systémům vůbec nemá. Teprve pak nemá curl s čím uspět.

AgentWall přitom nestaví vlastní sandbox. Zapojí se do sandboxu, který klient už má (Claude Code `/sandbox`, sandbox v Codexu nebo Docker Sandboxes), a do jediné cesty ven postaví dva body vynucení: MCP gateway pro nástroje a egress proxy pro síť. Egress proxy navíc po DNS překladu blokuje privátní a interní adresy, takže se agent nedostane do vnitřní sítě ani přes povolenou doménu.

**Bezpečnost agenta začíná tam, kde „nesmíš“ znamená „nemáš oprávnění“.**

*Původně vyšlo na [LinkedInu](https://cz.linkedin.com/posts/martin-zahalka_aiagents-aisecurity-mcp-activity-7507696043480731648-aQZp).*
