# Manual Setup Steps for Minions Content-assets

This document lists the steps that must be completed manually after scaffolding.
Each step includes specific values for your project.

---

## 1. GitHub Repository Secrets

Go to **GitHub → mxn2020/minions-content-assets → Settings → Secrets and variables → Actions** and add:

| Secret | Description | Where to get it |
|--------|-------------|-----------------|
| `NPM_TOKEN` | npm publish token | [npmjs.com → Access Tokens](https://www.npmjs.com/settings/~/tokens) |
| `PYPI_TOKEN` | PyPI API token for `minions-content-assets` | [pypi.org → Account Settings → API tokens](https://pypi.org/manage/account/#api-tokens) |

> **Note**: If you share tokens across repos, you can use GitHub Organization secrets instead.

---

## 2. Netlify Sites

Create **3 Netlify sites** — one for each app:

### Web App (Playground)
- **Netlify site name**: `minions-content-assets-web`
- **GitHub repo**: `mxn2020/minions-content-assets`
- **Base directory**: `apps/web`
- **Build command**: `pnpm run build`
- **Publish directory**: `apps/web/dist`
- **Custom domain**: `content-assets.minions.wtf`

### Documentation
- **Netlify site name**: `minions-content-assets-docs`
- **GitHub repo**: `mxn2020/minions-content-assets`
- **Base directory**: `apps/docs`
- **Build command**: `pnpm run build`
- **Publish directory**: `apps/docs/dist`
- **Custom domain**: `content-assets.minions.help`

### Blog
- **Netlify site name**: `minions-content-assets-blog`
- **GitHub repo**: `mxn2020/minions-content-assets`
- **Base directory**: `apps/blog`
- **Build command**: `pnpm run build`
- **Publish directory**: `apps/blog/dist`
- **Custom domain**: `content-assets.minions.blog`

---

## 3. DNS Configuration

Add CNAME records at your DNS provider:

| Record | Type | Name | Value |
|--------|------|------|-------|
| Docs | CNAME | `content-assets.minions.help` | _(Netlify subdomain)_ |
| Blog | CNAME | `content-assets.minions.blog` | _(Netlify subdomain)_ |
| App  | CNAME | `content-assets.minions.wtf` | _(Netlify subdomain)_ |

> Get the Netlify subdomain from Netlify → Site settings → Domain management

---

## 4. npm Packages — First Publish

Before the CI publish workflow works, you need to publish initial versions manually:

```bash
# From the project root
pnpm install
pnpm run build

# Publish SDK
cd packages/core
npm publish --access public
cd ../..

# Publish CLI
cd packages/cli
npm publish --access public
cd ../..
```

Your packages:
- SDK: [`@minions-content-assets/sdk`](https://www.npmjs.com/package/@minions-content-assets/sdk)
- CLI: [`@minions-content-assets/cli`](https://www.npmjs.com/package/@minions-content-assets/cli)

---

## 5. PyPI Package — First Publish

```bash
cd packages/python

# Create virtual env
python -m venv .venv
source .venv/bin/activate

# Install build tools
pip install hatch twine

# Build
hatch build

# Upload (you'll be prompted for your PyPI token)
twine upload dist/*
```

Your package: [`minions-content-assets`](https://pypi.org/project/minions-content-assets/)

---

## 6. Release Please

Release Please is pre-configured. After your first merge to `main`:

1. A "Release PR" will be auto-created
2. Merging the Release PR creates a GitHub Release + git tag
3. The `publish.yml` workflow triggers on tags to publish to npm/PyPI

Verify config:
- [`release-please-config.json`](./release-please-config.json)
- [`.release-please-manifest.json`](./.release-please-manifest.json)

---

## 7. Branch Protection

Go to **GitHub → Settings → Branches → Add rule**:

- **Branch name pattern**: `main`
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass (select: `build-and-test`, `python-sdk`)
- ✅ Require branches to be up to date
- ❌ Do not allow force pushes

---

## 8. Add to Minions Ecosystem

Update the main [minions.dev](https://minions.dev) website to include this project:

1. Add to the plugins/projects listing page
2. Add the project color to `color_tracking.md`
3. Link documentation from the main docs

---

## Quick Reference

| Item | Value |
|------|-------|
| Project | `minions-content-assets` |
| SDK (npm) | `@minions-content-assets/sdk` |
| CLI (npm) | `@minions-content-assets/cli` |
| Python (PyPI) | `minions-content-assets` |
| GitHub | `github.com/mxn2020/minions-content-assets` |
| Docs domain | `content-assets.minions.help` |
| Blog domain | `content-assets.minions.blog` |
| App domain | `content-assets.minions.wtf` |
| Author | Mehdi Nabhani <mehdi@the-mehdi.com> |
| License | MIT |
