import Link from 'next/link'
import { MutableRefObject } from 'react'
import { useCarousel } from '../hooks/useCarousel'

interface CarouselProps<T extends IBase> {
  images: T[]
  subTitle: string
  title: string
  description: string
  href: string
  snapRenderer: (entry: T) => JSX.Element
}

function Carousel<T extends IBase>({
  images,
  subTitle,
  title,
  description,
  snapRenderer,
  href,
}: CarouselProps<T>) {
  const {
    scrollerRef,
    rootRef,
    snapsRef,
    navRef,
    nextRef,
    previousRef,
    goNext,
    goPrevious,
    handleKeydown,
    isStart,
    isEnd,
    currentIndex,
    getPaginationDotProps,
  } = useCarousel(images.length)

  return (
    <div onKeyDown={handleKeydown} className="mx-auto max-w-7xl px-6 sm:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="mt-4 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
          <span className="block text-base font-semibold uppercase text-blue-600 sm:text-lg lg:text-base xl:text-lg">
            {subTitle}
          </span>
          <h1 className="mt-1 block font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl xl:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            {description}
          </p>
          <nav
            ref={navRef}
            className="gui-carousel--pagination mx-auto grid w-48 overflow-x-auto overscroll-x-contain scroll-smooth py-5 lg:m-0"
          >
            {images.map((image: IBase, index: number) => (
              <PaginationDot
                key={index}
                isCurrent={currentIndex === index}
                {...getPaginationDotProps({
                  title: image.title,
                  index,
                })}
              />
            ))}
          </nav>
          <div className="mt-3 flex items-center justify-between">
            <div id="controls" className="m-0 flex space-x-4">
              <PreviousControl
                isDisabled={isStart}
                controlRef={previousRef}
                onClick={goPrevious}
              />
              <NextControl isDisabled={isEnd} controlRef={nextRef} onClick={goNext} />
            </div>
            <Link
              href={href}
              className="inline-flex w-2/5 flex-shrink-0 items-center justify-center rounded-full border border-transparent bg-gray-200 py-0.5 text-base font-medium text-gray-800 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto md:px-5 md:py-2.5"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
          <div className="relative mx-auto w-full lg:max-w-lg">
            <section className="grid w-full gap-5">
              <div
                ref={rootRef as React.RefObject<HTMLDivElement>}
                tabIndex={-1}
                className="gui-carousel box-border grid bg-no-repeat focus:outline-none focus-visible:outline-4"
                aria-label="Featured Items Carousel"
                aria-roledescription="Carousel"
              >
                <div
                  ref={scrollerRef as React.RefObject<HTMLDivElement>}
                  className="gui-carousel--scroller col-span-full row-start-1 grid snap-x snap-mandatory auto-cols-[100%] grid-flow-col items-center overflow-x-auto overscroll-contain scroll-smooth"
                  role="group"
                  aria-label="Items Scroller"
                  aria-live="polite"
                >
                  {images.map((image, index: number) => (
                    <div
                      key={index}
                      aria-roledescription="item"
                      className="gui-carousel--snap snap-center"
                      ref={snapsRef[index] as React.RefObject<HTMLDivElement>}
                      aria-label={`${index + 1} of ${images.length}`}
                    >
                      {snapRenderer(image)}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ControlProps {
  controlRef: MutableRefObject<HTMLButtonElement | null>
  onClick: () => void
  isDisabled: boolean
}

function PreviousControl({ controlRef, onClick, isDisabled }: ControlProps) {
  return (
    <button
      type="button"
      ref={controlRef}
      title="Previous Item"
      className="gui-carousel--control group z-10 col-start-1 row-start-1 flex aspect-1 h-9 w-9 items-center justify-center place-self-center overflow-hidden rounded-full bg-gray-100 p-0 indent-20 text-gray-700 shadow-control transition duration-300 ease-out hover:ring-[6px] hover:ring-gray-200 disabled:cursor-not-allowed md:h-12 md:w-12"
      aria-controls="controls"
      aria-label="Previous Item"
      onClick={onClick}
      {...(isDisabled && {
        disabled: true,
      })}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="group-enabled:group-hover:shadow-3xl h-9 w-9 fill-current stroke-0 text-gray-800 group-enabled:group-hover:hover:text-blue-500 group-disabled:text-gray-300 md:h-12 md:w-12"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          className="transition duration-200 ease-in group-enabled:group-hover:-translate-x-0.5"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        ></path>
      </svg>
    </button>
  )
}

function NextControl({ controlRef, onClick, isDisabled }: ControlProps) {
  return (
    <button
      type="button"
      ref={controlRef}
      title="Next Item"
      className="gui-carousel--control group z-10 col-start-3 row-start-1 flex aspect-1 h-9 w-9 items-center justify-center place-self-center overflow-hidden rounded-full bg-gray-100 p-0 indent-20 text-gray-700 shadow-control transition duration-300 ease-out hover:ring-[6px] hover:ring-gray-200 disabled:cursor-not-allowed md:h-12 md:w-12"
      aria-controls="controls"
      aria-label="Next Item"
      onClick={onClick}
      {...(isDisabled && {
        disabled: true,
      })}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="group-enabled:group-hover:shadow-3xl h-9 w-9 fill-current stroke-0 text-gray-800 group-enabled:group-hover:text-blue-500 group-disabled:text-gray-300 md:h-12 md:w-12"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          className="transition duration-200 ease-in group-enabled:group-hover:translate-x-0.5"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        ></path>
      </svg>
    </button>
  )
}

function PaginationDot({ isCurrent, ...otherProps }: { isCurrent: boolean }) {
  return (
    <button
      {...otherProps}
      className={`gui-carousel--control z-10 row-start-1 h-1 w-6 place-self-center overflow-hidden rounded-md p-0 indent-20 text-gray-700 shadow-control outline-none transition-all duration-150 ease-out focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        isCurrent ? 'scale-125 transform bg-blue-500' : 'bg-gray-300'
      }`}
      type="button"
      {...(isCurrent
        ? {
            tabIndex: 0,
            'aria-selected': true,
          }
        : { tabIndex: -1, 'aria-selected': false })}
    />
  )
}

export default Carousel
