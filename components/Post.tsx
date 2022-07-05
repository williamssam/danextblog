import Link from 'next/link'

import { PostProps } from '../types/@types'
import { Heart, View } from '../icons'

export const Post = ({ title, content, date, slug, views, likes, stacks }: PostProps) => {

  const convertValue = (value: number) => {
    if(value < 1000) {
      return value
    } else if(value >= 1000) {
      return `${value / 1000}k`
    } else if (value >= 1000000) {
      return `${value / 1000000}M`
    }
  }

  return (
    <div className="p-4 px-6">
      <div>
        <p className="text-sm text-gray-400">Published: {date}</p>
        {/* click this to go the full post page */}
        {/* <div> */}
        <p className="font-bold text-md leading-none">
          {title}
        </p>
        <p className="text-base xt- pt-2 text-gray-500 font-normal">
          {content}
        </p>
        <div className="w-full flex items-center justify-between my-2">
          <Link href={`/blog/${slug}`}>
            <a className="text-xs text-blue-600 transition-colors hover:text-gray-700">Read more &rarr;</a>
          </Link>

          <div className="flex items-center justify-between text-gray-500">
            <p className="text-xs mx-1 flex items-center gap-1 cursor-pointer">
              {convertValue(views)}<View />
            </p>
            <p className='text-black'>|</p>
            <p className="text-xs mx-1 flex items-center gap-1 cursor-pointer">
              {convertValue(likes)}<Heart />
            </p>
          </div>
        </div>
        <ul className='mt-3 flex items-center gap-2'>
          {stacks.map((stack) => (
            <li key={stack} className='bg-slate-200 w-max py-1 px-2 text-xs text-slate-600'>
              {stack}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
