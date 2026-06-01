# Template Guide

This project is a React-based producer/artist portfolio site. Follow the steps below to replace every placeholder with your own content. No structural changes are needed — only the values listed here.

---

## Quick Start Checklist

- [ ] Replace brand/artist name across all files
- [ ] Swap in your logo and artist photo
- [ ] Add your bio text
- [ ] Replace featured artist images and names in the hero
- [ ] Update contact emails
- [ ] Update social media links
- [ ] Fill in your production credits
- [ ] Update the page title and font
- [ ] Update copyright year and name

---

## Placeholders by File

---

### `my-ap/src/data/sections.json` — Section Configuration

This file controls which sections appear, in what order, and what they're labeled.

| Field | Default Value | What to Change |
|---|---|---|
| `enabled` | `true` | Set to `false` to hide a section from the site |
| `order` | `1`, `2`, `3`... | Change numbers to reorder sections (lower numbers appear first) |
| `navLabel` | `"Studio Content"`, `"Credits"`, `"Contact"` | Change to customize navigation menu labels |
| `navLabelMobile` | `"Content"` (for vlogs) | Mobile-specific label (shorter versions for small screens) |
| `title` | `"Studio Content Coming Soon"`, `"Production Credits"` | Change section heading text |
| `subtitle` | `"Selected production work and collaborations."` | Change description text below section title |

**Example:** To hide the Vlogs section, change `"enabled": true` to `"enabled": false` in the vlogs object.

---

### `my-ap/src/data/socials.json` — Footer Section Labels

At the top of `socials.json`, the `footerSections` object controls footer labels:

| Field | Default Value | What to Change |
|---|---|---|
| `footerSections.label.title` | `"Label"` | Title for the label section in footer |
| `footerSections.label.description` | `"Production Team"` | Subtitle under label name |
| `footerSections.contact.title` | `"Contact"` | Title for the contact section |
| `footerSections.social.title` | `"Keep Up With Me"` | Title for the social media section |

---

### `my-ap/src/components/Navigation.js`

| Placeholder | Replace With | Notes |
|---|---|---|
| `images/placeholder.jpg` (logo) | Your logo image path | Place image in `my-ap/public/`. Recommended: 50×50px, PNG with transparent background. Reference as `/your-logo.png` |
| `[BRAND_NAME]` (img alt) | Your brand/artist name | Used as the image alt text |
| `[BRAND_NAME]` (link text) | Your brand/artist name | Displayed as the nav text next to your logo |
| Nav menu items (Studio Content, Credits, Contact) | Configured in `sections.json` | Edit nav labels in `src/data/sections.json` instead of hardcoding |

---

### `my-ap/src/components/HeroSection.js`

| Placeholder | Replace With | Notes |
|---|---|---|
| `[YOUR TAGLINE OR SUBTITLE HERE]` | Your hero subtitle/tagline | One sentence describing your catalog or sound |
| `images/placeholder.jpg` × 4 | Your featured collaborator photos | Place images in `my-ap/public/images/`. Recommended: 400×400px, 1:1 square ratio, JPG or JPEG |
| `[FEATURED_ARTIST_1]` through `[FEATURED_ARTIST_4]` | Your featured artist/collaborator names | Used as image alt text and the caption below each card |

The hero title `THE CATALOG` can also be changed to match your preferred section label.

---

### `my-ap/src/components/Bio.js`

| Placeholder | Replace With | Notes |
|---|---|---|
| `[ARTIST_NAME]` (heading) | Your artist or brand name | Displayed as the section heading |
| `images/placeholder.jpg` | Your artist photo | Place in `my-ap/public/`. Recommended: 400×400px or larger, square crop. Referenced as `/your-photo.jpg` |
| `[ARTIST_NAME]` (img alt) | Your artist or brand name | Alt text for your photo |
| `[YOUR BIO HERE — Paragraph 1]` | Your bio — paragraph 1 | Introduce yourself, your city, your sound |
| `[YOUR BIO HERE — Paragraph 2]` | Your bio — paragraph 2 | Notable collaborators, credits, artistic vision |

---

### `my-ap/src/components/Footer.js`

**To customize footer section titles:**
- Edit `src/data/socials.json`
- Find the `footerSections` object at the top
- Update `label.title`, `contact.title`, `social.title`, and `label.description`

