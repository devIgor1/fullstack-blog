import React from "react"
import { Prisma } from "@prisma/client"
import Link from "next/link"
import { format } from "date-fns"

type Post = Prisma.PostGetPayload<{}>

export type PostListProps = {
  posts: Post[]
}

export const AllPosts = (props: PostListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-4 mx-4">
      {props.posts.map((post: Post) => (
        <div
          key={post.id}
          className="w-full sm:w-32 md:w-60 lg:w-80 h-full bg-white"
        >
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
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="/article-placeholder.png"
                    alt="thumbnail"
                    className="w-full h-full object-center object-cover"
                  />
                )}
              </figure>
            </article>
            <div className="px-6 py-5 text-left h-full">
              <p className="text-base mb-4">
                {post.createdAt
                  ? format(new Date(post.createdAt), "dd/MM/yyyy, HH:mm:ss")
                  : ""}
              </p>
              <h1 className="text-xl mb-4">{post.title}</h1>
              <p className="text-xs mb-4 line-clamp-4">{post.content}</p>
              <p className="text-indigo-600 hover:underline">Read More</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
