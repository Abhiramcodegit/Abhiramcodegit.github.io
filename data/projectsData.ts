interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Gridlock — FIU Hackathon (Sperry Challenge)',
    description: `Built at the FIU hackathon for the Sperry challenge, Gridlock is a geospatial
    decision tool that finds coordination opportunities between two utilities' planned
    infrastructure projects across Georgia and South Carolina. A deterministic PostGIS engine
    compares every DESC x GPC project pair by closest-point distance with a 40 km gate, day-gap,
    and coordination tiers, validated by regression tests against the official dataset. Results
    are shown on an interactive React + Vite + MapLibre map, backed by a Python API, Docker
    Compose, and CI — built using a multi-agent AI workflow with a dedicated QA gatekeeper.`,
    imgSrc: '/static/images/Gridlock.png',
    href: 'https://github.com/Abhiramcodegit/gridlock-sperry-hackathon',
  },
  {
    title: 'The Abhi Archive — Personal Portfolio & Blog',
    description: `The website you're currently viewing this on! A personal portfolio and technical
    blog built with Next.js, React, Tailwind CSS, and Contentlayer, with posts written in MDX.
    Customized from the Tailwind Next.js starter with a home/about split, resume link, custom
    branding, and a projects showcase, and automatically deployed to GitHub Pages through GitHub
    Actions on every push. Click Learn more to explore the source code behind this site on GitHub.`,
    imgSrc: '/static/images/abhi-archive.png',
    href: 'https://github.com/Abhiramcodegit/Abhiramcodegit.github.io',
  },
  {
    title: 'RunwAI — AI-Powered Virtual Stylist',
    description: `A personalized virtual stylist that curates smart outfit combinations from your
    uploaded wardrobe. Users snap photos of their clothes, and an OpenAI CLIP neural network
    auto-classifies each item by category, color, and style, then generates outfits tailored
    to the weather, occasion, and personal preferences. Built with a React frontend, a Flask
    backend, and Supabase for storage as a collaborative team project.`,
    imgSrc: '/static/images/runwai.png',
    href: 'https://github.com/Abhiramcodegit/outfit-ai',
  },
  {
    title: 'Gamified Habit Tracker',
    description: `Habit tracking reimagined as an RPG. Complete daily quests to earn XP, level up
    a character across five attributes, unlock achievements, and climb a global leaderboard.
    Features a GitHub-style check-in calendar and level-gated quest limits to keep users
    engaged. Built with a Django REST Framework backend and a React + Vite + Tailwind frontend
    with token-based auth.`,
    imgSrc: '/static/images/habit-tracker.png',
    href: 'https://github.com/Abhiramcodegit/gamified-habit-tracker',
  },
  {
    title: 'Secure Password Manager',
    description: `A full-stack MERN password manager with end-to-end security. Passwords are
    encrypted with AES-256-CBC, users are authenticated via JWT stored in HTTP-only cookies
    with email verification, and the app includes a customizable password generator, strength
    meter, and an OpenAI-powered chatbot for security guidance. Hardened against XSS, CSRF, and
    injection with Helmet, CORS, and bcrypt hashing.`,
    imgSrc: '/static/images/password-manager.png',
    href: 'https://github.com/Abhiramcodegit/password-manager-abhiram',
  },
]

export default projectsData
