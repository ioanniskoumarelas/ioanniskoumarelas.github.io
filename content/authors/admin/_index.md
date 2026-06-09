---
# Display name
title: Ioannis Koumarelas, PhD

# Name pronunciation (optional)
name_pronunciation: ''

# Full name (for SEO)
first_name: Ioannis
last_name: Koumarelas

# Pronouns (optional)
# pronouns: he/him

# Status emoji
# status:
#   icon: 🤖

# Is this the primary user of the site?
superuser: true

# Highlight the author in author lists? (true/false)
highlight_name: true

# Role/position/tagline
role: Machine Learning Engineer <br> PhD in Data Quality

# Organizations/Affiliations to display in Biography blox
# organizations:
#   - name: Veeva Systems
#     url: https://www.veeva.com/

# Social network links
# Need to use another icon? Simply download the SVG icon to your `assets/media/icons/` folder.
profiles:
  # - icon: at-symbol
  #   url: 'mailto:alex.johnson@meta.com'
  #   label: E-mail Me
  # - icon: envelope
  #   icon_pack: fas
  #   link: '/#contact'
  # - icon: brands/x
  #   url: https://twitter.com/AlexAIResearch
  - icon: brands/github
    url: https://github.com/ioanniskoumarelas
  - icon: brands/linkedin
    url: https://www.linkedin.com/in/ioanniskoumarelas/
  - icon: academicons/google-scholar
    url: https://scholar.google.com/citations?user=yrUrNz4AAAAJ
  # - icon: academicons/orcid
  #   url: https://orcid.org/0000-0002-1825-0097


education:
  - area: Intensive German Course – Levels A2.2, B1.1, B1.2
    institution: Die Neue Schule, Berlin
    date_start: 2026-03-01
    date_end: 2026-05-31
    summary: |
      Intensive German language course in Berlin, progressing through levels A2.2, B1.1, and B1.2.
  - area: PhD in Computer Science – Data Preparation & Domain-Agnostic Duplicate Detection
    institution: Hasso Plattner Institute
    icon: custom/HPI-apple-touch-icon
    date_start: 2015-11-01
    date_end: 2020-11-19
    summary: |
      Thesis on _Data Preparation and Domain-Agnostic Duplicate Detection_, supervised by Prof. Felix Naumann. Defended with distinction (Magna cum Laude). Published 7 papers in top-tier journals and conferences. Organized 6 project seminars on Duplicate Detection, Data Preparation, Blockchain, Text Mining, and Recommender Systems.
    button:
      text: 'Read dissertation'
      url: 'https://publishup.uni-potsdam.de/opus4-ubp/frontdoor/deliver/index/docId/48913/file/koumarelas_diss.pdf'
  - area: MSc Computer Science – Theta-Joins on MapReduce
    institution: Aristotle University of Thessaloniki
    icon: "custom/LogoAUTH300ppi"
    date_start: 2012-09-01
    date_end: 2014-02-28
    summary: |
      Implemented thesis in Python, Java, and Hadoop; published in top-tier conference. Awarded State Scholarship Foundation scholarship. Vice Chair of local ACM Student Chapter. Participated in ACM SIGMOD 2013 programming contest (streaming system in C++).
    button:
      text: 'Read thesis'
      url: 'https://ikee.lib.auth.gr/record/136112/files/GRI-2015-14052.pdf'

  - area: BSc Computer Science – Recommender System on MapReduce
    institution: Aristotle University of Thessaloniki
    icon: "custom/LogoAUTH300ppi"
    date_start: 2008-09-01
    date_end: 2012-06-30
    summary: |
      Implemented thesis in Java and Hadoop; published in top-tier journal. Interned at IT Center performing system and database administration.
    button:
      text: 'Read thesis (in Greek)'
      url: 'https://ikee.lib.auth.gr/record/130094/files/%CE%A0%CE%A4%CE%A5%CE%A7%CE%99%CE%91%CE%9A%CE%97.pdf'

