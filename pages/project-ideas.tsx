import Head from 'next/head'
import Links from '../icons/Links'
import { Project } from '../components'

const ProjectIdeas = () => {
  return (
    <>
      <Head>
        <title>Project Ideas - DaNextBlog</title>
      </Head>
      <section>
        <div className="container">
          <Project title="Frontend Projects" />

          <Project title="Backend Projects" />

          <Project title="Mobile Projects" />
        </div>
      </section>
    </>
  )
}
export default ProjectIdeas
