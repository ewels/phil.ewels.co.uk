---
title: starlight-pydocs
description: Python API reference documentation for Astro Starlight sites.
projectURL: https://ewels.github.io/starlight-pydocs/
github: ewels/starlight-pydocs
iconImage: /images/projects/starlight-pydocs_icon.svg
logoImage: /images/projects/starlight-pydocs_logo.svg
logoImageDark: /images/projects/starlight-pydocs_logo_dark.svg
personal: true
order: 18
---

[**starlight-pydocs**](https://ewels.github.io/starlight-pydocs/) generates Python API reference documentation for [Astro Starlight](https://starlight.astro.build/) and plain [Astro](https://astro.build/) sites. It reads your package with [Griffe](https://mkdocstrings.github.io/griffe/) and renders the result with Astro components, one page per module.

Extraction is static analysis, so nothing is imported and nothing needs installing. It's the Starlight counterpart of [mkdocstrings-python](https://mkdocstrings.github.io/python/) and follows its conventions where possible.

Features:

- **Generated pages** injected into the site's routes, with a sidebar tree and prev/next links that mirror the package layout
- **Autodoc component** to render a single class or function into a hand-written MDX page
- **Symbol search** by object path, on top of the site's existing prose search
- **Docstring sections** in Google, numpy or sphinx style, rendered by your site's own markdown pipeline
- **Build-time generation**, or supply a JSON dump from CI so the site builds without a Python interpreter
- **Linked signatures**, resolving annotations to your own pages or to other projects via Sphinx inventories
- **Inherited members** merged from base classes and labelled with where they came from
- **Inventory and llms.txt** output, so other documentation sites and language models can consume yours

It runs as a Starlight plugin, or standalone in any Astro project with a minimal built-in layout.

See the [documentation](https://ewels.github.io/starlight-pydocs/) and [source code on GitHub](https://github.com/ewels/starlight-pydocs).
