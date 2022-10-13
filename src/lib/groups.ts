import { GROUPS_METADATA, TOPICS_METADATA } from '@/lib/common'
import { omit } from '@/utils/fns'
import { getAllSnippets } from './common'
import { groupBy } from '@/utils/fns'

const fetchTopicsData = (snippets: ISnippet[]): TopicWithGroup[] => {
  const groupedByTopics = groupBy(snippets, 'topic')
  return Object.keys(groupedByTopics).map((topic) => {
    const topicData = groupedByTopics[topic]
    const groupedByCategories = groupBy(groupedByTopics[topic], 'group')
    return {
      ...TOPICS_METADATA[topic],
      snippetCount: topicData.length,
      groups: Object.keys(groupedByCategories).map((groupId) => ({
        ...GROUPS_METADATA[groupId],
        snippetCount: groupedByCategories[groupId].length,
      })),
    }
  })
}

export async function getAllGroups(): Promise<{ topics: TopicWithGroup[] }> {
  const snippets = await getAllSnippets()
  const topics = fetchTopicsData(snippets)
  return {
    topics,
  }
}

const fetchTopicDataWithSnippets = (
  snippets: ISnippet[]
): TopicWithGroupAndSnippets[] => {
  const groupedByTopics = groupBy(snippets, 'topic')
  return Object.keys(groupedByTopics).map((topic) => {
    const topicSnippets = groupedByTopics[topic]
    const groupedByCategories = groupBy(topicSnippets, 'group')
    const [group] = Object.keys(groupedByCategories).map((groupId) => ({
      ...GROUPS_METADATA[groupId],
      snippets: groupedByCategories[groupId].map(
        (snippet) => omit(snippet, ['component']) as ISnippet
      ),
    }))
    return {
      ...TOPICS_METADATA[topic],
      snippetCount: topicSnippets.length,
      groups: [group],
    }
  })
}

export async function getGroupData(
  groupId: string
): Promise<{ topic: TopicWithGroupAndSnippets }> {
  const snippets = await getAllSnippets()
  const [topic] = fetchTopicDataWithSnippets(
    snippets.filter((snip) => snip.group === groupId)
  )
  return {
    topic,
  }
}

export async function getAllGroupIds(): Promise<string[]> {
  return Object.keys(GROUPS_METADATA)
}
