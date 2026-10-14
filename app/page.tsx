import { allBlogs } from 'contentlayer/generated'
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'

const focusAreas = [
  'AI-assisted engineering',
  'Context-aware agents',
  'Observable infrastructure',
  'Full-stack products',
]

const stack = [
  'Python',
  'TypeScript',
  'React',
  'Next.js',
  'FastAPI',
  'Django',
  'PostgreSQL',
  'Docker',
  'PyTorch',
  'GitHub Actions',
]

export default function Page() {
  const posts = allCoreContent(sortPosts(allBlogs)).slice(0, 4)
  const projects = projectsData.slice(0, 4)

  return (
    <div className="space-y-24 pb-16">
      <section className="grid items-center gap-10 pt-10 md:grid-cols-5 md:pt-16">
        <div className="space-y-6 md:col-span-3">
          <p className="text-primary-500 text-sm font-semibold tracking-widest uppercase">
            Software Engineer · Full-Stack · Infrastructure · AI/ML
          </p>
          <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
            I build useful software and write about where AI is taking it.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            I&apos;m Abhiram. I work across full-stack development, cloud infrastructure, and
            machine learning, and I document what I learn along the way in The Abhi Archive.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/projects"
              className="bg-primary-500 hover:bg-primary-600 rounded-md px-5 py-3 text-sm font-semibold text-white"
            >
              See my projects
            </Link>
            <Link
              href="/blog"
              className="rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:border-gray-500 dark:border-gray-700 dark:text-gray-100 dark:hover:border-gray-400"
            >
              Read the blog
            </Link>
            <Link
              href="/static/resume.pdf"
              className="px-2 py-3 text-sm font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Resume &darr;
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:col-span-2 md:justify-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/static/images/abhiram.jpeg"
            alt="Portrait of Abhiram Bhogi"
            width={320}
            height={320}
            className="ring-primary-500/40 h-56 w-56 rounded-full object-cover ring-4 ring-offset-4 ring-offset-white sm:h-72 sm:w-72 dark:ring-offset-gray-950"
          />
        </div>
      </section>

      <section aria-labelledby="exploring" className="space-y-5">
        <h2
          id="exploring"
          className="text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400"
        >
          Currently exploring
        </h2>
        <ul className="flex flex-wrap gap-3">
          {focusAreas.map((item) => (
            <li
              key={item}
              className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-800 dark:border-gray-700 dark:text-gray-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="featured" className="space-y-8">
        <div className="flex items-end justify-between">
          <h2
            id="featured"
            className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100"
          >
            Featured builds
          </h2>
          <Link href="/projects" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
            All projects &rarr;
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800"
            >
              {p.imgSrc && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.imgSrc}
                  alt=""
                  width={640}
                  height={320}
                  loading="lazy"
                  className="h-44 w-full bg-gray-100 object-cover dark:bg-gray-900"
                />
              )}
              <div className="flex flex-1 flex-col space-y-3 p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{p.title}</h3>
                <p className="line-clamp-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {p.description.replace(/\s+/g, ' ')}
                </p>
                {p.href && (
                  <Link
                    href={p.href}
                    className="text-primary-500 hover:text-primary-600 mt-auto pt-2 text-sm font-medium"
                    aria-label={`View ${p.title}`}
                  >
                    View project &rarr;
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="writing" className="space-y-8">
        <div className="flex items-end justify-between">
          <h2
            id="writing"
            className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100"
          >
            Latest writing
          </h2>
          <Link href="/blog" className="text-primary-500 hover:text-primary-600 text-sm font-medium">
            All posts &rarr;
          </Link>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-800">
          {!posts.length && <li className="py-6 text-gray-500">No posts yet.</li>}
          {posts.map((post) => (
            <li key={post.slug} className="py-6">
              <article className="space-y-2 md:grid md:grid-cols-4 md:gap-6 md:space-y-0">
                <time
                  dateTime={post.date}
                  className="text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  {formatDate(post.date, siteMetadata.locale)}
                </time>
                <div className="space-y-2 md:col-span-3">
                  <h3 className="text-xl leading-7 font-bold tracking-tight">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-gray-900 hover:text-primary-500 dark:text-gray-100"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap">
                    {post.tags?.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                  {post.summary && (
                    <p className="line-clamp-2 text-gray-600 dark:text-gray-400">{post.summary}</p>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="toolkit" className="space-y-5">
        <h2
          id="toolkit"
          className="text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400"
        >
          Toolkit
        </h2>
        <ul className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <li
              key={s}
              className="rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-800 dark:bg-gray-900 dark:text-gray-200"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="connect"
        className="space-y-4 rounded-lg border border-gray-200 p-8 dark:border-gray-800"
      >
        <h2
          id="connect"
          className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100"
        >
          Let&apos;s build something useful.
        </h2>
        <p className="max-w-xl text-gray-600 dark:text-gray-400">
          Open to conversations about software engineering, AI systems, and infrastructure.
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <Link href={`mailto:${siteMetadata.email}`} className="text-primary-500 hover:text-primary-600">
            Email
          </Link>
          <Link href={siteMetadata.github} className="text-primary-500 hover:text-primary-600">
            GitHub
          </Link>
          <Link href={siteMetadata.linkedin} className="text-primary-500 hover:text-primary-600">
            LinkedIn
          </Link>
          <Link href="/about" className="text-primary-500 hover:text-primary-600">
            Full story
          </Link>
        </div>
      </section>
    </div>
  )
}
