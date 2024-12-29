---
title: Labrador
description: A web based tool to manage and automate the processing of publicly available datasets
projectURL: https://www.bioinformatics.babraham.ac.uk/projects/labrador/
github: ewels/labrador
heroImage: /images/projects/Labrador_screenshot_800px.png
iconImage: /images/projects/Labrador_logo.png
archived: true
order: 60
---

Labrador is a web based tool to manage project metadata and data, and also help automate the processing of publicly available datasets.

I wrote Labrador as my first software project when I joined the Babraham Bioinformatics group in 2012.
We ran it as a central service for researchers to find public datasets that we had already downloaded and processed.
It ended up growing substantially with deep integration into public APIs, and even simple precursors to the bioinformatics workflow software that would later dominate my career (simple bash script generators with pre-filled filenames and URLs).

Labrador is a web project written mostly in PHP with a MySQL database back end.
It was used for:

- Browse and search previously processed datasets
- View processing and analysis reports in their web browser
- Download data through their web browser
- Request new datasets, with required information automatically retrieved from accession numbers

Despite its age, Labrador ended up a surprisingly powerful tool.
Many of the design concepts and user experience priorities that went into Labrador have reappeared in later projects that I have worked in.
