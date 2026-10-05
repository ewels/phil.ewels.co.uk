---
title: starlight-codeblocks
description: Adds 26 features to code blocks in Astro Starlight, from focus and annotations to API links and runnable examples.
projectURL: https://ewels.github.io/starlight-codeblocks/
github: ewels/starlight-codeblocks
iconImage: /images/projects/starlight-codeblocks_icon.svg
logoImage: /images/projects/starlight-codeblocks_logo.svg
logoImageDark: /images/projects/starlight-codeblocks_logo_dark.svg
personal: true
order: 17.5
---

[**starlight-codeblocks**](https://ewels.github.io/starlight-codeblocks/) is a plugin for [Astro Starlight](https://starlight.astro.build/) that adds 26 features to code blocks. It builds on [Expressive Code](https://expressive-code.com/), which already renders every code block in Starlight, so existing code blocks keep working.

Most features are switched on per block, with a fence attribute or a comment such as `# [!code focus]`. A few, such as file icons and colour swatches, apply to every matching block.

![starlight-codeblocks features](https://ewels.github.io/starlight-codeblocks/og/index.png)

Features:

- **Explain code** with annotations, side annotations, footnotes, inline callouts, scrollycoding and step-by-step walkthroughs
- **Draw attention** with focus, line states (error, warning, note, success) and links from prose to lines in a block
- **Make code easier to read** with hidden lines, expandable blocks, visible whitespace, colourised brackets, colour swatches, file icons, word-level diffs and highlighting for inline code
- **Link code** to URLs, to API docs automatically (with adapters for Python and Nextflow), and to individual lines with permalinks
- **Adapt to the reader** with synced code tabs and fill-in placeholders, where readers type their own values (such as an API token) into every block and the copied code
- **Copy and run** with shell copy that copies the commands without prompts or output, open-in-playground buttons, and runnable Python, JavaScript and TypeScript in the browser

Everything works with a keyboard and a screen reader, in both light and dark themes, and client JavaScript only loads on pages that need it. It also ships an agent skill, so coding agents know how to write with it.

See the [documentation](https://ewels.github.io/starlight-codeblocks/) and [source code on GitHub](https://github.com/ewels/starlight-codeblocks).
