import React from "react"
import { AllPosts } from "./AllPosts"

const page = async () => {
  const posts = await prisma

  return (
    <div className="my-24 container">
      <h2 className="text-4xl text-center my-6">All Articles</h2>
      <AllPosts posts={posts} />
    </div>
  )
}

export default page
