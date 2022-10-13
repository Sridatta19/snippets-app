import Layout from '@/components/Layout'
import TopicDetail from '@/components/TopicDetail'
import { getSnippets } from '@/lib/snippets'

const Snippets = ({ topics }: { topics: TopicWithGroupAndSnippets[] }) => {
  topics.sort((a, b) => (b.snippetCount || 0) - (a.snippetCount || 0))
  return (
    <Layout title="Snippets">
      <div className="max-w-8xl relative mx-auto min-w-0 max-w-3xl flex-auto justify-center space-y-6 px-6 lg:max-w-none lg:space-y-12 lg:px-8 lg:pr-0 lg:pl-8 xl:px-16">
        {topics.map((topic) => (
          <TopicDetail key={topic.id} {...{ topic }} />
        ))}
      </div>
    </Layout>
  )
}

export default Snippets

export async function getStaticProps() {
  const { topics } = await getSnippets()
  return {
    props: { topics },
  }
}
