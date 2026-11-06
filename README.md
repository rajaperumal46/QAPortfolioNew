# Rajaperumal Balakrishnan — QA Portfolio

Senior Test Analyst (Melbourne) · test automation, integration & data testing · AI-assisted QA.

Live: https://rajaperumal46.github.io/QAPortfolio/

## Edit content

All content lives in `src/data/`:

| File | What it holds |
| --- | --- |
| `ai.ts` | "AI in QA" section — build / use / test pillars |
| `projects.ts` | Project cards and case-study pages |
| `experience.ts` | Roles, certifications |
| `tech.ts` | Tools shown in the hero and the Technologies marquee |
| `blog.ts` | Blog links (external `url`, or on-site markdown `content`) |
| `socials.ts` | LinkedIn / GitHub links and the Formspree contact endpoint |

Replace `public/images/avatar.svg` with a photo and update the `src` in `src/components/Hero.tsx`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Credits

Built on the [portfolio template by Charan Munur](https://github.com/CharanMunur/portfolio) (MIT, see `LICENSE`).
React 19 · Vite · TypeScript · Tailwind CSS v4 · shadcn/ui. Tool icons from Simple Icons (CC0).