work:
  - position: Senior Data Scientist / Data Scientist
    company_name: Veeva Systems – Link Product
    company_url: 'https://www.veeva.com/'
    icon: 'brands/veeva-logo'
    date_start: 2021-12-01
    date_end: 2026-02-28
    summary: |-
      Senior Data Scientist (Mar 2024 – Feb 2026) · Data Scientist (Dec 2021 – Feb 2024)
      * Built scalable ML models for clustering medical activities into expert profiles, applying entity resolution and duplicate detection at production scale – processing billions of activity pairs per run and generating millions of automated profiles across US, EU, LATAM, and APAC regions.
      * Transformed exploratory Jupyter Notebook prototypes into production-ready PySpark + Airflow pipelines on AWS EMR, with MLflow for experiment tracking and model deployment, Docker and Kubernetes for containerized services, testing, monitoring, and CI/CD integration, collaborating with cross-functional engineering teams.
      * Assessed data quality using precision–recall metrics with threshold-based quality tiers, ensuring very high precision while substantially reducing manual curation costs.
      * Organized Data Science meetups, technical talks, and team activities to promote knowledge sharing and strengthen engineering culture.
  - position: Full-Stack Engineer / Data Engineer & Technical Team Co-Leader
    company_name: HPI Schul-Cloud – Dataport
    company_url: 'https://dbildungscloud.de/'
    icon: 'brands/2018_HPI_transparent-512x445'
    # css_class: no-bullet
    date_start: 2020-04-01
    date_end: 2021-11-30
    summary: |
      Full-Stack Engineer (Jan 2021 – Nov 2021) · Data Engineer / Technical Team Co-Leader (Apr 2020 – Dec 2020)
      * Built and maintained data pipelines for 300k+ educational assets, improving structure, reliability, and discoverability for end users.
      * Implemented systematic data preparation, cleaning workflows, and duplicate-detection methods to ensure data quality at scale.
      * Contributed across the full stack (Python, Vue.js, PostgreSQL, Docker, Kubernetes) to maintain and scale the educational platform.
      * Led technical requirements clarification, team operations, and onboarding during a multi-month organizational transition.
  - position: Research Consultant
    company_name: SAP & SAP Concur
    # company_url: 'https://openai.com/'
    icon: 'brands/sap-concur-logo'
    date_start: 2015-11-01
    date_end: 2018-10-31
    summary: |
      * Developed 3 novel ML pipelines in Python and Java to improve duplicate detection, increasing matching success by 18%.
      * Delivered on-site technical tutorials at SAP Concur Seattle (USA) on data matching classification and pipeline optimization.

# Skills
# Add your own SVG icons to `assets/media/icons/`
skills:
  - name: Technical Skills
    items:
      - name: Data Science
        description: ''
        percent: 100
      - name: Machine Learning
        description: ''
        percent: 100
      - name: Data Engineering
        description: ''
        percent: 100
      - name: Entity Resolution
        description: ''
        percent: 100
      - name: Data Cleaning
        description: ''
        percent: 100
      - name: Research & Development
        description: ''
        percent: 100
  - name: Technologies
    items:
      - name: Python
      - name: PySpark / Spark
      - name: Pandas
      - name: AWS
      - name: Docker
      - name: Kubernetes
      
      # - name: Python & PyTorch
      #   description: ''
      #   percent: 95
      #   icon: code-bracket
      # - name: Machine Learning
      #   description: ''
      #   percent: 100
      #   icon: chart-bar
      # - name: Cloud Computing (AWS/GCP)
      #   description: ''
      #   percent: 85
      #   icon: cloud
  # - name: Hobbies
  #   color: '#eeac02'
  #   color_border: '#f0bf23'
  #   items:
  #     - name: Hiking in the Rockies
  #       description: ''
  #       percent: 80
  #       icon: person-simple-walk
  #     - name: Building Custom PCs
  #       description: ''
  #       percent: 90
  #       icon: cpu-chip
  #     - name: Sci-Fi Reading
  #       description: ''
  #       percent: 70
  #       icon: book-open

