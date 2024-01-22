---
title: "Bytesize: Python packaging"
description: Converting Python scripts into packages for PyPI, Bioconda & Biocontainers
online: true
type: Talk
logoImage: /images/projects/nf-core-logo-square.svg
logoImageDark: /images/projects/nf-core-logo-square-dark.svg
eventURLs:
  - https://nf-co.re/events/2023/bytesize_python_packaging
youtubeIDs:
  - hOuS6mXCwhk
date: 2023-05-02
---

In this talk, I showed you how to take a Python script and turn it into a stand-alone command-line tool, ready for distribution via the Python Package Index (PyPI).

> 💡 You can download a `.zip` file of the "before" and "after" code examples demoed [here](/talks/2023/05/02/bytesize_python_packaging/python-packaging.zip).

Packaging your script up as a package is a good thing to do for a few reasons:

- More people can use your scripts - not just within Nextflow
  - This is useful for development, for stand-alone testing
  - It’s useful for people using other workflow managers
  - It helps when users are testing a method / debugging with small sample sizes
- It allows scripts to be released under different licenses to the pipeline itself
- Software packaging, that is providing container images with all requirements, is handled automatically
- Even if it’s a small script that you think no-one will ever use outside of your pipeline, it’s easy to do and you don’t lose anything 🙂

Once released in PyPI, releases via [Bioconda](https://bioconda.github.io/) are simple
(see [Bytesize 40: Software packaging](https://nf-co.re/events/2022/bytesize-40-software-packaging)).
Once in Bioconda, software will be available for Conda users, but also Docker + Singularity,
via the [BioContainers](https://biocontainers.pro/) project.
