# Project Context — Abhiram's Portfolio Site

This is a personal portfolio/blog built on the **tailwind-nextjs-starter-blog** template
(Next.js 15, React 19, Tailwind 4, Contentlayer2, pliny). Deployed to GitHub Pages at
`abhiramcodegit.github.io`.

## Owner

- **Name:** Abhiram Bhogi
- **Occupation line:** Software Engineer | Full-Stack & Infrastructure | AI/ML
- **Tagline:** Building the voices of tomorrow
- **Email:** abhiram.bhogi@gmail.com
- **GitHub:** https://github.com/Abhiramcodegit
- **LinkedIn:** https://www.linkedin.com/in/abhiram-bhogi
- Background: born in India, moved to US at age 8. FIU CS student (GPA 3.9). SRE Intern at
  Carnival Corp, AI Research at VISAGE Lab, M.S.E.I.P. Fellow. Interested in AI as a tool
  that turns us into "orchestrators."

## Tooling — IMPORTANT

- **This is a Yarn 3 (Berry) project** (`packageManager: yarn@3.6.1`). Always use `yarn`,
  NOT `npm`. Mixing npm caused broken node_modules / missing-module errors this session.
- Run the dev server with `yarn dev` (user runs it manually in their own terminal).
- If dependencies look broken, run `yarn install` (first run pulls the whole tree and is slow,
  ~6+ min; later runs are fast from cache).

## Common failure + fix

- **Contentlayer / "Module not found: .contentlayer/package.json" or "No file content"**:
  caused by editing content files while dev server regenerates. Fix: stop dev server,
  `rm -rf .contentlayer .next`, then `yarn dev` to regenerate clean.

## About page structure (DONE)

Two-page setup:

- `/about` renders `data/authors/default.mdx` — SHORT warm first-person intro + a
  "Read my full story →" link to `/about/more`.
- `/about/more` renders `data/authors/journey.mdx` — the FULL in-depth story (resume-style
  highlights, projects, etc.). Route file: `app/about/more/page.tsx` (finds author with
  slug `journey`).
- `layouts/AuthorLayout.tsx` — trimmed social icons to mail/github/linkedin only (removed
  x/twitter and bluesky). Occupation is `text-center`; tagline (`company` field) styled as
  italic accent-colored motto.

## Profile photo

- File: `public/static/images/abhiram.jpeg` (lowercase — matters for case-sensitive GitHub
  Pages / Linux). Referenced as `/static/images/abhiram.jpeg` in both author mdx files.
- NOTE: image is ~2MB, larger than needed for a 192x192 avatar. Could optimize later.

## Open / TODO

- `data/siteMetadata.js` — STILL has template defaults (title "Next.js Starter Blog",
  author "Tails Azimuth", placeholder social links, siteUrl). Needs updating with Abhiram's
  info: title, author, headerTitle, description, siteUrl (https://abhiramcodegit.github.io),
  email, github, linkedin; remove unused socials (facebook, youtube, threads, instagram,
  medium, mastodon, x, bluesky).
- Consider optimizing/resizing the avatar image (~2MB).
- Projects page (`/projects`) not yet populated with Abhiram's real projects (RunwAI,
  Gamified Habit Tracker, Password Manager, Stock Price Predictor).
- Deploy flow: commit + push to GitHub → `.github/workflows/pages.yml` builds & deploys.
