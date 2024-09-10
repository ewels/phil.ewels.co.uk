---
title: Cluster Flow
description: A pipelining tool to automate and standardise bioinformatics analyses on cluster environments
projectURL: https://clusterflow.io
github: ewels/clusterflow
# heroImage: /post_img.webp
iconImage: /images/projects/clusterflow-icon.png
archived: true
---

> Please note that Cluster Flow has now been archived.
> For anyone looking to build scalable, reproducible bioinformatics workflows, I recommend using Nextflow and nf-core, which offer more advanced features, community support, and a wide range of pre-built pipelines.

[Cluster Flow](http://clusterflow.io) is a bioinformatics workflow manager designed to simplify the process of running analysis pipelines on high-performance computing (HPC) clusters. It provides a lightweight and flexible framework that helps bioinformaticians automate and manage complex data analysis workflows across multiple samples and tools.

Researchers and bioinformaticians can use Cluster Flow to:

- Automatically distribute tasks across cluster nodes for parallel processing.
- Run predefined analysis pipelines for common bioinformatics tasks such as read alignment, variant calling, and RNA-seq quantification.
- Easily modify or create custom pipelines by writing simple configuration files.
- Monitor progress in real-time, with logs and summaries provided after each job execution.

Cluster Flow is particularly useful for those working in environments with shared HPC resources, as it handles the complexities of cluster scheduling and resource allocation, allowing users to focus on their data analysis rather than the technicalities of cluster management.

Key features of Cluster Flow include:

- **Simple Pipelines:** Write pipelines in a YAML format, making them easy to create, modify, and share.
- **Scalability:** Capable of running thousands of samples across large clusters while optimising resource usage.
- **Portable:** Supports various HPC environments and is easily adaptable to different cluster configurations and scheduling systems (e.g., SLURM, PBS, SGE).
- **Reproducibility:** Generates detailed logs and reports for each analysis, ensuring that workflows are fully traceable and reproducible.
- **Modularity:** Pipelines are modular and can include various tools, enabling complex workflows with different data types and analysis steps.

Cluster Flow is open-source and designed to be highly adaptable, with a range of built-in pipelines ready to use out of the box. Its lightweight nature makes it an excellent choice for research groups or individuals looking for an easy-to-use but powerful workflow manager.

The source code for Cluster Flow is available on GitHub at [ewels/ClusterFlow](https://github.com/ewels/ClusterFlow).
