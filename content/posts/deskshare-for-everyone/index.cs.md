---
title: "DeskShare: vzdálená pomoc s počítačem na všech systémech"
date: 2026-11-19T08:00:00+01:00
description: "Místo TeamVieweru na jednom stroji a VNC na druhém jedna aplikace pro Windows, macOS i Linux, pomocník jen v prohlížeči. Zdarma, open source, mobil na cestě."
tags:
  - deskshare
  - open-source
  - webrtc
image: cover.png
icon: monitor-smartphone
icons:
  - laptop
  - smartphone
---

Když někomu pomáhám s počítačem na dálku, často se nejdřív řeší, čím se vůbec připojit. Na Windows TeamViewer, na Linuxu VNC s otevíráním portů, na Macu zase něco jiného. A druhá strana mezitím po telefonu hledá, kam kliknout. Proto jsem napsal DeskShare.

## Problém: každý systém jinak

Nástroje na vzdálenou plochu buď nefungují všude, nebo chtějí nastavovat síť, účty a licence. Pro technika je to otrava. Pro člověka, který potřebuje pomoc, je to často konečná: nainstaluje něco, nedokáže říct, co vidí, a vzdá to.

Chtěl jsem jednu věc, která funguje stejně na všech systémech, nepotřebuje účet ani otevřené porty a zvládne ji pustit i někdo, kdo s počítačem moc nekamarádí.

## Jak DeskShare funguje

- **Ten, kdo potřebuje pomoc**, si stáhne DeskShare pro Windows, macOS (Apple Silicon i Intel) nebo Linux a klikne na **Potřebuji pomoc**. Aplikace mu ukáže jeho číslo a kód, které nadiktuje do telefonu.
- **Pomocník** nic instalovat nemusí. Otevře prohlížeč, zadá číslo a kód a vidí obrazovku. Může použít i desktopovou aplikaci.
- **Ovládání myší a klávesnicí** je samostatné povolení. Pomocník o něj požádá a člověk u počítače musí kliknout na Povolit, u každého připojení zvlášť. Bez odpovědi se žádost po 30 sekundách sama zamítne.
- **Kód se mění každou minutu**, takže starý kód nikomu k ničemu není. Před sdílením aplikace upozorní: zavolal vám někdo nečekaně? Nic nesdílejte.

Obraz jde přes WebRTC přímo mezi počítači, šifrovaně a s nízkým zpožděním. Když přímé spojení nejde, pomůže přenosový server. Pro firmy je MSI instalátor s nastavením přes politiky a nehlídaný přístup s trvalým heslem.

Aplikace, prohlížeč i web mluví 17 jazyky a jazyk se vybere sám podle systému. Většinu práce na překladech a na srozumitelných textech pro běžné uživatele odvedli AI agenti, rodilí mluvčí je teprve projdou.

## Mobil je na cestě

Mobilní aplikace ve Flutteru je hotová v kódu a prochází testy, do obchodů zatím nešla. Na Androidu umí obojí: připojit se k počítači a pomáhat z telefonu, nebo sdílet obrazovku telefonu a nechat si s ním pomoct. Ovládání telefonu na dálku bude jen ve verzi mimo Google Play, protože Play má pro takové aplikace přísná pravidla. Na iPhonu zatím jen pomáhá, protože sdílení obrazovky iOS dovoluje jen přes zvláštní rozšíření a ovládat iPhone na dálku Apple nedovolí vůbec. Teď čeká na podpis a založení v Google Play a TestFlightu.

## Co mi to přináší

Stačí poslat odkaz na [deskshare.zcloud.cz](https://deskshare.zcloud.cz/). Druhá strana klikne na Potřebuji pomoc a já se připojím z prohlížeče na čemkoli, co mám zrovna po ruce. Nemusím řešit, jaký má kdo systém ani licenci.

DeskShare je zdarma a zdrojový kód je na [GitHubu](https://github.com/zcloudcz/DeskShare). Jestli na něco narazíte, napište mi do [issues](https://github.com/zcloudcz/DeskShare/issues).
