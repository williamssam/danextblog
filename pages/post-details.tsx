import { Article, Sidebar } from 'components'

const PostDetails = () => {
  return (
    <>
      <section className="mt-20">
        <div className="container grid grid-cols-7 gap-20">
          <Article />
          <Sidebar />
        </div>
      </section>
    </>
  )
}
export default PostDetails
