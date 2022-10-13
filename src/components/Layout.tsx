import { ReactNode } from 'react'
import Head from 'next/head'

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{`${title} | Snippets`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Create Next App" />
      </Head>
      <div className="space-y-20 pb-16 sm:space-y-28 sm:pb-24 lg:space-y-36">
        {children}
      </div>
    </>
  )
}

Layout.defaultProps = {
  title: 'Home',
}

interface LayoutProps {
  title: string
  children: ReactNode
}

export default Layout
