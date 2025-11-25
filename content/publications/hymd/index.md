---
title: "Efficient Discovery of Matching Dependencies"
authors:
- Philipp Schirmer
- Thorsten Papenbrock
- admin
- Felix Naumann

# Optional author notes
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2020-05-01T00:00:00Z"

# Schedule page publish date (NOT publication's date)
publishDate: "2020-05-01T00:00:00Z"

# Publication type
# From CSL standard; "conference-paper" corresponds to your old "1"
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name
publication: "In *ACM Transactions on Database Systems (TODS)* 2020"
publication_short: "In *ACM TODS* 2020"

abstract: >
  Matching dependencies (MDs) are data profiling results that are often used for data integration, data cleaning, and entity matching. They are a generalization of functional dependencies (FDs) matching similar rather than same elements. As their discovery is very difficult, existing profiling algorithms find either only small subsets of all MDs or their scope is limited to only small datasets. We focus on the efficient discovery of all interesting MDs in real-world datasets. For this purpose, we propose HyMD, a novel MD discovery algorithm that finds all minimal, non-trivial MDs within given similarity boundaries. The algorithm extracts the exact similarity thresholds for the individual MDs from the data instead of using predefined similarity thresholds. For this reason, it is the first approach to solve the MD discovery problem in an exact and truly complete way. If needed, the algorithm can, however, enforce certain properties on the reported MDs, such as disjointness and minimum support, to focus the discovery on such results that are actually required by downstream use cases. HyMD is technically a hybrid approach that combines the two most popular dependency discovery strategies in related work: lattice traversal and inference from record pairs. Despite the additional effort of finding exact similarity thresholds for all MD candidates, the algorithm is still able to efficiently process large datasets, e.g., datasets larger than 3 GB.

summary: >
  We focus on the efficient discovery of all interesting MDs in real-world datasets. For this purpose, we propose HyMD, a novel MD discovery algorithm that finds all minimal, non-trivial MDs within given similarity boundaries.

tags:
- Data analytics
- Data extraction
- Integration
- Association rules
- Matching Dependencies

featured: false

hugoblox:
  ids: {}

links:
  - type: pdf
    url: "https://hpi.de/naumann/people/ioannis-koumarelas/Document/import_isg/Efficient_Discovery_of_Matching_Dependencies.pdf/5295f3d370b6f4365dd16936cdb6d04a.html?cHash=27d197ef88da239f0a46988d29644f21"
  - type: code
    url: ""
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
  focal_point: ""
  preview_only: false

projects: []

slides: ""
---
> [!NOTE]
> Click the *Cite* button above to enable visitors to import publication metadata into their reference management software.

> [!NOTE]
> Create your slides in Markdown - click the *Slides* button to check out the example.

Add supplementary notes or full text here. You can use rich formatting including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
