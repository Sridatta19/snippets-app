import Image from 'next/image'
import Link from 'next/link'
import Carousel from './Carousel'

const MeetGroups = ({ topGroups }: { topGroups: IGroup[] }) => {
  const description = `Nested optional hieraachy associated with snippets to help filter them further`

  return (
    <Carousel
      images={topGroups}
      href="/groups"
      subTitle="top groups"
      title="Meet our Groups"
      description={description}
      snapRenderer={(image: IGroup) => (
        <figure className="relative grid grid-cols-1 grid-rows-1 items-end overflow-hidden rounded-4xl shadow-md transition duration-300 ease-out will-change-transform">
          <div className="img relative h-80 w-full bg-gray-100 shadow-2xl">
            <Image
              src={image.source}
              alt={image.title}
              objectFit="cover"
              layout="fill"
            />
          </div>
          <figcaption className="absolute z-10 w-full max-w-full justify-self-stretch bg-caption p-4 pt-16 text-center">
            <Link href="/groups" className="text-lg text-white">
              {image.title}
            </Link>
          </figcaption>
        </figure>
      )}
    />
  )
}

export default MeetGroups
