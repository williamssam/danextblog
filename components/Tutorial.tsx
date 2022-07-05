import Links from 'icons/Links'
import Image from 'next/image'
import Link from 'next/link'
import screenshot from 'public/assets/freecamp.png'

interface TutorialProps {
  title: string
  link: string
  about: string
  type: 'free' | 'premium'
}

export const Tutorial = ({ title, link, about, type }: TutorialProps) => {
  return (
    <section className="relative mt-24">
      <h3 className="outline-text text-5xl capitalize font-black absolute -top-10 -z-10">
        {title}
      </h3>
      <ul className="grid grid-cols-3 gap-6">
        <li className="grid grid-cols-5 bg-slate-100 rounded-sm overflow-hidden outline outline-2 outline-slate-200 outline-offset-2">
          <div className="flex col-span-2">
            <Image
              src={screenshot}
              alt="screenshot"
              className="object-cover h-full"
            />
          </div>

          <div className="py-3 px-6 col-span-3">
            <h4 className="flex items-center gap-2 text-xl">
              <Link href="">
                <a>{link}</a>
              </Link>
              <span>
                <Links />
              </span>
            </h4>

            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-2 text-sm">
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
              </div>
              <p className="text-xs uppercase px-2 py-[1.5px] rounded text-slate-50 bg-gray-400">
                {type}
              </p>
            </div>

            <p className="pt-5 text-sm text-gray-500">{about}</p>
          </div>
        </li>
      </ul>
    </section>
  )
}
