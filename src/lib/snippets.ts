import { GROUPS_METADATA, TOPICS_METADATA } from '@/lib/common'
import { omit } from '@/utils/fns'
import { getAllSnippets } from './common'
import { groupBy } from '@/utils/fns'

const fetchSnippetsWithData = (
  snippets: ISnippet[]
): TopicWithGroupAndSnippets[] => {
  const groupedByTopic = groupBy(snippets, 'topic')
  return Object.keys(groupedByTopic).map((topicId) => {
    const topicSnippets = groupedByTopic[topicId]
    const groupedByCategories = groupBy(groupedByTopic[topicId], 'group')
    const groups = Object.keys(groupedByCategories).map((groupId) => ({
      ...GROUPS_METADATA[groupId],
      snippets: groupedByCategories[groupId].map(
        (snippet) => omit(snippet, ['component']) as ISnippet
      ),
    }))
    return {
      ...TOPICS_METADATA[topicId],
      snippetCount: topicSnippets.length,
      groups,
    }
  })
}

export async function getSnippets() {
  const snippets = await getAllSnippets()
  const topics = fetchSnippetsWithData(snippets)
  return {
    topics,
  }
}

export function getAllSnippetsForSearch(topics: TopicWithGroupAndSnippets[]) {
  return topics.reduce(
    (allSnips: ISnippet[], topic: TopicWithGroupAndSnippets) => {
      const groups: ISnippet[] = topic.groups.reduce(
        (snippets: ISnippet[], group: IGroup & { snippets: ISnippet[] }) => {
          return snippets.concat(
            group.snippets.map((snippet: ISnippet) => ({
              ...snippet,
              groupId: group.id,
            }))
          )
        },
        []
      )
      return allSnips.concat(
        groups.map((group: ISnippet) => ({
          ...group,
          topicId: topic.id,
        }))
      )
    },
    []
  )
}
