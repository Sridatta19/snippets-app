import { matchSorter } from 'match-sorter'
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { FolderIcon } from '@heroicons/react/24/outline'
import { MOCK } from '@/utils/mockdata'
import { Javascript, NodeJs, Rust, Typescript } from './Icons'
import { useRouter } from 'next/router'
import { TopicIcons } from '@/utils/constants'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const popularSnippets = [
  {
    title: 'Mergesort - Algorithms Illuminated Vol 1',
    icon: Rust,
    slug: 'illuminated01/mergesort',
  },
  {
    title: 'Merging JSON files into NDJSON format',
    icon: NodeJs,
    slug: 'streams/merge',
  },
  {
    title: 'Map over the values to create a union',
    icon: Typescript,
    slug: 'typescripttips/derive-union-types',
  },
  {
    title: 'The Treachery of Whales - Advent of Code 2021 Day 07',
    icon: Javascript,
    slug: 'adventofcode2021/whales-treachery',
  },
]

export default function Palette({
  showPalette,
  togglePalette,
}: {
  showPalette: boolean
  togglePalette: Dispatch<SetStateAction<boolean>>
}) {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const filteredSnippets: ISearchSnippet[] =
    query === ''
      ? []
      : matchSorter(MOCK, query, {
          keys: ['title', 'tags', 'groupId', 'topicId'],
        })

  const onSnippetSelection = (snippet: ISearchSnippet) => {
    router.push(`/snippets/${snippet.slug}`)
    togglePalette(false)
  }

  return (
    <Transition.Root
      show={showPalette}
      as={Fragment}
      afterLeave={() => setQuery('')}
      appear
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => togglePalette(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800/40 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-32">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-20 overflow-hidden rounded-xl bg-gray-900 shadow-2xl transition-all">
              <Combobox onChange={onSnippetSelection}>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-white placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {(query === '' || filteredSnippets.length > 0) && (
                  <Combobox.Options
                    static
                    className="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-20 overflow-y-auto"
                  >
                    <li className="p-2">
                      {query === '' && (
                        <h2 className="mt-4 mb-2 px-3 text-xs font-semibold text-gray-200">
                          Popular Snippets
                        </h2>
                      )}
                      <ul className="text-sm text-gray-400">
                        {query !== '' &&
                          filteredSnippets.map((snippet) => (
                            <Combobox.Option
                              key={snippet.slug}
                              value={snippet}
                              className={({ active }) =>
                                classNames(
                                  'flex cursor-default select-none items-center rounded-md px-3 py-2',
                                  active ? 'bg-gray-800 text-white' : ''
                                )
                              }
                            >
                              {({ active }) => {
                                const SnippetIcon = TopicIcons[snippet.topic]
                                return (
                                  <>
                                    <SnippetIcon
                                      sizeClasses="h-6 w-6"
                                      className={classNames(
                                        'flex-none bg-white',
                                        active ? 'text-white' : 'text-gray-500'
                                      )}
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3 flex-auto truncate">
                                      {snippet.title}
                                    </span>
                                    {active && (
                                      <span className="ml-3 flex-none text-gray-400">
                                        Jump to...
                                      </span>
                                    )}
                                  </>
                                )
                              }}
                            </Combobox.Option>
                          ))}
                      </ul>
                    </li>
                    {query === '' && (
                      <li className="p-2">
                        <h2 className="sr-only">Quick actions</h2>
                        <ul className="text-sm text-gray-400">
                          {popularSnippets.map((snippet) => (
                            <Combobox.Option
                              key={snippet.slug}
                              value={snippet}
                              className={({ active }) =>
                                classNames(
                                  'flex cursor-default select-none items-center rounded-md px-3 py-2',
                                  active ? 'bg-gray-800 text-white' : ''
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <snippet.icon
                                    sizeClasses="h-6 w-6"
                                    className={classNames(
                                      'flex-none bg-white',
                                      active ? 'text-white' : 'text-gray-500'
                                    )}
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3 flex-auto truncate">
                                    {snippet.title}
                                  </span>
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                  </Combobox.Options>
                )}

                {query !== '' && filteredSnippets.length === 0 && (
                  <div className="py-14 px-6 text-center sm:px-14">
                    <FolderIcon
                      className="mx-auto h-6 w-6 text-gray-500"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-sm text-gray-200">
                      {`We couldn't find any snippets with that term. Please try
                      again.`}
                    </p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