# sections:
#   - block: accomplishments
#     content:
#       title: Accomplishments
#       subtitle: ''
#       text: ''
#       # Date format: https://wowchemy.com/docs/customization/#date-format
#       date_format: Jan 2006
#       # Accomplishments.
#       #   Add/remove as many `items` blocks below as you like.
#       #   `title`, `organization`, and `date_start` are the required parameters.
#       #   Leave other parameters empty if not required.
#       #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
#       items:
#         - title: Neural Networks and Deep Learning
#           certificate_url: https://www.coursera.org
#           date_end: ''
#           date_start: '2021-01-25'
#           description: ''
#           icon: coursera
#           organization: Coursera
#           organization_url: https://www.coursera.org
#           url: ''
#         - title: Blockchain Fundamentals
#           certificate_url: https://www.edx.org
#           date_end: ''
#           date_start: '2021-01-01'
#           description: Formulated informed blockchain models, hypotheses, and use cases.
#           icon: edx
#           organization: edX
#           organization_url: https://www.edx.org
#           url: https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals
#         - title: 'Object-Oriented Programming in R'
#           certificate_url: https://www.datacamp.com
#           date_end: '2020-12-21'
#           date_start: '2020-07-01'
#           description: ''
#           icon: datacamp
#           organization: DataCamp
#           organization_url: https://www.datacamp.com
#           url: ''
#     design:
#       # Choose how many columns the section has. Valid values: '1' or '2'.
#       columns: '2'

# Custom param for your own use
# accomplishments:
#   date_format: "Jan 2006"
#   items:
#     - title: "Neural Networks and Deep Learning"
#       certificate_url: "https://www.coursera.org"
#       date_start: "2021-01-25"
#       date_end: ""
#       description: ""
#       icon: "coursera"
#       organization: "Coursera"
#       organization_url: "https://www.coursera.org"
#       url: ""
#     - title: "Blockchain Fundamentals"
#       certificate_url: "https://www.edx.org"
#       date_start: "2021-01-01"
#       date_end: ""
#       description: "Formulated informed blockchain models, hypotheses, and use cases."
#       icon: "edx"
#       organization: "edX"
#       organization_url: "https://www.edx.org"
#       url: "https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals"
    # … more items as needed …

certificates:
  -name: Coursera


languages:
  - name: Greek
    level: Native
    flag: "🇬🇷"
  - name: English
    level: Fluent
    flag: "🇬🇧"
  - name: German
    level: Intermediate (B1)
    flag: "🇩🇪"

