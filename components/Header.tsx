import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { Sun, Moon } from '../icons'

export const Header = () => {
  const router = useRouter()
  const [lightMode, setLightMode] = useState<boolean>(true)

  const toggleThemeMode = () => {
    setLightMode((prevState) => !prevState)
  }

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
            <li>
              {lightMode ? (
                <div className="w-6 h-6 flex items-center cursor-pointer" onClick={toggleThemeMode}>
                  <Sun />
                </div>
              ) : (
                <div className="w-6 h-6 flex items-center cursor-pointer" onClick={toggleThemeMode}>
                  <Moon />
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
