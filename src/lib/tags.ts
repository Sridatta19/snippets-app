import { TAGS_METADATA, TOPICS_METADATA } from '@/lib/common'
import { omit } from '@/utils/fns'
import { getAllSnippets } from './common'
import { groupBy } from '@/utils/fns'

const parseSnippetsForTagInfo = (snippets: ISnippet[]) => {
  return snippets
    .filter((snippet) => !!snippet.tags)
    .reduce((acc: SnippetsWithTag[], snippet: ISnippet) => {
      if (Array.isArray(snippet.tags) && snippet.tags.length >= 1) {
        return acc.concat(
          snippet.tags.map((tag: string) => ({
            ...snippet,
            tag,
          }))
        )
      }
      return acc
    }, [])
}

const fetchTagsData = (snippets: ISnippet[]) => {
  const modifiedSnippets: SnippetsWithTag[] = parseSnippetsForTagInfo(snippets)
  const groupedByTags = groupBy(modifiedSnippets, 'tag')
  return Object.keys(groupedByTags).map((tag) => {
    const tagSnippets = groupedByTags[tag]
    return {
      ...TAGS_METADATA[tag],
      snippetCount: tagSnippets.length,
    }
  })
}

export async function getAllTags() {
  const snippets = await getAllSnippets()
  const tags: ITag[] = fetchTagsData(snippets)
  return {
    tags,
  }
}

const fetchTopicDataWithSnippets = (snippets: SnippetsWithTag[]) => {
  const groupedByTopics = groupBy(snippets, 'topic')
  return Object.keys(groupedByTopics).map((topic) => {
    const topicSnippets = groupedByTopics[topic]
    const tagSnippets = groupBy(topicSnippets, 'tag')
    const tags = Object.keys(tagSnippets).map((tagId) => ({
      ...TAGS_METADATA[tagId],
      snippets: tagSnippets[tagId].map(
        (snippet) => omit(snippet, ['component']) as ISnippet
      ),
    }))
    return {
      ...TOPICS_METADATA[topic],
      snippetCount: topicSnippets.length,
      tags,
    }
  })
}

export async function getTagData(tagId: string) {
  const snippets = await getAllSnippets()
  const modifiedSnippets = parseSnippetsForTagInfo(snippets)
  const topics: TopicWithTagsAndSnippets[] = fetchTopicDataWithSnippets(
    modifiedSnippets.filter((snip: SnippetsWithTag) => snip.tag.includes(tagId))
  )
  return {
    topics,
  }
}

export async function getAllTagIds(): Promise<string[]> {
  return Object.keys(TAGS_METADATA)
}
