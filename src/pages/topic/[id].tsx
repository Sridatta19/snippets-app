import Layout from '@/components/Layout'
import { getAllGroups } from '@/lib/groups'
import { GetStaticProps } from 'next'
import ImageTile from '@/components/ImageTile'
import { getAllTopicIds } from '@/lib/topics'

const TopicPage = ({ topic }: { topic: TopicWithGroup }) => {
  return (
    <Layout title={topic.title}>
      <div className="max-w-8xl relative mx-auto min-w-0 max-w-3xl flex-auto justify-center space-y-6 px-6 lg:max-w-none lg:space-y-12 lg:px-8 lg:pr-0 lg:pl-8 xl:px-16">
        <section id="group" key={topic.id} className="scroll-mt-28">
          <h2 className="font-display text-2xl font-bold text-slate-900">
            {topic.title}
          </h2>
          <p className="text-sm leading-7 text-slate-500">{topic.subtitle}</p>
          <div className="mt-6 divide-y divide-slate-100 border-t border-slate-100 lg:mt-12">
            <section
              id="group-categories"
              className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-6 lg:py-12 xl:grid-cols-4"
            >
              <ul className="col-span-3 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
                {topic.groups.map((group) => (
                  <ImageTile
                    key={group.id}
                    title={group.title}
                    image={group.source}
                    subtitle={`${group.snippetCount} Snippets`}
                    href={`/group/${group.id}`}
                  />
                ))}
              </ul>
            </section>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default TopicPage

export const getStaticProps: GetStaticProps = async (context) => {
  const { topics } = await getAllGroups()
  const topic = topics.find(
    (topic) => (context.params?.id as string) === topic.id
  )
  return {
    props: { topic },
  }
}

export async function getStaticPaths() {
  const topics = await getAllTopicIds()
  return {
    paths: topics.map((id) => ({ params: { id } })),
    fallback: false, // can also be true or 'blocking'
  }
}
