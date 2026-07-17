# Wiz documentation

This repository is the public documentation site for the Wiz language, compiler, package manager, registry, editor tooling, and contributor workflows. It is built with Astro Starlight and deployed as a static site through GitHub Pages.

## Local development

```console
bun install
bun run docs
```

The development server watches content and site configuration. Before submitting a change, run the same gates as CI:

```console
bun run check
bun run build
```

The production output is written to `apps/docs/dist` and is never required as an input to a clean build.

## Content

Documentation lives under `apps/docs/src/content/docs` and is organized into:

- language syntax, types, modules, declarations, bytes, and source maps;
- CLI, configuration, formatter, linter, LSP, and VS Code guides;
- registry operation, authentication, publishing, storage, security, and self-hosting;
- package-manager registries, dependencies, lockfiles, and monorepos;
- architecture and contributor references.

Examples must use valid current syntax, actual diagnostic codes, and commands exercised by the project’s test suites. Avoid placeholder sections or promises for unimplemented behavior.

## Deployment

`.github/workflows/release.yml` builds the Starlight site and deploys the resulting artifact with GitHub’s official Pages actions. Pull requests run the same static build without deploying.

Source repositories are available under the [`wiz-sh`](https://github.com/wiz-sh) organization. Licensed under [MIT](LICENSE).
