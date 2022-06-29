import { Posts } from 'components/Posts'
import { Hero } from 'components/Hero'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DaNextBlog</title>
      </Head>
      <main>
        <Hero />
        <Posts />
      </main>
    </>
  )
}

export default Home
