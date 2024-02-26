import { getServerSession } from "next-auth"
import NewBlogForm from "./components/NewBlogForm"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

const page = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/")
  }

  return (
    <div>
      <NewBlogForm />
    </div>
  )
}

export default page
