interface CodeBlockProps {
  lang: string
}
export const CodeBlock = ({ lang }: CodeBlockProps) => {
  return (
    <section className="my-6">
      <h1 className="text-center text-xl">
        Syntax highlighting example with Prism
      </h1>
      <pre>
        <code className={`language-${lang}`}>{`.people {color: red}`}</code>
      </pre>
    </section>
  )
}
