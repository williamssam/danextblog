import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()
  const links = [
    { id: 1, name: 'blog', route: '/' },
    { id: 3, name: 'resources', route: '/resources' },
    { id: 2, name: 'project ideas', route: '/project-ideas' },
    { id: 4, name: 'about danext', route: '/about' },
  ]
  return (
    <header className="grid place-items-center mt-9">
      <div className="container fixed z-10">
        <nav className="flex items-center justify-between bg-black text-slate-100 px-6 py-4 rounded-lg">
          <Link href="/">
            <a className="font-black">DaNextBlog</a>
          </Link>

          <ul className="flex items-center gap-3 capitalize">
            {links?.map(({ id, name, route }) => (
              <li key={id}>
                <Link href={route}>
                  <a
                    className={`transition-colors p-2 rounded-md hover:bg-slate-500 focus:outline-none ${
                      router.pathname === route && 'bg-slate-600 text-slate-100'
                    }`}>
                    {name}
                  </a>
                </Link>
              </li>
            ))}
            <li>Dark Mode</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
