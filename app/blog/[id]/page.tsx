import { prisma } from "@/lib/prisma"

const Page = async ({
  params,
}: {
  params: {
    id?: string
  }
}) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  console.log(post)

  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      )}
    </div>
  )
}

export default Page
