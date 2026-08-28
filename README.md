# Brandon & Bri's Wedding Website

A static site for the October 14, 2027 wedding in Sorrento, Italy. Plain HTML/CSS/JS, no build step, no dependencies beyond a Google Fonts CDN link.

## File structure

```
wedding-website/
├── index.html              Home
├── our-story.html          Our Story (includes "Why Italy")
├── itinerary.html          Weekend Itinerary (Wed/Thu/Fri)
├── getting-there.html      Getting There & Around
├── where-to-stay.html      Where to Stay
├── extend-your-trip.html   Extend Your Trip (before/after)
├── why-we-travel.html      Why We Travel
├── attire.html             Attire & Packing
├── faq.html                FAQ
├── no-gifts.html           No Gifts
├── rsvp.html                RSVP (placeholder for Google Form embed)
├── css/style.css
├── js/script.js
└── images/                 all photos and the hotel map
```

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `brandon-and-bri-wedding`).
2. Upload every file in this folder to the repository, keeping the same folder structure (the `css`, `js`, and `images` folders need to stay where they are relative to the `.html` files).
   - Easiest way: on the repo page, click **Add file → Upload files**, then drag the whole `wedding-website` folder contents in.
3. Go to the repo's **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, then **Save**.
5. GitHub will give you a live URL, usually `https://yourusername.github.io/repo-name/`, within a minute or two.

## Adding the RSVP form

Open `rsvp.html` and find the `<!-- RSVP FORM EMBED -->` comment. Once your Google Form is built:

1. In Google Forms, click **Send** → the `<>` embed icon → copy the `<iframe>` code it gives you.
2. Replace the `<div class="form-embed-placeholder">...</div>` block with that iframe code.
3. Commit the change, GitHub Pages updates automatically within a minute or two of any push.

## Still open / to fill in later

- **RSVP form** — not yet embedded, see above.
- **Hotel room block booking link** — opens November 2026, add the link to `where-to-stay.html` once available.
- **Wedding Party page** — intentionally left out of the site and nav for now. To add later: create `wedding-party.html` (copy the structure of `no-gifts.html` as a starting point) and add a nav link in every page's `<ul class="nav-links">`.
- **Photo Gallery page** — waiting on engagement photos. Same approach: create `gallery.html` when ready and add it to the nav.
- **In-town / coastal hotel picks** — currently only Via Nastro Verde options are listed on Where to Stay; add named options for the other two tiers when ready.
- **Wedding ceremony/reception exact timing** — currently marked "Details TBD" on the Itinerary page.

## Editing text

All page copy lives directly in the `.html` files as plain text between tags, no CMS. Open the file in any text editor (or directly on GitHub using the pencil/edit icon on a file), find the text, and edit it. Save/commit, and the live site updates automatically.

## Colors & fonts reference

Defined once at the top of `css/style.css` under `:root`, change a value there and it updates everywhere:

- Ivory `#FAF6EE` — background
- Sand `#EDE7D9` — section backgrounds
- Olive `#4A5E3F` / Olive dark `#333F2B` — primary accent, headers
- Amalfi blue `#4E7A93` — links, secondary accent
- Gold `#B08D57` — dividers, small details
- Lemon `#E8B93F` — accent pops

Fonts: Cormorant Garamond (headers), Jost (body), both loaded from Google Fonts.
