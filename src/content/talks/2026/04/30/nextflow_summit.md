---
title: Nextflow Summit 2026 - Boston
description: "Bioinformatics in the agentic age: Practical tips learnt from RustQC and rewrites.bio"
online: false
location: boston
countryFlag: us
type: Conference talk
logoImage: /talks/2025/10/23/multiqc_nextflow_summit_2025/nextflow_summit_2024.svg
logoImageDark: /talks/2025/10/23/multiqc_nextflow_summit_2025/nextflow_summit_2024_darkbg.svg
eventURLs:
  - https://summit.nextflow.io/2026/boston/agenda/rustqc-and-rewrites-bio/
# pdfURLs:
#  - /talks/2026/02/18/the_bioinformatics_cro/nextflow-nf-core-webinar.pdf
# youtubeIDs:
#  - 7TtIlOZHDT8
date: 2026-04-30
---

## Abstract

AI capabilities have shifted in 2026: we’ve reached a threshold where domain experts can create production-quality tool rewrites in days, without prior experience of the programming language. [RustQC](https://seqeralabs.github.io/RustQC/), a single Rust binary that replaces fifteen RNA-seq QC tools with a 60× speedup, was built in only a few weeks despite me never having written Rust code before. I wasn't alone: multiple teams have been independently producing similar AI-assisted rewrites within weeks of each other.

I'll walk through the RustQC architecture, and describe how I used Nextflow and nf-test as a test harness for agentic development. Deterministic pipelines, cached intermediate outputs, and snapshot-based assertions give AI agents a tight feedback loop where output correctness is enforced automatically, not left to the LLM's judgment.

Finally, I'll explore how this experience led to [https://rewrites.bio](https://rewrites.bio) - a set of principles for responsible rewrites. I’ll talk about different rewrite strategies (1:1 rewrites, upgrades or architectural rethinks), when each is appropriate, and when not to rewrite a tool. I'll make the case that we can have the speed gains without fragmenting the ecosystem that keeps results comparable across studies.
