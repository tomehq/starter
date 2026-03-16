---
title: How Tome Works
description: Understand the architecture behind Tome — from Markdown files to a running documentation site.
icon: lightbulb
---

# How Tome Works

Tome turns a folder of Markdown files into a single-page application. Here is how.

## The pipeline

1. **You write Markdown** — `.md` and `.mdx` files in the `pages/` directory.
2. **Tome reads your config** — `tome.config.js` defines navigation, theme, and site metadata.
3. **Vite builds the app** — Tome's Vite plugin transforms your content into React components at build time.
4. **The theme renders it** — The shell component handles layout, sidebar, search, and navigation.
5. **Static output** — `tome build` produces static HTML, CSS, and JS in the `out/` directory.

## Key pieces

| Package | Role |
|---------|------|
| `@tomehq/cli` | CLI commands — `init`, `dev`, `build`, `deploy` |
| `@tomehq/core` | Config loading, routing, Vite plugin, markdown processing |
| `@tomehq/theme` | UI shell, sidebar, search, dark mode, presets |
| `@tomehq/components` | MDX components — Callout, Tabs, Card, Steps, etc. |

## Dev vs build

In **development**, Tome runs a Vite dev server with hot module replacement. Edit a file, save, and the browser updates instantly.

In **production**, `tome build` pre-renders all routes to static HTML with client-side hydration. The output works on any static host — no server required.

## Agent-friendly output

Every build automatically generates:

- `llms.txt` — Structured content for LLMs
- `search.json` — Full-text search index
- `mcp.json` — MCP server configuration
- `robots.txt` — Crawler directives
- JSON-LD schema markup in every page
