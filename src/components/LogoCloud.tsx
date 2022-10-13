import {
  CalculatorIcon,
  ChartPieIcon,
  CircleStackIcon,
  Cog8ToothIcon,
  CubeTransparentIcon,
  LanguageIcon,
} from '@heroicons/react/24/outline'

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="text-center text-lg font-semibold text-gray-600">
        Covers vast amount of areas
      </p>
      <div className="mt-4 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-6">
        <div className="col-span-1 flex justify-center bg-gray-100 py-8 px-8">
          <div className="flex items-center justify-center">
            <LanguageIcon className="h-8 w-8 stroke-current text-gray-800/40 sm:h-10 sm:w-10" />
            <p className="ml-2 font-display text-lg font-medium text-gray-800/40 md:text-2xl">
              Languages
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-center bg-gray-100 py-8 px-8">
          <div className="flex items-center justify-center">
            <CircleStackIcon className="h-8 w-8 stroke-current text-gray-800/40 sm:h-10 sm:w-10" />
            <p className="ml-2 font-display text-lg font-medium text-gray-800/40 md:text-2xl">
              Databases
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-center bg-gray-100 py-8 px-8">
          <div className="flex items-center justify-center">
            <Cog8ToothIcon className="h-8 w-8 stroke-current text-gray-800/40 sm:h-10 sm:w-10" />
            <p className="ml-2 font-display text-lg font-medium text-gray-800/40 md:text-2xl">
              Devops
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-center bg-gray-100 py-8 px-8">
          <div className="flex items-center justify-center">
            <CubeTransparentIcon className="h-8 w-8 stroke-current text-gray-800/40 sm:h-10 sm:w-10" />
            <p className="ml-2 font-display text-lg font-medium text-gray-800/40 md:text-2xl">
              Animations
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-center bg-gray-100 py-8 px-8">
          <div className="flex items-center justify-center">
            <CalculatorIcon className="h-8 w-8 stroke-current text-gray-800/40 sm:h-10 sm:w-10" />
            <p className="ml-2 font-display text-lg font-medium text-gray-800/40 md:text-2xl">
              Algorithms
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-center bg-gray-100 py-8 px-8">
          <div className="flex items-center justify-center">
            <ChartPieIcon className="h-8 w-8 stroke-current text-gray-800/40 sm:h-10 sm:w-10" />
            <p className="ml-2 font-display text-lg font-medium text-gray-800/40 md:text-2xl">
              Visualisations
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
