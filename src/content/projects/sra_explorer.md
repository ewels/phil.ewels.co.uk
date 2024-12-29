---
title: SRA Explorer
description: Mini web application to explore the NCBI SRA. Generates SRA/FastQ download URLs
projectURL: https://sra-explorer.info
github: ewels/sra-explorer
heroImage: /images/projects/sra_explorer-hero.png
iconImage: /images/projects/sra_explorer-icon.png
order: 40
---

[SRA-explorer](https://sra-explorer.info) is a web-based tool designed to simplify searching and downloading data from the NCBI Sequence Read Archive (SRA).
It allows researchers to quickly identify datasets of interest and retrieve download links for further analysis.

SRA-explorer has an interface that's a bit like an online shop. You search and find datasets, add them to your cart and then check-out to get the metadata and download details.
SRA-explorer also integrates with the ENA to get direct FastQ downloads, where available.

- Search for publicly available sequencing datasets by keyword, accession number, or study name.
- View detailed metadata for each dataset, including sequencing technology, sample information, and read length.
- Get direct download links for data in both FastQ and SRA formats, avoiding the need to manually generate them.
- Automatically generate download commands, including `fastq-dump`, which can be copy-pasted into the command line to retrieve data with ease.

I wrote SRA-explorer as a quick hobby project one weekend when I was playing with new web technologies (AngularJS, which dates it). It's a single HTML file that runs entirely in your web browser using APIs from the NCBI SRA and and EBI ENA, with no back-end of it's own.

Despite it's humble beginnings, SRA-explorer has ended up becoming quite popular and helped researchers access sequencing data from across the globe for reuse and analysis.

The source code for SRA-explorer is open-source and available on GitHub at [ewels/sra-explorer](https://github.com/ewels/sra-explorer).
