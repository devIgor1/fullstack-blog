import { getPosts } from "@/app/actions/getPosts"
import { MyPosts } from "./components/page"

export default async function Page() {
  const posts = await getPosts()

  return <MyPosts posts={posts} />
}
