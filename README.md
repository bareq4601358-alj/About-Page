# Bareq Aljuboori — About Page

A polished, LinkedIn-style personal about page. Single-page, fully static — no build step required.

Live: connect this repo to Vercel for deployment.

## Sections
- **Hero** — portrait, name, tagline, location, languages, quick links
- **About** — bio and what I do
- **Selected Work** — featured VR app + project grid
- **Experience** — creative and technical work timeline
- **Education** — USC (Psychology and Theatre)
- **Skills** — development, creative, languages, discipline
- **Contact** — email and links

## Files
- `index.html` — markup
- `styles.css` — refined dark theme, responsive
- `script.js` — navbar, mobile menu, scroll reveal
- `assets/bareq.png` — profile photo
- `assets/vr-vision-icon.png` — VR app icon
- `assets/neon-pong-icon-512.png` — Neon Pong icon
- `vercel.json` — Vercel static config

## Run locally
```bash
python3 -m http.server 5173
# open http://localhost:5173
```

## Deploy to Vercel
```bash
vercel        # preview
vercel --prod # production
```

No build command needed — Vercel serves this as a static site.
