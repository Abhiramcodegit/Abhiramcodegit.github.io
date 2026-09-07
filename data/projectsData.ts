interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
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
