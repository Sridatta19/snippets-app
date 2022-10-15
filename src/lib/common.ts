import * as path from 'path'
import glob from 'fast-glob'

export const TAGS_METADATA: Record<string, ITag> = {
  ramda: {
    id: 'ramda',
    title: 'Ramda',
    class: 'text-blue-500',
  },
  divideconquer: {
    id: 'divideconquer',
    title: 'Divide & Conquer',
    class: 'text-red-500',
  },
  sorting: {
    id: 'sorting',
    title: 'Sorting',
    class: 'text-purple-500',
  },
  tricks: {
    id: 'tricks',
    title: 'Tricks',
    class: 'text-green-500',
  },
} as const

export const GROUPS_METADATA: Record<string, IGroup> = {
  adventofcode2021: {
    id: 'adventofcode2021',
    title: 'Advent of Code 2021',
    source: '/adventofcode.webp',
  },
  illuminated01: {
    id: 'illuminated01',
    title: 'Algorithms Illuminated Vol. 1',
    source: '/algorithms.webp',
  },
  esdeepdive: {
    id: 'esdeepdive',
    title: 'Elasticsearch Deep Dive',
    source: '/elastic.webp',
  },
  tips: {
    id: 'tips',
    title: 'Typescript Tips',
    source: '/typescripttips.webp',
  },
  streams: {
    id: 'streams',
    title: 'Nodejs Streams',
    source: '/streams.webp',
  },
  scraping: {
    id: 'scraping',
    title: 'Scraping',
    source: '/scraping.webp',
  },
} as const

export const TOPICS_METADATA: Record<string, ITopic> = {
  rust: {
    id: 'rust',
    title: 'Rust',
    subtitle: 'Programming Language',
    classes: 'radiant-from-lime-400/70 radiant-to-yellow-200',
  },
  javascript: {
    id: 'javascript',
    title: 'Javascript',
    subtitle: 'Programming Language',
    classes: 'radiant-from-violet-300/70 radiant-to-purple-300/70',
  },
  typescript: {
    id: 'typescript',
    title: 'Typescript',
    subtitle: 'Programming Language',
    classes: 'radiant-from-cyan-200 radiant-to-teal-300/70',
  },
  nodejs: {
    id: 'nodejs',
    title: 'NodeJs',
    subtitle: 'Programming Language',
    classes: 'radiant-from-orange-300 radiant-to-amber-300/70',
  },
  elasticsearch: {
    id: 'elasticsearch',
    title: 'Elasticsearch',
    subtitle: 'Search Engine',
    classes: 'radiant-from-rose-300/70 radiant-to-pink-300/70',
  },
} as const

async function importSnippet(fileName: string): Promise<ISnippet> {
  try {
    let { meta, default: component } = await import(
      `../pages/snippets/${fileName}`
    )
    return {
      slug: fileName.replace(/(\/index)?\.mdx$/, ''),
      ...meta,
      component,
    } as ISnippet
  } catch (err) {
    console.error(err, fileName)
  }
  return {} as ISnippet
}

export async function getAllSnippets() {
  let snippetNames = await glob(['**/*.mdx', '**/*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/snippets'),
  })
  return await Promise.all(snippetNames.map(importSnippet))
}
