import type { NextPage } from 'next'
import Head from 'next/head'

import { Title } from '../components'

const Resources: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resources - DaNextBlog</title>
      </Head>
      <section>
        <div className="container">
          <Title name="Resources" />
        </div>
      </section>
    </>
  )
}
export default Resources