**To customize footer content:**

| Field | Replace With | Location in socials.json |
|---|---|---|
| Label name | Your label or team name | `label.name` |
| Label logo | Your label logo image path | `label.logo` |
| City & state | Your city and state/region (e.g. `Nashville, TN`) | `label.city`, `label.state` |
| Primary email | Your main contact email | `contact.primaryEmail` |
| Business email | Your business/booking email | `contact.businessEmail` |
| Instagram URL | Your full Instagram URL | `social.instagram` |
| YouTube URL | Your full YouTube URL | `social.youtube` |
| Copyright year | Current year (e.g. `2026`) | `copyright.year` |
| Copyright name | Your artist or brand name | `copyright.name` |

---

### `my-ap/src/components/CatalogueSection.js`

The catalogue section displays your production credits. Section title and subtitle are now controlled via `sections.json`.

**To customize the title and subtitle:**
- Edit `src/data/sections.json`
- Find the `"catalogue"` section object
- Update `"title"` (e.g., `"Production Credits"`)
- Update `"subtitle"` (e.g., `"My production work"`)

**To add your production credits:**
Edit `my-ap/src/data/tracks.json`. Each entry follows this shape:

```js
{ id: 1, title: "Song Title", artist: "Artist Name", date: "YYYY-MM-DD" }
```

| Field | Replace With | Notes |
|---|---|---|
| `id` | A unique sequential number | Must be unique per entry; used as the React key |
| `title` | The song title | String |
| `artist` | The credited artist(s) | Comma-separate multiple artists: `"Artist A, Artist B"` |
| `date` | The release date | Format: `"YYYY-MM-DD"` — entries are auto-sorted by date descending |

**To add credits:** Copy one of the existing `{ id, title, artist, date }` lines, increment the `id`, and fill in your data. You can add as many entries as needed.

**To remove placeholder credits:** Delete any of the 5 example entries and replace with your own.

---

### `my-ap/public/index.html`

| Placeholder | Replace With | Notes |
|---|---|---|
| `YOUR+FONT+NAME` in the Google Fonts `@import` URL | Your custom font name, URL-encoded | e.g. `Bebas+Neue` or `DM+Sans`. If not using a custom font, remove the entire `<style>` block |
| `[YOUR BRAND NAME]` in `<title>` | Your brand/artist name | Shown in the browser tab and search engine results |

---

### `my-ap/public/manifest.json`

| Placeholder | Replace With | Notes |
|---|---|---|
| `[APP_SHORT_NAME]` | Short version of your app name | Used on mobile home screens; keep under 12 characters |
| `[APP_FULL_NAME]` | Full name of your app | Displayed when the app is installed on a device |

---

### `package.json` (root)

| Placeholder | Replace With | Notes |
|---|---|---|
| `your-project-name` | Your project identifier | Lowercase, no spaces; used internally by npm. Does not appear on the site |

---

## Image Guidelines

| Image | Location | Recommended Size | Format |
|---|---|---|---|
| Brand logo (nav) | `my-ap/public/` | 50×50px minimum | PNG (transparent BG preferred) |
| Artist photo (bio) | `my-ap/public/` | 400×400px or larger | JPG or PNG |
| Featured artist cards (hero) | `my-ap/public/images/` | 400×400px, 1:1 ratio | JPG or JPEG |
| Label logo (footer) | `my-ap/public/images/` | 200×200px | PNG (transparent BG preferred) |

All images placed in `my-ap/public/` are served from the root `/` path at runtime. Images in `my-ap/public/images/` are served from `/images/`. Reference them in code as `/your-image.jpg` or `/images/your-image.jpg`.

---

## Audio / Track Data

This template does not embed or stream audio files directly — the catalogue is a credits list only. If you want to add audio playback in the future, each track entry in `CatalogueSection.js` can be extended with a `url` field (e.g. `"url": "/audio/track.mp3"`) and the render section updated to include an `<audio>` element or a "Listen Now" button (a commented-out stub already exists in the JSX).

Supported audio formats for web: **MP3**, **AAC**, **OGG**. MP3 is the safest cross-browser choice.

---

## Running the Site Locally

```bash
npm start          # starts the dev server at http://localhost:3000
npm run build      # creates a production build in my-ap/build/
```
