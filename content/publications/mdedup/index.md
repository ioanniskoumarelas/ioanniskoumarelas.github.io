---
title: "MDedup: Duplicate Detection with Matching Dependencies"

authors:
  - admin
  - Thorsten Papenbrock
  - Felix Naumann

date: "2020-08-01T00:00:00Z"
publishDate: "2020-08-01T00:00:00Z"
doi: ""

# Publication type
publication_types: ["1"]

# Publication venue
publication: In *Very Large Data Bases* 2020
publication_short: In *VLDB* 2020

abstract: >
  Duplicate detection is an integral part of data cleaning and serves to identify
  multiple representations of same real-world entities in (relational) datasets.
  Existing duplicate detection approaches are effective, but they are also hard to
  parameterize or require a lot of pre-labeled training data. Both parameterization
  and pre-labeling are at least domain-specific if not dataset-specific, which is a
  problem if a new dataset needs to be cleaned. For this reason, we propose a novel,
  rule-based and fully automatic duplicate detection approach that is based on
  matching dependencies (MDs). Our system uses automatically discovered MDs, various
  dataset features, and known gold standards to train a model that selects MDs as
  duplicate detection rules. Once trained, the model can select useful MDs for
  duplicate detection on any new dataset. To increase the generally low recall of
  MD-based data cleaning approaches, we propose an additional boosting step. Our
  experiments show that this approach reaches up to 94% F-measure and 100% precision
  on our evaluation datasets, which are good numbers considering that the system does
  not require domain or target data-specific configuration.

summary: >
  Our system uses automatically discovered MDs, dataset features, and known
  gold standards to train a model that selects MDs as duplicate detection rules.

tags:
  - MDedup
  - Matching Dependencies
  - Entity Resolution
  - Duplicate Detection
  - Record Linkage
  - Data Matching
  - Rule-based Matching
  - Machine Learning
  - Support Vector Machines
  - SVM
  - Classification
  - Gaussian Processes
  - Regression
  - Data Quality

featured: true

# HugoBlox-compliant links
links:
  # Custom (named) links
  - name: Supplementary code utilities
    url: https://gitlab.com/mdedup/mdedup_utils
  - name: Repeatability
    url: https://hpi.de/naumann/projects/repeatability/duplicate-detection/mdedup.html

  # Standard publication links
  - type: pdf
    url: http://www.vldb.org/pvldb/vol13/p712-koumarelas.pdf
  - type: code
    url: https://gitlab.com/mdedup/mdedup
  - type: video
    url: https://www.youtube.com/watch?v=Se6tNbIeDKk

image:
  focal_point: ""
  preview_only: false
---
