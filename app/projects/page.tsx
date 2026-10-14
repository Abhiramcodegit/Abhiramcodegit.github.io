import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  const featured = projectsData.filter((p) => p.featured)
  const rest = projectsData.filter((p) => !p.featured)

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Things I build to learn: AI, full-stack web, and security.
        </p>
      </div>
      <div className="container py-12">
        <h2 className="mb-6 text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
          Featured
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
        <h2 className="mt-16 mb-6 text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
          More builds
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
