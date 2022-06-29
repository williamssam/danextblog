interface TitleProps {
  name: string
}

export const Title = ({ name }: TitleProps) => {
  // text-transparent bg-clip-text h-full bg-gradient-to-t from-slate-900 to-slate-600
  return <h2 className="text-7xl font-black pt-32">{name}</h2>
}
