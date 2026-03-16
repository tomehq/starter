---
title: CLI Reference
description: Every command and flag available in the Tome CLI.
icon: terminal
---

# CLI Reference

## tome init

Create a new documentation project.

```bash
tome init [name]
```

| Option | Description |
|--------|-------------|
| `-t, --template <name>` | Starter template (default: `"default"`) |

## tome dev

Start the development server with hot reloading.

```bash
tome dev
```

| Option | Description |
|--------|-------------|
| `-p, --port <number>` | Port number (default: `3000`) |
| `--host` | Expose to network |

## tome build

Build the site for production.

```bash
tome build
```

Outputs static files to the `out/` directory.

## tome deploy

Deploy to Tome Cloud.

```bash
tome deploy
```

| Option | Description |
|--------|-------------|
| `--preview` | Create a preview deployment |

Requires `TOME_TOKEN` environment variable or `tome login`.
