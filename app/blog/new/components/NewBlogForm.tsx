"use client"

import { createPost } from "@/app/actions/publishPost"
import { Prisma } from "@prisma/client"
import { useSession } from "next-auth/react"
import Link from "next/link"
import React, { useState } from "react"
import sun from "../../../../public/sun.svg"
import { UploadButton } from "@/utils/uploadthing"
import "@uploadthing/react/styles.css"
import Image from "next/image"
import { useRouter } from "next/navigation"

const NewBlogForm = () => {
  const router = useRouter()

  const { data: session, status } = useSession()

  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const [thumbnail, setThumbnail] = useState<string | null>(null)

  const [postID, setPostID] = useState<number | null>(null)

  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const user = session?.user as any
    const userId = user?.id

    if (!userId) return
    try {
      let newPost: Prisma.PostUncheckedCreateInput = {
        title,
        content,
        authorId: userId,
        imgURL: thumbnail,
      }

      const post = await createPost(newPost)
      setPostID(post.id)
      setSubmitted(true)
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  if (submitted)
    return (
      <div className="py-2 container flex items-center justify-center mt-12 px-5">
        <div className="flex justify-center border p-8 items-center flex-col">
          <h1 className="text-4xl">Your post has been published!</h1>
          <Image
            src={sun}
            width={300}
            height={300}
            alt="sun.svg"
            className="mx-auto"
          />
          <Link
            href={`/blog/${postID}`}
            className="text-indigo-500 text-xl mt-4 hover:underline"
          >
            Click here to view
          </Link>
        </div>
      </div>
    )

  return (
    <div className="min-h-[calc(100vh-200px)] py-2 container flex flex-col mt-12">
      <form
        className="flex flex-col flex-1 items-stretch justify-center h-full text-left px-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="text-6xl focus-visible:outline-none bg-transparent"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <textarea
          name="content"
          className="flex-1 focus-visible:outline-none text-4xl mt-2 resize-none bg-transparent"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="self-start mt-10">
          {thumbnail && (
            <img
              src={thumbnail}
              alt="Thumbnail"
              className="w-[350px] h-[150px] rounded-md object-cove mb-4"
            />
          )}

          <label className="text-slate-600 mb-3 flex">
            {thumbnail ? null : "Add a thumbnail image if you want!"}
          </label>

          <UploadButton
            className="items-start ut-button:hover:scale-105 ut-button:duration-300 ut-button:bg-indigo-500 ut-allowed-content:text-xl"
            content={{
              button({ ready }) {
                if (ready)
                  return (
                    <div>{thumbnail ? "Change image" : "Add thumbnail"} </div>
                  )

                return "Getting ready..."
              },
              allowedContent({ ready, fileTypes, isUploading }) {
                if (!ready) return "Checking what you allow"
                if (isUploading) return "Seems like stuff is uploading..."
                return `Max   (4mb)`
              },
            }}
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              if (res) {
                setThumbnail(res[0].url)
              }
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`)
            }}
          />
        </div>
        <button
          type="submit"
          className="w-fit-content text-white bg-indigo-400 px-4 py-2 sm:px-6 sm:py-4 mt-6 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default NewBlogForm
