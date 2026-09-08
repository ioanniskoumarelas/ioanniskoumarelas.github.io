---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      # # Show a call-to-action button under your biography? (optional)
      # button:
      #   text: Download CV
      #   url: uploads/resume.pdf
    design:
      # Apply a gradient background
      css_class: hbx-bg-gradient
      spacing:
        padding: ['0', '0', '0', '0']
      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded

  - block: resume-experience
    id: experience
    content:
      username: admin
    design:
      date_format: 'January 2006'
      show: work

  - block: technical-skills
    id: skills
    content:
      title: "Technical Skills"
      categories:
        - name: "Programming Languages"
          icon: "code-bracket"
          items: ["Python", "SQL", "Java", "JavaScript", "C/C++"]
        - name: "ML & Data"
          icon: "cpu-chip"
          items: ["PySpark", "scikit-learn", "XGBoost", "PyTorch", "Pandas", "NumPy", "Hugging Face Transformers", "MLflow", "Apache Spark", "Apache Airflow"]
        - name: "Infrastructure & DevOps"
          icon: "server"
          items: ["AWS (EMR, S3)", "Docker", "Kubernetes", "CI/CD", "FastAPI", "Git", "pytest"]
        - name: "Databases"
          icon: "circle-stack"
          items: ["PostgreSQL", "MongoDB"]
        - name: "Data Quality"
          icon: "shield-check"
          items: ["Entity Resolution", "Duplicate Detection", "Record Linkage", "Data Cleaning", "Data Preparation", "Embeddings", "Vector Search (Qdrant)"]
        - name: "AI & LLMs"
          icon: "sparkles"
          items: ["Large Language Models", "LangChain", "LangGraph", "Agentic AI"]
    design:
      background:
        color: "gray-50"

  - block: resume-awards
    id: awards
    content:
      title: Certificates
      username: admin

  - block: resume-experience
    id: education
    content:
      username: admin
    design:
      date_format: 'January 2006'
      show: education
      css_class: 'bg-gray-50 dark:bg-gray-900'

  - block: markdown
    id: publications
    content:
      title: Publications
      text: |-
        **10 peer-reviewed papers** across BSc, MSc, and PhD research — 6 journal articles and 4 conference papers on entity resolution, duplicate detection, data preparation, and data quality.

        **Journals** — ACM Journal of Data and Information Quality (×3) · ACM Transactions on Database Systems · Distributed and Parallel Databases (Springer) · Expert Systems with Applications (Elsevier)

        **Conferences** — VLDB · EDBT/ICDT · Italian Symposium on Advanced Database Systems (SEBD) · International Workshop on Data Science for Macro-Modeling

        [Browse all publications](/publications/) · [Google Scholar profile](https://scholar.google.com/citations?user=yrUrNz4AAAAJ)

  - block: resume-languages
    content:
      title: Languages
      username: admin

---
