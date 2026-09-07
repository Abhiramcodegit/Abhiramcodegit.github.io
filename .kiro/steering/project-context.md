# Project Context — Abhiram's Portfolio Site

This is a personal portfolio/blog built on the **tailwind-nextjs-starter-blog** template
(Next.js 15, React 19, Tailwind 4, Contentlayer2, pliny). Deployed to GitHub Pages at
`abhiramcodegit.github.io`.

## Owner

- **Name:** Abhiram Bhogi
- **Occupation line:** Software Engineer | Full-Stack & Infrastructure | AI/ML
- **Tagline:** Becoming the Voices of Tomorrow
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

## Home / About page structure (DONE — restructured this session)

Short version is now the HOME page; full story is the ABOUT page:

- **Home (`/`)** renders `data/authors/default.mdx` — SHORT warm first-person intro. Route
  file `app/page.tsx` passes `title=""` (hides the "About" heading) and
  `avatarClass="h-64 w-64"` (bigger avatar, home only). Ends with a "learn-with-me" blog
  link (`/blog`) and a "Read my full story →" link that now points to `/about`.
- **About (`/about`)** renders `data/authors/journey.mdx` — the FULL in-depth story. Route
  file `app/about/page.tsx` (now finds author slug `journey`; keeps the "About" heading).
- `/about/more` still exists (`app/about/more/page.tsx`, renders `journey`) as a leftover
  duplicate/alias — harmless, candidate for deletion later.
- `layouts/AuthorLayout.tsx` — now takes optional props `title` (default `'About'`; pass
  `''` to hide) and `avatarClass` (default `'h-48 w-48'`). Social icons row = mail / github
  / linkedin / **resume**. Avatar `Image` is 256px source rendered via `avatarClass`.
- `journey.mdx` has italic `_Tech: ..._` lines under each experience paragraph and each
  project bullet. Degree wording = one degree, transfer, "Class of 2026" (NOT two degrees).

## Resume link (DONE)

- Added a `Resume` SVG icon in `components/social-icons/icons.tsx`, registered as `resume`
  in `components/social-icons/index.tsx`.
- New `resume` field added to `contentlayer.config.ts` Authors schema and to both author
  mdx frontmatters: `resume: /static/resume.pdf`.
- Rendered in `AuthorLayout.tsx` (author row) and hardcoded in `components/Footer.tsx`.
- File lives at `public/static/resume.pdf` (lowercase). ~109KB.

## Footer + siteMetadata (DONE)

- `components/Footer.tsx` — icons trimmed to mail / github / linkedin / resume. Bottom line
  is `author • © year`. Removed template "Next.js Starter Blog" title link and the
  "Tailwind Nextjs Theme" credit (MIT license only requires keeping the LICENSE file, which
  is still present — so removing the visible credit is compliant).
- `data/siteMetadata.js` — updated with real info: `title`/`author` = "Abhiram Bhogi",
  `headerTitle` = **"The Abhi Archive"**, real description, `siteUrl`
  `https://abhiramcodegit.github.io`, email/github/linkedin. Removed unused socials
  (x, facebook, youtube, threads, instagram, medium, mastodon, bluesky).

## Profile photo

- File: `public/static/images/abhiram.jpeg` (lowercase — matters for case-sensitive GitHub
  Pages / Linux). Referenced as `/static/images/abhiram.jpeg` in both author mdx files.
- NOTE: image is ~2MB, larger than needed for a 192x192 avatar. Could optimize later.

## First blog post (DONE — VERIFY IT RENDERED TOMORROW)

- New post: `data/blog/beyond-the-prompt-agentic-ides-mcp-and-the-sre-mindset.mdx`
  ("Beyond the Prompt: How Agentic IDEs, MCP, and an SRE Mindset Are Redefining the
  Engineering Learning Curve"). `date: 2026-09-05`, `authors: ['default']`,
  tags `['ai','sre','mcp','observability','engineering']`, `draft: false`.
- Replaced/deleted the template's `introducing-tailwind-nextjs-starter-blog.mdx`.
- The `while` loop is wrapped in a ```js fenced code block. Stanford link = YouTube URL
  `https://www.youtube.com/watch?v=9vM4p9NN0Ts` (timestamp `&t=1156s` removed so it starts
  from the beginning).
