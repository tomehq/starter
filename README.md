# Tome Starter

A starter template for [Tome](https://tome.center) documentation sites. Structured using the [Diataxis](https://diataxis.fr) framework.

## Quick Start

```bash
# Clone this template
git clone https://github.com/tomehq/starter my-docs
cd my-docs

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your docs.

Or use the CLI directly:

```bash
npx @tomehq/cli init my-docs
```

## Structure

```
pages/
├── index.md                    # Welcome page
├── tutorials/                  # Learning-oriented
│   ├── getting-started.md      # Build your first page
│   └── deploy.md               # Deploy to production
├── guides/                     # Task-oriented
│   ├── components.mdx          # Using MDX components
│   └── configuration.md        # Customizing your site
├── reference/                  # Information-oriented
│   ├── config.md               # Configuration options
│   ├── components.md           # Component API reference
│   └── cli.md                  # CLI commands
└── concepts/                   # Understanding-oriented
    ├── how-tome-works.md       # Architecture overview
    └── file-routing.md         # How routing works
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:3000 |
| `npm run build` | Build static site to `out/` |
| `npm run deploy` | Deploy to Tome Cloud |

## Learn More

- [Tome Documentation](https://tome.center/docs)
- [GitHub](https://github.com/tomehq/tome)
- [Twitter/X](https://x.com/tomedocs)
