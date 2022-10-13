import { GROUPS_METADATA, TOPICS_METADATA } from '@/lib/common'
import { uniqueKeys, groupBy } from '@/utils/fns'
import { getAllSnippets } from './common'

const fetchTopicsData = (snippets: ISnippet[]): ITopic[] => {
  const groupedByTopics = groupBy(snippets, 'topic')
  let sortedTopics = Object.keys(groupedByTopics).sort(
    (a, b) => groupedByTopics[b].length - groupedByTopics[a].length
  )
  let topTopics = sortedTopics.slice(0, 4)
  return Object.keys(groupedByTopics)
    .filter((topic) => topTopics.includes(topic))
    .map((topic) => {
      const topicData = groupedByTopics[topic]
      return {
        ...TOPICS_METADATA[topic],
        snippetCount: topicData.length,
        groupCount: uniqueKeys(topicData, 'group').length,
        tagCount: uniqueKeys(topicData, 'tags').length,
      }
    })
}

const fetchGroupsData = (snippets: ISnippet[]): IGroup[] => {
  const groupedByCategory = groupBy(snippets, 'group')
  let topGroups = Object.keys(groupedByCategory).sort(
    (a, b) => groupedByCategory[b].length - groupedByCategory[a].length
  )
  return topGroups.slice(0, 4).map((groupId) => ({
    ...GROUPS_METADATA[groupId],
  }))
}

export async function getTopEntries() {
  const snippets = await getAllSnippets()
  const topTopics = fetchTopicsData(snippets)
  const topGroups = fetchGroupsData(snippets)
  return {
    topTopics,
    topGroups,
  }
}
