# CATÉ Design System

CATÉ is a modern cat adoption platform. It helps people discover cats in real shelters, understand each cat's personality and compatibility, save favourites, and move through a guided adoption application — with the shelter, not a central office, on the other side.

This system is built from a written brief (no existing codebase, Figma or brand assets were supplied). Visual reference cited in the brief: *Mawcare — Cat care UI/UX web design* on Behance (https://www.behance.net/gallery/227372471/Mawcare-Cat-care-UIUX-web-design-pet-care-website). That page could not be fetched, so it informed direction only through the brief's description (warm, editorial, photography-led, premium pet-care). Nothing was copied from it.

**Products represented:** one — the CATÉ responsive web app (discovery, cat profiles, shelters, favourites, application, application status). UI kit: `ui_kits/web/`.

---

## Content fundamentals

**Voice:** the shelter volunteer who knows every cat by name. Warm, specific, a little dry. Never gushing.

- **Person:** we talk to *you*. CATÉ speaks as *we* sparingly ("we'll tell you if someone else applies"). Cats are *she / he* and always by name — never "it", "this pet", "the animal".
- **Casing:** sentence case everywhere — headings, buttons, nav, tabs. Small caps (overline style) only for metadata labels: `NEW THIS WEEK`, `Nº 0142`.
- **Specific over superlative.** "Takes a day to trust you, then follows you room to room." not "Sweet & loving!!". Numbers are real: "waiting 38 days", "replies in ~1 day", "about 12 minutes".
- **Honest.** "Unknown" is a valid compatibility answer. Pending and adopted cats stay visible and say so. Fees are stated plainly with where the money goes.
- **Buttons are verbs**, 1–3 words: *Start application · Book a visit · Save search · Clear filters*. Never "Submit", "Click here", "Learn more".
- **Errors say what to do:** "Add an email so the shelter can reply." not "Invalid input".
- **Empty states give a way forward:** "No cats match all of that — yet. Try removing 'Good with dogs' — 6 more cats appear."
- **No emoji. No exclamation marks** except in genuine celebration (adoption day). No puns ("purrfect", "meow-velous") — ever.
- **Cat voice lines** (the italic line on each card) are ≤ 60 characters and describe a behaviour, not a virtue: "Sits on whatever you're reading." "Has opinions about breakfast."

## Visual foundations

**Direction (v2):** bold, colour-blocked, editorial. Loud structure (heavy sans headlines, solid colour blocks, organic photo shapes) carries a soft voice (serif names, italic taglines). Structural principles were drawn from the Mawcare reference; no marks or palette were copied.

- **Colour.** Warm cream *paper* (#F4EFE5 page, #FBF8F2 surface, white for inputs/overlays) and warm *ink* (#1E1B17). **Rust** (#B24A25, used for both the accent and the rust block) is the **only** interactive colour: every CTA, selected chip, checked control, active tab, current page, focus ring and saved heart. Never use a different CTA colour per screen. Colour-block grounds for secondary content: **Rust**, **Charcoal** (#2A2622), **Sage** (#B8C2A6, ink text). Semantic: green success, amber warning, brick-red error, slate info. No gradients except the photo protection scrim.
- **Type — two voices.** *Structure*: Manrope 800 for display, H1, H2, block titles, stats. Leading .86–1, tracking −.035 to −.055em. *Personality*: DM Serif Display for cat names (`.t-name`, `.t-name-l`), H3, and italic taglines (`.t-tagline`, `.t-tagline-l`). One italic serif word may sit inside a heavy headline (`<h1>Find the one who <em>picks you.</em></h1>`) and nowhere else. Body: Manrope 16/1.58.
- **Motif — squiggles.** Hand-drawn wave lines (`Squiggle`) in two strokes: Rust (`--motif-1`) and Sage (`--motif-2`). Used under stats, beside overlines, as section dividers, in the temperament scale and in application progress. They replace every bar, progress track and numeric meter. At most one per region; never paw prints.
- **Photography.** Candid and in motion: reaching, rolling, yawning, mid-meow, mid-stride. Eye level, warm light, real rooms or warm plain walls. Avoid stiff posed portraits and cold studio backdrops.
- **Photo containers.** Browse grids stay rectangular (4px). Hero, feature and 1-per-row accent images use organic shapes: `--shape-arch`, `--shape-arch-low`, `--shape-blob-a/b`, `--shape-pebble`, `--shape-leaf`, often with an overlapping circular inset photo ringed in the ground colour (`PhotoFrame`, `CatCard variant="feature"`).
- **Colour-block cards.** Secondary content (categories, spotlights, CTAs, saved-search prompts) is a solid block (20px radius): heavy title, italic line, **one underlined text link**. No buttons or icons inside, and never two blocks of the same tone side by side.
- **Composition.** Asymmetric on purpose. Mix a wide rust block with a narrow charcoal block and a text-only column; stagger card tops (0 / 72 / 24px) in editorial rows; let the hero arch break the right edge. The uniform 4-up grid is reserved for browse results.
- **Spacing.** 4px base (`--space-1…14`), editorial jumps at 88/120/168. Sections separate by `clamp(72px, 9vw, 136px)`. Name and tagline sit tight (8px).
- **Grid.** 12 cols ≥1024 (gutter 24, margin 56, max 1360); 8 cols 640–1023; 4 cols <640. Cat grid 4 → 2 → 1; block rows 3 → 2 → 1.
- **Corner radii.** Pills (999) for every button, chip, segmented control, search bar, toast and pagination number. 4px inputs and rect photos; 8px menus; 14px modals and shelter cards; 20px colour blocks.
- **Cards.** Cat cards have no box: the photo is the container. The shelter card is the only bordered card (1px, 14px radius, Rust on hover). Colour blocks are the only filled cards.
- **Borders.** 1px `--border` for dividers; 1px `--border-input` on controls; 1.5px Rust on secondary buttons.
- **Shadows.** Only for things that float: search bar, menus and toasts, modals.
- **Transparency & blur.** Only the sticky navbar (94% cream + blur) and the modal scrim. Badges on photos sit on solid cream pills.
- **Motion.** 120ms press, 200ms hover, 360ms modal/toast rise, 700ms photo zoom to 1.025 on card hover. Easing `cubic-bezier(.2,.7,.2,1)`. No bounce. `prefers-reduced-motion` respected.
- **Hover.** Primary Rust 600→700. Secondary Rust outline fills Rust. Ghost/links: underline goes solid. Chips: border and text go Rust. Block links: underline thickens.
- **Press.** 1px nudge on buttons; icon buttons scale .95.
- **Focus.** 2px Rust-500 outline with 2px offset on everything; inputs get a Rust border and a 3px Rust-100 ring.
- **Selected.** Rust fill on chips, segmented controls and the current page; 3px Rust underline on tabs and nav; Rust border and tint on radio choice cards.
- **Disabled.** Paper-200 fill and ink-300 text; 45% opacity on checkbox/radio labels.

## Iconography

- **Set:** [Lucide](https://lucide.dev) (ISC), 60 glyphs copied as SVG into `assets/icons/` (from `lucide-static@0.460.0`). The `Icon` component embeds the same path data, so consumers need no network.
- **Style:** 24px grid, 1.5px stroke default (1.75 inside buttons, 2 at ≤14px), round caps, `currentColor`, never filled, except the saved heart, which fills Rust.
- **Use sparingly:** icons accompany facts that benefit from fast recognition (location pin, kids/cats/dogs compatibility, health items, clock/phone on shelters) and icon-only controls (save, share, close, arrows). No decorative icons in headings, no icon-per-feature grids.
- **No emoji. No paw prints, hearts-as-decor or cat illustrations.** The squiggle is the only decorative mark (see Motif).**** Unicode used only for typographic marks: `Nº`, `·`, `–`, `…`, `/` (trait separator).
- **Logo:** none was provided. The wordmark direction is type-only: "CATÉ" in DM Serif Display, +0.04em tracking, ink or paper only (`Wordmark` component). No symbol was drawn. Replace when a real mark exists.

## Fonts

DM Serif Display (regular + italic) and Manrope (variable 200–800), latin subset, self-hosted from Google Fonts in `fonts/` and declared in `tokens/fonts.css`.

---

## Index

- `styles.css` — entry point (imports only)
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css` (spacing, grid, radius, shadow, motion, z), `base.css` (element defaults + `.t-*` type classes, `.container`, `.grid`), `components.css` (all `.c-*` component styles)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (below), one `@dsCard` per folder
- `ui_kits/web/` — interactive web app recreation (`index.html`, `home.jsx`, `browse.jsx`, `profile.jsx`, `apply.jsx`, `saved.jsx`, `data.js`)
- `assets/icons/` — Lucide SVGs · `assets/photos/` — 24 cat photos, favouring candid in-motion shots (Unsplash; placeholders until real shelter photography)
- `thumbnail.html`, `SKILL.md`

### Components

- **core/** — Icon, Wordmark, Button, IconButton, TextLink, Tag, Badge
- **forms/** — Field, Input, Textarea, StepProgress
- **selection/** — Checkbox, Radio (incl. choice card), Select (dropdown)
- **filters/** — FilterChip, SegmentedControl
- **search/** — SentenceSearch
- **navigation/** — Navbar, Tabs, Pagination, Footer
- **feedback/** — Modal, Toast, Notice
- **states/** — EmptyState, Skeleton, Spinner, AdoptionJourney
- **cat/** — CatCard (portrait rect/arch/blob · feature · row), TraitList, TemperamentMeter (squiggle scale), Compatibility
- **motif/** — Squiggle, SquiggleDivider, Stat
- **media/** — PhotoFrame
- **blocks/** — ColorBlock
- **shelter/** — ShelterCard
- **gallery/** — Gallery (carousel / mosaic)

**Intentional additions** beyond the brief: `Notice` (persistent inline messages the toast can't cover), `TemperamentMeter` (personality needs a scale, not only words), `SegmentedControl` (age bands), `StepProgress` (guided application), `Squiggle`/`SquiggleDivider`/`Stat` (the brand motif replacing bars), `PhotoFrame` (organic photo shapes), `ColorBlock` (colour-blocked secondary content).

Components use class names from `tokens/components.css` — consumers must link `styles.css`.
