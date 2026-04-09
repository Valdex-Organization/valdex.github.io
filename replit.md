# Valdex — Mods & Tools Hub

## Project Overview

A dark GitHub-themed mods and gaming tools hub called **Valdex**. Users can browse, discover, and download game mods, scripts, skin packs, and utilities. Features mod cards with ratings and download counts, category browsing, trending leaderboard, and a community upload CTA.

## Design

- **Theme**: GitHub dark (`#0d1117` background, `#161b22` cards, `#58a6ff` accent blue)
- **Font**: Inter (UI) + JetBrains Mono (tags/code)
- **Icons**: Bootstrap Icons (CDN)

## Architecture

- **Type**: Static HTML/CSS/JS website (no backend)
- **Single file**: `index.html` — all HTML, CSS, and JS is self-contained
- **No build step required** — serves directly as static files

## Sections

1. **Announcement bar** — top banner for news/updates
2. **Header** — sticky nav with logo, search, links, sign in & CTA
3. **Hero** — headline, stats (mods, downloads, users, rating)
4. **Premium Selections** — 6 mod cards with image, title, tags, rating, downloads
5. **Categories** — 8 category tiles with icon and count
6. **Upload CTA banner** — community contribution prompt
7. **Trending This Week** — ranked list with badges (↑%, 🔥 Viral, ⭐ Top Rated)
8. **Footer** — brand, social links, nav columns

## Development

Served via `npx serve` on port 5000.

- **Start**: Workflow "Start application" → `npx serve . --listen tcp://0.0.0.0:5000`
- No Tailwind or build step needed — pure custom CSS in `<style>` tag

## Deployment

Configured as a **static** deployment — files served from project root.
