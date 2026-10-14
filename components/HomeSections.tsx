import Link from 'next/link'
import projectsData from '@/data/projectsData'

interface PostPreview {
  path: string
  date: string
  title: string
  summary?: string
}

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

const investments = [
  {
    label: 'Skills',
    text: 'Full-stack development, cloud infrastructure, and AI/ML. I pick up the tools by building with them.',
  },
  {
    label: 'Projects',
    text: 'Hackathon builds and side projects I finish, demo, and put in public.',
    href: '/projects',
    cta: 'See the builds',
  },
  {
    label: 'Writing',
    text: 'A learn-with-me space about AI, what I am figuring out, and where the field is heading.',
    href: '/blog',
    cta: 'Read the blog',
  },
]

const heading = 'text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400'

export default function HomeSections({ posts }: { posts: PostPreview[] }) {
  const featured = projectsData.filter((p) => p.featured)

  return (
    <div className="mt-16 space-y-20 border-t border-gray-200 pt-16 dark:border-gray-700">
      <section aria-labelledby="investing">
        <h2 id="investing" className={heading}>
          What I&apos;m investing in
        </h2>
        <p className="mt-4 max-w-2xl text-2xl leading-9 font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Myself, in public: what I learn, what I build, and how I choose to show it.
        </p>
        <ul className="mt-8 divide-y divide-gray-200 dark:divide-gray-700">
          {investments.map((item) => (
            <li key={item.label} className="grid gap-2 py-5 md:grid-cols-[10rem_1fr_auto] md:gap-8">
              <span className="font-semibold text-primary-600 dark:text-primary-400">{item.label}</span>
              <span className="text-gray-600 dark:text-gray-400">{item.text}</span>
              {item.href ? (
                <Link
                  href={item.href}
                  className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  {item.cta} &rarr;
                </Link>
              ) : (
                <span />
              )}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="featured">
        <div className="flex items-baseline justify-between">
          <h2 id="featured" className={heading}>
            Featured builds
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
          >
            All projects &rarr;
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-xl border border-gray-200 p-6 dark:border-gray-800"
            >
              <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{p.impact}</p>
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    {...ext}
                    className="rounded-md bg-primary-500 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-primary-400"
                  >
                    {p.demoLabel ?? 'Watch demo'} &rarr;
                  </a>
                )}
                {p.href && (
                  <a
                    href={p.href}
                    {...ext}
                    className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold hover:border-primary-500 dark:border-gray-700"
                  >
                    View code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {posts.length > 0 && (
        <section aria-labelledby="latest">
          <div className="flex items-baseline justify-between">
            <h2 id="latest" className={heading}>
              Latest writing
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
            >
              All posts &rarr;
            </Link>
          </div>
          <ul className="mt-6 divide-y divide-gray-200 dark:divide-gray-700">
            {posts.map((post) => (
              <li key={post.path} className="py-5">
                <time dateTime={post.date} className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h3 className="mt-1 text-xl font-bold tracking-tight">
                  <Link href={`/${post.path}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                    {post.title}
                  </Link>
                </h3>
                {post.summary && (
                  <p className="mt-2 line-clamp-2 text-gray-600 dark:text-gray-400">{post.summary}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
