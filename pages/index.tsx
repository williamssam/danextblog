import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Prism from 'prismjs'
import { Blogs } from '../components/Blogs'
import { Hero } from '../components/Hero'

const Home: NextPage = () => {
  useEffect(() => {
    Prism.highlightAll()
  })

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
