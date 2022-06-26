import { NextPage } from 'next'
import Head from 'next/head'

import { Title } from '../components'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - DaNextBlog</title>
      </Head>
      <section>
        <div className="container">
          <Title name="About" />
        </div>
      </section>
    </>
  )
}

export default About