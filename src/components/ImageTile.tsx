import { formatDate } from '@/utils/fns'
import Image from 'next/future/image'
import Link from 'next/link'

interface TileProps {
  image: string
  href: string
  title: string
  subtitle?: string
  date?: string
}

const ImageTile = ({ image, href, title, date, subtitle }: TileProps) => {
  return (
    <li>
      <div className="group relative">
        <div className="absolute -inset-1.5 rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--link-grid-hover-bg,theme(colors.gray.100)),var(--link-grid-hover-bg,theme(colors.gray.100)))_padding-box,linear-gradient(to_top,theme(colors.teal.400),theme(colors.cyan.400),theme(colors.orange.500))_border-box] group-hover:opacity-100" />
        <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
          <Image
            className="object-cover object-center"
            sizes="100vw"
            fill
            src={image}
            alt="Snippet Image"
          />
        </div>
        <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-blue-600">
          <Link href={href}>
            <span className="absolute -inset-1.5 z-10"></span>
            <span className="relative">{title}</span>
          </Link>
        </h4>
        {subtitle && (
          <p className="relative text-sm text-slate-700">{subtitle}</p>
        )}
        {date && (
          <time
            dateTime={date}
            className="relative text-xs font-medium text-slate-500"
          >
            <span>{formatDate(date)}</span>
          </time>
        )}
      </div>
    </li>
  )
}

export default ImageTile
