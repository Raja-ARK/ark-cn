# ark-cn

A component registry and documentation site built on [Ark UI](https://ark-ui.com/) primitives, styled with Tailwind CSS v4, and powered by the TanStack ecosystem. Provides a shadcn-style component library with live documentation, interactive examples, and a registry endpoint compatible with the `shadcn` CLI.

---

## Overview

**ark-cn** packages headless Ark UI components into ready-to-use, copy-paste primitives — the same ownership model as [shadcn/ui](https://ui.shadcn.com/). Components live in your codebase; you own them, style them, and ship them.

The site doubles as a registry API so any project can pull components directly via the `shadcn` CLI:

```bash
npx shadcn@latest add @ark-cn/button
```

---

## shadcn-Style Approach

This project follows the **shadcn ownership model** — components are not installed as a package dependency. Instead, source code is copied directly into your project so you have full control.

**How it works:**

1. **No npm package** — components are not published to a registry like `npm`. You own the source.
2. **CLI-driven installation** — the `shadcn` CLI reads from the registry endpoint (`/r/{name}.json`) and writes the component file(s) into your `src/components/ui/` directory.
3. **Modify freely** — since the code lives in your repo, you can change styles, behavior, and API without forking a dependency.
4. **Ark UI as the headless layer** — accessibility, state, and interactions are handled by `@ark-ui/react`. The component files wrap Ark primitives with Tailwind classes and variant logic via `class-variance-authority`.
5. **`cn()` utility** — a `clsx` + `tailwind-merge` helper at `src/lib/utils.ts` is used throughout to compose class names safely.

**File structure per component:**

```
src/components/ui/button.tsx    ← the component you own and edit
content/docs/components/button.mdx  ← its documentation
content/ui/button.json          ← registry metadata for shadcn CLI
```

**Variants** are defined with `cva` (class-variance-authority) directly in the component file, making it easy to add, remove, or restyle variants without touching any external package.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | [Bun](https://bun.sh/) |
| Meta-framework | [TanStack Start](https://tanstack.com/start) |
| Build | Vite 8 |
| UI primitives | [@ark-ui/react](https://ark-ui.com/) 5 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 |
| Routing | [TanStack Router](https://tanstack.com/router) |
| Content | [Content Collections](https://www.content-collections.dev/) (MDX) |
| Code highlighting | [Shiki](https://shiki.style/) + rehype-pretty-code |
| Validation | [Zod](https://zod.dev/) v4 |
| Linting / Formatting | [Biome](https://biomejs.dev/) |
| Type checking | TypeScript 6 |

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) >= 1.0

### Install dependencies

```bash
bun install
```

### Start the dev server

```bash
bun run dev
```

The site runs at `https://ark-cn.vercel.app`.

---

## Available Scripts

| Script | Description |
|---|---|
| `bun run dev` | Start the Vite dev server on port 3000 |
| `bun run build` | Production build |
| `bun run preview` | Preview the production build locally |
| `bun run test` | Run Vitest unit tests |
| `bun run type:check` | TypeScript type checking (`--noEmit`) |
| `bun run format` | Auto-format with Biome |
| `bun run lint` | Lint and auto-fix with Biome |
| `bun run check` | Full Biome check (format + lint) |
| `bun run registry:build` | Build the component registry for shadcn CLI |

---

## Project Structure

```
ark-cn/
├── content/
│   ├── docs/components/        # MDX documentation for each component
│   ├── ui/                    # Component JSON registry entries
│   └── example/               # Example content collections
│
├── src/
│   ├── components/
│   │   ├── ui/                # 64 Ark UI primitives (shadcn-style)
│   │   ├── docs/              # Documentation page chrome (sidebar, props table, etc.)
│   │   └── example/           # 100+ interactive usage examples
│   ├── hooks/                 # Shared React hooks (e.g. use-mobile)
│   ├── lib/                   # Utilities — cn(), docs helpers, Shiki theme
│   ├── routes/                # TanStack Router file-based routes
│   └── styles.css             # Global CSS, design tokens (oklch color system)
│
├── public/
│   └── r/                     # Registry JSON endpoints for shadcn CLI
│
├── registry.json              # Component registry metadata
├── components.json            # shadcn CLI configuration
├── content-collections.ts     # Content Collections + MDX pipeline config
├── vite.config.ts             # Vite + plugin configuration
└── biome.json                 # Linter / formatter rules
```

---

## Component Library

64 Ark UI-based components across several categories:

**Form & Input**
Accordion, Angle Slider, Button, Button Group, Checkbox, Clipboard, Color Picker, Combobox, Date Picker, Editable, Field, Fieldset, File Upload, Input, Input Group, Listbox, Number Input, Password Input, Pin Input, Radio Group, Rating Group, Select, Slider, Switch, Tags Input, Textarea, Time Picker, Toggle, Toggle Group

**Layout & Display**
Alert, Alert Dialog, Badge, Breadcrumb, Card, Carousel, Collapsible, Dialog, Floating Panel, Hover Card, Image Cropper, Marquee, Menu, Pagination, Popover, Progress, QR Code, Scroll Area, Separator, Sheet, Sidebar, Signature Pad, Spinner, Splitter, Steps, Swap, Tabs, Timer, Tooltip, Tour, Tree View, Web Components, Zoom Image

---

## Using Components

### Via shadcn CLI (recommended)

Add any component directly to your project:

```bash
npx shadcn@latest add @ark-cn/button
```

### Import

```tsx
import { Button } from "@/components/ui/button"
```

---

## Adding Documentation

Component documentation lives in `content/docs/components/` as MDX files. Each doc file uses a Zod-validated schema:

```mdx
---
title: Button
description: A clickable button component with multiple variants.
---

## Usage

<ComponentPreview name="button-demo" />
```

---

## Theme

The design system uses [oklch](https://oklch.com/) color space with CSS custom properties. Tokens are defined in [src/styles.css](src/styles.css) and include:

- Light / dark mode (class-based)
- Semantic color palette (background, foreground, primary, destructive, etc.)
- Sidebar and chart color scales
- Radius scale (`sm` → `4xl`)

---

## Quality Gates

Before merging, both checks must pass:

```bash
bun run type:check   # TypeScript — zero errors
bun run check        # Biome — zero lint/format issues
```

---

## Architecture Notes

- **`src/components/ui/`** — Ark UI primitives following the shadcn ownership model. These are the source of truth for component API.
- **Composition layer** (routes, docs, forms) owns loading, error, and empty states — primitives do not.
- **Content Collections** transforms MDX docs into type-safe objects available at build time.
- **Registry endpoint** at `/r/{name}.json` allows `shadcn` CLI to pull components from this registry.

For deeper architecture details see [PROJECT.md](PROJECT.md) and [AGENTS.md](AGENTS.md).

---

## License

MIT
