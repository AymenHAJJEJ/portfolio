# Aymen HAJJEJ — Portfolio

Next.js 15 (App Router) + TypeScript portfolio, built to deploy on Vercel with zero configuration.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy on Vercel

**Option A — GitHub (recommended)**

1. Create a new repository on GitHub and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/AymenHAJJEJ/portfolio.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new, import the repository, and click **Deploy**.
   Vercel detects Next.js automatically; no settings to change.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel
```

## Edit your content

All text lives in `lib/data.ts` (profile, experience, projects, skills, education, certificates).
Styles are in `app/globals.css`. Your photo is `public/aymen.jpg`.
The resume button downloads `public/Aymen_HAJJEJ_Resume.pdf`; replace that file (keeping the name) to update it.
Fonts are Roboto and Roboto Mono via `next/font/google` (set in `app/layout.tsx`).

To link each project to its repository, add a `url` field in `lib/data.ts` and render it in `app/page.tsx`.
