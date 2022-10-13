import Link from 'next/link'
import { CodeBracketIcon } from '@heroicons/react/24/outline'

const navigation = {
  topics: [
    { name: 'Rust', href: '/topic/rust' },
    { name: 'Javascript', href: '/topic/javascript' },
    { name: 'Typescript', href: '/topic/typescript' },
    { name: 'NodeJs', href: '/topic/nodejs' },
  ],
  groups: [
    { name: 'Advent of Code 2021', href: '/group/adventofcode2021' },
    { name: 'Algorithms Illuminated Vol. 1', href: '/group/illuminated01' },
    { name: 'Elasticsearch Deep Dive', href: '/group/esdeepdive' },
    { name: 'NodeJS Streams', href: '/group/streams' },
  ],
  tags: [
    { name: 'Ramda', href: '/tag/ramda' },
    { name: 'Divide & Conquer', href: '/tag/divideconquer' },
    { name: 'Sorting', href: '/tag/sorting' },
    { name: 'Tricks', href: '/tag/tricks' },
  ],
}

export default function Footer() {
  return (
    <footer className="px-6" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/">
              <CodeBracketIcon className="h-10 w-auto stroke-current stroke-2 text-blue-600 sm:h-10" />
            </Link>
            <p className="text-base text-gray-500">
              Making the world a better place through snippet repositories
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div className="col-span-2 md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">Topics</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.topics.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Groups</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.groups.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium text-gray-900">Tags</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.tags.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 py-6">
          <p className="text-center text-sm text-gray-500">
            &copy; 2020 Sridatta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
