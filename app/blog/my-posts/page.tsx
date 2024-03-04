import { getPosts } from "@/app/actions/getPosts"
import MyPosts from "./components/MyPosts"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Page() {
  const session = await getServerSession()

  if (!session) {
    redirect("/")
  }

  const posts = await getPosts()

  return <MyPosts posts={posts} />
}
