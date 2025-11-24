---
title: 'Experience'
date: 2023-10-24
type: landing

design:
  spacing: '5rem'

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false
  - block: resume-skills
    content:
      # title: Skills & Hobbies
      title: Core Skills & Technologies
      username: admin
    design:
      show_skill_percentage: false

  # - block: markdown
  #   content:
  #     title: "Certificates"
  #     subtitle: "Udemy · Coursera"
  #     text: |
  #       ### Coursera

  #       - **Machine Learning Specialization** — Andrew Ng  
  #           *Coursera · 2023*  
  #           Certificate ID: XXXXXXX  
  #           <https://coursera.org/verify/XXXXXXX>

  #       - **Data Structures and Algorithms**  
  #           *UC San Diego · 2022*  
  #           Certificate ID: YYYYYYY  
  #           <https://coursera.org/verify/YYYYYYY>

  #       ---

  #       ### Udemy

  #       - **Deep Learning A–Z™**  
  #           *Udemy · 2022*  
  #           Certificate ID: ABCDEF  
  #           <https://www.udemy.com/certificate/ABCDEF/>

  #       - **Python for Data Science and ML Bootcamp**  
  #           *Udemy · 2021*  
  #           Certificate ID: 123456  
  #           <https://www.udemy.com/certificate/123456/>
    # design:
    #   columns: "1"
  - block: resume-awards
    # id: certificates
    id: awards
    content:
      title: Certificates
      username: admin
  - block: resume-languages
    content:
      title: Languages
      username: admin

---
