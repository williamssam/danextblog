import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-css'
import 'prismjs/themes/prism-funky.css'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Prism.highlightAll()
  },[])
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
