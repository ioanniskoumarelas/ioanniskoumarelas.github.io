---
title: "Flexible Partitioning for Selective Binary Theta-Joins in a Massively Parallel Setting"
authors:
  - admin
  - Athanasios Naskos
  - Anastasios Gounaris

date: "2018-06-01T00:00:00Z"
publishDate: "2018-06-01T00:00:00Z"
doi: ""

# Publication type (journal article)
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name
publication: "In *Distributed and Parallel Databases (Springer)*, 2018"
publication_short: "In *Distrib. Parallel Databases*, 2018"

abstract: >
  Efficient join processing plays an important role in big data analysis. In this work, we focus on
  generic theta joins in a massively parallel environment, such as MapReduce and Spark. Theta joins
  are notoriously slow due to their inherent quadratic complexity, even when their selectivity is low
  (e.g., 1%). The main performance bottleneck differs between cases and is due to any combination of
  the following factors: amount of data being shuffled, memory load on reducers, or computation load
  on reducers.

  We propose an ensemble-based partitioning approach that tackles all three aspects. In this way, we 
  can save communication cost, better respect the memory and computation limitations of reducers, and 
  reduce overall execution time. The key idea behind our partitioning is to cluster join key values 
  using two techniques: matrix rearrangement and agglomerative clustering. These techniques can run 
  either in isolation or in combination.

  We present extensive experimental results using both band queries on real data and arbitrary 
  synthetic predicates. Our approach can save up to 45% of communication cost and reduce the 
  computation load of a single reducer by up to 50% in band queries, while for arbitrary theta 
  predicates the savings reach 74% and 80%, respectively. Apart from being effective, the potential 
  benefits can be estimated before execution from metadata, enabling informed partitioning decisions. 
  Finally, our solutions are flexible and can account for any weighted combination of the three 
  bottleneck factors.

summary: >
  We propose an ensemble-based partitioning method to improve theta-join execution in massively
  parallel systems such as MapReduce and Spark.

tags:
  - Distributed framework
  - Apache Hadoop
  - Map-Reduce
  - Apache Spark
  - HDFS
  - Theta-Join
  - Similarity Join
  - Databases
  - Scalability
  - Data Engineering
  - Data Management

featured: false

hugoblox:
  ids: {}

links:
  - type: pdf
    url: "https://datalab-old.csd.auth.gr/wp-content/uploads/publications/DPD2018kng.pdf"
  - type: code
    url: "https://github.com/JohnKoumarelas/binarythetajoins/tree/master/btj/tspk"
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
