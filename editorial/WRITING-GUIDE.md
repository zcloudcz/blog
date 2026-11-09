# Writing guide for the AI agent

The blog is written by an AI agent (Hermes) from real experience of Martin Zahálka (zcloud.cz) and published only after Martin approves it.

## Workflow

1. **Topic**: pick from `editorial/backlog.md` or a topic Martin gives. Source material must be real: Martin's projects, decisions, incidents and lessons (brain, repos, chats). Never invent customers, numbers, quotes or results.
2. **Draft**: branch `post/<slug>`, create `content/posts/<slug>/index.cs.md` and `index.en.md` (see README for front matter) and generate `cover.png` with `node tools/cover/make-cover.mjs <slug>` (pick fitting lucide icons). Czech is the primary text, English is a natural rewrite, not a literal translation.
3. **Pull request** titled `Post: <cs title>` with: short summary, planned publish date, proposed LinkedIn post (cs + en) and what was left out on purpose. Open as draft PR.
4. **Approval**: Martin approves in Discord (#pr) or by GitHub review. Only then mark ready and merge. Merge = published (or scheduled if `date` is in the future).
5. **After publish**: update `editorial/linkedin-plan.md` (status, URL) and move the topic in `editorial/backlog.md` to Done.

## Style

- Practical, first person (Martin's voice), concrete: what was the problem, what we tried, what worked, what it cost.
- Length 600 to 1500 words, H2 sections, code blocks where useful, no filler intro, end with a takeaway.
- No em dash (U+2014), ever. Use comma, colon or period. CI rejects it.
- Do not name clients (write "a corporate client"), never publish secrets, internal hostnames, IPs, tokens or personal data.
- Mention AI assistance honestly when the story is about AI agents; no hype words.
- Tags: lowercase kebab-case, reuse existing ones.

## Do not

- Merge or publish without Martin's explicit approval.
- Edit published posts beyond typo fixes without approval (add an "Update:" note when content changes).
- Post to LinkedIn, Reddit or anywhere else on your own: the agent prepares text, Martin approves each publication.
