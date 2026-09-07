# The Abhi Archive

Personal portfolio and blog for **Abhiram Bhogi** — Software Engineer working across full-stack,
infrastructure, and AI/ML.

Live at **[abhiramcodegit.github.io](https://abhiramcodegit.github.io)**.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router, React Server Components)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Contentlayer2](https://www.contentlayer.dev/) for MDX content
- [pliny](https://github.com/timlrx/pliny) for analytics, comments, and newsletter integrations

## Running locally

**Prerequisites**

- [Node.js 20](https://nodejs.org/) (matches the CI/deploy environment)
- [Yarn](https://yarnpkg.com/) — this is a **Yarn Berry** project (`yarn@3.6.1`). Always use
  `yarn`, never `npm`; mixing them breaks the dependency tree.

**Setup**

```bash
yarn install   # first run pulls the full dependency tree and is slow (~6 min)
yarn dev       # start the dev server at http://localhost:3000
```

The dev server hot-reloads as you edit files in `app/`, `components/`, or `data/`.

**Production build (optional)**

To reproduce the static export that gets deployed:

```bash
EXPORT=1 UNOPTIMIZED=1 yarn build   # output lands in ./out
```

**Troubleshooting**

If Contentlayer throws `Module not found: .contentlayer/package.json` or `No file content`
(usually from editing content while the dev server is regenerating), stop the dev server and
clean-rebuild:

```bash
rm -rf .contentlayer .next
yarn dev
```

## Content

- Blog posts live in `data/blog/` as MDX files.
- Author/bio content lives in `data/authors/`.
- Site-wide config (title, socials, metadata) lives in `data/siteMetadata.js`.
- Static assets (images, favicons) live in `public/static/`.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/pages.yml`,
which builds the static site and deploys it to GitHub Pages. No manual build or upload needed.

One-time setup: in the repo, go to **Settings → Pages → Build and deployment → Source** and
select **GitHub Actions**.

## Credits

Built on the [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)
template by [Timothy Lin](https://github.com/timlrx), customized for this site.
Licensed under [MIT](./LICENSE).
