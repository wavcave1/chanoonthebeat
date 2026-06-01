# Easy Edit Guide

**Customize this website in under 30 minutes — no coding required.**

You only need to edit three small files and swap out some images. Every piece of text, every link, and every track in your credit list lives in one place. The layout, design, and animations never need to be touched.

---

## The Four Files You Edit

| File | What it controls |
|---|---|
| `my-ap/src/data/profile.json` | Your name, bio, photo, logo, and hero section |
| `my-ap/src/data/socials.json` | Label info, emails, Instagram, YouTube, copyright, footer labels |
| `my-ap/src/data/tracks.json` | Your production credits list |
| `my-ap/src/data/sections.json` | Which sections to show, hide, reorder, and their labels |

Open any of these files in a plain text editor (Notepad, TextEdit, VS Code — anything works).

---

## Step 1 — Fill In Your Profile (`profile.json`)

Open `my-ap/src/data/profile.json`. Replace each placeholder value inside the quotes:

```json
{
  "brandName": "Your Name On The Beat",
  "artistName": "Your Artist Name",
  "logo": "images/your-logo.png",
  "photo": "images/your-photo.jpg",
  "hero": {
    "title": "THE CATALOG",
    "subtitle": "Your tagline goes here.",
    "ctaLabel": "Explore Now",
    "featuredArtists": [
      { "name": "Artist One",  "image": "images/artist1.jpg" },
      { "name": "Artist Two",  "image": "images/artist2.jpg" },
      { "name": "Artist Three","image": "images/artist3.jpg" },
      { "name": "Artist Four", "image": "images/artist4.jpg" }
    ]
  },
  "bio": [
    "Your first bio paragraph. Introduce yourself, your city, and your sound.",
    "Your second bio paragraph. List collaborators, credits, and your vision."
  ]
}
```

**Rules:**
- Keep all punctuation (quotes, commas, colons, brackets) exactly as they are.
- Only change the text between the `"` marks.
- The `bio` array can hold as many paragraphs as you want — just add more lines following the same pattern.

---

## Step 2 — Add Your Social Links & Label Info (`socials.json`)

Open `my-ap/src/data/socials.json`:

```json
{
  "label": {
    "name": "Your Label Name",
    "logo": "images/your-label-logo.png",
    "city": "Nashville",
    "state": "TN"
  },
  "contact": {
    "primaryEmail": "you@yourdomain.com",
    "businessEmail": "booking@yourdomain.com"
  },
  "social": {
    "instagram": "https://www.instagram.com/yourhandle/",
    "youtube": "https://www.youtube.com/@yourhandle"
  },
  "copyright": {
    "year": "2026",
    "name": "Your Artist Name"
  }
}
```

Replace every value in quotes with your own info. The site footer will update automatically.

---

## Step 3 — Add Your Production Credits (`tracks.json`)

Open `my-ap/src/data/tracks.json`. Each track is one line:

```json
[
  { "id": 1, "title": "Song Name",       "artist": "Artist Name",              "date": "2025-03-15" },
  { "id": 2, "title": "Another Song",    "artist": "Artist A, Artist B",       "date": "2024-11-01" },
  { "id": 3, "title": "Third Track",     "artist": "Artist Name",              "date": "2024-06-20" }
]
```

**To add a track:**
1. Copy any existing line.
2. Paste it at the end of the list (before the final `]`).
3. Add a comma after the previous last line.
4. Change the `id` to the next number, fill in `title`, `artist`, and `date`.

**To remove a track:** Delete the whole line (and the trailing comma on the line above it).

**Date format:** Always use `"YYYY-MM-DD"` (e.g. `"2025-03-15"`). The site sorts credits automatically by date, newest first.

**Multiple artists:** Separate them with a comma inside the same string: `"Artist A, Artist B, Artist C"`.

---

## Step 4 — Customize Sections (`sections.json`)

Open `my-ap/src/data/sections.json`. This file controls:
- **Which sections appear** on your site (show/hide)
- **The order** sections appear in
- **Section titles and labels** (like "Production Credits" or "Studio Content")
- **Navigation menu labels** (like "Credits" in the top menu)

### Example structure:

```json
{
  "sections": [
    {
      "id": "bio",
      "enabled": true,
      "order": 1,
      "anchor": "bio"
    },
    {
      "id": "vlogs",
      "enabled": true,
      "order": 3,
      "anchor": "vlogs",
      "navLabel": "Studio Content",
      "navLabelMobile": "Content",
      "title": "Studio Content Coming Soon"
    },
    {
      "id": "catalogue",
      "enabled": true,
      "order": 4,
      "anchor": "catalogue",
      "navLabel": "Credits",
      "title": "Production Credits",
      "subtitle": "Selected production work and collaborations."
    }
  ]
}
```

