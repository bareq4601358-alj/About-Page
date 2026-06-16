# Bareq Aljuboori — Projects Hub

A premium, responsive landing page that organizes all of my websites, apps, games, and experiments in one place. Each project has a clean, clickable card that links straight to the live site.

## ✨ Features

- **Premium design** — animated aurora background, glassmorphism cards, gradient accents
- **Fully responsive** — looks great on mobile and desktop
- **Search & filter** — find projects by name or filter by category
- **Light / dark mode** — toggle with preference saved to your browser
- **Zero dependencies** — pure HTML, CSS, and JavaScript (instant load, easy to deploy)

## 📂 Projects included

| Project | Category | Link |
| --- | --- | --- |
| Blog | Writing | https://bareqblog.vercel.app |
| Photography | Creative | https://bareqaljuboori.vercel.app |
| Spanish Flashcards | Education | https://spanish-flashcards-sigma.vercel.app |
| Eye Tracking Exercises | Health | https://vision-training-zeta.vercel.app |
| VR Eye Tracking Program | Research | https://vr-vision-program.vercel.app |
| Neon Pong | Games | https://neonponggame.vercel.app |
| The Arabian Cobra (Snake) | Games | https://thearabiancobra.vercel.app |
| To-Do List & Planner | Productivity | https://to-do-list-planner.vercel.app |
| Consistency Streak Tracker | Productivity | https://consistency-streak-website.vercel.app |
| Wild Atlas — Animal Almanac | Education | https://the-animal-almanac.vercel.app |

## 🚀 Deploying to Vercel

This is a static site, so deployment is instant:

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Keep all defaults (no build command needed) and click **Deploy**.

Or with the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 🛠 Editing projects

All project data lives in the `PROJECTS` array at the top of `script.js`. To add, remove, or edit a project, just update that array — title, category, description, URL, icon, and gradient.

## 📁 Structure

```
.
├── index.html    # Page markup
├── styles.css    # Design system & responsive styles
├── script.js     # Project data + interactions
└── README.md
```

---

Designed & built by **Bareq Aljuboori**.
