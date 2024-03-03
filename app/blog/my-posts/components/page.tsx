"use client"

import { api } from "@/lib/api"
import { Post } from "@prisma/client"
import { useRouter } from "next/navigation"

interface MyPostsProps {
  posts: Post[]
}

export default function MyPosts({ posts }: MyPostsProps) {
  const router = useRouter()

  async function handleDeletePost(postId: number) {
    try {
      await api.delete("/api/post", {
        params: {
          id: postId,
        },
      })
      alert("Post deleted successfully")
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      {posts.map((post) => (
        <div key={post.id} className="flex items-center gap-5 mb-4">
          <h1>{post.title}</h1>
          <button
            onClick={() => handleDeletePost(post.id)}
            className="bg-red-500 text-white p-2"
          >
            delete
          </button>
        </div>
      ))}
    </div>
  )
}
