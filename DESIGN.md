# Design

## Theme

Light. Scene: a hiring manager skims the link from an ATS tab at 11am in a bright office. Warm "graph paper" surface, dark warm ink, one committed signal-amber accent. The observability trade shows up as structure (grid lines, sparklines, mono metric labels, status dots), never as a dark-dashboard costume. The closing contact band flips to dark ink as a full-bleed drench.

## Color

Strategy: Committed. Amber carries the hero graph, links, section indices, and highlighted words; the contact band is drenched dark. Reference: Grafana-alert amber on engineering graph paper.

- `--paper` oklch(96.5% 0.009 85): page background
- `--paper-raised` oklch(98.5% 0.006 85): raised rows
- `--ink` oklch(23% 0.018 60): headings, body
- `--ink-soft` oklch(40% 0.02 60): secondary text
- `--line` oklch(85% 0.015 75): rules, grid
- `--amber` oklch(64% 0.155 55): graphics, large accents
- `--amber-deep` oklch(50% 0.135 50): text-safe accent, links
- `--green` oklch(52% 0.11 150): status dot only
- `--dark` oklch(24% 0.02 55) with `--on-dark` oklch(95% 0.01 80): contact band

Never #000/#fff. No gradient text.

## Typography

- Display and body: **Archivo** (variable; width 62 to 125, weight 100 to 900). Headlines in expanded widths at 800 to 900 weight, tight leading. Body at normal width, 400.
- Labels, dates, tags, metrics: **Spline Sans Mono** 400 to 500, uppercase or lowercase small sizes with letter-spacing.
- Scale ratio >= 1.25; hero display `clamp(2.75rem, 7.5vw, 5.5rem)`; body 1.05rem / 1.65, max 68ch.

## Layout

Left-aligned, asymmetric 12-column grid, max-width 1120px. Section headers: mono index (`01`) plus title plus full-width rule. Experience as a ruled timeline; projects as alternating asymmetric feature rows (no identical card grids); skills as a spec-sheet definition table. Spacing rhythm via `clamp()`, generous between sections, tight inside groups.

## Components

- **Status line**: small green pulsing dot plus mono text ("open to new roles").
- **Metrics readout**: Prometheus exposition-format block in mono (comment lines muted, values amber).
- **Sparkline**: hand-tuned SVG latency line in amber with one alert dot, stroke-draw on load.
- **Tag chip**: mono, 1px full border, pill radius 3px.
- **Buttons**: solid ink primary; 1px bordered secondary. Radius 4px.

## Motion

Entrance: staggered fade-up on hero, IntersectionObserver fade-up per section (12px, 0.6s, ease-out-quint). Sparkline stroke draw 1.2s. All gated behind `prefers-reduced-motion`. No layout-property animation.