# Awards.
#   Add/remove as many awards below as you like.
#   Only `title`, `awarder`, and `date` are required.
#   Begin multi-line `summary` with YAML's `|` or `|2-` multi-line prefix and indent 2 spaces below.
# awards:
# certificates:
awards:
  - title: AI & LLM Engineering (Udemy)
    url: ''
    date: '2025-10-01'
    awarder: Udemy
    icon: brands/udemy
    summary: |
      Completed during July - October 2025 a comprehensive series of courses covering modern AI engineering practices:
      
      **Courses completed:**
      - [AI Automation: Build LLM Apps & AI-Agents with n8n & APIs](https://www.udemy.com/certificate/UC-2e08a349-1956-4d2d-a15a-7e5b330982c5/) - Practical LLM automation for daily tasks including Telegram voice messages, Google Calendar booking, and email management
      - [The Complete Agentic AI Engineering Course](https://www.udemy.com/certificate/UC-a1a08aeb-0df4-498a-a145-f2d54e5d058a/) - Built multi-agent systems using OpenAI, CrewAI, LangGraph, and MCP. Created sales agents, deep research tools, stock pickers, and 4-agent engineering teams
      - [LLM Engineering: Master AI, Large Language Models & Agents](https://www.udemy.com/certificate/UC-8420765f-6e48-47ee-8167-e3981f7e1878/) - Explored multi-modality, RAG pipelines, model fine-tuning, and multi-agent systems for product price optimization
      - [LangChain: Develop AI Agents with LangChain & LangGraph](https://www.udemy.com/certificate/UC-c1b27389-3247-4f96-8cab-e522dbe862bd/) - Implemented Chain of Thought, ReAct, and Few Shot techniques. Built RAG pipelines with vector databases and worked with Model Context Protocol (MCP)



  # - title: AI Automation Build LLM Apps & AI-Agents with n8n & APIs
  #   url: https://www.udemy.com/certificate/UC-2e08a349-1956-4d2d-a15a-7e5b330982c5/
  #   date: '2025-10-01'
  #   awarder: Udemy
  #   icon: brands/udemy
  #   summary: |
  #     Learned how to apply LLMs and Agentic AI using n8n and doing more practical daily tasks, including sending and receiving voice messages via Telegram, booking Google Calendar events, sending e-mails, and more.
  # - title: The Complete Agentic AI Engineering Course (2025)
  #   url: https://www.udemy.com/certificate/UC-a1a08aeb-0df4-498a-a145-f2d54e5d058a/
  #   date: '2025-10-01'
  #   awarder: Udemy
  #   icon: brands/udemy
  #   summary: |
  #     In this course I learned how to use different agentic frameworks, mainly OpenAI, CrewAI, LangGraph, and MCP (Model Context Protocol). With these frameworks we implemented different tools to create a sales representative that sends e-mails, perform our own Deep Research (using Groq), build a Stock Picker, deploy a 4-Agent Engineering-team, and more.
  # - title: LLM Engineering Master AI, Large Language Models & Agents
  #   url: https://www.udemy.com/certificate/UC-8420765f-6e48-47ee-8167-e3981f7e1878/
  #   date: '2025-09-01'
  #   awarder: Udemy
  #   icon: brands/udemy
  #   summary: |
  #     This was a great course. We experimented with multi-modality, code optimization, RAG (Retrieval Augmented Generation), predicting product prices, fine-tuning of models, and experimented with multi-agent system that searches for product price deals.
  - title: Generative AI with Large Language Models
    url: https://www.coursera.org/account/accomplishments/verify/UDBWTCNM3YGN
    date: '2025-07-01'
    awarder: Coursera
    icon: brands/Coursera-Logo_600x600
    summary: |
      Three-week course covering the complete LLM lifecycle: Transformer architecture and pretraining, fine-tuning techniques including Parameter Efficient Fine-Tuning (PEFT) with LoRA and Soft Prompts, and Reinforcement Learning with Human Feedback (RLHF). Explored Chain-of-Thought reasoning and the ReAct framework that underlies modern agentic AI systems.

# This was a 3-week course.

# First week contained a refreshing of the Transformers model and its architecture. Generative AI project lifecycle and the concept of pretraining.

# Second week continues fine-tuning to further include multi-task instruction fine-tuning, Parameter Efficient Fine-Tuning (PEFT) with Low-Rank Adaptation (LoRA) and Soft Prompts.

# In the third and final week we dive deeper into Reinforcement Learning with Human Feedback (RLHF) and how we can use reward model to perform our tuning. Chain-of-thought is then introduced to help with reasoning and planning of models. Finally, the ReAct model is shown that is the back-bone of most agentic AI frameworks where reason and act are interleaved to achieve the desired goal.

  # - title: LangChain- Develop AI Agents with LangChain & LangGraph
  #   url: https://www.udemy.com/certificate/UC-c1b27389-3247-4f96-8cab-e522dbe862bd/
  #   date: '2025-07-01'
  #   awarder: Udemy
  #   icon: brands/udemy
  #   summary: |
  #     The instructor in this course introduced me to the concepts of Chain of Thought, ReAct, Few Shot concepts. Then, using LangChain and LangGraph also showcases how to implement a RAG pipeline using vector databases. Finally, he also shows what Model Content Protocol (MCP) is and how it can be used in practice (client, server model).
  - title: Deep Learning Specialization
    url: https://www.coursera.org/account/accomplishments/specialization/certificate/B6J67VCQDELB
    date: '2021-01-30'
    awarder: Coursera
    icon: brands/Coursera-Logo_600x600
    summary: |
      Foundational specialization from Coursera on Deep Learning. Comprised of the following courses:
      1. Neural Networks and Deep Learning
      2. Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization
      3. Structuring Machine Learning Projects
      4. Convolutional Neural Networks
      5. Sequence Models
      
      Through it I got a hollistic refreshment and further expansion of my knowledge on the primary Deep Learning fundamentals and models.
---


<!-- Alex Johnson is a Senior AI Research Scientist at Meta AI, where he leads groundbreaking work on large language models and multimodal systems. His research has been published in top conferences like NeurIPS and ICML, with over 10,000 citations. Alex is passionate about pushing the boundaries of AI while ensuring ethical development. Outside of work, he enjoys hiking in the Rockies, building custom PCs, and mentoring the next generation of AI talent. -->

<!-- Great applications can change the world and having high-quality data is more important than we previously thought. I am passionate about understanding data and making them a powerful tool in our hands through sophisticated Machine Learning and Data Engineering solutions. -->

Data scientist (PhD) with 5+ years of experience building and deploying production ML systems at scale in the life sciences domain. Proven track record designing scalable pipelines that process billions of data points and transforming research prototypes into production-grade systems. Deep expertise in data quality, entity resolution, and duplicate detection. Actively building skills in LLMs and agentic AI to deliver intelligent automation.