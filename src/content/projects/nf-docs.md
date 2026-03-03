---
title: nf-docs
description: Generate beautiful API documentation for Nextflow pipelines
projectURL: https://ewels.github.io/nf-docs/
github: ewels/nf-docs
heroImage: /images/projects/nf-docs-demo.gif
iconImage: /images/projects/nextflow.svg
order: 45
---

[**nf-docs**](https://ewels.github.io/nf-docs/) is a Python-based documentation generation tool for Nextflow pipelines, similar to Sphinx or Javadoc.
I developed it out of curiosity about how the new Nextflow Language Server Protocol (LSP) could be leveraged to capture documentation that developers write within Nextflow code and transform it into better user-facing documentation.

The tool parses pipeline code to extract structured information about processes, workflows, parameters, and channels, then generates documentation in three different formats to suit various use cases:

- **HTML**: A beautiful, self-contained single-file format with full-text search, dark mode support, deep linking, and mobile-responsive design—perfect for sharing and hosting
- **Markdown**: Multi-file output that integrates seamlessly with static site generators like Astro, MkDocs, or Docusaurus
- **JSON/YAML**: Machine-readable formats ideal for CI/CD pipelines, automated testing, and custom integrations

The tool is designed to be simple to use—just run `nf-docs generate ./my_pipeline` and you'll get comprehensive documentation with minimal configuration.
The resulting documentation includes detailed information about pipeline parameters, processes, workflows, configuration options, and more, all presented in a clean, searchable interface.

**nf-docs** is an independent side-project. It is not an official Nextflow project.

For more information, you can explore the [**nf-docs** documentation](https://ewels.github.io/nf-docs/) and source code on [GitHub](https://github.com/ewels/nf-docs).