### How to use:

**To hide a section:** Change `"enabled": true` to `"enabled": false`

```json
{ "id": "vlogs", "enabled": false, ... }
```

**To reorder sections:** Change the `order` numbers

```json
{ "id": "catalogue", "order": 2 },    // moves up
{ "id": "vlogs", "order": 4 }         // moves down
```

**To change section titles:** Edit the `title` field

```json
{ "id": "catalogue", "title": "My Credits" }
```

**To change navigation menu labels:** Edit the `navLabel` field

```json
{ "id": "catalogue", "navLabel": "My Work" }
```

---

## Step 5 — Customize Footer Labels (`socials.json`)

Open `my-ap/src/data/socials.json` and find the `footerSections` section at the top:

```json
{
  "footerSections": {
    "label": {
      "title": "Label",
      "description": "Production Team"
    },
    "contact": {
      "title": "Contact"
    },
    "social": {
      "title": "Keep Up With Me"
    }
  },
  ...
}
```

Change these to match your preference. For example:

```json
{
  "footerSections": {
    "label": {
      "title": "My Studio",
      "description": "Recording Team"
    },
    "contact": {
      "title": "Get In Touch"
    },
    "social": {
      "title": "Follow Me"
    }
  },
  ...
}
```

---

## Step 6 — Swap In Your Images

All images live in one folder: **`my-ap/public/images/`**

Just drop your image files into that folder, then update the file names in `profile.json` and `socials.json`.

### Image size guide

| Image | Where it appears | Recommended size | Format |
|---|---|---|---|
| Your logo | Top-left of the navigation bar | 50 × 50 px minimum | PNG (transparent background) |
| Your artist photo | Bio section | 400 × 400 px or larger | JPG or PNG |
| Featured artist cards | Hero section (4 cards) | 400 × 400 px, square crop | JPG or JPEG |
| Label logo | Footer | 200 × 200 px | PNG (transparent background) |

### How to reference an image in a JSON file

If your photo file is called `myphoto.jpg` and you put it in `my-ap/public/images/`:

```json
"photo": "images/myphoto.jpg"
```

If you put the logo directly in `my-ap/public/` (not in the `images` subfolder):

```json
"logo": "mylogo.png"
```

---

## Which File Controls What

| Section on the site | Data file to edit |
|---|---|
| Navigation bar (logo + name) | `src/data/profile.json` |
| Navigation menu (Home, Credits, Contact, etc.) | `src/data/sections.json` |
| Hero section (title, subtitle, artist cards) | `src/data/profile.json` |
| Bio section (photo + text) | `src/data/profile.json` |
| Vlogs section (title, visibility) | `src/data/sections.json` |
| Production credits list | `src/data/tracks.json` |
| Catalogue section (title, subtitle) | `src/data/sections.json` |
| Footer (label, contact, socials) | `src/data/socials.json` |
| Footer section titles | `src/data/socials.json` (`footerSections`) |
| Browser tab title | `my-ap/public/index.html` (edit `<title>` tag) |
| PWA / home screen name | `my-ap/public/manifest.json` (edit `short_name` and `name`) |

---

## Audio / Streaming Links

The credits list currently shows titles, artists, and dates only. If you want to add a streaming or preview link to a track, add a `"url"` field to any entry in `tracks.json`:

```json
{ "id": 1, "title": "Song Name", "artist": "Artist Name", "date": "2025-03-15", "url": "https://open.spotify.com/track/..." }
```

The field is stored and ready — a developer can hook it up to a "Listen Now" button using the stub already present in `CatalogueSection.js`.

**Supported audio formats for direct browser playback (if you self-host audio):**
- MP3 — best cross-browser support, recommended
- AAC (`.m4a`) — good support on all modern browsers
- OGG — good on Chrome/Firefox, limited on Safari

---

## Running the Site Locally

```
npm start       →  opens at http://localhost:3000
npm run build   →  creates a production build in my-ap/build/
```

---

## Checklist Before You Launch

- [ ] `profile.json` — brand name, artist name, logo, photo, hero, and bio filled in
- [ ] `socials.json` — label info, both emails, Instagram and YouTube URLs, copyright year, footer labels
- [ ] `tracks.json` — all production credits added
- [ ] `sections.json` — review section order, visibility, titles, and nav labels
- [ ] All image files dropped into `my-ap/public/images/` and paths updated in the JSON files
- [ ] `my-ap/public/index.html` `<title>` tag updated with your name
- [ ] `my-ap/public/manifest.json` `short_name` and `name` updated
- [ ] Site tested locally with `npm start`
