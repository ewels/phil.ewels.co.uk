# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Phil Ewels' personal website (phil.ewels.co.uk) - a static portfolio site showcasing work history, publications, talks, projects, and education. Built with Astro 5, deployed to GitHub Pages. Most code is hand-written (originally bootstrapped from an Astro template in 2023).

## Development Commands

If creating a new development environment (such as in a sandboxed setup), always begin by installing and initialising pre-commit:

```bash
# Install pre-commit
pip install pre-commit

# Initialise in root directory
pre-commit install
```

This will ensure that checks are done at time of commit to avoid linting failures.

To run the website locally for development and testing:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

To use helper scripts:

```bash
# Add/update publications from DOI
npm run add_pub [DOI]
python add_pub.py [DOI]

# Add talks (interactive CLI)
python add_talks.py
```

## Content Management

### Content Collections Structure

Content is managed via Astro Content Collections with strict Zod schemas ([src/content/config.ts:1](src/content/config.ts#L1)):

- **publications**: DOI-based papers in `src/content/publications/{year}/` - managed by [add_pub.py:1](add_pub.py#L1) which fetches metadata from Crossref API
- **talks**: Organized by date `src/content/talks/{YYYY}/{MM}/{DD}/` with YouTube embeds, PDFs, and location info
- **projects**: Major software projects (nf-core, MultiQC, Nextflow, etc.) with GitHub links and logos
- **workplaces**: Work history entries with date ranges and positions
- **education**: University education entries with degrees and dates

### Adding Publications

Use the Python script to automatically fetch metadata from Crossref and create markdown files:

```bash
npm run add_pub 10.1038/nbt.3820
```

This script:

- Fetches publication metadata from Crossref API
- Updates `src/publications.json` (large JSON cache file ~718KB)
- Creates markdown file in `src/content/publications/{year}/{slug}.md` with YAML frontmatter
- Converts JATS XML abstracts to Markdown

### Content Schema Requirements

All content must follow strict Zod schemas. Key fields:

- **publications**: `doi`, `title`, `journal`, `pubDate`
- **talks**: `title`, `description`, `type` (enum: Talk, Invited speaker, Conference talk, Workshop, Webinar, Bytesize), `date`, `online`, optional `youtubeIDs`, `pdfURLs`, `location`, `countryFlag`
- **projects**: `title`, `description`, `projectURL`, optional `github`, `iconImage`, `order`
- **workplaces**: `title`, `location`, `URL`, `startDate`, optional `endDate`, `numPositions`, `countryFlag`
- **education**: `title`, `subtitle`, `location`, `URL`, `startDate`, optional `endDate`

## Architecture

### Technology Stack

- **Framework**: Astro 5 (static site generation)
- **Components**: Astro components + Svelte (minimal, only for DarkModeToggle)
- **Styling**: Tailwind CSS with Typography and Aspect Ratio plugins, custom SCSS, PostCSS with nesting
- **Content**: MDX/Markdown with YAML frontmatter
- **Icons**: astro-icon with @iconify-json packs (bi, mdi, simple-icons, flag)
- **Deployment**: GitHub Actions → GitHub Pages

### Directory Structure

```
src/
├── components/       # Reusable Astro/Svelte components
├── layouts/          # BaseLayout, ContentLayout
├── pages/            # File-based routing with dynamic routes
│   ├── index.astro
│   ├── work/[workplace].astro
│   ├── projects/[project].astro
│   ├── publications/[...publication].astro
│   ├── talks/[...talk].astro
│   └── education/[education].astro
├── content/          # Content collections (managed by Astro Content API)
│   ├── publications/
│   ├── talks/
│   ├── projects/
│   ├── workplaces/
│   └── education/
├── styles/           # Global CSS, custom fonts
└── publications.json # Large cache of publication metadata
```

### Component Patterns

- **Astro components** for static content and page structure
- **Svelte component** ([src/components/DarkModeToggle.svelte](src/components/DarkModeToggle.svelte)) for interactive dark mode with localStorage persistence
- **Utility-first CSS** via Tailwind with custom classes for sidebar and prose
- **Responsive design** with mobile-first breakpoints

### Dark Mode Implementation

Dark mode is class-based using localStorage with system preference fallback. The toggle is implemented in Svelte with reactive state management. CSS uses `dark:` prefix classes throughout.

### Dynamic Routes

- Publications and talks use rest parameters (`[...slug]`) to support date-based URLs
- Workplace, project, and education use simple dynamic routes (`[slug]`)
- All routes fetch content from collections via `getCollection()` and `getEntry()`

## Python Utilities

Two Python scripts manage content:

1. **add_pub.py**: Fetches publication metadata from Crossref API, updates JSON cache, creates markdown files

   - Uses Rich for CLI output, requests for HTTP, PyYAML for frontmatter
   - Handles JATS XML abstract conversion to Markdown
   - Checks existing files by scanning directories for matching DOI

2. **add_talks.py**: Interactive questionary-based CLI for adding talk entries from filesystem

Install Python dependencies:

```bash
pip install -r requirements.txt
```

## Build Process

1. Astro static site generation
2. MDX/Markdown rendering with frontmatter parsing
3. Tailwind CSS compilation with PostCSS nesting plugin
4. Sitemap generation via @astrojs/sitemap
5. Asset optimization and output to `dist/`

## Deployment

Automatic deployment via GitHub Actions ([.github/workflows/deploy.yml](/.github/workflows/deploy.yml)):

- Triggers on push to `main` branch
- Uses `withastro/action@v3` for building
- Deploys to GitHub Pages with `actions/deploy-pages@v4`

## Code Quality

- **Prettier** with plugins for Astro, Svelte, Tailwind, and import organization
- **Pre-commit hooks** run Prettier automatically on staged files
- No formal testing framework (content-driven static site)

## Important Notes

- **Main branch**: The default branch is `main` (not `master`)
- **PR base**: When creating pull requests, target the `2016` branch (not `main`)
- **No server-side code**: Everything is statically generated at build time
- **Large JSON file**: `src/publications.json` is ~718KB and should be updated via script only
- **TypeScript aliases**: Use `@components/*` and `@layouts/*` for imports (configured in [tsconfig.json](tsconfig.json))
- **Site URL**: Configured in [astro.config.mjs:12](astro.config.mjs#L12) as `https://phil.ewels.co.uk`
