import Link from 'next/link'
import { PostProps } from 'types/@types'

import { Heart, View } from '../icons'

export const Post = ({
  title,
  content,
  date,
  slug,
  views,
  likes,
  stacks,
}: PostProps) => {
  const convertValue = (value: number) => {
    if (value < 1000) {
      return value
    } else if (value >= 1000) {
      return `${value / 1000}k`
    } else if (value >= 1000000) {
      return `${value / 1000000}M`
    }
  }

  return (
    <div className="p-4 px-6">
      <div>
        <p className="text-xs text-gray-400">Published: {date}</p>
        <Link href="/post-details">
          <a className="font-bold transition-colors hover:text-gray-700">
            {title}{' '}
          </a>
        </Link>
        <p className="text-base xt- pt-2 text-gray-500 font-normal">
          {content}
        </p>
        <ul className="mt-3 flex items-center gap-2">
          {stacks.map(stack => (
            <li
              key={stack}
              className="bg-slate-200 w-max py-1 px-2 text-xs text-slate-600">
              {stack}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
