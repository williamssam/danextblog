import Github from '../icons/Github'
import Linkedln from '../icons/Linkedln'
import Twitter from '../icons/Twitter'

export const Footer = () => {
  return (
    <footer className="mt-32 bg-gray-200">
      <div className="container py-4 flex items-center justify-between">
        <p>&copy; DaNextblog {new Date().getFullYear()}</p>

        <ul className="flex items-center gap-4">
          <li>
            <Github />
          </li>
          <li>
            <Linkedln />
          </li>
          <li>
            <Twitter />
          </li>
        </ul>
      </div>
    </footer>
  )
}
