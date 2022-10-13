import {
  CodeBracketSquareIcon,
  RectangleGroupIcon,
  TagIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { IconProps } from './Icons'

interface TileProps {
  icon: (props: IconProps) => JSX.Element
  href: string
  title: string
  subtitle: string
  stats_one?: number
  stats_two?: number
  stats_three?: number
}

export default function StatsTile(props: TileProps) {
  return (
    <div className="group relative rounded-xl border border-slate-200">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--link-grid-hover-bg,theme(colors.gray.50)),var(--link-grid-hover-bg,theme(colors.gray.50)))_padding-box,linear-gradient(to_top,theme(colors.teal.400),theme(colors.cyan.400),theme(colors.orange.500))_border-box] group-hover:opacity-100" />
      <div className="relative overflow-hidden rounded-xl p-6">
        <props.icon sizeClasses="h-10 w-10" />
        <h2 className="mt-4 font-display text-base text-slate-900">
          <Link href={props.href}>
            <span className="absolute -inset-px z-10" />
            {props.title}
          </Link>
        </h2>
        <p className="text-sm text-slate-700">{props.subtitle}</p>
        <div className="mt-5 flex justify-between">
          {props.stats_one && (
            <div className="text-sm">
              <div className="flex items-center">
                <CodeBracketSquareIcon className="h-5 w-5 text-gray-700" />
                <p className="ml-1.5 font-medium">{props.stats_one}</p>
              </div>
              <p className="text-gray-800">Snippets</p>
            </div>
          )}
          {props.stats_two && (
            <div className="text-sm">
              <div className="flex items-center">
                <RectangleGroupIcon className="h-5 w-5 text-gray-700" />
                <p className="ml-1.5 font-medium">{props.stats_two}</p>
              </div>
              <p className="text-gray-800">Groups</p>
            </div>
          )}
          {props.stats_three && (
            <div className="text-sm">
              <div className="flex items-center">
                <TagIcon className="h-5 w-5 text-gray-700" />
                <p className="ml-1.5 font-medium">{props.stats_three}</p>
              </div>
              <p className="text-gray-800">Tags</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
