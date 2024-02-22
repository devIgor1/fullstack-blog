import type { Post } from "@prisma/client"
import Link from "next/link"

interface PostCardProps {
  post: Post
  className?: string
}

const PostCard = ({ post, className }: PostCardProps) => {
  return (
    <Link
      href={`/blog/${post.id}`}
      className={`${className} p-4 border-2 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] hover:scale-105 duration-300`}
    >
      <h3 className="text-2xl sm:text-3xl mb-3">{post.title}</h3>
      <p>{post.content}</p>
    </Link>
  )
}

export default PostCard
