---
title: rich-click
description: Format click help output nicely with rich.
projectURL: https://ewels.github.io/rich-click/
github: ewels/rich-click
heroImage: /images/projects/rich-click-example.svg
iconImage: /images/projects/rich-click-icon.png
logoImage: /images/projects/rich-click-logo.png
logoImageDark: /images/projects/rich-click-logo-darkmode.png
order: 35
---

[**rich-click**](https://ewels.github.io/rich-click/latest/) is a powerful Python library that transforms the appearance of command-line interfaces by bringing beautiful, colorful formatting to Click-based applications.
I developed rich-click to address the plain, monochrome help text that most Click-based command-line tools produce—something that had been bothering me for years.

**rich-click** serves as a drop-in replacement for [Click](https://click.palletsprojects.com/en/stable/), leveraging the [rich](https://github.com/Textualize/rich) library to render help output with colour, borders, and visual enhancements that make command-line tools more accessible and user-friendly.
To use **rich-click**, simply just change `import click` to `import rich_click as click` and suddenly your CLI gets beautifully formatted help output with boxes, colors, and clear visual hierarchy.

What started as a personal tool to scratch my own itch accidentally became popular, growing to over 1 million weekly downloads.
**rich-click** has evolved far beyond basic help formatting to include features like customizable styling, argument display options, command grouping and sorting, export to HTML and SVG formats, and even a standalone CLI tool that can enhance any existing Click application without code changes.
The project includes a live style editor, comprehensive documentation, and has attracted a growing community of contributors who have added testing, type hinting, performance improvements, and new features.

When the project's unexpected popularity outgrew my ability to maintain it alone, Daniel Reeves joined as a core maintainer, bringing crucial expertise in testing, documentation, and project infrastructure that has helped **rich-click** continue to evolve and serve its growing user base.

For more information, you can explore the [**rich-click** documentation](https://ewels.github.io/rich-click/) and source code on [GitHub](https://github.com/ewels/rich-click).
See also the [PyCon 2024 talk](/talks/2024/11/14/pycon_sweden_rich-click) that I gave about **rich-click**.
