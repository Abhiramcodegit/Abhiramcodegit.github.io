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

This is a **Yarn (Berry) project** — always use `yarn`, never `npm`.

```bash
yarn install   # first run pulls the full dependency tree and is slow
yarn dev       # start the dev server at http://localhost:3000
```

## Content

- Blog posts live in `data/blog/` as MDX files.
- Author/bio content lives in `data/authors/`.
- Site-wide config (title, socials, metadata) lives in `data/siteMetadata.js`.
- Static assets (images, favicons) live in `public/static/`.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/pages.yml`,
which builds the site and deploys it to GitHub Pages.

## Credits

Built on the [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)
template by [Timothy Lin](https://github.com/timlrx), customized for this site.
Licensed under [MIT](./LICENSE).
