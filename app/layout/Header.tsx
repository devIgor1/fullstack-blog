"use client"

import Image from "next/image"
import Link from "next/link"
import Button from "../components/Button"
import { SessionProvider } from "next-auth/react"

const Header = () => {
  return (
    <SessionProvider>
      <div className="border-b border-black flex justify-between">
        <Link href="/" className="flex items-center">
          <h1 className="text-4xl px-2 py-4">Coffers</h1>
          <Image src="/logo.png" width={100} height={100} alt="logo.png" />
        </Link>
        <Button />
      </div>
    </SessionProvider>
  )
}

export default Header
