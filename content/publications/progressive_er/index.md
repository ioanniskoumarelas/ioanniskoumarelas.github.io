---
title: "Towards Progressive Search-driven Entity Resolution"
authors:
  - Alberto Pietrangelo
  - Giovanni Simonini
  - Sonia Bergamaschi
  - Felix Naumann
  - admin

date: "2018-06-01T00:00:00Z"
publishDate: "2018-06-01T00:00:00Z"
doi: ""

# Publication type (conference paper)
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name
publication: "In *Proceedings of the Italian Symposium on Advanced Database Systems (SEBD)* 2018"
publication_short: "In *SEBD* 2018"

abstract: >
  Keyword-search systems for databases aim to answer a user query composed of a few terms with a
  ranked list of records. They are powerful and easy-to-use data exploration tools for a wide
  range of contexts. For instance, given a product database gathered by scraping e-commerce
  websites, these systems enable even non-technical users to explore the item set. However, if the
  database contains dirty records (i.e., incomplete and duplicated records), a preprocessing step to
  clean the data is required. One fundamental data cleaning step is Entity Resolution, i.e., the task
  of identifying and fusing together all the records that refer to the same real-world entity. This
  task is typically executed on the whole data, independently of (i) the portion of the entities that
  a user may indicate through keywords, and (ii) the order priority that a user might express through
  an ORDER BY clause.

  This paper describes a first step to solve the problem of progressive search-driven Entity
  Resolution: resolving all the entities described by a user through a handful of keywords,
  progressively according to an ORDER BY clause. We discuss the features of our method, named
  SearchER, and showcase examples of keyword queries on two real-world datasets obtained with a
  demonstrative prototype.

summary: >
  We introduce SearchER, a method for progressively performing search-driven Entity Resolution on
  user-indicated entities defined by keyword queries.

tags:
  - Progressive
  - Entity Resolution
  - Duplicate Detection
  - Record Linkage
  - Data Matching

featured: false

hugoblox:
  ids: {}

links:
  - type: pdf
    url: "http://ceur-ws.org/Vol-2161/paper16.pdf"
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

Add supplementary notes, full text, or examples here. You can include [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
