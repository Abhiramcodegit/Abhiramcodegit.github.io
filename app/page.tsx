import { Authors, allAuthors, allBlogs } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import Hero from '@/components/Hero'
import HomeSections from '@/components/HomeSections'
import { allCoreContent, coreContent, sortPosts } from 'pliny/utils/contentlayer'

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  const posts = allCoreContent(sortPosts(allBlogs)).slice(0, 3)

  return (
    <>
      <Hero
        name={mainContent.name}
        avatar={mainContent.avatar}
        tagline={mainContent.company}
        email={mainContent.email}
        github={mainContent.github}
        linkedin={mainContent.linkedin}
        resume={mainContent.resume}
      />
      <div className="prose dark:prose-invert max-w-none pb-8">
        <MDXLayoutRenderer code={author.body.code} />
      </div>
      <HomeSections posts={posts} />
    </>
  )
}
