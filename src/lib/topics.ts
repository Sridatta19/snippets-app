import { TOPICS_METADATA } from '@/lib/common'
import { getAllSnippets } from './common'
import { uniqueKeys, groupBy } from '@/utils/fns'

const fetchTopicsData = (snippets: ISnippet[]): ITopic[] => {
  const groupedByTopics = groupBy(snippets, 'topic')
  return Object.keys(groupedByTopics).map((topic) => {
    const topicSnippets = groupedByTopics[topic]
    return {
      ...TOPICS_METADATA[topic],
      snippetCount: topicSnippets.length,
      groupCount: uniqueKeys(topicSnippets, 'group').length,
      tagCount: uniqueKeys(topicSnippets, 'tags').length,
    }
  })
}

export async function getAllTopics() {
  const snippets = await getAllSnippets()
  const topics = fetchTopicsData(snippets)
  return {
    topics,
  }
}

export async function getAllTopicIds(): Promise<string[]> {
  return Object.keys(TOPICS_METADATA)
}
