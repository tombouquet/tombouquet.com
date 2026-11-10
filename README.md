# tombouquet.com

Personal website for tombouquet.com, built with Vite, React, TypeScript and Tailwind CSS.

## Development

The `@tombouquet` packages install from GitHub Packages, so export a token with `read:packages`
first, such as `export GITHUB_TOKEN=$(gh auth token)`.

```sh
bun install        # also installs the lefthook git hooks
bun run dev
bun run format     # oxfmt + format-codemod
bun run lint       # oxlint
bun run typecheck
bun run test       # vitest
bun run build
```
