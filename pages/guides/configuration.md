---
title: Customizing Your Site
description: Change your site name, theme, colors, and navigation layout.
icon: settings
---

# Customizing Your Site

All configuration lives in `tome.config.js` at the root of your project.

## Change the site name

```javascript
export default {
  name: "My Project",
};
```

The name appears in the sidebar header and browser tab.

## Switch themes

Tome ships with two presets:

```javascript
theme: {
  preset: "amber",      // Warm, approachable (default)
  // preset: "editorial", // Clean, typographic
  mode: "auto",          // "light", "dark", or "auto"
},
```

## Custom accent color

Override the default accent with any hex color:

```javascript
theme: {
  preset: "amber",
  accent: "#3b82f6",  // Blue accent
  mode: "auto",
},
```

## Organize navigation

The sidebar is defined by the `navigation` array. Each group has a label and a list of page IDs:

```javascript
navigation: [
  {
    group: "Getting Started",
    pages: ["index", "tutorials/getting-started"],
  },
  {
    group: "API",
    pages: ["reference/endpoints", "reference/auth"],
  },
],
```

Page IDs are file paths relative to `pages/`, without the extension.

## Add social links

```javascript
socialLinks: [
  { platform: "github", url: "https://github.com/your-org/your-repo" },
  { platform: "discord", url: "https://discord.gg/your-server" },
  { platform: "twitter", url: "https://x.com/your-handle" },
],
```

See the [Configuration Reference](/reference/config) for every available option.
