import { Fragment, ReactNode, useEffect, useState } from 'react'
import * as Mousetrap from 'mousetrap'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  CodeBracketIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Palette from './Palette'

const navItems = [
  {
    name: 'Snippets',
    href: '/snippets',
  },
  {
    name: 'Topics',
    href: '/topics',
  },
  {
    name: 'Tags',
    href: '/tags',
  },
  {
    name: 'Groups',
    href: '/groups',
  },
]

function MobileNavItem({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="-m-3 flex items-center px-1 py-3 hover:bg-gray-50"
    >
      {children}
    </Popover.Button>
  )
}

export default function Header() {
  const [showPalette, togglePalette] = useState(false)
  useEffect(() => {
    Mousetrap.bind(['mod+k'], () => {
      togglePalette(true)
    })
    return () => {
      Mousetrap.unbind(['mod+k'])
    }
  }, [])
  return (
    <>
      {showPalette && <Palette {...{ showPalette, togglePalette }} />}
      <Popover as={Fragment}>
        <div
          className={`sticky top-0 mx-auto flex items-center justify-between px-4 py-4 sm:px-6 md:justify-start md:space-x-10 lg:px-32 ${
            showPalette
              ? ''
              : 'z-40 bg-white/50 shadow-md backdrop-blur-sm backdrop-filter'
          }`}
        >
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
              href="/"
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <CodeBracketIcon className="h-8 w-auto stroke-current stroke-2 text-blue-600 sm:h-10" />
              <span className="font-display text-2xl font-bold text-gray-700">
                Snippets
              </span>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            {navItems.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:text-base"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <label htmlFor="search" className="sr-only">
              Quick search
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <button
                name="search-snippet"
                id="search-snippet"
                onClick={() => togglePalette(true)}
                className="focus:border-skin-accent focus:ring-skin-accent w-56 rounded-md border border-gray-300 py-2 pr-12 text-gray-500 focus:outline-none focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:text-sm"
              >
                Search Snippets
              </button>
              <div className="absolute inset-y-0 left-0 flex items-center py-1.5 pr-1.5">
                <MagnifyingGlassIcon className="h-6 w-6 pl-2 text-gray-400" />
              </div>
              <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>
        </div>

        <Transition.Root as={Fragment}>
          <div className="relative z-40 lg:hidden">
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 z-20 bg-gray-800/40 backdrop-blur-sm" />
            </Transition.Child>
            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-8 transition md:hidden"
                >
                  <div className="divide-y-2 divide-gray-50 rounded-3xl bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="px-5 pt-5 pb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <CodeBracketIcon className="ml-4 h-8 w-auto stroke-current text-blue-600" />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-6">
                        <nav className="grid grid-cols-1 gap-7 divide-y divide-gray-100 px-6">
                          {navItems.map((link) => (
                            <MobileNavItem key={link.name} href={link.href}>
                              <div className="text-base text-gray-900">
                                {link.name}
                              </div>
                            </MobileNavItem>
                          ))}
                        </nav>
                        <div className="mt-8 items-center justify-end md:flex md:flex-1 lg:w-0">
                          <div>
                            <label htmlFor="search" className="sr-only">
                              Quick search
                            </label>
                            <div className="relative mt-1 rounded-md">
                              <button
                                name="search-snippet"
                                id="search-snippet"
                                onClick={() => togglePalette(true)}
                                className="focus:border-skin-accent focus:ring-skin-accent w-full rounded-md border border-gray-300 py-2 pr-12 text-gray-500 focus:outline-none sm:text-sm"
                              >
                                Search Snippets
                              </button>
                              <div className="absolute inset-y-0 left-0 flex items-center py-1.5 pr-1.5">
                                <MagnifyingGlassIcon className="h-6 w-6 pl-2 text-gray-400" />
                              </div>
                              <div className="absolute inset-y-0 right-1 flex py-1.5 pr-1.5">
                                <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
                                  ⌘K
                                </kbd>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition.Child>
            </div>
          </div>
        </Transition.Root>
      </Popover>
    </>
  )
}
