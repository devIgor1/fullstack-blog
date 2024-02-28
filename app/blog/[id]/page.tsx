import { prisma } from "@/lib/db"
import Image from "next/image"
import Link from "next/link"
import back from "../../../public/backArrow.svg"

const page = async ({
  params,
}: {
  params: {
    id: string
  }
}) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      author: true,
    },
  })

  return (
    <div>
      <div className="container border-b-2 border-l-2 border-r-2 border-black">
        {post && (
          <>
            {post.imgURL && (
              <div
                className="h-[600px] w-full bg-center bg-no-repeat bg-cover border-b-2 border-black mb-5"
                style={{ backgroundImage: `url(${post.imgURL})` }}
              ></div>
            )}
            <div className="p-4">
              <h1 className="text-5xl mb-5 tracking-tight">{post.title}</h1>
              <div className="flex items-center">
                <p className="text-base text-gray-500">By</p>
                <div
                  className="w-6 h-6 ml-3 mr-2 rounded-full bg-contain"
                  style={{ backgroundImage: `url(${post.author.image})` }}
                ></div>
                <p className="text-base text-gray-500">{post.author.name}</p>
              </div>
              <p className="mt-4 whitespace-pre-wrap tracking-tight text-lg">
                {post.content}
              </p>
              <Link
                href="/blog/all"
                className="mx-5 flex items-center justify-center hover:underline "
              >
                <Image
                  src={back}
                  width={100}
                  height={100}
                  alt="backArrow.svg"
                  className="rotate-180"
                />
                <h1 className="text-4xl">All Articles</h1>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default page
