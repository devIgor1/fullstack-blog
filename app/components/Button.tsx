"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { ImSpinner2 } from "react-icons/im"
import { BiLogOut } from "react-icons/bi"

export const Button = () => {
  const { data: session, status } = useSession()

  const handleLogoutUser = () => {
    signOut()
  }

  if (status === "loading") {
    return (
      <div className="text-white bg-black p-4 flex items-center justify-center">
        <span className="animate-spin duration-300">
          <ImSpinner2 size={20} />
        </span>
      </div>
    )
  }

  if (session) {
    return (
      <div className="flex items-stretch">
        <Link href="/blog/new" className="mr-6 hover:underline self-center">
          ✍️ Write a Post
        </Link>
        <div className="text-white bg-black p-4 flex items-center justify-center flex-col">
          <h1>Hi, {session?.user?.name}</h1>
          <button
            onClick={handleLogoutUser}
            className="mt-5 hover:scale-105 duration-300"
          >
            <BiLogOut size={30} />
          </button>
        </div>
      </div>
    )
  }
  return (
    <button
      onClick={() => signIn()}
      className="text-white bg-black p-4 hover:underline"
    >
      Sign In
    </button>
  )
}
