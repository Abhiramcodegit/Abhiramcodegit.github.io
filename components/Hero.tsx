'use client'

import { useEffect, useState } from 'react'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

const ROLES = [
  'Software Engineer',
  'AI Systems Builder',
  'Full-Stack Developer',
  'Infrastructure Tinkerer',
]

interface QuickLink {
  label: string
  href: string
}

const LINKS = [
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'GitHub', href: siteMetadata.github },
  { label: 'LinkedIn', href: siteMetadata.linkedin },
].filter((item): item is QuickLink => Boolean(item.href))

function useTypingRoles(words: string[]) {
  const [text, setText] = useState(words[0])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let timer: ReturnType<typeof setTimeout>
    let wordIndex = 0
    let charCount = words[0].length
    let deleting = false

    const tick = () => {
      const word = words[wordIndex]
      if (!deleting && charCount === word.length) {
        deleting = true
        timer = setTimeout(tick, 1800)
        return
      }
      if (deleting && charCount === 0) {
        deleting = false
        wordIndex = (wordIndex + 1) % words.length
      } else {
        charCount += deleting ? -1 : 1
      }
      setText(words[wordIndex].slice(0, charCount))
      timer = setTimeout(tick, deleting ? 40 : 80)
    }

    tick()
    return () => clearTimeout(timer)
  }, [words])

  return text
}

export default function Hero() {
  const role = useTypingRoles(ROLES)

  return (
    <section aria-label="Introduction" className="pt-6 pb-8 md:pb-10">
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 md:p-10 dark:border-gray-700 dark:bg-gray-900">
        <p className="font-mono text-sm text-gray-500 dark:text-gray-400">
          ~/abhi-archive $ whoami
        </p>
        <h1 className="mt-3 text-4xl leading-tight font-extrabold tracking-tight text-gray-900 md:text-6xl dark:text-gray-100">
          {siteMetadata.author}
        </h1>
        <p
          aria-hidden="true"
          className="text-primary-500 mt-3 min-h-8 font-mono text-lg md:text-2xl"
        >
          {role}
          <span className="motion-safe:animate-pulse">_</span>
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-500 dark:text-gray-400">
          {siteMetadata.description}
        </p>
        <nav aria-label="Quick links" className="mt-6 flex flex-wrap gap-3">
          {LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:border-primary-500 hover:text-primary-500 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 dark:border-gray-600 dark:text-gray-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}
