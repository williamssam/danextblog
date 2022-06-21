import { Title } from './Title'

export const Hero = () => {
  return (
    <section>
      <div className="container">
        <Title name="The Blog" />
        <p className="pt-4 max-w-lg text-sm text-gray-500">
          Practical tutorials along with working code samples and boilerplate
          projects for real-world web development problems. The tutorials are
          concise as possible, focusing on the code, structure and
          functionality, while trying to leave out extra fluff or info that
          isn&apos;t useful.
        </p>

        <form className="max-w-md mt-10 relative flex items-center">
          <input
            type="search"
            name="search"
            className="px-4 py-3 w-full flex-1 rounded-md drop-shadow-2xl mr-24 focus:outline-none  focus:ring-gray-500 focus:ring focus:outline-2 focus:outline-offset-4"
          />
          <button className="bg-black text-white py-2 px-6 rounded-md absolute right-0 mr-4 hover:bg-gray-900">
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
