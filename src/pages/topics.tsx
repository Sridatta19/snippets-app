import Layout from '@/components/Layout'
import { getAllTopics } from '@/lib/topics'
import StatsTile from '@/components/StatsTile'
import { TopicIcons } from '@/utils/constants'

const Topics = ({ topics }: { topics: ITopic[] }) => {
  topics.sort((a, b) => (b.snippetCount || 0) - (a.snippetCount || 0))
  return (
    <Layout title="Topics">
      <div className="max-w-8xl relative mx-auto min-w-0 max-w-3xl flex-auto justify-center space-y-6 px-6 lg:max-w-none lg:space-y-8 lg:px-8 lg:pr-0 lg:pl-8 xl:px-16">
        <h1 className="font-display text-3xl tracking-tight text-slate-900">
          Topics
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = TopicIcons[topic.id]
            return (
              <StatsTile
                key={topic.id}
                icon={Icon}
                title={topic.title}
                subtitle={topic.subtitle}
                href={`/topic/${topic.id}`}
                stats_one={topic.snippetCount}
                stats_two={topic.groupCount}
                stats_three={topic.tagCount}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Topics

export async function getStaticProps() {
  const { topics } = await getAllTopics()
  return {
    props: { topics },
  }
}
