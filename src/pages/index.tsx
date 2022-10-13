import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Cover from '@/components/Cover'
import LogoCloud from '@/components/LogoCloud'
import Features from '@/components/Features'
import CallToAction from '@/components/CallToAction'
import MeetTopics from '@/components/MeetTopics'
import MeetGroups from '@/components/MeetGroups'
import { getTopEntries } from '@/lib/topStats'

export default function Home({
  topTopics,
  topGroups,
}: {
  topTopics: ITopic[]
  topGroups: IGroup[]
}) {
  return (
    <Layout>
      <Hero />
      <Cover />
      <LogoCloud />
      <MeetTopics {...{ topTopics }} />
      <Features />
      <MeetGroups {...{ topGroups }} />
      <CallToAction />
    </Layout>
  )
}

export async function getStaticProps() {
  const { topTopics, topGroups } = await getTopEntries()
  return {
    props: { topTopics, topGroups },
  }
}
