import Link from 'next/link'

export const Header = () => {
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

          <ul className="flex items-center gap-6 capitalize">
            {links?.map(({ id, name, route }) => (
              <li key={id}>
                <Link href={route}>
                  <a>{name}</a>
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
