# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic portfolio website for Ioannis Koumarelas, built with **Hugo** using the **Hugo Blox Academic CV** template. Deployed to **GitHub Pages** at ioanniskoumarelas.com.

## Development Commands

```bash
# Install dependencies (requires pnpm)
pnpm install

# Local dev server with live reload
pnpm dev          # runs: hugo server --disableFastRender

# Production build
pnpm build        # runs: hugo --minify

# Generate search index (run after build)
npx pagefind --source "public"
```

**Required tools**: Hugo Extended v0.152.2, Node.js 20+, pnpm 10+, Go (for Hugo modules).

## Architecture

- **Static site generator**: Hugo with Go-based module system
- **Theme**: Hugo Blox (blox-tailwind, blox-analytics, blox-plugin-netlify) — configured in `config/_default/module.yaml`
- **Styling**: Tailwind CSS v4 with custom overrides in `assets/css/custom.css`
- **Search**: Pagefind (static search index, config in `pagefind.yml`)
- **Comments**: Giscus (GitHub Discussions-based)

### Configuration (split YAML in `config/_default/`)

| File | Purpose |
|------|---------|
| `hugo.yaml` | Base URL, build settings, output formats, image processing |
| `params.yaml` | Appearance, analytics (GA/GTM), comments, cookie consent, SEO |
| `module.yaml` | Hugo module imports and asset mount points |
| `menus.yaml` | Navigation menu items |
| `languages.yaml` | Language settings |

### Content Structure

All content lives in `content/` as Markdown with YAML front matter.

- **Homepage** (`content/_index.md`): Landing page assembled from Hugo Blox blocks (resume-biography-3, features, resume-experience, resume-awards, resume-languages)
- **Author profile** (`content/authors/admin/_index.md`): Bio, education, work history, skills, awards — referenced by homepage blocks via `username: admin`
- **Publications** (`content/publications/<slug>/`): Each has `index.md` (metadata + abstract), `cite.bib` (BibTeX), and optionally `featured.jpg`
- **Projects** (`content/projects/`): Project showcase entries

### Hugo Blox Module Mounts

Custom blox layouts can be placed in `hugo-blox/blox/community/` or `hugo-blox/blox/all-access/` and are mounted into `layouts/_partials/blox/`. CSS from `hugo-blox/blox/` mounts to `assets/dist/community/blox/`.

### Deployment

- **Primary**: GitHub Actions (`.github/workflows/deploy.yml`) — triggers on push to `main`, builds Hugo + Pagefind, deploys to GitHub Pages
- **Alternative**: Netlify config exists in `netlify.toml`
- **Publication import**: `.github/workflows/import-publications.yml` converts BibTeX to Markdown via the `academic` CLI

### Custom Icons

Skills section uses SVG icons named `Font_Awesome_5_*` stored in `assets/media/icons/`. The custom CSS in `assets/css/custom.css` enlarges skill icon containers to 80px and removes default background circles.
