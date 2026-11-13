---
title: "DeskShare: remote help with a computer on every system"
date: 2026-11-19T08:00:00+01:00
description: "Instead of TeamViewer on one machine and VNC on another: one app for Windows, macOS and Linux, the helper just uses a browser. Free, open source, mobile coming."
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

When I help someone with their computer remotely, the first question is often how to connect at all. TeamViewer on Windows, VNC with port forwarding on Linux, something else again on a Mac. Meanwhile the person on the phone is looking for the right button. That is why I wrote DeskShare.

## The problem: every system is different

Remote desktop tools either do not run everywhere, or they want you to set up networks, accounts and licences. For the helper that is annoying. For the person who needs help it is often where it ends: they install something, cannot describe what they see, and give up.

I wanted one thing that works the same on every system, needs no account and no open ports, and can be started by someone who is not comfortable with computers.

## How DeskShare works

- **The person who needs help** downloads DeskShare for Windows, macOS (Apple Silicon and Intel) or Linux and clicks **I need help**. The app shows their number and a code to read out over the phone.
- **The helper** does not have to install anything. They open a browser, enter the number and code and see the screen. The desktop app works too.
- **Mouse and keyboard control** is a separate permission. The helper asks for it, and the person at the computer has to click Allow, for every connection. Without an answer the request is denied after 30 seconds.
- **The code changes every minute**, so an old code is useless. Before sharing, the app warns: did someone call you unexpectedly? Do not share anything.

The picture goes over WebRTC directly between the computers, encrypted and with low latency. When a direct connection is not possible, a relay server helps. For companies there is an MSI installer configurable through policies and unattended access with a permanent password.

The app, the web viewer and the website speak 17 languages and pick the language from the system. AI agents did most of the work on the translations and on wording for everyday users; native speakers still have to review them.

## Mobile is on its way

The Flutter mobile app is done in code and passes its tests, but it is not in the stores yet. On Android it does both: connect to a computer and help from your phone, or share the phone screen and get help with it. Remote control of the phone will only be in the version outside Google Play, because Play has strict rules for that kind of app. On iPhone it can only help for now, because iOS allows screen sharing only through a special extension and Apple does not allow remote control of an iPhone at all. It is now waiting for signing and the Google Play and TestFlight setup.

## What it gives me

All it takes is a link to [deskshare.zcloud.cz](https://deskshare.zcloud.cz/en/). The other side clicks I need help and I connect from a browser on whatever device I have at hand. I do not have to care what system or licence anyone has.

DeskShare is free and the source code is on [GitHub](https://github.com/zcloudcz/DeskShare). If something breaks, tell me in the [issues](https://github.com/zcloudcz/DeskShare/issues).
