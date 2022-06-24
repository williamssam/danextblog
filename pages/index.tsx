import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Prism from 'prismjs'

const Home: NextPage = () => {
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <>
      <Head>
        <title>DaNextBlog</title>
      </Head>
      <section>
        <h2>DaNextBlog</h2>
      </section>
    </>
  )
}

export default Home
