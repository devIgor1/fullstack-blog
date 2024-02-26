import React from "react"
import Image from "next/image"
import prisma from "@/lib/prisma"

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
    <div className="container border-l-2 border-r-2 border-b-2 border-black">
      {post && (
        <>
          {post.imgURL && (
            <div
              className="h-[500px] bg-cover bg-center mb-5"
              style={{ backgroundImage: `url(${post.imgURL})` }}
            ></div>
          )}
          <div className="p-4">
            <h1 className="text-5xl mb-5">{post.title}</h1>
            <div className="flex items-center">
              <p className="text-sm text-gray-500">By</p>
              <div
                className="w-5 h-5 ml-3 mr-2 rounded-full bg-contain"
                style={{ backgroundImage: `url(${post.author.image})` }}
              ></div>
              <p className="text-sm text-gray-500">{post.author.name}</p>
            </div>
            <p className="mt-4 whitespace-pre-wrap">{post.content}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default page
