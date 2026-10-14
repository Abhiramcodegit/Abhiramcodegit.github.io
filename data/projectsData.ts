export interface Project {
  title: string
  impact: string
  description: string
  tags: string[]
  href?: string
  demoUrl?: string
  demoLabel?: string
  imgSrc?: string
  featured?: boolean
}

const RUNWAI_DEMO = 'https://drive.google.com/file/d/1rZbB3GiykhvrtltZC2azOvAHakQC5VMZ/view'

// TODO: paste the LinkedIn post URL for the Gridlock demo to show the Demo button.
const GRIDLOCK_DEMO = ''

const projectsData: Project[] = [
  {
    title: 'Gridlock',
    impact: 'Finds where two utilities can coordinate planned infrastructure work.',
    description: `Built at the FIU hackathon for the Sperry challenge, Gridlock is a geospatial
    decision tool that finds coordination opportunities between two utilities' planned
    infrastructure projects across Georgia and South Carolina. A deterministic PostGIS engine
    compares every DESC x GPC project pair by closest-point distance with a 40 km gate, day-gap,
    and coordination tiers, validated by regression tests against the official dataset. Results
    are shown on an interactive React + Vite + MapLibre map, backed by a Python API, Docker
    Compose, and CI, built using a multi-agent AI workflow with a dedicated QA gatekeeper.`,
    tags: ['PostGIS', 'React', 'MapLibre', 'Python', 'Docker', 'Multi-agent AI'],
    imgSrc: '/static/images/Gridlock.png',
    href: 'https://github.com/Abhiramcodegit/gridlock-sperry-hackathon',
    demoUrl: GRIDLOCK_DEMO,
    demoLabel: 'Watch demo on LinkedIn',
    featured: true,
  },
  {
    title: 'RunwAI',
    impact: 'An AI stylist that turns your own closet into outfits.',
    description: `A personalized virtual stylist that curates smart outfit combinations from your
    uploaded wardrobe. Users snap photos of their clothes, and an OpenAI CLIP neural network
    auto-classifies each item by category, color, and style, then generates outfits tailored
    to the weather, occasion, and personal preferences. Built with a React frontend, a Flask
    backend, and Supabase for storage as a collaborative team project.`,
    tags: ['OpenAI CLIP', 'React', 'Flask', 'Supabase', 'Team project'],
    imgSrc: '/static/images/runwai.png',
    href: 'https://github.com/Abhiramcodegit/outfit-ai',
    demoUrl: RUNWAI_DEMO,
    demoLabel: 'Watch demo',
    featured: true,
  },
  {
    title: 'The Abhi Archive',
    impact: 'This site: my portfolio and learning journal, deployed on every push.',
    description: `A personal portfolio and technical blog built with Next.js, React, Tailwind CSS,
    and Contentlayer, with posts written in MDX. Customized from the Tailwind Next.js starter
    with a home/about split, resume link, custom branding, and a projects showcase, and
    automatically deployed to GitHub Pages through GitHub Actions on every push.`,
    tags: ['Next.js', 'Tailwind', 'MDX', 'GitHub Actions'],
    imgSrc: '/static/images/abhi-archive.png',
    href: 'https://github.com/Abhiramcodegit/Abhiramcodegit.github.io',
  },
  {
    title: 'Gamified Habit Tracker',
    impact: 'Habit tracking reimagined as an RPG with XP, levels, and a leaderboard.',
    description: `Complete daily quests to earn XP, level up a character across five attributes,
    unlock achievements, and climb a global leaderboard. Features a GitHub-style check-in
    calendar and level-gated quest limits to keep users engaged. Built with a Django REST
    Framework backend and a React + Vite + Tailwind frontend with token-based auth.`,
    tags: ['Django REST', 'React', 'Vite', 'Tailwind'],
    imgSrc: '/static/images/habit-tracker.png',
    href: 'https://github.com/Abhiramcodegit/gamified-habit-tracker',
  },
  {
    title: 'Secure Password Manager',
    impact: 'AES-256 encrypted vault hardened against XSS, CSRF, and injection.',
    description: `A full-stack MERN password manager. Passwords are encrypted with AES-256-CBC,
    users are authenticated via JWT in HTTP-only cookies with email verification, and the app
    includes a password generator, strength meter, and an OpenAI-powered security chatbot.
    Hardened with Helmet, CORS, and bcrypt hashing.`,
    tags: ['MERN', 'AES-256', 'JWT', 'OpenAI'],
    imgSrc: '/static/images/password-manager.png',
    href: 'https://github.com/Abhiramcodegit/password-manager-abhiram',
  },
]

export default projectsData
