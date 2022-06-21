import type { NextPage } from 'next'
import Head from 'next/head'
import { Blogs } from '../components/Blogs'
import { Hero } from '../components/Hero'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DaNextBlog</title>
      </Head>
      <main>
        <Hero />
        <Blogs />
      </main>
    </>
  )
}

export default Home
