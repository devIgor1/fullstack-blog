import React from "react"
import Image from "next/image"
import prisma from "@/lib/prisma"
import back from "../../../public/backArrow.svg"
import Link from "next/link"

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
  console.log(post)

  return (
    <div>
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
      <div className="container border-2 border-black">
        {post && (
          <>
            {post.imgURL && (
              <div
                className="h-[500px] bg-cover bg-center mb-5"
                style={{ backgroundImage: `url(${post.imgURL})` }}
              ></div>
            )}
            <div className="p-4">
              <h1 className="text-5xl mb-5 tracking-tight">{post.title}</h1>
              <div className="flex items-center">
                <p className="text-sm text-gray-500">By</p>
                <div
                  className="w-5 h-5 ml-3 mr-2 rounded-full bg-contain"
                  style={{ backgroundImage: `url(${post.author.image})` }}
                ></div>
                <p className="text-sm text-gray-500">{post.author.name}</p>
              </div>
              <p className="mt-4 whitespace-pre-wrap tracking-tight">
                {post.content}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default page