- Builds clean; route `/blog/beyond-the-prompt-agentic-ides-mcp-and-the-sre-mindset` was in
  the build output. **TODO tomorrow: pull up the live site / `yarn dev` and confirm this
  post actually renders correctly** (headings, code block, YouTube link, tags) and appears
  at the top of `/blog`. If Contentlayer acts up: stop dev, `rm -rf .contentlayer .next`,
  `yarn dev`.

## Header title + logo swap (DONE — NOT YET COMMITTED)

- `headerTitle` = **"The Abhi Archive"** (in `siteMetadata.js`, committed). Only the header
  changed; site `title`/`author` stay "Abhiram Bhogi" for SEO/footer.
- **Header logo:** DONE — see the authoritative "Header logo — DONE (static PNG served from
  public/)" section below. Short version: header renders a small static
  `public/static/images/logo-header.png` (120x120, ~13KB, transparent) via the theme
  `<Image>` wrapper. `data/logo.svg` reverted to the template logo and no longer imported.
  Build verified clean. Changes NOT yet committed.
- Leftover big logo experiment files were cleaned up: `public/static/images/logo.svg`
  (deleted) and `logoone.png` (deleted). `public/static/images/logo.png` was reverted to the
  small ~43KB template placeholder (still referenced by `siteMetadata.siteLogo`).
- `siteMetadata.js` `siteLogo`/`socialBanner` still reference `/static/images/logo.png` and
  `twitter-card.png` (template placeholders) — revisit later if you want real OG/SEO images.

## SESSION-END GIT SNAPSHOT (as of this handoff)

Branch `main`, in sync with `origin/main` at commit `e4603bd` (last pushed:
"Personalize portfolio: home/about split, resume link, footer cleanup, site metadata").

UNCOMMITTED working-tree changes (NOT yet committed or pushed):

- ` M .kiro/steering/project-context.md` (this file)
- ` M app/tag-data.json` (auto-generated by build)
- ` M components/Header.tsx` (Logo className sizing — see logo section)
- ` D data/blog/introducing-tailwind-nextjs-starter-blog.mdx` (template post removed)
- ` M data/logo.svg` (logo swap — see logo section)
- ` M data/siteMetadata.js` (headerTitle "The Abhi Archive")
- ` M public/static/images/logo.png` (logo swap, 1.7M)
- `?? data/blog/beyond-the-prompt-agentic-ides-mcp-and-the-sre-mindset.mdx` (first blog post)
- `?? public/static/images/logo.svg` (logo swap, 1.6M)
- `?? scripts/daily-commit.sh` (daily auto-commit agent script — see below)

Build note: last full `yarn build` before the YouTube-link edit passed (EXIT 0) and the new
blog route was present. A rebuild after the YouTube-link edit was started but INTERRUPTED —
so re-run `yarn build` (or `yarn dev`) next session to confirm everything still compiles
before committing.

## Header logo — DONE (static PNG served from public/)

Replaced the template logo (top-left of header) with Abhiram's real logo (a gold/gray
square emblem), served as a small static raster image.

### Final state

- Logo file: **`public/static/images/logo-header.png`** — 120x120, ~13KB, transparent
  background (RGBA). Renders at ~40px in the header (120 = 3x retina). Made from a 500x500
  transparent source with macOS `sips -z 120 120`.
- `components/Header.tsx`: imports the theme wrapper `import Image from './Image'` and renders
  `<Image src="/static/images/logo-header.png" alt={siteMetadata.headerTitle} width={40}
height={40} className="h-10 w-10" />`. The theme `Image` wrapper (`components/Image.tsx`)
  auto-prepends `BASE_PATH`, which matters for GitHub Pages.
