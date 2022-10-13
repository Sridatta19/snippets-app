import Layout from '@/components/Layout'
import TopicDetail from '@/components/TopicDetail'
import { getAllGroupIds, getGroupData } from '@/lib/groups'
import { GetStaticProps } from 'next'

const GroupDetail = ({ topic }: { topic: TopicWithGroupAndSnippets }) => {
  return (
    <Layout title={topic.groups[0].title}>
      <div className="max-w-8xl relative mx-auto min-w-0 max-w-3xl flex-auto justify-center space-y-6 px-6 lg:max-w-none lg:space-y-12 lg:px-8 lg:pr-0 lg:pl-8 xl:px-16">
        <TopicDetail {...{ topic }} />
      </div>
    </Layout>
  )
}

export default GroupDetail

export const getStaticProps: GetStaticProps = async (context) => {
  const { topic } = await getGroupData(context.params?.id as string)
  return {
    props: { topic },
  }
}

export async function getStaticPaths() {
  const groups = await getAllGroupIds()
  return {
    paths: groups.map((id) => ({ params: { id } })),
    fallback: false, // can also be true or 'blocking'
  }
}
