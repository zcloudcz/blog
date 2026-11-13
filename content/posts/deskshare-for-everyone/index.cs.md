---
title: "Nikdo neví, co je Server Mode"
date: 2026-11-19T08:00:00+01:00
description: "DeskShare na Linuxu zamrzal, protože čekal sám na sebe. A běžný člověk by nevěděl, co je Server Mode. Jak jsme za jeden den opravili obojí."
tags:
  - deskshare
  - open-source
  - ai-agents
  - ux
image: cover.png
icon: monitor-smartphone
icons:
  - languages
  - shield-check
---

DeskShare je moje open source aplikace na vzdálenou plochu. Jedna pro Windows, macOS i Linux a k tomu prohlížeč, místo VNC na jednom stroji a TeamVieweru na druhém. Nedávno jsem zjistil, že na Linuxu vlastně nefunguje a že ji většina lidí, pro které je určená, stejně neumí ovládat.

## Aplikace, která čekala sama na sebe

Na Linuxu se server zaregistroval, ukázal číslo a kód, a pak okno zamrzlo. Kód na obrazovce se už neměnil, takže člověk do telefonu diktoval kód, který dávno neplatil. Na druhé straně pak vyskočilo „Invalid passkey“.

Můj vývojový AI agent se na zamrzlý proces podíval nástrojem `dotnet-stack` a během pár minut bylo jasno. Spuštění serveru běželo na vlákně uživatelského rozhraní. Zkušební snímač obrazovky se při zavírání zablokoval, protože čekal na knihovnu FFmpeg. Ta ale pro dokončení potřebovala přesně to vlákno, které na ni čekalo. Klasický deadlock. Výměna kódu se pak zasekla na tom, že chtěla aktualizovat zamrzlé okno.

Chybová hláška `FFmpeg error: End of file`, kvůli které jsme nejdřív hledali chybu v zachytávání obrazovky, byla falešná stopa. Hlásila jen to, že se zkušební snímač zavřel.

Oprava měla pár řádků: start běží mimo UI vlákno a okno se aktualizuje bez blokování. K tomu dva testy, které na staré verzi padají. Oprava vyšla ve verzi 1.6.4.

## Server Mode, Client Mode, Passkey

Při testování mi došla druhá věc. Aplikace mluvila jako vývojář: Server Mode, Client Mode, Server ID, Passkey, Start Server. DeskShare ale nejčastěji pustí někdo, komu volá syn nebo technik, ať mu „pustí počítač“. Takový člověk neví, jestli je server, nebo klient. Ví jen, že potřebuje pomoc.

Agent s Codexem si prošli, jak to řeší Windows Quick Assist, Chrome Remote Desktop, AnyDesk nebo RustDesk, a připravili návrh s obrázky. Schválil jsem ho skoro beze změn:

- Na úvodní obrazovce jsou dvě velké volby: **Potřebuji pomoc** a **Chci pomoct někomu**.
- Místo Server ID je **Vaše číslo**, místo Passkey **Kód**, oboje velkým písmem po trojicích, aby se to dalo diktovat do telefonu.
- Před sdílením se zobrazí varování: zavolal vám někdo nečekaně? Nic nesdílejte.
- Ovládání myší a klávesnicí se povoluje zvlášť, u každého připojení, a bez odpovědi se po 30 sekundách samo zamítne.
- Kód teď platí 60 sekund místo 45. Těch 15 sekund navíc je u diktování do telefonu poznat.
- Aplikace, webový prohlížeč i web mluví 17 jazyky a jazyk se vybere sám podle systému nebo prohlížeče.

Desktop, webový viewer a web dělali tři agenti souběžně, každý ve vlastní větvi. Pak jsem si celý postup proklikal sám: sdílení, připojení, žádost o ovládání, povolení a zastavení. Večer bylo zadání, ráno verze 1.7.0 ke stažení.

## Co si z toho beru

Překlady dělala AI a rodilý mluvčí je zatím neviděl. Do arabštiny a japonštiny bych bez agentů nešel vůbec, takže je to pro mě dobrý start, který doladím podle zpětné vazby.

Největší přínos ale nebyl v kódu. Agent si všiml, že „Server Mode“ je pro běžného člověka cizí slovo. Já jsem to v aplikaci denně viděl a přestal jsem si toho všímat.

DeskShare je zdarma na [deskshare.zcloud.cz](https://deskshare.zcloud.cz/) a zdrojový kód je na [GitHubu](https://github.com/zcloudcz/DeskShare).
