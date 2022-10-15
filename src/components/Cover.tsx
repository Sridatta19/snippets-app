import Image from 'next/future/image'
import coverImage from '@/images/cover.webp'

const Cover = () => {
  return (
    <div className="relative mx-4 sm:mx-12 lg:mx-auto lg:max-w-3xl">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="h-full rotate-3 border-4 border-blue-600 sm:border-8" />
      </div>
      <div className="aspect-h-4 aspect-w-7 w-full overflow-hidden shadow-lg">
        <Image
          sizes="100vw"
          fill
          className="object-cover object-center"
          alt="App Screenshot"
          placeholder="blur"
          src={coverImage}
        />
      </div>
    </div>
  )
}

export default Cover
