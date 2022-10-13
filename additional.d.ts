interface IBase {
  title: string
}

interface ITopic extends IBase {
  id: string
  subtitle: string
  icon?: any
  classes: string
  snippetCount?: number
  groupCount?: number
  tagCount?: number
}

interface IGroup extends IBase {
  id: string
  source: string
  snippetCount?: number
}

interface ITag extends IBase {
  id: string
  class: string
  snippetCount?: number
}

type ISnippet = {
  slug: string
  component?: any
} & IMeta

type IMeta = {
  date: string
  title: string
  topic: TopicId
  group: GroupId
  tags?: string[]
}

type ISearchSnippet = IMeta & { slug: string }

type TopicWithGroup = ITopic & {
  groups: Array<IGroup>
}

type TopicWithGroupAndSnippets = ITopic & {
  groups: Array<IGroup & { snippets: ISnippet[] }>
}

type TopicWithTagsAndSnippets = ITopic & {
  tags: Array<ITag & { snippets: ISnippet[] }>
}

type GroupWithSnippets = IGroup & { snippets: ISnippet[] }

type SnippetsWithTag = ISnippet & { tag: string }
