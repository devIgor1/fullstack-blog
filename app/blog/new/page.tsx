import { getServerSession } from "next-auth"
import NewBlogForm from "./components/NewBlogForm"
import { redirect } from "next/navigation"

const page = async () => {
  const session = await getServerSession()

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
