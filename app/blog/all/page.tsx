import prisma from "@/lib/db"

import { revalidatePath } from "next/cache"
import AllPosts from "./components/AllPosts"

const page = async () => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
  })

  revalidatePath("/", "page")

  return (
    <>
      <AllPosts posts={posts} />
    </>
  )
}

export default page
