---
title: rich-codex
description: Automatic terminal screenshots for documentation.
projectURL: https://ewels.github.io/rich-codex/
github: ewels/rich-codex
heroImage: /images/projects/rich-codex_hero.svg
iconImage: /images/projects/rich-codex_icon.png
personal: true
order: 15
---

[**rich-codex**](https://ewels.github.io/rich-codex/) is a GitHub Action and command-line tool that automatically generates terminal screenshot images for documentation.
It captures command outputs and code snippets, rendering them as beautifully formatted images using the [rich](https://github.com/Textualize/rich) library.

The tool was born out of frustration with keeping documentation screenshots up to date.
Manually capturing terminal output and updating images every time something changes is tedious and error-prone.
**rich-codex** solves this by scanning markdown files for embedded commands within image tags, executing those commands, and generating fresh screenshots automatically.

Key features include:

- Coloured terminal output support
- Auto-resizing images to accommodate long lines without scrolling
- Multiple output formats: SVG, PNG, and PDF
- Flexible configuration via markdown comments, command-line inputs, or YAML files
- GitHub Actions integration for CI/CD workflows

The workflow is simple: embed a command in your markdown image tag, and **rich-codex** will execute it and generate the screenshot.
This keeps your documentation images perfectly synchronized with your codebase, ensuring examples always reflect the current state of your tools.

For more information, check out the [documentation](https://ewels.github.io/rich-codex/) and [source code on GitHub](https://github.com/ewels/rich-codex).
