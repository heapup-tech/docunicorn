# HeapUp Document Template

This template is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Running Local

We recommend using pnpm.

```bash
pnpm install
pnpm start
```

### Build

```bash
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Override Component

Get an overview of all the themes and components available to swizzle, run:

```bash
pnpm run swizzle --list
```

Swizzling components, you have two choices:

1. Ejecting a theme component, run:

```bash
pnpm run swizzle [theme name] [component name] --eject
```

Ejecting a theme component is the process of creating a copy of the original theme component, which you can fully customize and override.

2. Wrapping a theme component, run:

```bash
pnpm run swizzle [theme name] [component name] --wrap
```

Wrapping a theme component is the process of creating a wrapper around the original theme component, which you can enhance.
