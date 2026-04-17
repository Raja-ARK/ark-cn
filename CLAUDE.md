# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev          # Start dev server (port 3000)
bun run build        # Production build
bun run preview      # Preview production build locally
bun run test         # Run Vitest unit tests
bun run type:check   # TypeScript type check (--noEmit)
bun run check        # Biome format + lint (must pass before merging)
bun run lint         # Biome lint --write
bun run format       # Biome format --write
bun run registry:build  # Build shadcn-compatible registry JSON
```

Both `bun run type:check` and `bun run check` must pass cleanly before merging.

## Architecture

This is a **shadcn-style component registry and documentation site** for Ark UI components. Users install components via the `shadcn` CLI (`npx shadcn@latest add`) — the site serves registry JSON at `/r/{name}.json`. Users own the component source after installation.

**Tech stack:**
- Runtime: **Bun**
- Meta-framework: **TanStack Start** + **Vite**
- UI primitives: **@ark-ui/react** (headless, handles a11y and state)
- Styling: **Tailwind CSS v4** (oklch color space, semantic tokens in `src/styles.css`)
- Routing: **TanStack Router** (file-based, `src/routes/`)
- Content: **Content Collections** (MDX → type-safe objects at build time)
- Code highlighting: **Shiki** via `rehype-pretty-code`
- Linting/Formatting: **Biome**
- Type checking: **TypeScript 6** (strict mode)

**Path aliases:** `@/*` → `src/*`, `content-collections` → `.content-collections/generated`

## Code Conventions

**Arrow functions only** — no `function` declarations anywhere in the codebase.

**Styling utilities:**
- `cn()` from `src/lib/utils.ts` (`clsx` + `tailwind-merge`) for composing class names
- `cva()` from `class-variance-authority` for component variants, defined inline in component files
- `data-slot="…"` attributes as styling hooks (kebab-case)

## Component Patterns

Components in `src/components/ui/` follow three patterns depending on complexity:

**Thin wrappers** (stateless, e.g., Badge, Spinner): `ark.div` or a plain element + `cn()` + optional `data-slot`. Export a single named component, optionally also `nameVariants`.

**Stateful primitives** (e.g., Dialog, Popover): Compose `Primitive.Root` + named parts (`Trigger`, `Content`, `Portal`). Export as `Dialog`, `DialogTrigger`, `DialogContent`, etc. (root-implicit) or `DialogRoot`, `DialogTrigger`, etc. (root-explicit) — no single naming convention is enforced.

**Collection-driven** (e.g., Select, Combobox, Listbox): Use TypeScript generics and `ComponentProps` for type-safe item flows.

**State management rules:**
- Derived state is computed during render, not stored in state
- `useMemo` only for expensive derived lists or stable keys
- Effects only for external systems (browser APIs)
- Loading/error/empty states belong in routes/docs pages, not in UI primitives

## Content (MDX Docs)

Docs live in `content/docs/components/` organized by category (`actions/`, `forms/`, `display/`, `feedback/`, `overlays/`, `navigation/`, `utilities/`).

**MDX frontmatter schema** (validated by Zod in `content-collections.ts`):
```yaml
---
id: 11            # Sequential numeric ID
title: Button
description: Short description of the component
url: /components/button
referenceLink: https://ark-ui.com/...  # Optional link to Ark docs
---
```

**MDX components available in docs:**
- `<ComponentPreview name="button-demo" />` — interactive live demo
- `<ComponentSource name="button" title="components/ui/button.tsx" />` — source viewer
- `<PackageInstall pkg="@ark-cn/button" shadcn />` — install instructions
- `<ComponentDocSupplement component="button" section="extension-props" />` — auto-generated prop docs
- `<Tabs>`, `<TabsList>`, `<TabsTrigger>`, `<TabsContent>` — for CLI/Manual install tabs
- `<DocSteps>`, `<DocStep>` — numbered step lists

## Skill Reference

For detailed component authoring patterns (Ark composition, accessibility, CVA variants, TypeScript idioms), see `.cursor/skills/ark-cn-ui/SKILL.md`.
