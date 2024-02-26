import React from "react"
import { AllPosts } from "./AllPosts"
import prisma from "@/lib/prisma"
import back from "../../../public/backArrow.svg"
import Image from "next/image"
import Link from "next/link"

const page = async () => {
  const posts = await prisma.post.findMany()

  return (
    <>
      <div className="container flex items-center justify-center">
        <Link
          href="/"
          className="mx-5 flex items-center justify-center hover:underline "
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
      </div>
      <div className=" container">
        <AllPosts posts={posts} />
      </div>
    </>
  )
}

export default page
