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
      </main>
    </>
  )
}

export default Home
