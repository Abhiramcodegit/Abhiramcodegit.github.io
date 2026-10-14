import { Authors, allAuthors, allBlogs } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import HomeSections from '@/components/HomeSections'
import { allCoreContent, coreContent, sortPosts } from 'pliny/utils/contentlayer'

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  const posts = allCoreContent(sortPosts(allBlogs)).slice(0, 3)

  return (
    <>
      <AuthorLayout content={mainContent} title="" avatarClass="h-64 w-64">
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
      <HomeSections posts={posts} />
    </>
  )
}
