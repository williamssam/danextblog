import Link from 'next/link'
import { PostProps } from '../types/@types'
import { Tags } from './Tags'

export const Post = ({ title, content, date }: PostProps) => {
  return (
    <div className="p-4 px-6">
      <div>
        <p className="text-sm text-gray-400">Published: {date}</p>
        <Link href="/post-details">
          <a className="font-bold transition-colors hover:text-gray-700">
            {title}{' '}
          </a>
        </Link>
        <p className="text-base xt- pt-2 text-gray-500 font-normal">
          {content}
        </p>

        <Tags />
      </div>
    </div>
  )
}
