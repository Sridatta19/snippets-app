import clsx from 'clsx'
import { SparklesIcon } from '@heroicons/react/24/outline'
import { ReactNode } from 'react'

export default function Callout({ title, children }: CalloutProps) {
  return (
    <div className="my-8 flex rounded-3xl bg-sky-900 p-6">
      <SparklesIcon className="h-8 w-8 flex-none fill-current text-sky-300" />
      <div className="ml-4 flex-auto">
        <p className={clsx('m-0 font-display text-xl', 'text-sky-200')}>
          {title}
        </p>
        <div className={clsx('prose mt-2.5', 'text-sky-100')}>{children}</div>
      </div>
    </div>
  )
}

interface CalloutProps {
  title: string
  children: ReactNode
}
