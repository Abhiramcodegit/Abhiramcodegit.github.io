import Image from 'next/image'
import type { Project } from '@/data/projectsData'

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

export default function ProjectCard({ project }: { project: Project }) {
  const { title, impact, description, tags, href, demoUrl, demoLabel, imgSrc, featured } = project

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white/50 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/40">
      {imgSrc && (
        <Image
          alt={`${title} preview`}
          src={imgSrc}
          width={1200}
          height={630}
          unoptimized
          className={`w-full object-cover object-center ${featured ? 'h-56' : 'h-40'}`}
        />
      )}
      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-2xl leading-8 font-bold tracking-tight">
          {href ? (
            <a href={href} {...ext} className="hover:text-amber-500 dark:hover:text-amber-400">
              {title}
            </a>
          ) : (
            title
          )}
        </h2>
        <p className="mt-2 font-medium text-amber-600 dark:text-amber-400">{impact}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:text-gray-300"
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-4 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
          {description.replace(/\s+/g, ' ')}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              {...ext}
              className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-amber-400"
            >
              {demoLabel ?? 'Watch demo'} &rarr;
            </a>
          )}
          {href && (
            <a
              href={href}
              {...ext}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold hover:border-amber-500 dark:border-gray-700 dark:hover:border-amber-400"
            >
              View code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
