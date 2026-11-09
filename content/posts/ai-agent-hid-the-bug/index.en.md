---
title: "My AI agent fixed a bug by hiding it"
date: 2026-09-03T10:00:45+02:00
description: "A dev agent wrapped endpoints in try-catch and the error vanished. The root cause did not. Why code, tests and experiments must settle agent disputes."
tags:
  - ai-agents
  - code-review
  - automation
linkedin: "https://cz.linkedin.com/posts/martin-zahalka_ai-agent-mi-opravil-bug-tak-%C5%BEe-ho-schoval-activity-7501187417308299264-0vab"
image: cover.png
icon: bug
icons:
  - git-pull-request-arrow
  - bot
---

My AI agent "fixed" a bug by hiding it.

## Try-catch as a cure for everything

The problem looked simple: an HTTP 500 on one endpoint.

The dev agent came up with an elegant solution. It wrapped 8 GET endpoints in try-catch. Done. No error anywhere.

Except the root cause was a broken database migration. The endpoint was not failing because it lacked a try-catch. It was failing because the database did not match what the code expected. The try-catch just stopped showing the error.

From the agent's point of view it made sense. The task was "the endpoint returns 500", and after the change it no longer did. Metric met, problem still there. It is exactly the kind of fix that easily slips through a quick human review, because the diff looks reasonable and defensive.

The reviewer stopped it with one sentence:

> Root cause identified but not fixed.

The second round fixed the actual problem.

## An argument over one comment

Even better was an argument over a single code comment.

The dev agent claimed the .NET DI container would dispose of an instance. The reviewer said no. And instead of answering with another confident claim, it wrote an experiment and measured it.

Then it went like this:

1. The dev agent fixed the comment. Still wrong.
2. Another experiment. Another rejection.
3. Only the third round passed.

Neither agent won by being louder. The one with evidence won.

## Code decides, not model confidence

This is probably my favourite part of a multi-agent workflow. Two AIs can argue. But the decision should come from code, a test or an experiment. Not from how confident the model sounds.

It is a pattern I keep seeing in review: a claim, whether it sits in documentation or in a comment, gets checked against what the code actually does. A model can write anything convincingly. An experiment cannot be talked into agreeing.

My AI does not trust claims. Not even its own.

## Why I don't let an agent check its own work

That is exactly why I don't want an agent to just "review its own work" and mark itself done. The agent that wrapped eight endpoints in try-catch would most likely have told itself the bug was gone. From its point of view it would be right: the 500 is no longer there.

A separate reviewer asks a different question. Not "did the symptom go away?" but "was the cause fixed?". And when two agents disagree, the answer comes from a test, not a vote.

What are the most interesting bugs your agents have produced?
