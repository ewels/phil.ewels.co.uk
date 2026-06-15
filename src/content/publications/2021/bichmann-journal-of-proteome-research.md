---
doi: 10.1021/acs.jproteome.1c00123
title: "DIAproteomics: A Multifunctional Data Analysis Pipeline for Data-Independent Acquisition Proteomics and Peptidomics"
journal: Journal of Proteome Research
pubDate: 2021-06-21
---

Data-independent acquisition (DIA) is becoming a leading analysis method in biomedical mass spectrometry. The main advantages include greater reproducibility and sensitivity and a greater dynamic range compared with data-dependent acquisition (DDA). However, the data analysis is complex and often requires expert knowledge when dealing with large-scale data sets. Here we present DIAproteomics, a multifunctional, automated, high-throughput pipeline implemented in the Nextflow workflow management system that allows one to easily process proteomics and peptidomics DIA data sets on diverse compute infrastructures. The central components are well-established tools such as the OpenSwathWorkflow for the DIA spectral library search and PyProphet for the false discovery rate assessment. In addition, it provides options to generate spectral libraries from existing DDA data and to carry out the retention time and chromatogram alignment. The output includes annotated tables and diagnostic visualizations from the statistical postprocessing and computation of fold-changes across pairwise conditions, predefined in an experimental design. DIAproteomics is well documented open-source software and is available under a permissive license to the scientific community at https://www.openms.de/diaproteomics/.
