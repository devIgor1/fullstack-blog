import { getPosts } from "@/app/actions/getPosts"
import MyPosts from "./components/MyPosts"

export default async function Page() {
  const posts = await getPosts()

  return <MyPosts posts={posts} />
}
