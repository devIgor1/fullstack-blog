"use client"
import { ImSpinner2 } from "react-icons/im"
import { signIn, signOut, useSession } from "next-auth/react"
import { CiLogout } from "react-icons/ci"

const Button = () => {
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
      <div className="text-white bg-black p-4 flex items-center justify-center flex-col">
        <h1>Hi, {session?.user?.name}</h1>
        <button onClick={handleLogoutUser} className="mt-5">
          <CiLogout size={25} />
        </button>
      </div>
    )
  }

  return (
    <button onClick={() => signIn()} className="text-white bg-black p-4">
      Sign In
    </button>
  )
}

export default Button
