---
doi: 10.1016/j.mcpro.2026.101530
title: "pmultiqc: An open-source, lightweight, and metadata-oriented QC reporting library for MS proteomics"
journal: Molecular &amp; Cellular Proteomics
pubDate: 2026-02-01
---

## Highlights

- Generate metadata-aware quality control reports using the SDRF format.
- Interactive reports for various proteomics analysis workflows, including DIA-NN, FragPipe, MaxQuant/MaxDIA, quantms, and mzIdentML/mzML-based pipelines.
- Supports DIA-LFQ, DDA-LFQ, and plexDDA.
- Provides an open-source library that can be easily extended to new metrics, workflows, and result formats.
- Provides a public service to generate QC reports for public datasets in the PRIDE database.

## Abstract

The increasing scale and complexity of proteomics data demand robust, scalable, and interpretable quality control (QC) frameworks to ensure data reliability and reproducibility. Here, we present pmultiqc, an open-source Python package that standardizes and generates web-based QC reports across multiple proteomics data analysis platforms. Built on top of the widely adopted MultiQC framework, pmultiqc offers specialized modules tailored to mass spectrometry workflows, with full initial support for quantms, DIA-NN, MaxQuant/MaxDIA, FragPipe, and mzIdentML/mzML-based pipelines. The package computes a wide range of QC metrics, including raw intensity distributions, identification rates, retention time consistency, and missing value patterns, and presents them in interactive, publication-ready reports. By leveraging sample metadata in the SDRF format, pmultiqc enables metadata-aware QC and introduces, for the first time in proteomics, QC reports and metrics guided by standardized sample metadata. Its modular architecture allows easy extension to new workflows and formats. Alongside comprehensive documentation and examples for running pmultiqc locally or integrated into existing workflows, we offer a cloud-based service that enables users to generate QC reports from their own data or public PRIDE datasets.
