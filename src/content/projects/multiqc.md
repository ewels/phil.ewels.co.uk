---
title: MultiQC
description: Aggregate results from bioinformatics analyses across many samples into a single report
projectURL: https://multiqc.info
github: MultiQC/MultiQC
# heroImage: /post_img.webp
iconImage: /images/projects/multiqc.svg
logoImage: /images/projects/multiqc_logo.svg
logoImageDark: /images/projects/multiqc_logo_dark.svg
---

[MultiQC](https://multiqc.info) is a reporting tool designed to aggregate output from bioinformatics analyses into a single comprehensive report. It works by scanning results from multiple analysis tools and combining them into a single, user-friendly HTML report.

Researchers and bioinformaticians can use MultiQC to:

- Automatically detect output files from numerous different bioinformatics tools.
- Generate interactive, visual reports for entire analysis pipelines in seconds.
- Track quality control across samples and experiments, allowing for quick assessment of data quality.
- Easily share reports with collaborators using HTML files that can be viewed in any modern web browser.

MultiQC is particularly useful in large-scale projects, where manual inspection of individual tool outputs would be tedious and error-prone. It standardises reporting, ensuring consistency and reproducibility across datasets.

MultiQC supports hundreds of bioinformatics tools, including common quality control programs like FastQC, Qualimap, and Bowtie2. The tool is modular and easily extendable, so new tools can be added quickly, and it supports custom templates to tailor reports to your specific needs.

Some key features include:

- **Modularity:** Easily extend MultiQC to parse new tools with custom modules.
- **Automation:** Integrate into existing pipelines, allowing reports to be generated automatically after each analysis.
- **Visualisation:** Interactive plots and tables are generated, helping users quickly spot trends and issues.
- **Scalability:** Works with large datasets and generates concise summaries, no matter how many samples are included.

MultiQC is open-source and available on GitHub at [MultiQC/MultiQC](https://github.com/MultiQC/MultiQC). The tool has been widely adopted in the bioinformatics community and is used across a range of fields, from genomics to transcriptomics, making it an essential part of modern data processing pipelines.
