# TODO

- **Port the site to [Verso](https://verso.lean-lang.org/)** (Lean 4's documentation/website authoring tool).
  Deferred for now — full port means a new Lean toolchain (elan/lake), rewriting every page by
  hand in Verso's authoring syntax, rebuilding the current styling (dark/light toggle, blue-violet
  accent, monospace headings, Dafny/Rust/SMT-LIB side panels) in Verso's own rendering system, and a
  custom GitHub Actions deploy pipeline since GitHub Pages doesn't build Lean natively.
  Reference: [Leo de Moura's site](https://github.com/leodemoura/leodemoura.github.com) still has
  `_includes`/`_layouts` alongside `Site.lean`/`Main.lean`/`lakefile.toml` — may be a Jekyll/Verso
  hybrid rather than a full rewrite, worth checking first if this is revisited.
