---
title: Type Deck
description: A Stream Deck plugin that types preset text into the focused app, with optional human-like timing, typos, and jitter.
projectURL: https://marketplace.elgato.com/product/type-deck-437fd2bf-0b88-473f-826b-fd8ed1dcfb74
github: ewels/type-deck
iconImage: /images/projects/type-deck_icon.png
logoImage: /images/projects/type-deck_logo.svg
logoImageDark: /images/projects/type-deck_logo_dark.svg
personal: true
order: 25
---

[**Type Deck**](https://marketplace.elgato.com/product/type-deck-437fd2bf-0b88-473f-826b-fd8ed1dcfb74) ([ewels/type-deck](https://github.com/ewels/type-deck) is a [Stream Deck](https://www.elgato.com/stream-deck) plugin that types preset text into the focused application when you press a key, with optional human-like timing, typos, and jitter so the output doesn't look obviously automated.

It's useful for things like inserting boilerplate snippets, demo scripts, prepared answers, or replaying short typed sequences while screen-sharing.

## Actions

- **Type text** — types the configured text every press. Optional long-press types a second, different string.
- **Cycle next** — each non-empty line of the text field is one entry. Each press types the next line, looping back to the start.
- **Random pick** — same line-per-entry format as Cycle next, but each press picks one at random.

## Features

- **Per-character, per-word and per-paragraph delays.** Tune typing speed to suit the receiving app or demo situation.
- **Jitter.** Randomize each delay by ±N % so the rhythm doesn't feel too robotic. Enabled by default at 100 %.
- **Adjacent-key typos.** Per-character chance of typing a wrong key, pausing, hitting backspace, and continuing. What could be more human than errors?
- **Template variables.** Inline tokens like `{date}`, `{time}`, `{clipboard}` and `{counter}` are expanded at type-time.
- **Cancel or queue.** Pressing the key while it's already typing either aborts the current run (default) or queues another to start immediately after.

Try it out by installing from the [Elgato Marketplace](https://marketplace.elgato.com/product/type-deck-437fd2bf-0b88-473f-826b-fd8ed1dcfb74).

Find the latest release and source code on [GitHub](https://github.com/ewels/type-deck).

![Type-Deck](/images/projects/type-deck_screenshot.png)
