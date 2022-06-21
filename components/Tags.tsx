export const Tags = () => {
  const tags = ['Typescript', 'Javascript']
  return (
    <ul className="mt-3 flex items-center gap-2">
      {tags?.map((tag, index) => (
        <li
          className="bg-slate-200 w-max py-1 px-2 text-xs text-slate-600"
          key={index}>
          {tag}
        </li>
      ))}
    </ul>
  )
}
