---
title: Cluster Flow
description: A pipelining tool to automate and standardise bioinformatics analyses on cluster environments
projectURL: https://clusterflow.io
github: ewels/clusterflow
# heroImage: /post_img.webp
iconImage: /images/projects/clusterflow-icon.png
archived: true
order: 50
---

> Please note that Cluster Flow has now been archived.
> For anyone looking to build scalable, reproducible bioinformatics workflows, I recommend using Nextflow and nf-core, which offer more advanced features, community support, and a wide range of pre-built pipelines.

I wrote Cluster Flow whilst working at the Babraham institute, as the amount of genomics data that we were needing to process started to scale rapidly.
There weren't a lot of existing options available at the time, so after a fair bit of research I decided to roll my own.

Cluster Flow is written and Perl and the focus was to make it easy to run. The idea was to allow researchers to run their own stock analyses on public datasets to free up more time for the bioinformatics core group, as well as streamlining our own work.

Cluster Flow has a command-line interface and ships with a range of pre-built analysis pipelines. Pipelines were launched by submitting the full gamut of HPC scheduler jobs (Slurm, LSF, Grid Engine) which depended on one another.
It had a range of command-line options, with built-in management of reference genome indices, pipelines, modules and more.

The source code for Cluster Flow is available on GitHub at [ewels/ClusterFlow](https://github.com/ewels/ClusterFlow).
