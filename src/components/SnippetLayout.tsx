import Head from 'next/head'
import { useRouter } from 'next/router'
import { TagTitles } from '@/utils/constants'
import Link from 'next/link'
import { ReactNode } from 'react'
import { RelatedSnippets } from './RelatedSnippets'
import { formatDate } from '@/utils/fns'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

interface SnippetLayoutProps {
  previousPathname: string
  children: ReactNode
  meta: IMeta
}

export function SnippetLayout({
  children,
  meta,
  previousPathname,
}: SnippetLayoutProps) {
  let router = useRouter()
  return (
    <>
      <Head>
        <title>{`${meta.title} - Snippets`}</title>
        {/* <meta name="description" content={meta.description} /> */}
      </Head>
      <div className="relative mx-auto max-w-2xl px-4 pb-16 sm:px-8 lg:max-w-5xl lg:px-12">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/25 ring-1 ring-zinc-900/25 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                {meta.title}
              </h1>
              <div className="mt-6 flex items-center space-x-3">
                {meta.tags?.map((tagId: string) => (
                  <Link
                    key={tagId}
                    href={`/tag/${tagId}`}
                    className="inline-flex items-center rounded-full bg-lime-100 px-2.5 py-0.5 text-xs font-medium text-lime-800"
                  >
                    {TagTitles[tagId]}
                  </Link>
                ))}
              </div>
              <time
                dateTime={meta.date}
                className="order-first flex items-center text-base text-zinc-400"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200" />
                <span className="ml-3">{formatDate(meta.date)}</span>
              </time>
            </header>
            <div className="prose mt-8">{children}</div>
          </article>
          <SnippetNavigation />
        </div>
        <RelatedSnippets {...{ meta }} />
      </div>
    </>
  )
}

function SnippetNavigation() {
  const previousSnippetSlug = ''
  const nextSnippetSlug = ''
  return (
    <nav className="mt-8 px-4">
      <ul className="flex w-full justify-between gap-4">
        <li className="w-1/2 max-w-xs">
          {previousSnippetSlug && (
            <Link rel="prev" className="text-sm" href="/framer-motion/">
              {`← An introduction to animations using framer motion`}
            </Link>
          )}
        </li>
        <li className="w-1/2 max-w-xs">
          {nextSnippetSlug && (
            <Link rel="next" className="text-sm" href="/astro-recipes/">
              {`Building a recipes blog with Astro & Contentful CMS →`}
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}
