import { TopicIcons } from '@/utils/constants'
import {
  CodeBracketSquareIcon,
  RectangleGroupIcon,
  TagIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Carousel from './Carousel'

const MeetTopics = ({ topTopics }: { topTopics: ITopic[] }) => {
  const description = `Top level hierarchy associated with each snippet. Helps filter snippets based on their topic`
  const topics = topTopics.sort(
    (a, b) => (b.snippetCount || 0) - (a.snippetCount || 0)
  )
  return (
    <Carousel
      images={topics}
      href="/topics"
      subTitle="top topics"
      title="Meet our topics"
      description={description}
      snapRenderer={(entry: ITopic) => {
        const Icon = TopicIcons[entry.id]
        return (
          <div className="relative grid grid-cols-1 grid-rows-1 items-end overflow-hidden rounded-4xl shadow-md transition duration-300 ease-out will-change-transform">
            <div
              className={`flex h-80 w-full flex-col rounded-3xl bg-gray-100 bg-radial object-cover py-6 hover:bg-gray-200 hover:opacity-70 ${entry.classes}`}
            >
              <Icon className="mx-auto flex-1 self-center" />
              <div className="px-10">
                <Link
                  href="/topics"
                  className="font-display text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {entry.title}
                </Link>
                <p className="text-base">{entry.subtitle}</p>
                <div className="mt-5 flex justify-between">
                  <div>
                    <div className="flex items-center">
                      <CodeBracketSquareIcon className="h-6 w-6 text-gray-700" />
                      <p className="ml-1.5 font-medium">{entry.snippetCount}</p>
                    </div>
                    <p className="text-center font-medium text-gray-800">
                      Snippets
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <RectangleGroupIcon className="h-6 w-6 text-gray-700" />
                      <p className="ml-1.5 font-medium">{entry.groupCount}</p>
                    </div>
                    <p className="text-center font-medium text-gray-800">
                      Groups
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <TagIcon className="h-6 w-6 text-gray-700" />
                      <p className="ml-1.5 font-medium">{entry.tagCount}</p>
                    </div>
                    <p className="text-center font-medium text-gray-800">
                      Tags
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

export default MeetTopics
