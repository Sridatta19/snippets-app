import Image from 'next/image'

const Cover = () => {
  return (
    <div className="relative mx-4 sm:mx-12 lg:mx-auto lg:max-w-3xl">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="h-full rotate-3 border-4 border-blue-600 sm:border-8" />
      </div>
      <div className="aspect-h-4 aspect-w-7 w-full overflow-hidden shadow-lg">
        <Image
          alt="App Screenshot"
          layout="fill"
          objectFit="cover"
          src="/portrait.png"
        />
      </div>
    </div>
  )
}

export default Cover
