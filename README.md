# minions-content-assets

**Text posts, image briefs, video briefs, and generated asset references**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-content-assets/sdk minions-sdk

# Python
pip install minions-content-assets

# CLI (global)
npm install -g @minions-content-assets/cli
```

---

## CLI

```bash
# Show help
content-assets --help
```

---

## Python SDK

```python
from minions_content_assets import create_client

client = create_client()
```

---

## Project Structure

```
minions-content-assets/
  packages/
    core/           # TypeScript core library (@minions-content-assets/sdk on npm)
    python/         # Python SDK (minions-content-assets on PyPI)
    cli/            # CLI tool (@minions-content-assets/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [content-assets.minions.help](https://content-assets.minions.help)
- Blog: [content-assets.minions.blog](https://content-assets.minions.blog)
- App: [content-assets.minions.wtf](https://content-assets.minions.wtf)

---

## License

[MIT](LICENSE)
