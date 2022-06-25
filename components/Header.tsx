import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()

  return (
    <header className="grid place-items-center mt-9">
      <div className="container fixed z-10">
        <nav className="flex items-center justify-between bg-black text-slate-100 px-6 py-4 rounded-lg">
          <Link href="/">
            <a className="font-black">DaNextBlog</a>
          </Link>

          <ul className="flex items-center gap-6">
            {/* <li>Blog</li> */}
            <li>Project Ideas</li>
            <li>
              <Link href="/resources">
                <a className={router.pathname === '/resources' ? 'border-b-2 border-white' : ''}>Resources</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={router.pathname === '/about' ? 'border-b-2 border-white' : ''}>About</a>
              </Link>
            </li>
            <li>Dark Mode</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
