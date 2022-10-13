import Layout from '@/components/Layout'
import ImageTile from '@/components/ImageTile'
import { getAllTagIds, getTagData } from '@/lib/tags'
import { GetStaticProps } from 'next'

const TagDetail = ({ topics }: { topics: TopicWithTagsAndSnippets[] }) => {
  const allTopics = topics.sort(
    (a, b) => (b.snippetCount || 0) - (a.snippetCount || 0)
  )
  return (
    <Layout title="Tag">
      <div className="max-w-8xl relative mx-auto min-w-0 max-w-3xl flex-auto justify-center space-y-6 px-6 lg:max-w-none lg:space-y-12 lg:px-8 lg:pr-0 lg:pl-8 xl:px-16">
        {allTopics.map((topicsData) => (
          <section
            id={`${topicsData.id}-group`}
            key={topicsData.id}
            className="scroll-mt-28"
          >
            <h2 className="font-display text-2xl font-bold text-slate-900">
              {topicsData.title}
            </h2>
            <p className="text-sm leading-7 text-slate-500">
              {topicsData.subtitle}
            </p>
            <div className="mt-10 divide-y divide-slate-100 border-t border-slate-100 lg:mt-12">
              {topicsData.tags.map((tag) => (
                <section
                  key={tag.id}
                  className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4"
                >
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    {tag.title}
                  </h3>
                  <ul className="col-span-3 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
                    {tag.snippets.map((snippet) => (
                      <ImageTile
                        key={snippet.slug}
                        title={snippet.title}
                        date={snippet.date}
                        image="/photo.webp"
                        href={`/snippets/${snippet.slug}`}
                      />
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  )
}

export default TagDetail

export const getStaticProps: GetStaticProps = async (context) => {
  const { topics } = await getTagData(context.params?.id as string)
  return {
    props: { topics },
  }
}

export async function getStaticPaths() {
  const tags = await getAllTagIds()
  return {
    paths: tags.map((id) => ({ params: { id } })),
    fallback: false, // can also be true or 'blocking'
  }
}
