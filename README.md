# Tome Starter

A starter template for [Tome](https://tome.center) documentation sites. Structured using the [Diataxis](https://diataxis.fr) framework.

## Quick Start

```bash
# Clone this template
git clone https://github.com/tomehq/starter my-docs
cd my-docs

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your docs.

Or use the CLI directly:

```bash
npx @tomehq/cli init my-docs
```

## Structure

This template follows the [Diataxis](https://diataxis.fr) documentation framework, organizing content into four categories:

```
pages/
├── index.md                    # Welcome page
├── tutorials/                  # Learning-oriented (how to get started)
│   ├── getting-started.md
│   └── deploy.md
├── guides/                     # Task-oriented (how to solve problems)
│   ├── components.mdx
│   └── configuration.md
├── reference/                  # Information-oriented (technical details)
│   ├── config.md
│   ├── components.md
│   └── cli.md
└── concepts/                   # Understanding-oriented (how things work)
    ├── how-tome-works.md
    └── file-routing.md
```

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server at localhost:3000 |
| `pnpm build` | Build static site to `out/` |
| `pnpm deploy` | Deploy to Tome Cloud |

## Deploying

### Tome Cloud

```bash
# Login to Tome Cloud
npx tome login

# Deploy to production
npx tome deploy
```

To set up CI/CD with GitHub Actions, add your `TOME_TOKEN` as a repository secret and add a deploy step to the workflow in `.github/workflows/deploy.yml`:

```yaml
- name: Deploy
  if: github.event_name == 'push'
  run: npx tome deploy
  env:
    TOME_TOKEN: ${{ secrets.TOME_TOKEN }}
```

### Vercel

```bash
npx vercel
```

### Netlify

```bash
npx netlify deploy --dir=out
```

### Static Hosting

Run `pnpm build` and serve the `out/` directory from any static host.

## Configuration

Edit `tome.config.js` to customize your site:

```js
export default {
  name: "My Docs",
  theme: {
    preset: "amber", // try: ocean, forest, slate, rose, violet
    mode: "auto",    // auto, light, or dark
  },
  // Uncomment to add social links:
  // socialLinks: [
  //   { platform: "github", url: "https://github.com/your-org/your-repo" },
  //   { platform: "twitter", url: "https://x.com/your-handle" },
  // ],
};
```

## Learn More

- [Tome Documentation](https://tome.center/docs)
- [GitHub](https://github.com/tomehq/tome)
- [Twitter/X](https://x.com/tomedocs)
