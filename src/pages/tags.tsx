import Layout from '@/components/Layout'
import StatsTile from '@/components/StatsTile'
import { getAllTags } from '@/lib/tags'
import { TagIcon } from '@heroicons/react/24/outline'

const Tags = ({ tags }: { tags: ITag[] }) => {
  const tagsData = tags.sort(
    (a, b) => (b.snippetCount || 0) - (a.snippetCount || 0)
  )
  return (
    <Layout title="Tags">
      <div className="max-w-8xl relative mx-auto min-w-0 max-w-3xl flex-auto justify-center space-y-6 px-6 lg:max-w-none lg:space-y-8 lg:px-8 lg:pr-0 lg:pl-8 xl:px-16">
        <h1 className="font-display text-3xl tracking-tight text-slate-900">
          Tags
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {tagsData.map((tag) => {
            return (
              <StatsTile
                key={tag.id}
                icon={() => (
                  <div className="h-12 w-12 rounded-full border border-gray-200 p-3">
                    <TagIcon className={`h-6 w-6 fill-current ${tag.class}`} />
                  </div>
                )}
                title={tag.title}
                subtitle={tag.id}
                href={`/tag/${tag.id}`}
                stats_one={tag.snippetCount}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Tags

export async function getStaticProps() {
  const { tags } = await getAllTags()
  return {
    props: { tags },
  }
}
