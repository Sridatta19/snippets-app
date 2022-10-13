import Image from 'next/image'

const features = [
  {
    name: 'Topics',
    description: 'Top level hierarchy associated with each snippet',
  },
  {
    name: 'Groups',
    description:
      'Nested optional hieraachy associated with snippets to help filter them further',
  },
  { name: 'Tags', description: 'Optional category associated with snippets' },
]

export default function Features() {
  return (
    <div className="">
      <div aria-hidden="true" className="relative">
        <div className="relative h-96 w-full object-center">
          <Image
            src="/photo.webp"
            alt="Features"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto -mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Wide Range of Snippets
          </h2>
          <p className="mt-4 text-gray-500">
            Organized repository to keep your snippets tidy and search-worthy
            all day long. Procrastinate your work while you meticulously arrange
            items into dedicated groups & topics.
          </p>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
