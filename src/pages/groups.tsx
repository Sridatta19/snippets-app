import Layout from '@/components/Layout'
import { getAllGroups } from '@/lib/groups'
import { TopicIcons } from '@/utils/constants'
import StatsTile from '@/components/StatsTile'

const Groups = ({ topics }: { topics: TopicWithGroup[] }) => {
  topics.sort((t1, t2) => (t2.snippetCount || 0) - (t1.snippetCount || 0))
  return (
    <Layout title="Groups">
      <div className="max-w-8xl relative mx-auto min-w-0 max-w-3xl flex-auto justify-center space-y-6 px-6 lg:max-w-none lg:space-y-8 lg:px-8 lg:pr-0 lg:pl-8 xl:px-16">
        <h1 className="font-display text-3xl tracking-tight text-slate-900">
          Groups
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {topics.map((topic) =>
            topic.groups.map((group) => {
              const Icon = TopicIcons[topic.id]
              return (
                <StatsTile
                  key={topic.id}
                  icon={Icon}
                  title={group.title}
                  subtitle={topic.title}
                  href={`/group/${group.id}`}
                  stats_one={group.snippetCount}
                />
              )
            })
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Groups

export async function getStaticProps() {
  const { topics } = await getAllGroups()
  return {
    props: { topics },
  }
}
