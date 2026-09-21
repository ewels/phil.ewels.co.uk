---
title: PyCon Sweden 2026
description: "Starlight Pydocs: Python API reference in Astro Starlight"
online: false
location: Stockholm
countryFlag: se
type: Conference talk
logoImage: /talks/2024/11/14/pycon_sweden_rich-click/pycon_sweden_logo.png
eventURLs:
  - https://pycon.se/
date: 2026-11-19
---

Talk at PyCon Sweden 2026, held at the Clarion Skanstull Hotel in Stockholm, about my [starlight-pydocs](/projects/starlight-pydocs) project ([docs](https://ewels.github.io/starlight-pydocs/), [GitHub](https://github.com/ewels/starlight-pydocs)).

## Abstract

Good documentation is really important for the success of a Python package. Good docs open the door for discovery, installation and usage. _Great_ docs have guides, examples, and a complete reference for the Python API surface.

Python docstrings are the perfect place to write the reference docs. They sit next to the code that's being written, staying updated and helping contributors. No-one wants to write the same thing twice, so the reference docs should be generated from the Python source directly.

[Astro Starlight](https://starlight.astro.build/) is a modern, fast, and static site generator for documentation websites that is rapidly gaining popularity. It handles the hand-written half beautifully, with lots of functionality and components available out the box. It also has a strong community of theme and plugin authors. I wrote `starlight-pydocs` to make it super easy to build Starlight documentation websites for your Python package. It's the perfect package for anyone moving away from `mkdocs` and `mkdocstrings`.

All that [Starlight Pydocs](https://ewels.github.io/starlight-pydocs/) needs is a couple of lines of configuration, and you get an automatically built API docs section with one page per module. Docs show signatures with hyperlinked types, parameter tables, inherited members with provenance and full syntax highlighting. The plugin is agent-friendly: every page also answers as plain Markdown, and each package publishes an `llms.txt` and a Sphinx inventory so other sites can link to yours.

In this talk I'll build a new docs site from scratch, live, and show how easy it is to get a beautiful docs site with Starlight.

## Talk Details

Astro is a Node framework, and Starlight is a documentation theme built on top of it. It renders Markdown, MDX, `.astro` components, React, Vue, and whatever else you throw at it, but none of that helps it read a Python package. Something has to cross the language boundary and describe your API to a JavaScript build.

To do this, `starlight-pydocs` uses [Griffe](https://mkdocstrings.github.io/griffe/), the library that already powers `mkdocstrings`. Griffe reads your source by static analysis and parses google, numpy and sphinx docstrings into structured sections, then writes the whole API surface to a single JSON file. `starlight-pydocs` runs griffe at docs build time (using `uvx` by default), so your docs are always up to date. Output is rendered with Astro components, one page per module, injected straight into your site's routes. If you like there's an `<Autodoc>` element you can use wherever you like.

In the talk I'll build a site from scratch, live. I'll show how types in signatures link to their own pages, or out to the standard library and any project publishing an inventory. I'll show the symbol search and explain how release version labels are automatically pulled from git tags. I'll demonstrate how every page is served as plain Markdown for agents, as well an `objects.inv` so other documentation sites can link back into yours.

The talk is for anyone maintaining a Python package with documentation, or thinking about moving one. Intermediate level, and no Astro or JavaScript knowledge assumed.
