import { callAll } from '@/utils/fns'

interface PaginationDotProps {
  index: number
  title: string
  onClick?: () => void
}

export function usePagination(
  snapsCount: number,
  handlePaginate: (index: number) => void
) {
  function goToElement(scrollport: HTMLElement, targetElement: HTMLElement) {
    const delta = Math.abs(scrollport.offsetLeft - targetElement.offsetLeft)
    const scrollerPadding = parseInt(getComputedStyle(scrollport).paddingLeft)

    const pos =
      scrollport.clientWidth / 2 > delta
        ? delta - scrollerPadding
        : delta + scrollerPadding

    scrollport.scrollTo(pos, 0)
  }
  const getPaginationDotProps = (props: PaginationDotProps) => ({
    ...props,
    role: 'tab',
    'aria-setsize': snapsCount,
    onClick: callAll(props.onClick, () => handlePaginate(props.index)),
    title: `Item ${props.index + 1}: ${props.title}`,
    'aria-label': props.title,
    'aria-posinset': props.index + 1,
    'aria-controls': `carousel-item-${props.index + 1}`,
  })
  return {
    goToElement,
    getPaginationDotProps,
  }
}
