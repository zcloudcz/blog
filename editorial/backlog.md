# Backlog témat

Témata z reálné práce podle brainu (stav k 2026-11-09). Martin vybírá, agent píše. Fakta se před psaním ověřují v brainu a repech, klienti se nejmenují.

## AI agenti v praxi

1. **Second brain pro AI agenty: hlídejte zápis, ne vyhledávání**: brain v gitu, append jen do inboxu, denní konsolidace, memory poisoning, past s basic-memory, který přepisoval frontmatter. `#ai-agents #knowledge-base`
2. **Dva AI agenti v týmu: vývojář a provozák**: Hermes Dev píše kód a PR, Hermes Ops nasazuje na VPS. Předávání práce a místa, kde musí rozhodnout člověk. `#ai-agents #devops`
3. **Když spolu mluví boti**: zmínky, loop guard a smyčka „díky/ok“. `#ai-agents`
4. **AI asistent na vlastním notebooku**: proč agent dostal vlastní stroj místo kontejneru, systemd služby, co se při stěhování rozbilo. `#ai-agents #linux`
5. **AgenticTeam: Kanban s AI rolemi** (analytik, developer, reviewer, tester, ops) a pasti z drainu 20+ karet. `#ai-agents #workflow`
6. **Tracker místo GitHub Projects**: stavový automat v SQLite a karta, která se posune jen s důkazem, ne s tvrzením agenta. `#ai-agents #mcp`
7. **Který model co dělá**: Sonnet implementuje, Opus, Codex a hydra reviewují, a proč se drahé review šetří na auth, data a migrace. `#llm #code-review`
8. **AgentWall: AI agent navrhuje, firma rozhoduje**: proč agenti potřebují vrstvu pro pravidla, schvalování a audit. `#ai-agents #security`
9. **Fakturace ovládaná AI agentem přes MCP**: zkušenost z Fakvia. `#mcp #saas`
10. **Klon vlastního hlasu**: XTTS, RVC, Seed-VC a Piper proti ElevenLabs, co fungovalo a co ne. `#ai #voice`
11. **Lokální AI na NPU**: Whisper pro češtinu na AMD Ryzen AI Max+ přes Lemonade místo Ollamy. `#ai #local-ai`
12. **AI E2E testy**: Playwright nad Blazorem a agentní kroky s cache. `#testing #ai-agents`

## .NET, Azure a provoz

13. **Migrace Blazor Server na WASM**: co se rozbilo v auth, JS interopu a lokalizaci. `#blazor #dotnet`
14. **EF Core pasti, které projdou testy**: tichá ztráta vazeb u detached grafu a fixup, který zamaskuje chybějící `Include`. `#dotnet #ef-core`
15. **Z Azure databází na vlastní PostgreSQL**: náklady, PgBouncer, schéma na tenanta. `#postgres #azure #costs`
16. **Jak Git Bash shodil produkci**: přepis cest `/home/...` v `az` příkazech. `#azure #windows`
17. **GitHub OIDC do Azure bez secretů**: nový tvar subjectu a pasti s Entra External ID. `#azure #github`
18. **Úklid Dependabot alertů v 56 repech za den**. `#security #github`
19. **Statické weby na GitHub Pages za 0 Kč**: tento blog, a jak nenechat subdoménu otevřenou k převzetí. `#github-pages #dns`

## Produkty a indie vývoj

20. **Jay: E2E šifrovaný messenger s anonymním přístupem**: notifikace, když server nezná obsah zpráv. `#flutter #security`
21. **zDrive: vlastní Google Photos**: sync klienti pro 4 platformy a MCP server pro AI. `#flutter #dotnet`
22. **Rebranding SaaS za víkend**: nová doména v clientHold, 301 přesměrování, Stripe z testu do live. `#saas #stripe`
23. **EET 2.0 očima vývojáře fakturační aplikace**. `#fakturace #legislativa`
24. **PdfJoin: PDF nástroj, kde soubory neopustí prohlížeč**. `#privacy #web`
25. **Mobilní hra jako vedlejší projekt**: BeatCastle v Unity 6 a cesta do Google Play. `#unity #gamedev`

## Rozpracované

(žádné)

## Hotové

(žádné)
