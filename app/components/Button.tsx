"use client"

import { signIn, signOut, useSession } from "next-auth/react"

const Button = () => {
  const { data: session, status } = useSession()

  const handleLogoutUser = () => {
    signOut()
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (session) {
    return <button onClick={handleLogoutUser}>Sign Out</button>
  }

  return <div onClick={() => signIn()}>Sign In</div>
}

export default Button
