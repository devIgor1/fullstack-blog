import { PrismaClient } from "@prisma/client"
import PostCard from "./PostCard"

const prisma = new PrismaClient()

const Posts = async () => {
  const posts = await prisma.post.findMany()

  const bgClasses = ["bg-purple-500", "bg-pink-500", "bg-yellow-500"]

  return (
    <div>
      <h2 className="text-4xl text-center mt-6">Trending</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {posts.map((post, i) => (
          <PostCard post={post} key={post.id} className={bgClasses[i]} />
        ))}
      </div>
    </div>
  )
}

export default Posts
