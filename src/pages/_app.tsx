import { AppProps } from 'next/app'
import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { polyfill } from 'smoothscroll-polyfill'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value: string) {
  let ref = useRef<string>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }: AppProps) {
  let previousPathname = usePrevious(router.pathname)
  useEffect(() => {
    polyfill()
  }, [])
  return (
    <>
      <div className="relative">
        <Header />
        <main className="pt-8 md:pt-16">
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
