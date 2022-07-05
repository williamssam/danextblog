import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Blogs, Hero } from '../components'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>DaNextBlog</title>
      </Head>
      <main className='w-full h-auto flex flex-col'>
        <Hero />
        <Blogs />
      </main>
    </>
  )
}

export default Home
