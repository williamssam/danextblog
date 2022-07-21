import { Copy, Linkedln } from 'icons'
import Twitter from 'icons/Twitter'

export const Sidebar = () => {
  const reactions = [
    {
      emoji: '👍',
      text: 'like',
    },
    {
      emoji: '😍',
      text: 'love',
    },
    {
      emoji: '👏',
      text: 'clap',
    },
    {
      emoji: '🎉',
      text: 'party',
    },
  ]
  return (
    <aside className="col-span-2 text-center relative flex flex-col items-center">
      <section className="fixed">
        <div>
          <h3 className="uppercase font-bold">Article Reactions</h3>
          <div className="grid grid-cols-2 gap-5 pt-5 text-white">
            {reactions?.map(({ emoji, text }) => (
              <button
                className="bg-gray-400 w-32 h-32 rounded-lg flex flex-col items-center justify-center hover:bg-gray-500 hover:ring-4 hover:ring-gray-400 transition-colors"
                key={text}>
                <p className="text-3xl">{emoji}</p>
                <p className="font-bold text-2xl">82</p>
                <p className="uppercase text-sm">{text}</p>
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="uppercase font-bold text-sm pt-8">
            Share this article
          </h3>
          <ul className="flex items-center justify-center gap-5 pt-2">
            <li>
              <Twitter size={20} />
            </li>
            <li>
              <Linkedln size={20} />
            </li>
            <li>
              <Copy size={20} />
            </li>
          </ul>
        </div>
      </section>
    </aside>
  )
}
