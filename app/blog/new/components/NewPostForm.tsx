"use client"

import { useSession } from "next-auth/react"
import { FormEvent, useState } from "react"
import { createPost } from "@/app/actions/publishPost"

const NewPostForm = () => {
  const { data: session } = useSession()

  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const [submitted, setSubmitted] = useState<boolean>(false)

  if (!session) {
    return (
      <div className="flex items-center justify-center mt-4">
        <h1 className="text-4xl text-center bg-red-500 text-white rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] p-4">
          You must be logged in to create a post.
        </h1>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const user = session?.user as any
    const userId = user?.id

    if (!userId) return
    try {
      const post = await createPost({ title, content, authorId: userId })
      setSubmitted(true)
    } catch (error) {
      console.log(error)
    }
  }

  if (submitted) {
    return (
      <h1 className="text-4xl text-center bg-green-500 text-white rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] p-4">
        Post created!
      </h1>
    )
  }

  return (
    <div className="min-h-[calc(100vh-130px)] py-2 container flex flex-col mt-12">
      <form
        className="flex flex-col flex-1 items-stretch justify-center h-full text-left"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="text-6xl focus-visible:outline-none"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <textarea
          name="content"
          className="flex-1 focus-visible:outline-none text-4xl mt-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
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

export default NewPostForm