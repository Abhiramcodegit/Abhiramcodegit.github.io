'use client'

import { useEffect, useState } from 'react'
import Image from '@/components/Image'
import SocialIcon from '@/components/social-icons'

const ROLES = [
  'Software Engineer',
  'AI Systems Builder',
  'Full-Stack Developer',
  'Cloud & DevOps Engineer',
]

interface HeroProps {
  name: string
  avatar?: string
  tagline?: string
  email?: string
  github?: string
  linkedin?: string
  resume?: string
}

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

export default function Hero({
  name,
  avatar,
  tagline,
  email,
  github,
  linkedin,
  resume,
}: HeroProps) {
  const role = useTypingRoles(ROLES)

  return (
    <section aria-label="Introduction" className="pt-6 pb-8 md:pb-10">
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 md:p-10 dark:border-gray-700 dark:bg-gray-900">
        <p className="font-mono text-sm text-gray-500 dark:text-gray-400">
          ~/abhi-archive $ whoami
        </p>
        <h1 className="mt-3 text-4xl leading-tight font-extrabold tracking-tight text-gray-900 md:text-6xl dark:text-gray-100">
          {name}
        </h1>
        <p
          aria-hidden="true"
          className="text-primary-500 mt-3 min-h-8 font-mono text-lg md:text-2xl"
        >
          {role}
          <span className="motion-safe:animate-pulse">_</span>
        </p>
        <p className="sr-only">Software Engineer, AI Systems Builder, Full-Stack Developer</p>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
          {avatar && (
            <div className="h-44 w-44 shrink-0 overflow-hidden rounded-full md:h-60 md:w-60">
              <Image
                src={avatar}
                alt={`${name} portrait`}
                width={480}
                height={480}
                className="h-full w-full object-cover object-top origin-top scale-150"
              />
            </div>
          )}
          {tagline && (
            <p className="text-primary-500 text-xl leading-snug italic md:text-3xl">{tagline}</p>
          )}
        </div>
        <div className="mt-6 flex space-x-3">
          {email && <SocialIcon kind="mail" href={`mailto:${email}`} />}
          <SocialIcon kind="github" href={github} />
          <SocialIcon kind="linkedin" href={linkedin} />
          <SocialIcon kind="resume" href={resume} />
        </div>
      </div>
    </section>
  )
}
