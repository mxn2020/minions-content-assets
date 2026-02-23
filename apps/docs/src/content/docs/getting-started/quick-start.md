---
title: Quick Start
description: Get up and running with Minions Content-assets in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-content-assets/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_content_assets import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
content-assets info
```
