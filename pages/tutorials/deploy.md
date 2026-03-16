---
title: Deploy Your Site
description: Build your docs for production and deploy to any static hosting provider.
icon: globe
---

# Deploy Your Site

Tome builds to static files that work on any hosting platform. This tutorial covers building and deploying.

## Build for production

```bash
npm run build
```

This outputs a static site to the `out/` directory.

## Deploy options

### Vercel

```bash
npx vercel deploy ./out
```

### Netlify

```bash
npx netlify deploy --dir=./out --prod
```

### Cloudflare Pages

```bash
npx wrangler pages deploy ./out
```

### Tome Cloud

```bash
npm run deploy
```

This uses `tome deploy` which uploads your site to Tome Cloud with hash-based deduplication.

## CI/CD

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that automatically deploys on push to `main` and creates preview deployments for pull requests.

## What you learned

You built your site to static files and deployed it. Your docs are now live.
