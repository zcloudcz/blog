---
title: "PdfJoin: merge PDFs and images without uploading them anywhere"
date: 2026-08-25T10:00:16+02:00
description: "Need to merge a few PDFs or images? PdfJoin does it right in your browser. Files never leave your device, no sign-up, free."
tags:
  - privacy
  - web
  - open-source
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_pdfjoin-slou%C4%8Den%C3%AD-pdf-activity-7497925802747924498-aiez"
---

You need to quickly merge a few PDFs or images into a single PDF. Sound familiar?

So you open some online tool full of ads, upload a contract, an invoice, a scan or a few photos… and hope everything's fine. 😅

That's exactly why I built [PdfJoin](https://pdf.zcloud.cz).

## It does one thing

- takes PDFs and images,
- lets you put them in order,
- merges them,
- produces one PDF.

You can also pick the page format: original, A4 or A3, and whether the content should fit entirely on the page or fill it. Orientation is set automatically per page. I wanted the choice to be the user's, not the tool's.

## But most importantly

- **Your files never leave your device.**
- Everything runs right in the browser.
- No upload to any server.
- No sign-up.
- Free.

For a tool people feed contracts and invoices into, privacy is the whole point. The simplest way not to leak data is never to receive it. That's why PdfJoin is purely client-side and has no server to send anything to.

## Under the hood

TypeScript, pure frontend, no backend. Specifically Vite, [pdf-lib](https://pdf-lib.js.org/) for assembling the final PDF, pdf.js for page thumbnails and SortableJS for drag-and-drop ordering. It's hosted on GitHub Pages and the source is public on [GitHub](https://github.com/zcloudcz/PdfJoin).

One small lesson from development that might help anyone rendering PDFs with pdf.js: the default display render schedules its work via `requestAnimationFrame`. When the tab is in the background, Chrome doesn't fire rAF, so `page.render().promise` doesn't resolve until the tab repaints. In automated tests it looks like a random hang. The fix is to pass `intent: 'print'` to the render call, which runs on `setTimeout` and doesn't care whether the tab is visible.

## Give it a try

[pdf.zcloud.cz](https://pdf.zcloud.cz), it might come in handy. 🙂 Feedback welcome.

*Originally posted on [LinkedIn](https://cz.linkedin.com/posts/martin-zahalka_pdfjoin-slou%C4%8Den%C3%AD-pdf-activity-7497925802747924498-aiez) (in Czech).*