- `data/logo.svg` was reverted to the tiny (~1.35KB) TEMPLATE logo and is **no longer imported**
  anywhere. Harmless leftover; can be deleted later.
- Build verified clean (`yarn build`, EXIT 0, ZERO "deoptimised" Babel warnings, no errors).

### Why it's a static PNG, not an inlined SVG (the thing that broke it before)

- Earlier attempt put a big logo in `data/logo.svg` and imported it via SVGR as `<Logo />`.
  That INLINES the whole SVG into the JS bundle and Babel parses it every build/reload →
  "code generator has deoptimised ... exceeds the max of 500KB" warnings + very slow page
  loads (a 1.69MB SVG; even optimized to ~384KB it was still slow).
- Fix / rule going forward: **serve the logo as a static file from `public/`** so it's just
  fetched, never parsed by Babel or bundled into JS. Keep the header image small (≤ ~150px,
  well under 50KB). Do NOT re-introduce a large inlined `<Logo />` SVG.

### How transparency was sorted (for future reference)

- `sips -g hasAlpha` tells you if a PNG has a real alpha channel. JPEG has NO transparency.
- A PNG color-type byte of `03` (palette) or `02` (RGB) = no alpha; `06` = RGBA (transparent).
- User's first "transparent" upload was actually flattened onto solid white (palette PNG,
  first PLTE entry = `ffffff`). Removed the background with a free online tool
  (remove.bg / pixelcut / photoroom style), re-uploaded a real RGBA PNG, then resized.
- `sips` can resize but CANNOT color-key/remove a background. Would need ImageMagick/rembg
  (not installed) for that — the online remover was the easy path.

### Terminal gotcha this session

- The integrated terminal intermittently dropped the FIRST characters of commands
  (`yarn` → `arn`, `echo` → `cho`, exit code -1, echoed-but-no-output). Re-running the
  command cleanly fixed it each time. Watch for this.

## Open / TODO (next session)

