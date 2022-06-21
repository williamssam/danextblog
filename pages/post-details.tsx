import { Article } from '../components/Article'
import { Sidebar } from '../components/Sidebar'

const PostDetails = () => {
  return (
    <section className="mt-20">
      <div className="container grid grid-cols-5 gap-20">
        <Article />
        <Sidebar />
      </div>
    </section>
  )
}
export default PostDetails
