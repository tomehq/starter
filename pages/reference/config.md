---
title: Configuration
description: Complete reference for every option in tome.config.js.
icon: file-cog
---

# Configuration Reference

All options for `tome.config.js`.

## Top-level options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `name` | `string` | `"My Docs"` | Site name shown in sidebar and title |
| `description` | `string` | — | Site description for SEO |
| `logo` | `string` | — | Path to logo image |
| `favicon` | `string` | — | Path to favicon |
| `navigation` | `array` | `[]` | Sidebar navigation groups |
| `socialLinks` | `array` | `[]` | Social links in the header |

## theme

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `preset` | `"amber" \| "editorial"` | `"amber"` | Theme preset |
| `accent` | `string` | — | Custom accent color (hex) |
| `mode` | `"light" \| "dark" \| "auto"` | `"auto"` | Color mode |

## navigation

```javascript
navigation: [
  {
    group: "Section Name",
    pages: ["page-id", "folder/page-id"],
  },
],
```

Page IDs are file paths relative to `pages/`, without the file extension.

## socialLinks

```javascript
socialLinks: [
  { platform: "github", url: "https://github.com/..." },
  { platform: "twitter", url: "https://x.com/..." },
  { platform: "discord", url: "https://discord.gg/..." },
  { platform: "custom", url: "https://...", icon: "mastodon" },
],
```

Supported platforms: `github`, `twitter`, `discord`, `linkedin`, `custom`.
