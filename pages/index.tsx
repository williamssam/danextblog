import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-css'
import 'prismjs/themes/prism-okaidia.css'

import { Blogs, Hero } from '../components'

const Home: NextPage = () => {
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <>
      <Head>
        <title>DaNextBlog</title>
      </Head>
      <main className='w-full h-auto flex flex-col'>
        <Hero />
        <section className='w-1/2 self-center my-6' >
          <h1 className='text-center text-xl'>
            Syntax highlighting example with Prism
          </h1>
          <pre>
            <code className='language-javascript'>
              const boolean = true;
            </code>
          </pre>
        </section>
        <Blogs />
      </main>
    </>
  )
}

export default Home
