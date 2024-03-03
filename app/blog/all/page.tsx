import { prisma } from "@/lib/db"
import { Post } from "@prisma/client"
import { format } from "date-fns"
import Image from "next/image"
import Link from "next/link"
import back from "../../../public/backArrow.svg"
import { revalidatePath } from "next/cache"

const page = async () => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
  })

  revalidatePath("/", "page")

  return (
    <>
      <div className="px-7 py-11 rounded-sm mx-4">
        <h2 className="text-4xl text-center mb-14 container underline">
          All Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-4">
          {posts.map((post: Post) => (
            <div key={post.id} className="w-full h-full ">
              <Link
                href={`/blog/${post.id}`}
                className="block cursor-pointer border-2 rounded-md neo-shadow focus:shadow-none focus:translate-x-1 focus:translate-y-1 transform transition-shadow duration-100"
              >
                <article className="w-full h-full">
                  <figure className="w-full h-30 lg:h-72 border-b-2 ">
                    {post.imgURL ? (
                      <img
                        src={post.imgURL}
                        alt="thumbnail"
                        className="w-full md:h-[200px] lg:h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center flex-col h-full">
                        <img
                          src="/nothumbnail.svg"
                          alt="thumbnail"
                          className="w-[100px] h-[100px]"
                        />
                        <h1 className="text-4xl">No thumbnail...</h1>
                      </div>
                    )}
                  </figure>
                </article>
                <div className="px-6 py-5 text-left h-full">
                  <p className="text-base mb-4">
                    {post.createdAt
                      ? format(new Date(post.createdAt), "dd/MM/yyyy, HH:mm:ss")
                      : ""}
                  </p>
                  <h1 className="text-xl mb-4 line-clamp-1">{post.title}</h1>
                  <p className="text-base mb-4 line-clamp-4">{post.content}</p>
                  <p className="text-indigo-600 hover:underline">Read More</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Link
        href="/"
        className="mt-5 flex items-center justify-center hover:underline "
      >
        <Image
          src={back}
          width={100}
          height={100}
          alt="backArrow.svg"
          className="rotate-180"
        />
        <h1 className="text-4xl">Back to home</h1>
      </Link>
    </>
  )
}

export default page
