import { Posts, Hero } from 'components'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DaNextBlog</title>
      </Head>
      <main className="w-full h-auto flex flex-col">
        <Hero />
        <Posts />
        <section className="w-1/2 self-center my-6">
          <h1 className="text-center text-xl">
            Syntax highlighting example with Prism
          </h1>
          <pre>
            <code className="language-javascript">const boolean = true;</code>
          </pre>
        </section>
      </main>
    </>
  )
}

export default Home
