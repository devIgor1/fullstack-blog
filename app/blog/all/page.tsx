import React from "react"
import { prisma } from "@/lib/prisma"
import { Prisma } from "@prisma/client"
import { AllPosts } from "./AllPosts"

const page = async () => {
  const posts = await prisma.post.findMany()
  return (
    <div className="my-24 container">
      <h2 className="text-4xl text-center my-6">All Articles</h2>
      <AllPosts posts={posts} />
    </div>
  )
}

export default page
