---
title: "Experience: Enhancing Address Matching with Geocoding and Similarity Measure Selection"
authors:
  - admin
  - Axel Kroschk
  - Felix Naumann

# Optional author notes
# author_notes:
# - "Equal contribution"

date: "2018-10-01T00:00:00Z"
publishDate: "2018-10-01T00:00:00Z"
doi: ""

# Publication type (journal article)
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name
publication: "In *ACM Journal of Data and Information Quality* 2018"
publication_short: "In *ACM JDIQ* 2018"

abstract: >
  Given a query record, record matching is the problem of finding database records that represent the same real-world object. In the easiest scenario a database record is completely identical to the query. However in most cases problems do arise, for instance as a result of data errors, data integrated from multiple sources or received from restrictive form fields. These problems are usually difficult, because they require a variety of actions, including field segmentation, decoding of values and similarity comparisons, each requiring some domain knowledge. In this paper, we study the problem of matching records that contain address information, including attributes such as Street-address and City. To facilitate this matching process we propose a domain-specific procedure to first enrich each record with a more complete representation of the address information through geocoding and reverse-geocoding, and second to select the best similarity measure per each address attribute, that will finally help the classifier to achieve the best f-measure. We report on our experience in selecting geocoding services and discovering similarity measures for a concrete but common industry use-case.

summary: >
  In this paper, we study the problem of matching records that contain address information, including attributes such as Street-address and City. To facilitate this matching process we propose a domain-specific procedure to first enrich each record with a more complete representation of the address information through geocoding and reverse-geocoding, and second to select the best similarity measure per each address attribute, that will finally help the classifier to achieve the best f-measure.

tags:
  - Address Matching
  - Address Normalization
  - Data Normalization
  - Geographical Information Systems
  - GIS
  - Entity Resolution
  - Duplicate Detection
  - Record Linkage
  - Data Matching
  - Machine Learning
  - Random Forest
  - RF
  - Classification
  - Similarity Measures
  - Levenshtein
  - Data Quality

featured: false

hugoblox:
  ids: {}

links:
  - type: pdf
    url: "https://dl.acm.org/toc/jdiq/2018/10/4"
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
