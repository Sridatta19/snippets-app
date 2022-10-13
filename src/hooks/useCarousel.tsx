import { createRef, RefObject, useEffect, useRef, useState } from 'react'
import { useScrollEnd } from '@/hooks/useScrollendPolyfill'
import { usePagination } from './usePagination'

export function useCarousel(snapsCount: number) {
  const rootRef = useRef<HTMLElement>(null)
  const scrollerRef = useRef<HTMLElement | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const [snapsRef, setSnapsRef] = useState<Array<RefObject<HTMLElement>>>([])
  const [currentSnap, setCurrentSnap] = useState<HTMLElement | null>(null)
  const [_] = useScrollEnd()
  const { goToElement, getPaginationDotProps } = usePagination(
    snapsCount,
    handlePaginate
  )

  const nextRef = useRef<HTMLButtonElement | null>(null)
  const previousRef = useRef<HTMLButtonElement | null>(null)

  const [intersections, setIntersections] = useState<
    Set<IntersectionObserverEntry>
  >(new Set())

  const interactionsRef = useRef(intersections)
  const setInteractionRef = (data: Set<IntersectionObserverEntry>) => {
    interactionsRef.current = data
    setIntersections(() => new Set([...data]))
  }

  useEffect(() => {
    function scrollend() {
      for (let observation of interactionsRef.current) {
        // toggle inert when it's not intersecting
        if (snapsRef.some((snap) => snap.current === observation.target)) {
          observation.target.toggleAttribute(
            'inert',
            !observation.isIntersecting
          )
        }

        // stash the intersecting snap element
        if (observation.isIntersecting) {
          setCurrentSnap(observation.target as HTMLElement)
        }
      }
      setInteractionRef(new Set([]))
    }
    let scrollerRefValue: HTMLElement | null = null
    if (scrollerRef.current) {
      scrollerRefValue = scrollerRef.current
      scrollerRefValue.addEventListener('scrollend', scrollend)
    }
    return () => {
      scrollerRefValue?.removeEventListener('scrollend', scrollend)
    }
  }, [snapsRef])

  useEffect(() => {
    setSnapsRef((elRefs) =>
      Array.from({ length: snapsCount }).map((_, i) => elRefs[i] || createRef())
    )
  }, [snapsCount])

  useEffect(() => {
    if (snapsRef.length === 0 || !scrollerRef.current) {
      return
    }
    const options = {
      root: scrollerRef.current,
      threshold: 0.6,
    }

    function callback(observations: IntersectionObserverEntry[]) {
      for (let observation of observations) {
        setInteractionRef(new Set([...interactionsRef.current, observation]))
        // toggle --in-view class if intersecting or not
        observation.target?.children[0].classList.toggle(
          'scale-70',
          !observation.isIntersecting
        )
      }
    }
    let rootRefValue: HTMLElement | null = null
    const carouselObserver = new IntersectionObserver(callback, options)
    if (rootRef.current) {
      carouselObserver.observe(rootRef.current)
      rootRefValue = rootRef.current
    }
    setCurrentSnap(snapsRef[0].current)

    for (let item of snapsRef) {
      if (item.current) {
        if (item.current !== snapsRef[0].current) {
          item.current.toggleAttribute('inert', true)
        }
        carouselObserver.observe(item.current)
      }
    }
    return () => {
      if (rootRefValue) {
        carouselObserver.unobserve(rootRefValue)
      }
    }
  }, [rootRef, snapsRef])

  function goNext() {
    const next = currentSnap?.nextElementSibling as HTMLElement

    if (currentSnap === next) {
      return
    }

    if (next && scrollerRef.current) {
      goToElement(scrollerRef.current, next)
      synchronize(next)
    } else {
      console.log('at the end')
    }
  }

  function goPrevious() {
    const previous = currentSnap?.previousElementSibling as HTMLElement
    if (currentSnap === previous) {
      return
    }

    if (previous && scrollerRef.current) {
      goToElement(scrollerRef.current, previous)
      synchronize(previous)
    } else {
      console.log('at the beginning')
    }
  }

  function synchronize(activeElement: HTMLElement) {
    const isAtEnd = activeElement === snapsRef[snapsCount - 1].current
    const isAtStart = activeElement === snapsRef[0].current

    if (document.activeElement === nextRef.current && isAtEnd)
      previousRef.current?.focus()
    else if (document.activeElement === previousRef.current && isAtStart)
      nextRef.current?.focus()
  }

  function handlePaginate(index: number) {
    const element = snapsRef[index].current
    if (scrollerRef?.current && element) {
      goToElement(scrollerRef.current, element)
      synchronize(element)
    }
  }

  function handleKeydown(event: React.KeyboardEvent<HTMLDivElement>) {
    const currentIndex = snapsRef.findIndex(
      (snap) => snap.current === currentSnap
    )
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault()
        const next_control = nextRef.current
        if ((event.target as Element).closest('.gui-carousel--pagination')) {
          let nextDot = navRef.current?.children[
            currentIndex + 1
          ] as HTMLElement
          nextDot?.focus()
        } else {
          next_control?.focus()
        }
        goNext()
        break
      case 'ArrowLeft':
        event.preventDefault()
        const previous_control = previousRef.current
        if ((event.target as Element).closest('.gui-carousel--pagination')) {
          let previousDot = navRef.current?.children[
            currentIndex - 1
          ] as HTMLElement
          previousDot?.focus()
        } else {
          previous_control?.focus()
        }
        goPrevious()
        break
    }
  }

  return {
    scrollerRef,
    rootRef,
    snapsRef,
    navRef,
    nextRef,
    previousRef,
    currentSnap,
    goNext,
    goPrevious,
    handleKeydown,
    isStart: currentSnap === snapsRef[0]?.current,
    isEnd: currentSnap === snapsRef[snapsCount - 1]?.current,
    currentIndex: snapsRef.findIndex((sRef) => sRef.current === currentSnap),
    getPaginationDotProps,
  }
}
