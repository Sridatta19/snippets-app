import Link from 'next/link'

export default function PageHeader() {
  return (
    <div className="relative bg-blue-500">
      <div className="relative overflow-hidden px-6 py-10 sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
        >
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1463 360"
          >
            <path
              className="text-blue-400 text-opacity-40"
              fill="currentColor"
              d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
            />
            <path
              className="text-blue-600 text-opacity-40"
              fill="currentColor"
              d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative">
            <div className="sm:text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to dive in?
              </h2>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start browsing snippets today.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
                We are just getting started on our journey to add more snippets.
                Keep visiting to find more here
              </p>
            </div>
            <div className="mt-12 sm:mx-auto sm:flex sm:max-w-lg sm:justify-center">
              <Link
                href="/snippets"
                className="inline-flex w-48 justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 sm:px-10"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
