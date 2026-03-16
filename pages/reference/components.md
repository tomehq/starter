---
title: Component Reference
description: API reference for every built-in MDX component.
icon: box
---

# Component Reference

All built-in components are available in `.mdx` files without imports.

## Callout

```jsx
<Callout type="info" title="Title">
  Content here.
</Callout>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `type` | `"info" \| "tip" \| "warning" \| "danger"` | Yes | Visual style |
| `title` | `string` | No | Header text |

## Tabs

```jsx
<Tabs items={["Tab 1", "Tab 2"]}>
  <div>Content for tab 1</div>
  <div>Content for tab 2</div>
</Tabs>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `items` | `string[]` | Yes | Tab labels |

## Card

```jsx
<Card title="Title" icon="🚀" href="/link">
  Description text.
</Card>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | Card heading |
| `icon` | `string` | No | Emoji or icon |
| `href` | `string` | No | Link target |

## CardGroup

```jsx
<CardGroup cols={2}>
  <Card title="A" />
  <Card title="B" />
</CardGroup>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `cols` | `number` | No | Column count (default: 3) |

## Steps

```jsx
<Steps>
  <div>**Step 1** — Description</div>
  <div>**Step 2** — Description</div>
</Steps>
```

Each direct child `<div>` becomes a numbered step.

## Accordion

```jsx
<Accordion title="Question?">
  Answer content.
</Accordion>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | Toggle header |
