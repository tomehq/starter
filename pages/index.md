---
title: Welcome
description: Documentation powered by Tome. Write in Markdown, ship beautiful docs.
---

# My Docs

Welcome to your documentation site. This project was scaffolded with [Tome](https://tome.center) — write in Markdown, ship beautiful docs.

## Quick Start

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Build static site to out/
```

## Project Structure

```text
my-docs/
├── tome.config.js         # Site configuration
├── pages/                 # Documentation pages
│   ├── index.md           # This page
│   ├── tutorials/         # Step-by-step lessons
│   ├── guides/            # Task-oriented how-tos
│   ├── reference/         # Technical reference
│   └── concepts/          # Explanations and architecture
├── public/                # Static assets (images, fonts)
└── package.json
```

This site follows the [Diataxis](https://diataxis.fr) documentation framework — four categories that serve different reader needs:

| Category | Purpose | Example |
|----------|---------|---------|
| **Tutorials** | Learning-oriented. Walk a beginner through a task. | "Build your first docs site" |
| **Guides** | Task-oriented. Solve a specific problem. | "Add a callout component" |
| **Reference** | Information-oriented. Describe the machinery. | "Configuration options" |
| **Concepts** | Understanding-oriented. Explain how things work. | "How file routing works" |

## Next Steps

- **[Getting Started](/tutorials/getting-started)** — Build and customize your first page.
- **[Components Guide](/guides/components)** — Add interactive elements to your docs.
- **[Configuration Reference](/reference/config)** — Every option in `tome.config.js`.
