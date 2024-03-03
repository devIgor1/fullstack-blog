import { prisma } from "@/lib/db"
import { getServerSession } from "next-auth"

export async function getPosts() {
  const session = await getServerSession()

  const posts = await prisma.post.findMany({
    where: { authorId: session?.user.id },
  })

  return posts
}
