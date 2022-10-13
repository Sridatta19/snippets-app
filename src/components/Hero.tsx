import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative mx-auto h-full max-w-7xl">
          <svg
            className="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2"
            width={404}
            height={712}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-100"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={712}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={712}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-100"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={712}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>
      <div className="relative">
        <main className="mx-auto max-w-7xl px-8 md:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <h1 className="self-center text-center font-display text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-left">
              <span className="block xl:inline">
                Grow your programming skills by learning from
              </span>{' '}
              <span className="block text-blue-600 xl:inline">
                professionals
              </span>
            </h1>
            <div>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 md:mt-5 md:max-w-3xl md:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 mb-1 sm:flex sm:justify-center md:mt-8 lg:justify-start">
                <div className="rounded-full shadow">
                  <Link
                    href="/groups"
                    className="flex w-full items-center justify-center rounded-full border border-transparent bg-blue-600 px-8 py-1.5 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:py-3 md:px-10 md:text-lg"
                  >
                    Get started
                  </Link>
                </div>
                <div className="mt-3 rounded-full shadow sm:mt-0 sm:ml-3">
                  <Link
                    href="/snippets/illuminated01/mergesort"
                    className="flex w-full items-center justify-center rounded-full border border-transparent bg-gray-200 px-8 py-1.5 text-base font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2  focus:ring-blue-500 focus:ring-offset-2 md:py-3 md:px-10 md:text-lg"
                  >
                    Live demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
