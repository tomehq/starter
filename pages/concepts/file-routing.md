---
title: File Routing
description: How files in the pages directory map to URLs on your site.
icon: folder
---

# File Routing

Tome uses file-system routing. Every `.md` or `.mdx` file in the `pages/` directory becomes a page.

## How paths map to URLs

| File | URL |
|------|-----|
| `pages/index.md` | `/` |
| `pages/quickstart.md` | `/quickstart` |
| `pages/guides/setup.md` | `/guides/setup` |
| `pages/reference/config.md` | `/reference/config` |

## Rules

- **`index.md`** in any directory becomes the root of that path (`pages/guides/index.md` → `/guides`).
- **Nested directories** create nested URL paths.
- **File extension** is stripped — both `.md` and `.mdx` work the same way.
- **Underscored files** (e.g., `_draft.md`) are ignored.

## Navigation vs routing

File routing determines what URLs exist. The `navigation` array in `tome.config.js` determines what appears in the sidebar and in what order. Pages that exist but are not listed in navigation are still accessible by URL — they just do not appear in the sidebar.

## Organizing content

We recommend the [Diataxis](https://diataxis.fr) structure:

```text
pages/
├── index.md
├── tutorials/       # Learning-oriented
├── guides/          # Task-oriented
├── reference/       # Information-oriented
└── concepts/        # Understanding-oriented
```

This gives your readers a clear mental model of where to find what they need.
