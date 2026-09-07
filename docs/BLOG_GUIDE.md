# Blog authoring guide

A reference for writing posts on this site. This is **not published** to the live site (it
lives in `docs/`, not `data/blog/`), so it's a private cheat sheet.

Everything here is based on this project's actual setup (`contentlayer.config.ts`), so it
matches what your build supports — not generic advice.

---

## 1. Where posts live & how URLs are generated

- All posts are `.mdx` files under `data/blog/`.
- The URL comes from the file's path relative to `data/blog/`:

  | File                             | URL                      |
  | -------------------------------- | ------------------------ |
  | `data/blog/my-post.mdx`          | `/blog/my-post`          |
  | `data/blog/my-series/part-1.mdx` | `/blog/my-series/part-1` |

- The filename becomes the slug, so use lowercase words separated by hyphens
  (`why-i-love-observability.mdx`).

### Nested routes (multi-part posts / series)

This is the "nested-route" feature from the template. It's just **folders**. Put related
posts in a subfolder under `data/blog/` and they get grouped under that path:

```
data/blog/
  my-series/
    part-1-getting-started.mdx
    part-2-going-deeper.mdx
```

→ `/blog/my-series/part-1-getting-started` and `/blog/my-series/part-2-going-deeper`.

Each file still has its own normal frontmatter. There's nothing special to configure —
the folder name becomes part of the URL. Use it for a tutorial series or grouping a topic.

---

## 2. Frontmatter fields

Every post starts with a YAML frontmatter block between `---` fences. The available fields
come straight from the `Blog` document type in `contentlayer.config.ts`:

```mdx
---
title: 'Your Post Title' # REQUIRED
date: '2026-09-05' # REQUIRED (YYYY-MM-DD)
tags: ['ai', 'sre', 'observability'] # optional, defaults to []
draft: false # optional; true = hidden from the live site
summary: 'One or two sentences shown in the blog list and used for SEO.'
authors: ['default'] # optional; matches a file in data/authors/
lastmod: '2026-09-10' # optional; "last updated" date
images: ['/static/images/my-cover.png'] # optional; used for social/OG cards
layout: PostLayout # optional; see layouts below
bibliography: references-data.bib # optional; for citations (see §7)
canonicalUrl: 'https://...' # optional; SEO canonical link
---
```

Notes:

- **`draft: true`** keeps a post in the repo but hides it from the live site and `/blog`.
  Great for works-in-progress, or for parking the template examples instead of deleting them.
- **`authors`** references the slug of a file in `data/authors/` (e.g. `['default']` →
  `data/authors/default.mdx`). Omit it to use the default author.
- **`tags`** power the tag chips on posts and the tag sidebar in `/blog`. (The standalone
  `/tags` browse page was removed, but per-tag filter pages at `/tags/<tag>` still work.)

---

## 3. Post layouts

Set `layout:` in frontmatter to pick how the post renders. Options live in `layouts/`:

- `PostLayout` — the default. Author info, tags, prev/next links.
- `PostSimple` — a stripped-down version.
- `PostBanner` — features a large banner image (needs an `images` entry).

Omit `layout` to get the default.

---

## 4. Headings, text, links

Standard Markdown. Headings automatically get an anchor link icon on hover (via
`rehype-autolink-headings`), and a table of contents is generated from them.

```mdx
## A section heading

### A subsection

Normal paragraph text with **bold**, _italic_, and [a link](https://example.com).

- bullet list
- second item

1. numbered list
2. second item

> A blockquote.
```

---

## 5. Images

Put image files in `public/static/images/` and reference them with a `/static/...` path.
The `remarkImgToJsx` plugin auto-converts Markdown images into optimized Next.js `<Image>`
components, so plain Markdown syntax is all you need:

```mdx
![Descriptive alt text for accessibility](/static/images/my-image.png)
```

Tips:

- Always write meaningful **alt text** (it's read by screen readers and shown if the image
  fails to load).
- Keep images reasonably sized/compressed — large images slow the page.

---

## 6. Code blocks

Fenced code blocks get syntax highlighting (via `rehype-prism-plus`). Add a language after
the opening fence:

````mdx
```js
function greet(name) {
  return `Hello, ${name}`
}
```
````

Extra features supported here:

- **Code title** — add a title in curly braces; it renders as a labeled header:

  ````mdx
  ```js:utils/greet.js
  export const greet = (name) => `Hello, ${name}`
  ```
  ````

- **Line highlighting** — highlight specific lines with `{}`:

  ````mdx
  ```js {2-3}
  const a = 1
  const b = 2 // highlighted
  const c = 3 // highlighted
  ```
  ````

---

## 7. Math (LaTeX / KaTeX)

Math is enabled via `remark-math` + `rehype-katex`.

- Inline: wrap in single dollar signs — `$E = mc^2$`
- Block: wrap in double dollar signs:

```mdx
$$
\hat{\beta} = (X^T X)^{-1} X^T y
$$
```

---

## 8. Citations & bibliography

Academic-style citations are supported via `rehype-citation`.

1. Add a `.bib` file to the `data/` folder (e.g. `data/references-data.bib`).
2. Point to it in frontmatter: `bibliography: references-data.bib`
3. Cite in the body with `[@citationKey]`.
4. Add `## References` where you want the reference list rendered.

---

## 9. GitHub-style alerts / callouts

Enabled via `remark-github-blockquote-alert`. Use blockquote syntax with a type marker:

```mdx
> [!NOTE]
> Useful information the reader should know.

> [!WARNING]
> Something to be careful about.

> [!TIP]
> A helpful suggestion.
```

Supported types: `NOTE`, `TIP`, `IMPORTANT`, `WARNING`, `CAUTION`.

---

## 10. Workflow: adding a new post

1. Create `data/blog/my-new-post.mdx` (or in a subfolder for a series).
2. Add the frontmatter block (at minimum `title` and `date`).
3. Write the content in Markdown/MDX.
4. Run the dev server to preview: `yarn dev`. New/edited content is picked up by Contentlayer.
5. When ready, set `draft: false` (or leave it out) so it shows on the live site.
6. Commit + push to `main` → GitHub Actions builds & deploys to GitHub Pages.

### If Contentlayer acts up

Editing content while the dev server regenerates can throw errors like
"Module not found: .contentlayer/package.json" or "No file content". Fix:
stop the dev server, then:

```bash
rm -rf .contentlayer .next
yarn dev
```

---

## 11. Recovering a deleted example post

The template's original example posts (nested routing, code samples, images, math, etc.)
were removed but still exist in git history. To view or restore one:

```bash
# find the commit that had it
git log --oneline --diff-filter=D -- data/blog

# view a deleted file's contents from a commit
git show <commit>:data/blog/the-file.mdx

# restore it
git checkout <commit> -- data/blog/the-file.mdx
```

You can also always browse the upstream template for reference:
https://github.com/timlrx/tailwind-nextjs-starter-blog
