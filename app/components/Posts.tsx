import React from "react"
import { PrismaClient } from "@prisma/client"
import PostCard from "./PostCard"
import Image from "next/image"

const prisma = new PrismaClient()

const Posts = async () => {
  const posts = await prisma.post.findMany({
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  })

  const bgClasses = ["bg-pink-500", "bg-blue-500", "bg-yellow-500"]

  return (
    <div>
      <div className="flex items-center gap-5 justify-center relative ">
        <h2 className="text-4xl text-center mt-4 absolute">Trending</h2>
        <Image
          src="/arrow.svg"
          width={150}
          height={150}
          alt="arrow.png"
          className="relative -right-28 top-10"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 mx-4 ">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} className={bgClasses[index]} />
        ))}
      </div>
    </div>
  )
}

export default Posts
