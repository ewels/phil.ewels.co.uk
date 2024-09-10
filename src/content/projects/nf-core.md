---
title: nf-core
description: A community effort to collect a curated set of analysis pipelines built using Nextflow
projectURL: https://nf-co.re
github: nf-core
# heroImage: /post_img.webp
iconImage: /images/projects/nf-core-logo-square.svg
iconImageDark: /images/projects/nf-core-logo-square-dark.svg
logoImage: /images/projects/nf-core-logo.svg
logoImageDark: /images/projects/nf-core-logo-darkbg.svg
---

[nf-core](https://nf-co.re) is a collaborative, community-driven project that provides a collection of high-quality, peer-reviewed bioinformatics pipelines built using Nextflow. The project was born out of the need to standardise workflows across different research groups and make complex bioinformatics analyses more accessible and reproducible.

I started nf-core while working at the National Genomics Infrastructure (NGI) in SciLifeLab, Sweden. At the time, I saw firsthand how teams often developed their own pipelines independently, leading to a lack of consistency and reproducibility across labs. There was a clear need for a shared resource where bioinformaticians could work together to build pipelines that were robust, scalable, and well-documented.

With nf-core, the goal is to enable collaboration and bring the bioinformatics community together to create workflows that everyone can benefit from. By sharing knowledge and pooling resources, we can build better pipelines—pipelines that adhere to strict standards and are rigorously tested across multiple platforms to ensure they are reliable.

nf-core pipelines are designed to:

- Provide **standardised workflows** for a wide range of bioinformatics tasks, from RNA-seq to epigenomics.
- Ensure **reproducibility** with locked software versions and containerised dependencies using Docker, Singularity, or Conda.
- **Scale** from local machines to high-performance clusters or cloud platforms without needing modification.
- Encourage **collaboration** by allowing anyone to contribute, review, and improve pipelines, ensuring they stay up to date and fit the needs of the community.

The project places a strong emphasis on **collaboration and openness**. All nf-core pipelines undergo peer review and continuous testing to ensure they work reliably across different environments. This makes nf-core an essential resource for researchers looking to perform reproducible, scalable bioinformatics analyses while contributing to the community at large.

Some key features include:

- **Reproducibility:** Each pipeline uses containers to lock software environments, ensuring results can be easily replicated anywhere.
- **Modularity:** Built using Nextflow DSL2, pipelines are highly modular, allowing users to customise workflows and integrate new tools as they develop.
- **Scalability:** Whether running on a local server or cloud infrastructure (AWS, Google Cloud, Azure), nf-core pipelines scale seamlessly to handle large datasets.
- **Community-driven:** A global network of bioinformaticians and developers contribute to nf-core, reviewing and refining pipelines for shared benefit.
- **Standardisation:** All pipelines adhere to the same guidelines, ensuring consistency across workflows and making it easier for others to reuse and modify pipelines.

Starting nf-core was about more than just making pipelines – it was about building a collaborative, supportive community around them. Today, it’s used globally by research groups who benefit from this shared resource, ensuring their analyses are not only efficient but also reliable and reproducible.

The source code and documentation for all nf-core pipelines are available on GitHub at [nf-core GitHub](https://github.com/nf-core), where everyone is welcome to contribute.
