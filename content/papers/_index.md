---
title: 'Projects'
date: 2024-05-19
type: landing

design:
  # Section spacing
  # spacing: '5rem'
  spacing: '6rem'

sections:
  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 2
  - block: collection
    content:
      title: Recent Publications
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation
---