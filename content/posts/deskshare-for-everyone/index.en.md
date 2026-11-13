---
title: "Nobody knows what Server Mode means"
date: 2026-11-19T08:00:00+01:00
description: "DeskShare froze on Linux because it was waiting for itself. And a normal person would not know what Server Mode is. How we fixed both in one day."
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

DeskShare is my open source remote desktop app: one app for Windows, macOS and Linux plus a browser viewer, instead of VNC on one machine and TeamViewer on another. Recently I found out that it did not really work on Linux, and that most of the people it is meant for could not use it anyway.

## An app waiting for itself

On Linux the server registered, showed the number and the code, and then the window froze. The code on screen stopped changing, so the person reading it over the phone was dictating a code that had expired long ago. The other side got "Invalid passkey".

My development AI agent looked at the frozen process with `dotnet-stack`, and within a few minutes it was clear. Starting the server ran on the UI thread. A short-lived probe capturer blocked while closing, because it was waiting for FFmpeg, and FFmpeg needed exactly the thread that was waiting for it to finish. A textbook deadlock. The code rotation then got stuck trying to update the frozen window.

The `FFmpeg error: End of file` message that first sent us hunting in screen capture was a red herring. It only reported that the probe had been closed.

The fix was a few lines: start-up runs off the UI thread and the window updates without blocking. Plus two tests that fail on the old version. It shipped in version 1.6.4.

## Server Mode, Client Mode, Passkey

While testing, the second problem became obvious. The app talked like a developer: Server Mode, Client Mode, Server ID, Passkey, Start Server. But DeskShare is mostly started by someone whose son or IT person just said "let me look at your computer". That person does not know if they are a server or a client. They know they need help.

The agent and Codex went through how Windows Quick Assist, Chrome Remote Desktop, AnyDesk and RustDesk handle this and came back with a proposal and mockups. I approved it almost as is:

- The home screen has two big choices: **I need help** and **Help someone**.
- Server ID became **Your number** and Passkey became **Code**, both large and grouped in threes so they are easy to read out over the phone.
- Before sharing, a plain warning: did someone call you unexpectedly? Do not share anything.
- Mouse and keyboard control is a separate permission for every connection, and the request is denied automatically after 30 seconds without an answer.
- The code is now valid for 60 seconds instead of 45. Those 15 seconds matter when you are dictating it to someone.
- The app, the web viewer and the website speak 17 languages and pick the language from the system or the browser.

Three agents worked on the desktop app, the web viewer and the website at the same time, each on its own branch. Then I clicked through the whole flow myself: sharing, connecting, asking for control, allowing it and stopping. The brief went out in the evening and version 1.7.0 was ready to download in the morning.

## What I take from it

The translations were made by AI and no native speaker has checked them yet. I would never have tried Arabic or Japanese without agents, so for me it is a good start that I will polish with feedback.

The biggest win was not the code. The agent noticed that "Server Mode" means nothing to a normal person. I saw that label in the app every day and had stopped noticing it.

DeskShare is free at [deskshare.zcloud.cz](https://deskshare.zcloud.cz/en/) and the source is on [GitHub](https://github.com/zcloudcz/DeskShare).
