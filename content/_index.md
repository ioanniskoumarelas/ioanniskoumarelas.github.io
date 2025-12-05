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
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      # Apply a gradient background
      css_class: hbx-bg-gradient
      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded

  - block: features
    content:
      title: "Skills"
      # text: "Discover what makes our platform special"
      items:
        # - name: "Fast Performance"
        #   # description: "Lightning-fast load times for better user experience"
        #   icon: "bolt"
        # - name: "Easy to Use"
        #   # description: "Intuitive interface that anyone can master"
        #   icon: "heart"
        # - name: "Secure"
        #   # description: "Enterprise-grade security built-in"
        #   icon: "shield-check"

        - name: "Entity Resolution"
          # description: "Duplicate Detection"
          icon: "users"
          icon_pack: fas
        - name: "Machine Learning"
          # description: "AI"
          # icon: "robot"
          icon: "Font_Awesome_5_solid_robot"
          # icon_pack: "hero"

        - name: "Data Cleaning"
          # description: "DTCL"
          # icon: "quidditch"
          icon: "Font_Awesome_5_solid_quidditch"

        - name: "Data Engineering"
          icon: "Font_Awesome_5_solid_database"
        #     icon_pack: fas

        - name: "Research & Development"
          icon: "Font_Awesome_5_solid_search"

        - name: "Data Science"
          icon: "Font_Awesome_5_regular_chart-bar"
        #     icon: chart-bar
        #     icon_pack: fas
        #     name: Data Science


        # - description:
        #     icon: quidditch
        #     icon_pack: fas
        #     name: Data Cleaning
        # - description:
        #     icon: robot
        #     icon_pack: fas
        #     name: Machine Learning
        # - description:
        #     icon: database
        #     icon_pack: fas
        #     name: Data Engineering
        # - description:
        #     icon: search
        #     icon_pack: fas
        #     name: Research & Development
        # - description:
        #     icon: chart-bar
        #     icon_pack: fas
        #     name: Data Science
    design:
      view: grid
      # css_class: 'grid grid-cols-3 gap-4'
      columns: '3'
      # css_class: 'features-grid'
      # columns: "3"
      css_class: 'force-three-cols large-icons no-icon-background'
      background:
        color: "gray-50"


  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false
  # - block: resume-skills
  #   content:
  #     # title: Skills & Hobbies
  #     title: Core Skills & Technologies
  #     username: admin
  #   design:
  #     show_skill_percentage: false
  # - block: collection
  #   content:
  #     title: Core Skills & Technologies
  #     filters:
  #       folders:
  #         - skills
  #   design:
  #     columns: '2'
  #     view: card
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
