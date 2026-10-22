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

Being invited for a keynote is both amazing and a little terrifying.
You can talk about anything! You can talk about _anything_.

I decided that for this talk I mostly wanted to talk about use of AI agents in bioinformatics,
and what the role of community projects like scverse and nf-core might be going forward.
But I had a bunch of other ideas too.

My first idea was to do a "choose your own adventure book" kind of talk, where the audience
could vote to go to different sections. But the voting seemed kind of difficult, and I figured
that I'd need some kind of online / phone-based voting to make it work.
Then I thought - if I'm doing _that_, then why don't I go all in and drop the slides entirely?

So, there were no slides. Instead, the keynote was a pixel-art side-scrolling game:
I walked a little pixel version of myself around a pixel version of the conference venue,
and each room held a different topic. The audience scanned a QR code and ranked the rooms on their phones,
with live bars beside the game showing where they wanted to go next.

<div class="not-prose grid grid-cols-2 gap-4 sm:grid-cols-4">
  <figure>
    <img src="/talks/2026/10/12/scverse_conference/lecture_theatre.png" alt="The lecture theatre scene from the game" class="w-full border-2 border-[#ff6f91] [image-rendering:pixelated]" loading="lazy" />
    <figcaption class="mt-2 text-left text-sm leading-snug">
      <span class="font-semibold text-[#ff6f91]">1.</span> <span class="font-semibold">Why bother writing software?</span><br />
      <span class="text-zinc-500 dark:text-zinc-400">Lecture theatre</span>
    </figcaption>
  </figure>
  <figure>
    <img src="/talks/2026/10/12/scverse_conference/cloakroom.png" alt="The cloakroom scene from the game" class="w-full border-2 border-[#6c8cff] [image-rendering:pixelated]" loading="lazy" />
    <figcaption class="mt-2 text-left text-sm leading-snug">
      <span class="font-semibold text-[#6c8cff]">2.</span> <span class="font-semibold">Building tools for agents</span><br />
      <span class="text-zinc-500 dark:text-zinc-400">Cloakroom</span>
    </figcaption>
  </figure>
  <figure>
    <img src="/talks/2026/10/12/scverse_conference/coffee_break.png" alt="The coffee break scene from the game" class="w-full border-2 border-[#b28dff] [image-rendering:pixelated]" loading="lazy" />
    <figcaption class="mt-2 text-left text-sm leading-snug">
      <span class="font-semibold text-[#b28dff]">3.</span> <span class="font-semibold">Side projects</span><br />
      <span class="text-zinc-500 dark:text-zinc-400">Coffee break</span>
    </figcaption>
  </figure>
  <figure>
    <img src="/talks/2026/10/12/scverse_conference/courtyard.png" alt="The courtyard scene from the game" class="w-full border-2 border-[#e0602e] [image-rendering:pixelated]" loading="lazy" />
    <figcaption class="mt-2 text-left text-sm leading-snug">
      <span class="font-semibold text-[#e0602e]">4.</span> <span class="font-semibold">rewrites.bio</span><br />
      <span class="text-zinc-500 dark:text-zinc-400">Courtyard</span>
    </figcaption>
  </figure>
</div>

Questions came in from phones too. I could moderate them (on my phone) and put them up on screen,
at which point one of the moderator's NPC characters in the game walked up with a "?" and asked it in a speech bubble.
People could send emoji reactions which floated up over the game, and when enough arrived at once the pixel crowd stood up.

You can play it below, or at at Or [https://ewels.github.io/scverse2026-keynote/](https://ewels.github.io/scverse2026-keynote/) - click the game, then use the arrow keys to walk and space to take action:

<iframe
  src="https://ewels.github.io/scverse2026-keynote/"
  title="Choose your own keynote: scverse 2026"
  class="aspect-[4/3] w-full rounded-lg border border-zinc-700"
  loading="lazy"
  allow="fullscreen"
  allowfullscreen
></iframe>

The code is on GitHub at [ewels/scverse2026-keynote](https://github.com/ewels/scverse2026-keynote).
It is plain HTML, CSS and JavaScript with no build step, and all the art is drawn in code - there isn't a single image file.
For the talk I hosted it in CloudFlare in order to have the real-time interactivity.
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

<figure class="not-prose">
  <img src="/talks/2026/10/12/scverse_conference/audience_activity.svg" alt="Messages from phones per minute during the talk, with a spike while ranking the rooms, plus when each question was asked and answered on stage" class="w-full" loading="lazy" />
  <figcaption class="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
    <span><span class="mr-1.5 inline-block size-3 bg-[#7f9cf5] align-[-1px]"></span>Messages per minute</span>
    <span><span class="mr-1.5 inline-block size-3 bg-[#ffd166] align-[-1px]"></span>Question asked</span>
    <span><span class="mr-1.5 inline-block size-3 bg-[#3cc87a] align-[-1px]"></span>Question answered</span>
    <span><span class="mr-1.5 inline-block w-4 border-t-2 border-dashed border-[#3cc87a] align-[3px]"></span>Q&amp;A on stage</span>
  </figcaption>
</figure>




I got through 11 on stage - the rest, along with the route and minute-by-minute activity,
are in the [post-talk audience report](https://ewels.github.io/scverse2026-keynote/report/).

## Easter eggs

It wouldn't be a proper game without secrets. The venue is packed with easter eggs -
drink a little too much coffee, keep throwing bread in the pond until the seagulls take notice,
or take out your frustrations on the foyer plants. Those are just a few; the rest are for you to find.

<img src="/talks/2026/10/12/scverse_conference/drinking_coffee.webp" alt="Pixel-art Phil drinking a cup of coffee" class="mx-auto w-40 rounded-lg [image-rendering:pixelated]" loading="lazy" />
