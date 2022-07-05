interface ProjectProps {
  title: string
  name: string
  info: string
}

export const Project = ({ title, name, info }: ProjectProps) => {
  return (
    <section className="relative mt-28">
      <h3 className="outline-text text-5xl capitalize font-black absolute -top-10 -z-10">
        {title}
      </h3>
      <ul className="grid grid-cols-3 gap-7">
        <li className=" bg-slate-100 rounded-sm overflow-hidden outline outline-2 outline-slate-200 outline-offset-2 p-3">
          <header className="flex items-center justify-between">
            <div className="leading-none">
              <h4 className="flex items-center gap-2 text-xl">{name}</h4>
              <span className="text-xs mt-2 text-gray-400 lowercase">
                React, Vue, Svelte, Javascript
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span>Live</span>
              <span>Code</span>
            </div>
          </header>

          <p className="pt-4 text-sm text-gray-500">{info}</p>
        </li>
      </ul>
    </section>
  )
}
