---
title: scverse Conference 2026
description: "Choose your own keynote: a pixel-art game, steered live by the audience"
online: false
location: Copenhagen
countryFlag: dk
type: Invited speaker
keynote: true
logoImage: /talks/2026/10/12/scverse_conference/scverse.svg
logoImageDark: /talks/2026/10/12/scverse_conference/scverse_darkbg.svg
eventURLs:
  - https://scverse.org/conference2026/
date: 2026-10-12
---

[scverse](https://scverse.org/) is an open source software platform for single-cell and spatial data analysis.
I was invited to give a keynote at their third annual conference, held at DTU in Lyngby, Copenhagen, from October 12-14, 2026.
Previous editions were held in Munich (2024) and Stanford (2025).

## Choose your own keynote

There were no slides. Instead, the keynote was a pixel-art side-scrolling game:
I walked a little pixel version of myself around a pixel version of the conference venue,
and each room held a different topic. The audience scanned a QR code and ranked the rooms on their phones,
with live bars beside the game showing where they wanted to go next.

Questions came in from phones too. When I put one on screen, a character in the game walked up with a "?" to ask it.
Thumbs, hearts and party poppers floated up over the game, and when enough arrived at once the pixel crowd stood up.

You can play it right here - click the game, then use the arrow keys to walk and space to take action:

<iframe
  src="https://ewels.github.io/scverse2026-keynote/"
  title="Choose your own keynote: scverse 2026"
  class="aspect-[4/3] w-full rounded-lg border border-zinc-700"
  loading="lazy"
  allow="fullscreen"
  allowfullscreen
></iframe>

Or [open it full screen](https://ewels.github.io/scverse2026-keynote/).
The code is on GitHub at [ewels/scverse2026-keynote](https://github.com/ewels/scverse2026-keynote).
It is plain HTML, CSS and JavaScript with no build step, and all the art is drawn in code - there isn't a single image file.
All of it was written by Claude, with a small Cloudflare Worker syncing votes and questions during the talk.

## What I spoke about

The talk opened in the lecture theatre with _Why bother writing software?_:
if an agent can write a tool in minutes, why build software carefully at all?
I argued for deterministic building blocks, and for pooling AI effort into shared community tools rather than countless throwaway scripts.

From there, the audience sent me to:

- **Building tools for agents** (the cloakroom): your tools now have two audiences, people and AI agents.
  I covered `llms.txt`, agent environment variables, `AGENTS.md` and why context is everything.
- **Side projects** (the coffee break): AI means you can finally build the crazy ideas -
  contributor graphs, nf-docs, nf-metro, Stream Deck plugins and gfm-tidy.
- **[rewrites.bio](https://rewrites.bio)** (the courtyard): rewriting bioinformatics tools in Rust,
  when you should and when to contribute upstream instead, with RustQC, ruSTAR and FastQC-Rust as examples.

We ran out of time before reaching nf-core community building, MultiQC and documentation sites.
They finished in that order in the final vote, separated by just a handful of points.

## The audience

64 phones joined in, sending around 630 messages and 22 questions.
The questions were brilliant, ranging from whether nf-core will suffer as LLMs default to Python,
to scientific attribution for agent-written rewrites, to how hackathons change when projects are done in two hours
and everyone eats cake for the next three days.
I got through 11 on stage - the rest, along with the route and minute-by-minute activity,
are in the [post-talk audience report](https://ewels.github.io/scverse2026-keynote/report/).

## Easter eggs

It wouldn't be a proper game without secrets. The venue is packed with easter eggs -
drink a little too much coffee, keep throwing bread in the pond until the seagulls take notice,
or take out your frustrations on the foyer plants. Those are just a few; the rest are for you to find.
