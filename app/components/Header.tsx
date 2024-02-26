"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "./Button"

const Header = () => {
  return (
    <div className="border-b border-black flex justify-between">
      <Link href="/" className="flex items-center px-2">
        <Image src="/logo.png" width={50} height={50} alt="logo.png" />
        <h1 className="text-4xl md:text-5xl px-2 py-4">Papers</h1>
      </Link>
      <Button />
    </div>
  )
}

export default Header
