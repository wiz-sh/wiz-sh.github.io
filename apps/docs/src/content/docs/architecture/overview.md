---
title: "Architecture overview"
description: "See how package management, runtime execution, the Wiz compiler, tooling, and editor applications fit together."
---


The CLI is an application over independently testable packages. `@wiz-sh/pm` owns Git
resolution, manifests, lockfiles, stores, links, approvals, and installation. `@wiz-sh/runtime`
depends on its stable APIs to find and execute bins. Wiz tooling shares `@wiz-sh/compiler`.

```mermaid
flowchart LR
    CLI[apps/cli] --> PM[@wiz-sh/pm]
    CLI --> RT[@wiz-sh/runtime]
    RT --> PM
    CLI --> C[@wiz-sh/compiler]
    F[@wiz-sh/formatter] --> C
    L[@wiz-sh/linter] --> C
    LS[@wiz-sh/language-service] --> C
    LS --> F
    LS --> L
    LSP[@wiz-sh/lsp] --> LS
    VS[apps/vscode] --> LSP
```

Package resolution means materializing a Git dependency. Runtime resolution means locating
an executable. The dependency direction prevents package installation from depending on the
interactive command runner.
