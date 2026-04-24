---
title: RustQC
description: Fast genomics quality control tools for sequencing data, written in Rust
projectURL: https://seqeralabs.github.io/RustQC/
github: seqeralabs/RustQC
iconImage: /images/projects/rustqc-icon.svg
logoImage: /images/projects/rustqc-logo.svg
logoImageDark: /images/projects/rustqc-logo-dark.svg
heroImage: /images/projects/rustqc-benchmark.png
heroImageDark: /images/projects/rustqc-benchmark-dark.png
order: 32
---

[**RustQC**](https://seqeralabs.github.io/RustQC/) is a suite of fast QC tools for sequencing data, compiled to a single static binary with no runtime dependencies.
It reimplements a collection of widely-used bioinformatics QC tools in [Rust](https://www.rust-lang.org/), producing format- and numerically-identical outputs whilst running dramatically faster.

The first release focuses on RNA-seq QC. A single `rustqc rna` command runs the equivalent of dupRadar, featureCounts, preseq, Qualimap, samtools and a suite of RSeQC tools in one pass. On a large paired-end RNA-seq BAM, RustQC finishes in around 15 minutes — compared with over 15 hours to run the upstream tools sequentially.

RustQC was developed at [Seqera](/work/seqera) as a practical demonstration of the principles behind [rewrites.bio](/projects/rewrites-bio): modernising foundational bioinformatics tools with the help of AI coding assistants, whilst keeping the original authors' science intact. All outputs are validated against the upstream tools and remain compatible with [MultiQC](/projects/multiqc) for reporting.

It is designed to slot into the [nf-core/rnaseq](https://nf-co.re/rnaseq) pipeline, but works anywhere — just run `rustqc rna sample.bam --gtf genes.gtf --outdir results/`.

For more information, see the [RustQC documentation](https://seqeralabs.github.io/RustQC/) and source code on [GitHub](https://github.com/seqeralabs/RustQC).
