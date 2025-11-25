---
title: "Knowledge Transfer for Entity Resolution with Siamese Neural Networks"

authors:
  - Michael Loster
  - admin
  - Felix Naumann

date: "2021-01-01T00:00:00Z"
publishDate: "2021-01-01T00:00:00Z"
doi: ""

# Publication type using CSL standard
publication_types: ["article-journal"]

publication: "In *ACM Journal of Data and Information Quality*, 2021"
publication_short: "In *ACM JDIQ*, 2021"

abstract: >
  The integration of multiple data sources is a common problem in a large variety
  of applications. Traditionally, handcrafted similarity measures are used to
  discover, merge, and integrate multiple representations of the same
  entity—duplicates—into a large homogeneous collection of data. Often, these
  similarity measures do not cope well with the heterogeneity of the underlying
  dataset. In addition, domain experts are needed to manually design and
  configure such measures, which is both time-consuming and requires extensive
  domain expertise. We propose a deep Siamese neural network, capable of
  learning a similarity measure that is tailored to the characteristics of a
  particular dataset. With the properties of deep learning methods, we are able
  to eliminate the manual feature engineering process and thus considerably
  reduce the effort required for model construction. In addition, we show that
  it is possible to transfer knowledge acquired during the deduplication of one
  dataset to another, and thus significantly reduce the amount of data required
  to train a similarity measure. We evaluated our method on multiple datasets
  and compare our approach to state-of-the-art deduplication methods. Our
  approach outperforms competitors by up to +26 percent F-measure, depending on
  task and dataset. In addition, we show that knowledge transfer is not only
  feasible, but in our experiments led to an improvement in F-measure of up to
  +4.7 percent.

summary: >
  We propose a deep Siamese neural network that learns a similarity measure
  tailored to a dataset, eliminating manual feature engineering. We also show
  that knowledge transfer between deduplication tasks is feasible and effective.

tags:
  - Deep Learning
  - Siamese Neural Networks
  - Learnt Similarity Measure
  - Transfer Learning
  - Knowledge Transfer
  - Entity Resolution
  - Duplicate Detection
  - Record Linkage
  - Data Matching
  - Data Quality

featured: false

# 🔗 Correct new HugoBlox link structure
links:
  - type: pdf
    url: https://dl.acm.org/doi/10.1145/3410157
  - type: website
    name: Repeatability
    url: https://hpi.de/en/naumann/projects/repeatability/duplicate-detection/knowledge-transfer-for-duplicate-detection.html

image:
  focal_point: "Smart"
  preview_only: false

projects: []

slides: ""
---
