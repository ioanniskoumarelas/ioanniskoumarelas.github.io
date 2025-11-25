---
title: "Data Preparation for Duplicate Detection"
authors:
  - admin
  - Lan Jiang
  - Felix Naumann

# Optional author notes
# author_notes:
# - "Equal contribution"

date: "2020-07-01T00:00:00Z"

# Schedule page publish date (NOT publication's date)
publishDate: "2020-07-01T00:00:00Z"

# Publication type (CSL standard: journal article)
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name
publication: "In *ACM Journal of Data and Information Quality*, 2020"
publication_short: "In *ACM JDIQ*, 2020"

abstract: >
  Data errors represent a major issue in most application workflows. Before any important task can
  take place, a certain data quality has to be guaranteed by eliminating the various errors that may
  appear in data. Typically, most of these errors are fixed with data preparation methods, such as
  whitespace removal. However, the particular error of duplicate records—where multiple records refer
  to the same entity—is usually eliminated independently with specialized techniques.

  Our work is the first to bring these two areas together by applying data preparation operations in a
  systematic approach before performing duplicate detection. Our workflow begins with the user
  providing as input a sample of the gold standard, the actual dataset, and optionally domain-specific
  constraints for certain data preparations (e.g., address normalization).

  The selection of data preparations works in two phases. First, to drastically reduce the search
  space of ineffective preparations, decisions are made based on the improvement or deterioration of
  pair similarities. Second, using the remaining preparations, an iterative leave-one-out
  classification process removes them one by one and determines redundant preparations based on the
  achieved area under the precision–recall curve (AUC-PR). Using this workflow, we improve duplicate
  detection results by up to 19% in AUC-PR.

summary: >
  We propose the first workflow that systematically integrates data preparation operations before
  duplicate detection, improving AUC-PR by up to 19%.

tags:
  - Data Preparation
  - Data Wrangling
  - Data Normalization
  - Data Standardization
  - Entity Resolution
  - Duplicate Detection
  - Record Linkage
  - Data Matching
  - Data Quality

featured: false

hugoblox:
  ids: {}

links:
  - type: project
    url: "https://hpi.de/naumann/projects/repeatability/duplicate-detection/data-preparation-for-duplicate-detection.html"
  - type: code
    url: "https://gitlab.com/data.prep.dedup/data.prep.dedup.python"
# PDF, code, dataset, slides, etc.
  - type: pdf
    url: "https://dl.acm.org/doi/10.1145/3377878"
  - type: code
    url: "https://gitlab.com/data.prep.dedup/data.prep.dedup.java"
  - type: dataset
    url: ""
  - type: poster
    url: ""
  - type: project
    url: ""
  - type: slides
    url: ""
  - type: source
    url: ""
  - type: video
    url: ""

image:
  caption: ''
  focal_point: "Smart"
  preview_only: false

projects: []

slides: ""
---
> [!NOTE]
> Click the *Cite* button above to enable visitors to import publication metadata into their reference management software.

> [!NOTE]
> Create your slides in Markdown - click the *Slides* button to check out the example.

Add supplementary notes, full text, or examples here. You can include [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