1. **Logo swap DONE** — header uses `public/static/images/logo-header.png` (see the "Header
   logo — DONE" section). Only remaining: eyeball it in light + dark mode via `yarn dev`.
2. **Verify the first blog post renders** (headings, ```js code block, YouTube link, tags)
   and sits at the top of `/blog`.
3. **Commit + push** the uncommitted changes above to `main` so it deploys + updates the
   GitHub activity graph. Use repo-local `git config http.postBuffer 524288000` if a push
   fails with HTTP 400 (large files). Committer identity showed as
   `abhiram@MacBook-Air-...`; user may want `git config --global user.email/name`.
4. Populate `/projects` with real projects (RunwAI, Gamified Habit Tracker, Password
   Manager, Stock Price Predictor).
5. Optimize/resize the avatar image (`public/static/images/abhiram.jpeg`, ~2MB).
6. Resume the **daily auto-commit agent** (blocked on macOS TCC / repo location — see below).

- Deploy flow reminder: commit + push to `main` → `.github/workflows/pages.yml` builds &
  deploys to GitHub Pages.

## Daily auto-commit agent — IN PROGRESS (resume here tomorrow)

Goal: automatically commit (and push) each day's changes to the repo so work is
backed up to GitHub without manual effort. Must also catch up: if the Mac is off at
the scheduled time, commit the next time the computer is turned on.

### Design decision

- Kiro hooks only fire on IDE events (SessionStart, file save, etc.), NOT on a
  wall-clock schedule. So a hook can't do a true "every day" run on its own.
- Chosen approach: **macOS `launchd` scheduled job** (Option B), independent of Kiro.
  Runs daily at **21:00 (9 PM)**. `StartCalendarInterval` auto-runs a missed job when
  the Mac next wakes/boots, and `RunAtLoad=true` also runs it at login — together these
  cover the "commit next time I turn the computer on" requirement.

### What was built (files already exist)

1. `scripts/daily-commit.sh` — checks `git status`; if there are changes it stages all,
   commits `chore: daily snapshot YYYY-MM-DD`, and pushes to `main`. Has a guard so it
   only makes ONE snapshot commit per calendar day (safe against multiple logins). No-op
   when the tree is clean. Push failure leaves the commit local for next run.
2. `~/Library/LaunchAgents/com.abhiram.dailycommit.plist` — the schedule (21:00 daily,
   RunAtLoad=true). Points at the script via `/bin/zsh`.
3. Logs: `.daily-commit.log`, `.daily-commit.out.log`, `.daily-commit.err.log` in repo root.

### Git auth (verified good)

- Remote is **HTTPS**: `https://github.com/Abhiramcodegit/Abhiramcodegit.github.io.git`,
  branch `main`. Credential helper is `osxkeychain` with a stored github.com credential,
  so an unattended `git push` should NOT prompt.

### THE BLOCKER (why it doesn't work yet) — macOS TCC / privacy protection

- The repo currently lives at `~/Documents/Projects/Abhiramcodegit.github.io`.
- macOS TCC protects `~/Documents`. A `launchd`-spawned process is denied access there.
- Verified with a test launchd job: reading a file in the repo returned
  **"Operation not permitted"**. So both reading the script AND doing git ops on the repo
  fail while it's under `~/Documents`.

### The plan chosen: move the repo OUT of `~/Documents` (Option B)

- Moving to a non-protected location (e.g. `~/Projects/` or `~/dev/`) removes the TCC
  block entirely — no Full Disk Access GUI grant needed.
- (Alternative not chosen: grant `/bin/zsh` + `/usr/bin/git` Full Disk Access in
  System Settings → Privacy & Security. Works but broad; kept as fallback.)

### UNRESOLVED — sort out FIRST thing tomorrow: possible duplicate repo

- User attempted the move and believes the project got **duplicated**: reports a new
  top-level "Projects" section, but a working copy also still sits in `~/Documents`.
- Automated search (home dir to depth 6, `/Users/Shared`, `/Volumes`) found only ONE copy:
  `~/Documents/Projects/Abhiramcodegit.github.io`. The supposed new copy was NOT located.
  It may be on an external/iCloud/unmounted path, or the move didn't complete.
- **DO NOT DELETE ANYTHING YET.** The Documents copy is currently the only confirmed
  working copy.

### Steps to resume tomorrow

1. Find every copy on disk:
   `sudo find / -type d -name "Abhiramcodegit.github.io" -not -path "*/node_modules/*" -not -path "*/.yarn/*" 2>/dev/null`
2. For EACH copy, confirm it is complete & current before trusting it:
   - `git -C <path> status` (uncommitted work?), `git -C <path> log -1 --oneline` (latest commit),
   - compare file counts / `git -C <path> rev-parse HEAD` between copies.
3. Pick the copy OUTSIDE `~/Documents` as the keeper (or move the good one there).
   Ensure it has all commits + any uncommitted changes from the Documents copy.
4. Delete the redundant `~/Documents` copy only after the keeper is verified.
5. Update the NEW absolute path in BOTH:
   - `scripts/daily-commit.sh` → `REPO_DIR` and `LOG_FILE`
   - `com.abhiram.dailycommit.plist` → script path in `ProgramArguments`,
     `StandardOutPath`, `StandardErrorPath`
6. Reload the job and re-test end-to-end:
   `launchctl bootout gui/$(id -u)/com.abhiram.dailycommit 2>/dev/null;`
   `launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.abhiram.dailycommit.plist`
   Then check `.daily-commit.log` shows a commit + push and `git status` is clean.

### Job management commands

- Disable: `launchctl bootout gui/$(id -u)/com.abhiram.dailycommit`
- Enable: `launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.abhiram.dailycommit.plist`
- Status: `launchctl list | grep dailycommit`
