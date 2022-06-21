import Link from 'next/link'

export const Header = () => {
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
                <a>Resources</a>
              </Link>
            </li>
            <li>About DaNext</li>
            <li>Dark Mode</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
