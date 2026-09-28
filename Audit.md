# CATÉ — pre-launch audit (26 Sep 2026)

Method: automated probe of all 12 pages at 1440 / 820 / 390px (overflow, broken images, unnamed controls, dead links, heading order, text < 12px, mobile targets < 32px, font families), plus source review of every page, cate.css and cate-data.js.

Baseline result: no horizontal overflow, no broken images, no unlabeled controls, one h1 per page, no heading-level skips, no runtime errors on any page or breakpoint.

## CRITICAL
None found.

## HIGH — fixed
1. **Footer Privacy / Terms / Accessibility went nowhere** (`href="#"`, all pages). Dead end in the footer's legal row. → Added `Legal.dc.html` (three anchored sections plus an on-page nav) and linked all three.
2. **Text below 12px** in 20+ places: the Verified badge (11px), status badges (11.5), the home search labels "Looking for / Near" (10.5), temperament scale ends (11.5), Apply sidebar labels (11px), the "Quick & easy" label (0.82cqw ≈ 11.6px), and illustration body copy in cqw units. → Set a 12px floor site-wide (cate.css plus inline edits). The cqw sizes now clamp with `max()`.

## MEDIUM — fixed
3. **No "you are here" signal on Favorites, Account or Status.** These pages aren't in the main nav, so nothing lit up. → The heart and account icons now get `aria-current="page"` and the rust tint.
4. **Small text-link tap areas on mobile** (TextLink, "View profile", back links: 16–25px tall). → Extended the hit area to ≥40px at ≤639px using padding with a matching negative margin, so layout doesn't shift.
5. **Shelter "All" filter tab was 20px wide.** → Min 44×44.
6. **Footer email field**: only the 23px text line was clickable, not the 52px pill. → The input now fills the full height of the pill.
7. **Dead CSS**: about 20 legacy `.c-footer` overrides for a footer that's no longer rendered, plus a duplicated `--font-headline`. → Removed.

## MEDIUM — needs your decision (not changed)
8. **Handwritten "Caveat" notes plus doodle hearts** on Home, Shelter and HowItWorks. They conflict with the system rule that the squiggle is the only decorative mark, and they add a third font. Recommendation: keep them on Home only, or remove them.
9. **Hard-coded hex colours**: Home 43, Shelter 24, HowItWorks 26, Stories 22, Apply 21 unique values, many of them near-duplicates of tokens (#16130F / #1E1B17 / #201D1A for ink; #6F665B / #5E584D / #5A5248 for muted). Recommendation: collapse them to tokens in one pass. This is visually near-neutral but a large diff.
10. **Radius drift**: 12 / 14 / 16 / 18 / 20 / 24 / 40 / 56px are all in use. Recommendation: 12 (controls/rows) · 20 (cards/blocks) · 999 (pills).

## LOW / content (open)
11. Social links point to the generic instagram.com / facebook.com / t.me.
12. The newsletter only saves to localStorage; it needs a real endpoint.
13. The Legal page copy is a plain-language draft; it needs legal review.
14. The "Save this search" block on Browse renders as `<a>` without an href (it works via onClick). Ideally it would be a `<button>`.

## Re-audit after fixes
All 12 pages × 3 widths: 0 overflow, 0 broken images, 0 unnamed controls, 0 dead links (except #14), 0 text below 12px. The small targets that remain are inline cat-name links inside cards, where the whole card is also clickable.
