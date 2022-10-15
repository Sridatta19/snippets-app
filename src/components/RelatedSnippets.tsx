import Link from 'next/link'
import Image from 'next/future/image'
import { matchSorter } from 'match-sorter'
import { MOCK } from '@/utils/mockdata'

export function RelatedSnippets({ meta }: { meta: IMeta }) {
  const terms = (meta.tags || []).concat(meta.group).concat(meta.topic)
  const snippets = terms
    .reduceRight(
      (results: ISearchSnippet[], term: string) =>
        matchSorter(results, term, {
          keys: ['title', 'tags', 'groupId', 'topicId'],
        }),
      MOCK
    )
    .filter(({ title }) => title !== meta.title)
    .slice(0, 4)
  if (snippets.length === 0) return null
  return (
    <div className="mx-auto max-w-md sm:max-w-xl lg:max-w-3xl">
      <div className="mt-12 max-w-xl">
        <h1 className="font-display text-lg font-bold tracking-tight text-gray-900">
          Related Snippets
        </h1>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-4 lg:gap-x-8">
        {snippets.map((snippet) => (
          <div key={snippet.slug} className="group relative">
            <div className="aspect-w-7 aspect-h-4 relative overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
              <Image
                src="/photo.webp"
                sizes="100vw"
                fill
                alt={snippet.title}
                className="object-cover object-center"
              />
            </div>
            <h3 className="mt-4 font-medium text-gray-700">
              <Link href={`/snippets/${snippet.slug}`}>
                <span className="absolute inset-0" />
                {snippet.title}
              </Link>
            </h3>
            <p className="text-xs text-gray-500">
              <time dateTime={snippet.date}>{snippet.date}</time>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
